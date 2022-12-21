<template>
    <div>
        hello

    </div>
</template>

<script>
import xml2js from 'xml2js';


    export default {
        setup(){
            const xmlContent = `<w:body>
                        <w:tbl>
                            <w:tblPr>
                                <w:tblW w:w="5110" w:type="pct"/>
                                <w:tblInd w:w="-425" w:type="dxa"/>
                                <w:tblBorders>
                                    <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                    <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                    <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                    <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                    <w:insideH w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                    <w:insideV w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                </w:tblBorders>
                                <w:tblCellMar>
                                    <w:left w:w="115" w:type="dxa"/>
                                    <w:right w:w="115" w:type="dxa"/>
                                </w:tblCellMar>
                                <w:tblLook w:val="01E0"/>
                            </w:tblPr>
                            <w:tblGrid>
                                <w:gridCol w:w="1133"/>
                                <w:gridCol w:w="3145"/>
                                <w:gridCol w:w="15383"/>
                            </w:tblGrid>
                            <w:tr w:rsidR="00E04940" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00E04940" w:rsidRDefault="00E04940" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:ind w:right="-116"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>Q:1</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t>Consider the following statements</w:t>
                                        </w:r>
                                        <w:r>
                                            <w:t xml:space="preserve">: </w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC">
                                        <w:pPr>
                                            <w:pStyle w:val="ListParagraph"/>
                                            <w:numPr>
                                                <w:ilvl w:val="0"/>
                                                <w:numId w:val="1"/>
                                            </w:numPr>
                                            <w:spacing w:after="160" w:line="259" w:lineRule="auto"/>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t>A constitution is a body of fundamental principles according to which a state is constituted</w:t>
                                        </w:r>
                                        <w:r>
                                            <w:t>.</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC">
                                        <w:pPr>
                                            <w:pStyle w:val="ListParagraph"/>
                                            <w:numPr>
                                                <w:ilvl w:val="0"/>
                                                <w:numId w:val="1"/>
                                            </w:numPr>
                                            <w:spacing w:after="160" w:line="259" w:lineRule="auto"/>
                                        </w:pPr>
                                        <w:r>
                                            <w:t xml:space="preserve">A constitution </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t>specif</w:t>
                                        </w:r>
                                        <w:r>
                                            <w:t>ies</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t xml:space="preserve"> who has the power to make decisions in a society.</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="001A1404" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="001A1404">
                                            <w:t>Choose the correct statement(s) using the code given below</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00ED098D" w:rsidRPr="007A6A57" w:rsidRDefault="00E77D8E" w:rsidP="00E84359">
                                        <w:r>
                                            <w:br/>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00E04940" w:rsidRDefault="00E04940" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>निम्नलिखितकथनोंपरविचारकरें</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t>:</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t xml:space="preserve">1. </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>संविधानमौलिकसिद्धांतोंकाएकनिकायहैजिसकेअनुसारराज्यकागठनकियाजाताहै।</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t xml:space="preserve">2. </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>संविधाननिर्दिष्टकरताहैकिसमाजमेंनिर्णयलेनेकीशक्तिकिसकेपासहै।</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>नीचेदिएगएकूटकाप्रयोगकरसहीकथनचुनें</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00E04940" w:rsidRDefault="00E04940" w:rsidP="00006785">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="005C63A7" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="005C63A7" w:rsidRDefault="005C63A7" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>INFO</w:t>
                                        </w:r>
                                        <w:r w:rsidR="0092634A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="005C63A7" w:rsidRDefault="005C63A7" w:rsidP="00897F87">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="005C63A7" w:rsidRDefault="005C63A7" w:rsidP="00897F87">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>A</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00440E39">
                                            <w:t>a) 1 only</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>ए</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve">) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>केवल</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve"> 1</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>B</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00440E39">
                                            <w:t>b) 2 only</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>बी</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve">) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>केवल</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve"> 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>C</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00440E39">
                                            <w:t>c) Both 1 and 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve">c) 1 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>और</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve"> 2 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>दोनों</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>D</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00440E39">
                                            <w:t>d) Neither 1 nor 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve">d) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>नतो</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve"> 1 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>औरनही</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008C650A">
                                            <w:t xml:space="preserve"> 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:trPr>
                                    <w:trHeight w:val="269"/>
                                </w:trPr>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>ANS:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="00D63AF8" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>C</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="00D63AF8" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>C</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>MARKS:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="00CB24B7" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRPr="001278B0" w:rsidRDefault="00CB24B7" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:eastAsia="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:eastAsia="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>0.66</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>Sol:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:ind w:right="-116"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>Q:2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="00611C43" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t xml:space="preserve">Consider the following statements: </w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC">
                                        <w:pPr>
                                            <w:pStyle w:val="ListParagraph"/>
                                            <w:numPr>
                                                <w:ilvl w:val="0"/>
                                                <w:numId w:val="2"/>
                                            </w:numPr>
                                            <w:spacing w:after="160" w:line="259" w:lineRule="auto"/>
                                        </w:pPr>
                                        <w:r>
                                            <w:t>M</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t>embers of the</w:t>
                                        </w:r>
                                        <w:r>
                                            <w:t xml:space="preserve"> Constituent</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00611C43">
                                            <w:t xml:space="preserve"> Assembly were elected by universal suffrage</w:t>
                                        </w:r>
                                        <w:r>
                                            <w:t>.</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC">
                                        <w:pPr>
                                            <w:pStyle w:val="ListParagraph"/>
                                            <w:numPr>
                                                <w:ilvl w:val="0"/>
                                                <w:numId w:val="2"/>
                                            </w:numPr>
                                            <w:spacing w:after="160" w:line="259" w:lineRule="auto"/>
                                        </w:pPr>
                                        <w:r>
                                            <w:t xml:space="preserve">Members of all religions were given representation in the Constituent Assembly. </w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="001A1404" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="001A1404">
                                            <w:lastRenderedPageBreak/>
                                            <w:t>Choose the correct statement(s) using the code given below</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:lastRenderedPageBreak/>
                                            <w:t>निम्नलिखितकथनोंपरविचारकरें</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t>:</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t xml:space="preserve">1. </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>संविधानसभाकेसदस्यसार्वभौमिकमताधिकारद्वाराचुनेगएथे।</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:t xml:space="preserve">2. </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>संविधानसभामेंसभीधर्मोंकेसदस्योंकोप्रतिनिधित्वदियागया।</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="00F435DC" w:rsidRPr="008412E8" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:r w:rsidRPr="008412E8">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>नीचेदिएगएकूटकाप्रयोगकरसहीकथनचुनें</w:t>
                                        </w:r>
                                    </w:p>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsiaTheme="minorHAnsi" w:hAnsi="Kruti Dev 010" w:cstheme="minorBidi"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:lastRenderedPageBreak/>
                                            <w:t>A</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00814EE0">
                                            <w:t>a) 1 only</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>ए</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve">) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>केवल</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve"> 1</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>B</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00814EE0">
                                            <w:t>b) 2 only</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>बी</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve">) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>केवल</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve"> 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>C</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00814EE0">
                                            <w:t>c) Both 1 and 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve">c) 1 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>और</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve"> 2 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>दोनों</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="00F435DC" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>D</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00814EE0">
                                            <w:t>d) Neither 1 nor 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="00F435DC" w:rsidRDefault="00F435DC" w:rsidP="00F435DC">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve">d) </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>नतो</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve"> 1 </w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:rPr>
                                                <w:rFonts w:ascii="Nirmala UI" w:hAnsi="Nirmala UI" w:cs="Nirmala UI"/>
                                                <w:cs/>
                                                <w:lang w:bidi="hi-IN"/>
                                            </w:rPr>
                                            <w:t>औरनही</w:t>
                                        </w:r>
                                        <w:r w:rsidRPr="00DC5A14">
                                            <w:t xml:space="preserve"> 2</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>ANS:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="00D63AF8" w:rsidP="007E1338">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>B</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="00D63AF8" w:rsidP="007E1338">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>B</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>MARKS:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="00897F87">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>4</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRPr="001278B0" w:rsidRDefault="004E72D0" w:rsidP="00897F87">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:eastAsia="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:eastAsia="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>1</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                            <w:tr w:rsidR="004E72D0" w:rsidTr="00796F68">
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="288" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                        <w:hideMark/>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                        <w:r>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                            <w:t>Sol:</w:t>
                                        </w:r>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="800" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:jc w:val="both"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Calibri" w:eastAsia="Arial Unicode MS" w:hAnsi="Calibri" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                                <w:tc>
                                    <w:tcPr>
                                        <w:tcW w:w="3912" w:type="pct"/>
                                        <w:tcBorders>
                                            <w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                            <w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>
                                        </w:tcBorders>
                                    </w:tcPr>
                                    <w:p w:rsidR="004E72D0" w:rsidRDefault="004E72D0" w:rsidP="001278B0">
                                        <w:pPr>
                                            <w:spacing w:line="276" w:lineRule="auto"/>
                                            <w:rPr>
                                                <w:rFonts w:ascii="Kruti Dev 010" w:eastAsia="Arial Unicode MS" w:hAnsi="Kruti Dev 010" w:cs="Arial Unicode MS"/>
                                                <w:noProof/>
                                                <w:sz w:val="28"/>
                                                <w:szCs w:val="28"/>
                                            </w:rPr>
                                        </w:pPr>
                                    </w:p>
                                </w:tc>
                            </w:tr>
                        </w:tbl>
                        <w:p w:rsidR="00945B80" w:rsidRDefault="00945B80"/>
                        <w:sectPr w:rsidR="00945B80" w:rsidSect="00BF1B91">
                            <w:pgSz w:w="20160" w:h="12240" w:orient="landscape"/>
                            <w:pgMar w:top="432" w:right="432" w:bottom="360" w:left="720" w:header="432" w:footer="432" w:gutter="0"/>
                            <w:cols w:space="720"/>
                            <w:docGrid w:linePitch="360"/>
                        </w:sectPr>
                    </w:body> `   
            if(process.server){
                var parser = new xml2js.Parser();
                console.log(parser);
                parser.parseString(xmlContent, function (err, result) {
                    if(err){
                        console.log(err)
                        return
                    }
                    if(result){
                        console.log('hello',result);
                    }    
                });

            }

            }
    }    
</script>

<style scoped>

</style>