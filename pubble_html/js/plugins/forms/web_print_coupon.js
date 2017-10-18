function printWindow() {
factory.printing.header = "";
factory.printing.footer = "";
factory.printing.portrait = true;
factory.printing.leftMargin = 1;
factory.printing.topMargin = 1;
factory.printing.rightMargin = 1;
factory.printing.bottomMargin = 1;
factory.printing.Print(false, window);
}

function previewWindow() {
factory.printing.header = "";
factory.printing.footer = "";
factory.printing.portrait = false;
factory.printing.leftMargin = 1;
factory.printing.topMargin = 1;
factory.printing.rightMargin = 1;
factory.printing.bottomMargin = 1;
factory.printing.Preview();
}

function printDiv() {
factory.printing.header = "";
factory.printing.footer = "";
factory.printing.portrait = true;
factory.printing.leftMargin = 1;
factory.printing.topMargin = 1;
factory.printing.rightMargin = 1;
factory.printing.bottomMargin = 1;
factory.printing.Print(true, window);
}


