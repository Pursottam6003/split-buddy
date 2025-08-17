// // lib/ocrClient.ts
// export async function extractTextFromImage(imageData: string): Promise<string> {
//   try {
//     // Convert base64 to Blob
//     const base64Response = await fetch(imageData);
//     const blob = await base64Response.blob();
    
//     // Create FormData
//     const formData = new FormData();
//     formData.append('file', blob, 'image.png');
    
//     // Send to OCR API
//     const response = await fetch('http://localhost:8000/ocr?lang=en', {
//       method: 'POST',
//       body: formData
//     });
    
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.detail || `OCR failed: ${response.statusText}`);
//     }
    
//     const result = await response.json();
//     return result.result.full_text;
//   } catch (error) {
//     console.error('OCR processing error:', error);
//     throw error;
//   }
// }

// lib/ocrClient.ts
export async function extractTextFromImage(imageData: string): Promise<string[]> {
  try {
    // Convert base64 to Blob
    const base64Response = await fetch(imageData);
    const blob = await base64Response.blob();
    
    // Create FormData
    const formData = new FormData();
    formData.append('file', blob, 'image.png');
    
    // Send to OCR API
    const response = await fetch('http://localhost:8000/ocr?lang=en', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || `OCR failed: ${response.statusText}`);
    }
    
    const result = await response.json();
    
    // Return an array of lines instead of a single string
    return result.result.full_text.split('\n');
  } catch (error) {
    console.error('OCR processing error:', error);
    throw error;
  }
}