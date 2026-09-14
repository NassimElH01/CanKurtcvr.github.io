import os

def pdf_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

def wrap_text(text: str, max_chars: int = 86) -> list[str]:
    words = text.split(" ")
    lines = []
    current_line = []
    current_len = 0
    for w in words:
        if current_len + len(w) + 1 <= max_chars:
            current_line.append(w)
            current_len += len(w) + 1
        else:
            lines.append(" ".join(current_line))
            current_line = [w]
            current_len = len(w)
    if current_line:
        lines.append(" ".join(current_line))
    return lines

def build_pdf_bytes() -> bytes:
    stream_ops = []

    # Page geometry: A4 (595.28 x 841.89 points)
    # Danske Bank Navy accent header: #002B49 -> rgb(0.004, 0.169, 0.286)
    stream_ops.append("0.004 0.169 0.286 rg")
    stream_ops.append("54 792 487.28 3.5 re f")

    # Applicant Name
    stream_ops.append("BT")
    stream_ops.append("/F2 20 Tf")
    stream_ops.append("54 766 Td")
    stream_ops.append(f"({pdf_escape('CAN KURT')}) Tj")
    stream_ops.append("ET")

    # Subtitle
    stream_ops.append("0.30 0.30 0.30 rg")
    stream_ops.append("BT")
    stream_ops.append("/F1 9.5 Tf")
    stream_ops.append("54 751 Td")
    stream_ops.append(f"({pdf_escape('Kandidatstuderende i Digital Transformation & IT-konsulent')}) Tj")
    stream_ops.append("ET")

    # Contact info line
    stream_ops.append("0.40 0.40 0.40 rg")
    stream_ops.append("BT")
    stream_ops.append("/F1 8.5 Tf")
    stream_ops.append("54 737 Td")
    stream_ops.append(f"({pdf_escape('København, Danmark  ·  Tlf.: +45 28 70 12 13  ·  cankurtcvr@gmail.com  ·  linkedin.com/in/can-kurt')}) Tj")
    stream_ops.append("ET")

    # Thin separator line
    stream_ops.append("0.82 0.85 0.88 rg")
    stream_ops.append("54 725 487.28 0.75 re f")

    # Recipient info (Left) and Date (Right)
    stream_ops.append("0.15 0.15 0.15 rg")
    stream_ops.append("BT")
    stream_ops.append("/F2 9.5 Tf")
    stream_ops.append("54 704 Td")
    stream_ops.append(f"({pdf_escape('Danske Bank A/S')}) Tj")
    stream_ops.append("ET")

    stream_ops.append("BT")
    stream_ops.append("/F1 9 Tf")
    stream_ops.append("54 691 Td")
    stream_ops.append(f"({pdf_escape('Att.: Ansættelsesudvalget / IT & Business Transformation')}) Tj")
    stream_ops.append("ET")

    stream_ops.append("BT")
    stream_ops.append("/F1 9 Tf")
    stream_ops.append("54 679 Td")
    stream_ops.append(f"({pdf_escape('Postbyen, Bernstorffsgade 40, 1577 København V')}) Tj")
    stream_ops.append("ET")

    # Date right aligned
    stream_ops.append("0.40 0.40 0.40 rg")
    stream_ops.append("BT")
    stream_ops.append("/F1 9 Tf")
    stream_ops.append("425 704 Td")
    stream_ops.append(f"({pdf_escape('Dato: 14. september 2026')}) Tj")
    stream_ops.append("ET")

    # Subject / Header Bar
    stream_ops.append("0.96 0.97 0.98 rg")
    stream_ops.append("54 636 487.28 26 re f")
    stream_ops.append("0.004 0.169 0.286 rg")
    stream_ops.append("54 636 3.5 26 re f")

    stream_ops.append("BT")
    stream_ops.append("/F2 11 Tf")
    stream_ops.append("66 644 Td")
    stream_ops.append(f"({pdf_escape('MOTIVERET ANSØGNING: IT-KONSULENT / BUSINESS ANALYST')}) Tj")
    stream_ops.append("ET")

    # Greeting
    stream_ops.append("0.10 0.10 0.10 rg")
    stream_ops.append("BT")
    stream_ops.append("/F2 10 Tf")
    stream_ops.append("54 614 Td")
    stream_ops.append(f"({pdf_escape('Kære ansættelsesudvalg i Danske Bank,')}) Tj")
    stream_ops.append("ET")

    # Paragraphs text
    paragraphs = [
        "Med 1,5 års solid erfaring som IT-konsulent på Danske Banks gældssanerings- og inkassoprojekt (via EY / M-Networks), en afsluttet bachelorgrad i Informatik og Virksomhedsstudier samt en igangværende kandidatuddannelse i Digital Transformation på RUC, søger jeg hermed stillingen som IT-konsulent / Business Analyst. Jeg kender bankens systemlandskab, forretningskritiske krav til dataintegritet og den igangværende transformation mod enklere, datadrevne processer. Det er min klare ambition at genindtræde i Danske Bank og levere målbar værdi fra dag ét.",

        "Under mit tidligere forløb i Danske Bank rekonstruerede jeg komplekse økonomiske sagsforløb for mere end 400 kunder gennem analyse af retsbøger, forlig og kontoudskrifter. I tæt samspil med jurister og forretningsspecialister opbyggede og validerede jeg avancerede Excel-modeller til rente- og gældsafvikling uden tolerance for fejl. Derudover fungerede jeg som floorwalker, hvor jeg udarbejdede procesvejledninger og stod for sidemandsoplæring af nye konsulenter i teamet. Min tekniske værktøjskasse spænder over SQL, Python, datamodellering og proceskortlægning, hvilket gør mig i stand til hurtigt at identificere flaskehalse og omsætte komplekse forretningsbehov til robuste løsninger.",

        "Gennem min uddannelse på Roskilde Universitet har jeg specialiseret mig i socio-teknisk systemdesign, forretningsanalyse og forandringsledelse. Jeg forstår både de tekniske forudsætninger bag systemerne og den organisatoriske virkelighed, som slutbrugere og rådgivere møder i hverdagen. Samtidig har mit mangeårige virke som certificeret tolk og omsorgsmedarbejder givet mig en veludviklet situationsfornemmelse, høj etisk integritet og en særlig evne til at bevare roen og formidle komplekse budskaber præcist på tværs af fagskel.",

        "Jeg motiveres stærkt af Danske Banks ambition om at sætte kunden i centrum gennem transparens, integritet og moderne teknologi. Som person er jeg struktureret, analytisk skarp og løsningsorienteret med en høj ansvarsfølelse for kvaliteten i data og leverancer. Jeg ser meget frem til muligheden for at uddybe mine kvalifikationer og min motivation ved en personlig samtale."
    ]

    y_pos = 594
    line_height = 13.5
    para_spacing = 9

    for para in paragraphs:
        lines = wrap_text(para, max_chars=87)
        for line in lines:
            stream_ops.append("BT")
            stream_ops.append("/F1 9.2 Tf")
            stream_ops.append(f"54 {y_pos:.1f} Td")
            stream_ops.append(f"({pdf_escape(line)}) Tj")
            stream_ops.append("ET")
            y_pos -= line_height
        y_pos -= para_spacing

    # Sign-off
    y_pos -= 4
    stream_ops.append("0.10 0.10 0.10 rg")
    stream_ops.append("BT")
    stream_ops.append("/F1 9.5 Tf")
    stream_ops.append(f"54 {y_pos:.1f} Td")
    stream_ops.append(f"({pdf_escape('Med venlig hilsen,')}) Tj")
    stream_ops.append("ET")

    y_pos -= 26
    stream_ops.append("BT")
    stream_ops.append("/F2 10.5 Tf")
    stream_ops.append(f"54 {y_pos:.1f} Td")
    stream_ops.append(f"({pdf_escape('Can Kurt')}) Tj")
    stream_ops.append("ET")

    y_pos -= 13
    stream_ops.append("0.35 0.35 0.35 rg")
    stream_ops.append("BT")
    stream_ops.append("/F3 8.5 Tf")
    stream_ops.append(f"54 {y_pos:.1f} Td")
    stream_ops.append(f"({pdf_escape('Kandidatstuderende i Digital Transformation, RUC  ·  BSc i Informatik og Virksomhedsstudier')}) Tj")
    stream_ops.append("ET")

    y_pos -= 11
    stream_ops.append("BT")
    stream_ops.append("/F1 8 Tf")
    stream_ops.append(f"54 {y_pos:.1f} Td")
    stream_ops.append(f"({pdf_escape('Tlf.: +45 28 70 12 13  ·  E-mail: cankurtcvr@gmail.com  ·  Web: cankurtcvr.github.io')}) Tj")
    stream_ops.append("ET")

    # Bottom footer line & note
    stream_ops.append("0.85 0.88 0.90 rg")
    stream_ops.append("54 50 487.28 0.5 re f")

    stream_ops.append("0.50 0.50 0.50 rg")
    stream_ops.append("BT")
    stream_ops.append("/F1 7.5 Tf")
    stream_ops.append("54 40 Td")
    stream_ops.append(f"({pdf_escape('Bilag: Curriculum Vitae (CV) og referencer fra Danske Bank / EY fremsendes gerne ved henvendelse.')}) Tj")
    stream_ops.append("ET")

    content_stream = "\n".join(stream_ops)
    stream_bytes = content_stream.encode("latin-1")
    contents_obj = f"<< /Length {len(stream_bytes)} >>\nstream\n{content_stream}\nendstream"

    objs = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        "<< /Type /Pages /Kids [6 0 R] /Count 1 >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>",
        "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 7 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> >>",
        contents_obj
    ]

    out = ["%PDF-1.4\n%\\xE2\\xE3\\xCF\\xD3\n"]
    offsets = []
    cur_pos = len(out[0].encode("latin-1"))

    for i, obj in enumerate(objs, 1):
        offsets.append(cur_pos)
        obj_str = f"{i} 0 obj\n{obj}\nendobj\n"
        out.append(obj_str)
        cur_pos += len(obj_str.encode("latin-1"))

    xref_pos = cur_pos
    out.append(f"xref\n0 {len(objs) + 1}\n0000000000 65535 f \n")
    for off in offsets:
        out.append(f"{off:010d} 00000 n \n")

    out.append(f"trailer\n<< /Size {len(objs) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n")
    return "".join(out).encode("latin-1")

def main():
    pdf_bytes = build_pdf_bytes()
    destinations = [
        "/Users/ck/Desktop/CanKurtcvr.github.io/Can_Kurt_Motiveret_Ansoegning_Danske_Bank.pdf",
        "/Users/ck/Desktop/CanKurtcvr.github.io/public/Can_Kurt_Motiveret_Ansoegning_Danske_Bank.pdf",
        "/Users/ck/.gemini/antigravity/brain/19bd2ff3-81aa-442e-b1bb-790324486aa4/Can_Kurt_Motiveret_Ansoegning_Danske_Bank.pdf"
    ]

    for d in destinations:
        os.makedirs(os.path.dirname(d), exist_ok=True)
        with open(d, "wb") as f:
            f.write(pdf_bytes)
        print(f"Generated: {d} ({len(pdf_bytes)} bytes)")

if __name__ == "__main__":
    main()
