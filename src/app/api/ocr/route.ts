import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Create FormData for the OCR service
    const ocrFormData = new FormData();
    ocrFormData.append('file', file);
    
    // Call your OCR service
    const response = await fetch('http://localhost:8000/ocr?lang=en', {
      method: 'POST',
      body: ocrFormData
    });
    
    if (!response.ok) {
      throw new Error(`OCR failed: ${response.statusText}`);
    }
    
    const result = await response.json();
    return NextResponse.json({ success: true, result });
    
  } catch (error) {
    console.error('OCR processing error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}