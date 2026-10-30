"""Generate the local typographic sharing card; no remote assets are used.

Requires Pillow and Noto Sans/Serif fonts. Set ACADEMY_FONT_DIR if needed.
"""
from pathlib import Path
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path(os.environ.get('ACADEMY_FONT_DIR', '/usr/share/fonts/google-noto-vf'))

def font(name, size):
    return ImageFont.truetype(str(FONT_DIR / name), size)

canvas = Image.new('RGB', (1200, 630), '#10232c')
draw = ImageDraw.Draw(canvas)
gold, cream = '#e8c789', '#f8f5ec'
draw.line((70, 84, 108, 84), fill=gold, width=2)
draw.text((125, 68), 'ACADÉMIE AL-ANDALOUS · FÈS', font=font('NotoSans[wght].ttf', 19), fill=gold)
draw.text((70, 153), 'L’excellence en', font=font('NotoSans[wght].ttf', 58), fill=cream)
draw.text((70, 230), 'langues vivantes.', font=font('NotoSerif-Italic[wght].ttf', 62), fill=gold)
draw.text((70, 319), '& soutien scolaire.', font=font('NotoSans[wght].ttf', 46), fill=cream)
draw.rounded_rectangle((826, 105, 1130, 505), radius=150, fill='#e8e2d5')
draw.rectangle((826, 285, 1130, 505), fill='#e8e2d5')
draw.text((857, 206), 'Bonjour.', font=font('NotoSerif[wght].ttf', 56), fill='#142b34')
draw.text((883, 292), 'Hello.', font=font('NotoSerif-Italic[wght].ttf', 64), fill='#376052')
draw.line((855, 409, 1101, 409), fill='#c7c8bb', width=1)
draw.text((873, 436), 'APPRENDRE · AVANCER', font=font('NotoSans[wght].ttf', 14), fill='#142b34')
draw.line((70, 530, 1130, 530), fill='#3d5054', width=1)
draw.text((70, 554), 'Ville Nouvelle, Fès', font=font('NotoSans[wght].ttf', 18), fill='#c1d0cf')
draw.text((777, 554), 'Test de niveau gratuit', font=font('NotoSans[wght].ttf', 18), fill=gold)
canvas.save(ROOT / 'public/social-card.png', optimize=True)
