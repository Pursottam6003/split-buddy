async function extractTextFromImage(imageFile) {
  const formData = new FormData();
  formData.append('file', imageFile);
  
  try {
    const response = await fetch('http://localhost:8000/ocr?lang=en', {
      method: 'POST',
      body: formData
      // Don't set Content-Type header - browser will set it automatically
    });
    
    if (!response.ok) {
      throw new Error(`OCR failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('OCR processing error:', error);
    return { success: false, error: error.message };
  }
}

// Usage example:
const fileInput = document.getElementById('image-upload');
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  const result = await extractTextFromImage(file);
  
  if (result.success) {
    console.log('Extracted text:', result.result.full_text);
    // Display results in your UI
  } else {
    // Show error message
  }
});