from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

OUTPUT = Path('public/recursos/tarifas')
OUTPUT.mkdir(parents=True, exist_ok=True)

services = [
    ('tarifa-produccion-musical.pdf', 'Producción Musical', '700€', 'Desarrollo de la idea, estructura, arreglos, sonido, dirección creativa y acompañamiento durante la producción.'),
    ('tarifa-mezcla-mastering.pdf', 'Mezcla y Mastering', '200€', 'Edición, balance, profundidad, limpieza, loudness final y entrega preparada para plataformas digitales.'),
    ('tarifa-composicion-musical.pdf', 'Composición musical', '300€', 'Composición, estructura, armonía, melodía y orientación creativa para llevar tu idea a una canción completa.'),
    ('tarifa-sesion-estudio.pdf', 'Sesión de estudio', '140€', 'Sesión de media jornada. La jornada completa queda pendiente de confirmar.'),
    ('tarifa-consulta-privada.pdf', 'Consulta privada', '40€', 'Consulta individual sobre producción, estrategia, lanzamiento, presencia digital o dirección artística.'),
    ('tarifa-desarrollo-web.pdf', 'Desarrollo web', 'A consultar', 'Diseño y desarrollo de una web para artista, portfolio, lanzamiento o estudio. Presupuesto personalizado.'),
]

for filename, name, price, details in services:
    path = OUTPUT / filename
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=25*mm, leftMargin=25*mm, topMargin=25*mm, bottomMargin=25*mm)
    styles = getSampleStyleSheet()
    title = ParagraphStyle('Title', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=30, leading=34, textColor=HexColor('#EAE7E5'), spaceAfter=18)
    label = ParagraphStyle('Label', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=13, textColor=HexColor('#A94D57'), spaceAfter=8)
    body = ParagraphStyle('Body', parent=styles['BodyText'], fontName='Helvetica', fontSize=12, leading=20, textColor=HexColor('#A19DA0'))
    price_style = ParagraphStyle('Price', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=23, leading=28, textColor=HexColor('#A94D57'))
    story = [Paragraph('JNSTUDIO', label), Paragraph(name, title), Paragraph(price, price_style), Spacer(1, 10), Paragraph(details, body), Spacer(1, 30), Paragraph('¿Quieres hablar de tu proyecto?', label), Paragraph('Escríbenos a oficinajaviernaranjo@gmail.com', body), Spacer(1, 10), Paragraph('Sevilla · Lunes a viernes · 10:00–14:00 y 16:00–20:00', body)]
    doc.build(story, onFirstPage=lambda canvas, document: (canvas.setFillColor(HexColor('#0D0D0F')), canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)))
