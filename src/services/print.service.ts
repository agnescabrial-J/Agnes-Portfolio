// services/print.service.ts
interface SaplingStickerData {
    sapling: {
        serialNumber: string;
        type: 'Coconut' | 'Fruit' | 'Shade';
        plantName: string;
        plantingDate: string;
        customerId?: string;
        latitude?: string;
        longitude?: string;
    };
    qrCodeUrl: string;
}

export const handlePrint = (stickerData: SaplingStickerData | null) => {
    if (!stickerData) {
        console.error('No sticker data available for printing');
        return;
    }

    const printContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${stickerData.sapling.serialNumber}</title>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            height: 100%;
            width: 100%;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: white;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          
          .print-container {
            width: 100%;
            height: 100%;
            max-width: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .sticker-wrapper {
            width: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
            border: 3px solid #16a34a;
            border-radius: 12px;
            padding: 10mm;
            margin: 0;
            box-shadow: 0 4px 12px rgba(22, 163, 74, 0.15);
          }
          
          .sticker-header {
            width: 100%;
            text-align: center;
            border-bottom: 3px solid #16a34a;
            padding-bottom: 5mm;
            margin-bottom: 6mm;
          }
          
          .registry-title {
            font-size: 32px;
            font-weight: 800;
            color: #16a34a;
          }
          
          .sticker-title {
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            color: white;
            font-size: 28px;
            font-weight: 700;
            text-align: center;
            padding: 8mm 4mm;
            border-radius: 8px;
            margin-bottom: 10mm;
            letter-spacing: 2px;
            text-transform: uppercase;
            box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);
          }
          
          .sticker-details {
            width: 100%;
            margin-bottom: 10mm;
            font-size: 18px;
          }
          
          .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4mm 0;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .detail-row:last-child {
            border-bottom: none;
          }
          
          .detail-label {
            font-weight: 700;
            color: #16a34a;
            font-size: 18px;
          }
          
          .detail-value {
            color: #374151;
            text-align: right;
            font-weight: 500;
            font-size: 18px;
          }
          
          .qr-section {
            background: white;
            padding: 6mm;
            border-radius: 8px;
            text-align: center;
            border: 2px solid #16a34a;
          }
          
          .qr-code {
            width: 70mm;
            height: 70mm;
            border: 2px solid #16a34a;
            border-radius: 6px;
            margin: 0 auto 3mm;
            display: block;
          }
          
          .qr-label {
            font-size: 14px;
            color: #6b7280;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          @media print {
            html, body {
              height: 100%;
              width: 100%;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            body {
              background: white !important;
            }
            
            .print-container {
              width: 85%;
              max-width: 180mm;
            }
            
            .sticker-wrapper {
              box-shadow: none;
              page-break-inside: avoid;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          <div class="sticker-wrapper">
            <div class="sticker-header">
              <div class="registry-title">🌱 Sapling Registry</div>
            </div>
            
            <div class="sticker-title">ID ${stickerData.sapling.serialNumber}</div>
            
            <div class="sticker-details">
              <div class="detail-row">
                <span class="detail-label">Type:</span>
                <span class="detail-value">${stickerData.sapling.type}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Plant:</span>
                <span class="detail-value">${stickerData.sapling.plantName || 'N/A'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Planted:</span>
                <span class="detail-value">${new Date(stickerData.sapling.plantingDate).toLocaleDateString('en-IN')}</span>
              </div>
            </div>
            
            <div class="qr-section">
              <img src="${stickerData.qrCodeUrl}" alt="QR Code" class="qr-code">
              <div class="qr-label">Scan for Details</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

    // Create iframe for printing
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
        console.error('Could not access iframe document');
        document.body.removeChild(iframe);
        return;
    }

    iframeDoc.open();
    iframeDoc.write(printContent);
    iframeDoc.close();

    // Wait for content and images to load
    iframe.onload = () => {
        setTimeout(() => {
            try {
                iframe.contentWindow?.focus();
                iframe.contentWindow?.print();

                // Cleanup after print
                const cleanup = () => {
                    setTimeout(() => {
                        if (iframe.parentNode) {
                            document.body.removeChild(iframe);
                        }
                    }, 100);
                };

                window.addEventListener('focus', cleanup, { once: true });
                setTimeout(cleanup, 3000);
                return true;
            } catch (e) {
                console.error('Print error:', e);
                if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                }
                return false;
            }
        }, 500);
    };
};
