function generatePDF() {
    const element = document.getElementbyID("invoice");

    html2pdf() 
    .from(element)
    .save();
    }