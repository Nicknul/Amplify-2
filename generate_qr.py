import qrcode

# 배포된 Next.js 애플리케이션의 URL
url = "https://main.d32wewjvlxoatj.amplifyapp.com/"

# QR 코드 생성
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# QR 코드를 이미지로 저장
img = qr.make_image(fill='black', back_color='white')
img.save("amplify_qr_code.png")
