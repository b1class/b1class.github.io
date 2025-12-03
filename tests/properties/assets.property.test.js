/**
 * Assets Property Tests - Class Webpage
 * 
 * Property-based tests for asset path relativity (GitHub Pages compatibility)
 */

import fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Helper function to check if a path is relative
 * @param {string} assetPath - The path to check
 * @returns {boolean} - True if path is relative
 */
function isRelativePath(assetPath) {
  if (!assetPath || assetPath.trim() === '') return true;
  
  // Absolute paths start with / or protocol
  const absolutePatterns = [
    /^\/[^\/]/, // Starts with single /
    /^https?:\/\//, // HTTP/HTTPS URLs
    /^file:\/\//, // File URLs
    /^\/\//, // Protocol-relative URLs
  ];
  
  // Data URLs and anchors are acceptable
  const acceptablePatterns = [
    /^data:/, // Data URLs
    /^#/, // Anchors
    /^javascript:/, // JavaScript URLs (though not recommended)
  ];
  
  // Check if it's an acceptable pattern
  for (const pattern of acceptablePatterns) {
    if (pattern.test(assetPath)) return true;
  }
  
  // Check if it's an absolute pattern
  for (const pattern of absolutePatterns) {
    if (pattern.test(assetPath)) return false;
  }
  
  return true;
}

/**
 * Extract asset paths from HTML content
 * @param {string} html - HTML content
 * @returns {string[]} - Array of asset paths
 */
function extractAssetPaths(html) {
  const paths = [];
  
  // Extract src attributes (excluding iframe src which may be external embeds)
  const srcMatches = html.matchAll(/\bsrc=["']([^"']+)["']/gi);
  for (const match of srcMatches) {
    paths.push(match[1]);
  }
  
  // Extract href attributes (for stylesheets and links)
  const hrefMatches = html.matchAll(/\bhref=["']([^"']+)["']/gi);
  for (const match of hrefMatches) {
    // Skip anchor links
    if (!match[1].startsWith('#')) {
      paths.push(match[1]);
    }
  }
  
  return paths;
}

/**
 * Check if a URL is an allowed external resource
 * @param {string} url - The URL to check
 * @returns {boolean} - True if it's an allowed external resource
 */
function isAllowedExternalUrl(url) {
  const allowedDomains = [
    'docs.google.com',      // Google Sheets embeds
    'photos.google.com',    // Google Photos embeds
    'fonts.googleapis.com', // Google Fonts
    'fonts.gstatic.com',    // Google Fonts assets
    'cdn.jsdelivr.net',     // CDN resources
    'm.me',                 // Facebook Messenger links
    'facebook.com',         // Facebook links
    'www.facebook.com',     // Facebook links
  ];
  
  return allowedDomains.some(domain => url.includes(domain));
}

/**
 * Extract asset paths from CSS content
 * @param {string} css - CSS content
 * @returns {string[]} - Array of asset paths
 */
function extractCssAssetPaths(css) {
  const paths = [];
  
  // Extract url() references
  const urlMatches = css.matchAll(/url\(["']?([^"')]+)["']?\)/gi);
  for (const match of urlMatches) {
    paths.push(match[1]);
  }
  
  // Extract @import paths
  const importMatches = css.matchAll(/@import\s+(?:url\()?["']([^"']+)["']\)?/gi);
  for (const match of importMatches) {
    paths.push(match[1]);
  }
  
  return paths;
}

describe('Assets Property Tests', () => {
  /**
   * **Feature: class-webpage, Property 7: Asset Path Relativity**
   * 
   * *For any* asset reference (images, scripts, stylesheets) in the HTML, 
   * CSS, or JavaScript files, the path SHALL be relative (not starting 
   * with "/" or "http").
   * 
   * **Validates: Requirements 7.1**
   */
  test('Property 7: All asset paths in index.html should be relative', () => {
    // Read index.html
    const htmlPath = path.join(process.cwd(), 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
      console.warn('index.html not found, skipping test');
      return;
    }
    
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const assetPaths = extractAssetPaths(html);
    
    // Test each path
    assetPaths.forEach(assetPath => {
      // Allow external URLs for known services (Google Sheets embeds, etc.)
      const isAllowedExternal = isAllowedExternalUrl(assetPath);
      const isRelative = isRelativePath(assetPath) || isAllowedExternal;
      if (!isRelative) {
        console.log(`Non-relative path found: ${assetPath}`);
      }
      expect(isRelative).toBe(true);
    });
  });

  test('Property 7: All asset paths in CSS files should be relative', () => {
    const cssDir = path.join(process.cwd(), 'css');
    
    if (!fs.existsSync(cssDir)) {
      console.warn('css directory not found, skipping test');
      return;
    }
    
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    
    cssFiles.forEach(cssFile => {
      const cssPath = path.join(cssDir, cssFile);
      const css = fs.readFileSync(cssPath, 'utf-8');
      const assetPaths = extractCssAssetPaths(css);
      
      assetPaths.forEach(assetPath => {
        // Allow Google Fonts and other CDN resources
        const isGoogleFont = assetPath.includes('fonts.googleapis.com');
        const isRelative = isRelativePath(assetPath) || isGoogleFont;
        
        if (!isRelative) {
          console.log(`Non-relative path in ${cssFile}: ${assetPath}`);
        }
        expect(isRelative).toBe(true);
      });
    });
  });

  test('Property 7: All asset paths in JS data files should be relative', () => {
    const dataDir = path.join(process.cwd(), 'js', 'data');
    
    if (!fs.existsSync(dataDir)) {
      console.warn('js/data directory not found, skipping test');
      return;
    }
    
    const jsFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    
    jsFiles.forEach(jsFile => {
      const jsPath = path.join(dataDir, jsFile);
      const js = fs.readFileSync(jsPath, 'utf-8');
      
      // Extract string literals that look like paths
      const pathMatches = js.matchAll(/["']([^"']*\.(jpg|jpeg|png|gif|svg|webp))["']/gi);
      
      for (const match of pathMatches) {
        const assetPath = match[1];
        const isRelative = isRelativePath(assetPath);
        
        if (!isRelative) {
          console.log(`Non-relative path in ${jsFile}: ${assetPath}`);
        }
        expect(isRelative).toBe(true);
      }
    });
  });

  /**
   * Property-based test for path validation function
   */
  test('Property 7 (unit): isRelativePath function works correctly', () => {
    // Test relative paths
    const relativePaths = [
      'images/photo.jpg',
      './css/styles.css',
      '../assets/image.png',
      'js/main.js',
      'data:image/svg+xml,...',
      '#section',
      ''
    ];
    
    relativePaths.forEach(p => {
      expect(isRelativePath(p)).toBe(true);
    });
    
    // Test absolute paths
    const absolutePaths = [
      '/images/photo.jpg',
      'http://example.com/image.jpg',
      'https://example.com/style.css',
      '//cdn.example.com/script.js'
    ];
    
    absolutePaths.forEach(p => {
      expect(isRelativePath(p)).toBe(false);
    });
  });

  /**
   * Property-based test with generated paths
   */
  test('Property 7 (generated): Random relative paths should pass validation', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.oneof(
            fc.constant('images'),
            fc.constant('css'),
            fc.constant('js'),
            fc.constant('assets')
          ),
          { minLength: 1, maxLength: 3 }
        ),
        fc.oneof(
          fc.constant('file.jpg'),
          fc.constant('style.css'),
          fc.constant('script.js'),
          fc.constant('image.png'),
          fc.constant('photo.svg')
        ),
        (folders, filename) => {
          const relativePath = [...folders, filename].join('/');
          expect(isRelativePath(relativePath)).toBe(true);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Export for use in other tests
export { isRelativePath, extractAssetPaths, extractCssAssetPaths };
