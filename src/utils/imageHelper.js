/**
 * Compresses an image File using HTML5 Canvas to keep data lightweight (<100KB)
 * and prevent database bloat while maintaining crisp quality.
 *
 * @param {File} file - The file to compress
 * @param {number} maxWidth - Max width in pixels (default: 1200)
 * @param {number} maxHeight - Max height in pixels (default: 1200)
 * @param {number} quality - Quality between 0 and 1 (default: 0.82)
 * @returns {Promise<string>} Base64 Data URI
 */
export const compressImage = (file, maxWidth = 1200, maxHeight = 1200, quality = 0.82) => {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        const isPng = file.type === 'image/png';
        const mimeType = isPng ? 'image/png' : 'image/jpeg';
        const dataUrl = canvas.toDataURL(mimeType, isPng ? undefined : quality);

        resolve(dataUrl);
      };

      img.onerror = (err) => {
        console.error("Image loading failed for compression:", err);
        // Fall back to original raw DataURL if canvas processing fails
        resolve(event.target.result);
      };

      img.src = event.target.result;
    };

    reader.onerror = (err) => {
      console.error("FileReader failed:", err);
      reject(err);
    };
  });
};
