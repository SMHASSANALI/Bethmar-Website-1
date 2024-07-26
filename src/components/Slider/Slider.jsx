import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import connect from '../../assets/customer/connectFibre.png';
import gigaclear from '../../assets/customer/gigaclear.png';
import gNetwork from '../../assets/customer/gNetwork.png';
import Kier from '../../assets/customer/Kier.png';
import Virgin from '../../assets/customer/Virgin.png';
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
    const customers = [
        { img: connect, text: 'Connect Fibre' },
        { img: gigaclear, text: 'Giga Clear' },
        { img: gNetwork, text: 'G-Network' },
        { img: Kier, text: 'Kier' },
        { img: Virgin, text: 'Virgin' }
    ];

    return (
        <div className="mt-12">
            <div className='text-justify w-full mx-auto content-center pt-12 rounded-lg'>
                <div className='max-w-[1400px] mx-auto'>
                    <h2 className='mx-auto font-semibold text-xl lg:text-3xl text-center font-montserrat pb-4  mb-2 md:mb-4 xl:mb-6 bg-clip-text text-transparent bg-gradient-to-t from-accentRed-dark to-accentRed'>Meet Our Clients</h2>
                    {/* 
    <svg width="2181" height="1526" viewBox="0 0 2181 1526" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_12_7235" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="2181" height="1526">
<circle cx="216" cy="718" r="10" fill="white"/>
<circle cx="236" cy="718" r="10" fill="white"/>
<circle cx="236" cy="738" r="10" fill="white"/>
<circle cx="256" cy="738" r="10" fill="white"/>
<circle cx="256" cy="758" r="10" fill="white"/>
<circle cx="276" cy="758" r="10" fill="white"/>
<circle cx="276" cy="778" r="10" fill="white"/>
<circle cx="296" cy="778" r="10" fill="white"/>
<circle cx="293.5" cy="760.5" r="7.5" fill="white"/>
<circle cx="258.5" cy="775.5" r="7.5" fill="white"/>
<circle cx="273.5" cy="740.5" r="7.5" fill="white"/>
<circle cx="238.5" cy="755.5" r="7.5" fill="white"/>
<circle cx="253.5" cy="720.5" r="7.5" fill="white"/>
<circle cx="218.5" cy="735.5" r="7.5" fill="white"/>
<circle cx="223.5" cy="750.5" r="7.5" fill="white"/>
<circle cx="268.5" cy="725.5" r="7.5" fill="white"/>
<circle cx="243.5" cy="770.5" r="7.5" fill="white"/>
<circle cx="288.5" cy="745.5" r="7.5" fill="white"/>
<circle cx="283" cy="731" r="5" fill="white"/>
<circle cx="228" cy="766" r="5" fill="white"/>
<circle cx="209" cy="784" r="10" fill="white"/>
<circle cx="229" cy="784" r="10" fill="white"/>
<circle cx="229" cy="804" r="10" fill="white"/>
<circle cx="249" cy="804" r="10" fill="white"/>
<circle cx="249" cy="824" r="10" fill="white"/>
<circle cx="269" cy="824" r="10" fill="white"/>
<circle cx="269" cy="844" r="10" fill="white"/>
<circle cx="289" cy="844" r="10" fill="white"/>
<circle cx="286.5" cy="826.5" r="7.5" fill="white"/>
<circle cx="251.5" cy="841.5" r="7.5" fill="white"/>
<circle cx="266.5" cy="806.5" r="7.5" fill="white"/>
<circle cx="231.5" cy="821.5" r="7.5" fill="white"/>
<circle cx="246.5" cy="786.5" r="7.5" fill="white"/>
<circle cx="211.5" cy="801.5" r="7.5" fill="white"/>
<circle cx="216.5" cy="816.5" r="7.5" fill="white"/>
<circle cx="261.5" cy="791.5" r="7.5" fill="white"/>
<circle cx="236.5" cy="836.5" r="7.5" fill="white"/>
<circle cx="281.5" cy="811.5" r="7.5" fill="white"/>
<circle cx="276" cy="797" r="5" fill="white"/>
<circle cx="221" cy="832" r="5" fill="white"/>
<circle cx="296" cy="798" r="10" fill="white"/>
<circle cx="316" cy="798" r="10" fill="white"/>
<circle cx="316" cy="818" r="10" fill="white"/>
<circle cx="336" cy="818" r="10" fill="white"/>
<circle cx="336" cy="838" r="10" fill="white"/>
<circle cx="356" cy="838" r="10" fill="white"/>
<circle cx="356" cy="858" r="10" fill="white"/>
<circle cx="376" cy="858" r="10" fill="white"/>
<circle cx="373.5" cy="840.5" r="7.5" fill="white"/>
<circle cx="338.5" cy="855.5" r="7.5" fill="white"/>
<circle cx="353.5" cy="820.5" r="7.5" fill="white"/>
<circle cx="318.5" cy="835.5" r="7.5" fill="white"/>
<circle cx="333.5" cy="800.5" r="7.5" fill="white"/>
<circle cx="298.5" cy="815.5" r="7.5" fill="white"/>
<circle cx="303.5" cy="830.5" r="7.5" fill="white"/>
<circle cx="348.5" cy="805.5" r="7.5" fill="white"/>
<circle cx="323.5" cy="850.5" r="7.5" fill="white"/>
<circle cx="368.5" cy="825.5" r="7.5" fill="white"/>
<circle cx="363" cy="811" r="5" fill="white"/>
<circle cx="308" cy="846" r="5" fill="white"/>
<circle cx="304" cy="731" r="10" fill="white"/>
<circle cx="324" cy="731" r="10" fill="white"/>
<circle cx="324" cy="751" r="10" fill="white"/>
<circle cx="344" cy="751" r="10" fill="white"/>
<circle cx="344" cy="771" r="10" fill="white"/>
<circle cx="364" cy="771" r="10" fill="white"/>
<circle cx="364" cy="791" r="10" fill="white"/>
<circle cx="384" cy="791" r="10" fill="white"/>
<circle cx="381.5" cy="773.5" r="7.5" fill="white"/>
<circle cx="346.5" cy="788.5" r="7.5" fill="white"/>
<circle cx="361.5" cy="753.5" r="7.5" fill="white"/>
<circle cx="326.5" cy="768.5" r="7.5" fill="white"/>
<circle cx="341.5" cy="733.5" r="7.5" fill="white"/>
<circle cx="306.5" cy="748.5" r="7.5" fill="white"/>
<circle cx="311.5" cy="763.5" r="7.5" fill="white"/>
<circle cx="356.5" cy="738.5" r="7.5" fill="white"/>
<circle cx="331.5" cy="783.5" r="7.5" fill="white"/>
<circle cx="376.5" cy="758.5" r="7.5" fill="white"/>
<circle cx="371" cy="744" r="5" fill="white"/>
<circle cx="316" cy="779" r="5" fill="white"/>
<circle cx="314" cy="666" r="10" fill="white"/>
<circle cx="334" cy="666" r="10" fill="white"/>
<circle cx="334" cy="686" r="10" fill="white"/>
<circle cx="354" cy="686" r="10" fill="white"/>
<circle cx="354" cy="706" r="10" fill="white"/>
<circle cx="374" cy="706" r="10" fill="white"/>
<circle cx="374" cy="726" r="10" fill="white"/>
<circle cx="394" cy="726" r="10" fill="white"/>
<circle cx="391.5" cy="708.5" r="7.5" fill="white"/>
<circle cx="356.5" cy="723.5" r="7.5" fill="white"/>
<circle cx="371.5" cy="688.5" r="7.5" fill="white"/>
<circle cx="336.5" cy="703.5" r="7.5" fill="white"/>
<circle cx="351.5" cy="668.5" r="7.5" fill="white"/>
<circle cx="316.5" cy="683.5" r="7.5" fill="white"/>
<circle cx="321.5" cy="698.5" r="7.5" fill="white"/>
<circle cx="366.5" cy="673.5" r="7.5" fill="white"/>
<circle cx="341.5" cy="718.5" r="7.5" fill="white"/>
<circle cx="386.5" cy="693.5" r="7.5" fill="white"/>
<circle cx="381" cy="679" r="5" fill="white"/>
<circle cx="326" cy="714" r="5" fill="white"/>
<circle cx="224" cy="651" r="10" fill="white"/>
<circle cx="244" cy="651" r="10" fill="white"/>
<circle cx="244" cy="671" r="10" fill="white"/>
<circle cx="264" cy="671" r="10" fill="white"/>
<circle cx="264" cy="691" r="10" fill="white"/>
<circle cx="284" cy="691" r="10" fill="white"/>
<circle cx="284" cy="711" r="10" fill="white"/>
<circle cx="304" cy="711" r="10" fill="white"/>
<circle cx="301.5" cy="693.5" r="7.5" fill="white"/>
<circle cx="266.5" cy="708.5" r="7.5" fill="white"/>
<circle cx="281.5" cy="673.5" r="7.5" fill="white"/>
<circle cx="246.5" cy="688.5" r="7.5" fill="white"/>
<circle cx="261.5" cy="653.5" r="7.5" fill="white"/>
<circle cx="226.5" cy="668.5" r="7.5" fill="white"/>
<circle cx="231.5" cy="683.5" r="7.5" fill="white"/>
<circle cx="276.5" cy="658.5" r="7.5" fill="white"/>
<circle cx="251.5" cy="703.5" r="7.5" fill="white"/>
<circle cx="296.5" cy="678.5" r="7.5" fill="white"/>
<circle cx="291" cy="664" r="5" fill="white"/>
<circle cx="236" cy="699" r="5" fill="white"/>
<circle cx="138" cy="638" r="10" fill="white"/>
<circle cx="158" cy="638" r="10" fill="white"/>
<circle cx="158" cy="658" r="10" fill="white"/>
<circle cx="178" cy="658" r="10" fill="white"/>
<circle cx="178" cy="678" r="10" fill="white"/>
<circle cx="198" cy="678" r="10" fill="white"/>
<circle cx="198" cy="698" r="10" fill="white"/>
<circle cx="218" cy="698" r="10" fill="white"/>
<circle cx="215.5" cy="680.5" r="7.5" fill="white"/>
<circle cx="180.5" cy="695.5" r="7.5" fill="white"/>
<circle cx="195.5" cy="660.5" r="7.5" fill="white"/>
<circle cx="160.5" cy="675.5" r="7.5" fill="white"/>
<circle cx="175.5" cy="640.5" r="7.5" fill="white"/>
<circle cx="140.5" cy="655.5" r="7.5" fill="white"/>
<circle cx="145.5" cy="670.5" r="7.5" fill="white"/>
<circle cx="190.5" cy="645.5" r="7.5" fill="white"/>
<circle cx="165.5" cy="690.5" r="7.5" fill="white"/>
<circle cx="210.5" cy="665.5" r="7.5" fill="white"/>
<circle cx="205" cy="651" r="5" fill="white"/>
<circle cx="150" cy="686" r="5" fill="white"/>
<circle cx="129" cy="704" r="10" fill="white"/>
<circle cx="149" cy="704" r="10" fill="white"/>
<circle cx="149" cy="724" r="10" fill="white"/>
<circle cx="169" cy="724" r="10" fill="white"/>
<circle cx="169" cy="744" r="10" fill="white"/>
<circle cx="189" cy="744" r="10" fill="white"/>
<circle cx="189" cy="764" r="10" fill="white"/>
<circle cx="209" cy="764" r="10" fill="white"/>
<circle cx="206.5" cy="746.5" r="7.5" fill="white"/>
<circle cx="171.5" cy="761.5" r="7.5" fill="white"/>
<circle cx="186.5" cy="726.5" r="7.5" fill="white"/>
<circle cx="151.5" cy="741.5" r="7.5" fill="white"/>
<circle cx="166.5" cy="706.5" r="7.5" fill="white"/>
<circle cx="131.5" cy="721.5" r="7.5" fill="white"/>
<circle cx="136.5" cy="736.5" r="7.5" fill="white"/>
<circle cx="181.5" cy="711.5" r="7.5" fill="white"/>
<circle cx="156.5" cy="756.5" r="7.5" fill="white"/>
<circle cx="201.5" cy="731.5" r="7.5" fill="white"/>
<circle cx="196" cy="717" r="5" fill="white"/>
<circle cx="141" cy="752" r="5" fill="white"/>
<circle cx="124" cy="771" r="10" fill="white"/>
<circle cx="144" cy="771" r="10" fill="white"/>
<circle cx="144" cy="791" r="10" fill="white"/>
<circle cx="164" cy="791" r="10" fill="white"/>
<circle cx="164" cy="811" r="10" fill="white"/>
<circle cx="184" cy="811" r="10" fill="white"/>
<circle cx="184" cy="831" r="10" fill="white"/>
<circle cx="204" cy="831" r="10" fill="white"/>
<circle cx="201.5" cy="813.5" r="7.5" fill="white"/>
<circle cx="166.5" cy="828.5" r="7.5" fill="white"/>
<circle cx="181.5" cy="793.5" r="7.5" fill="white"/>
<circle cx="146.5" cy="808.5" r="7.5" fill="white"/>
<circle cx="161.5" cy="773.5" r="7.5" fill="white"/>
<circle cx="126.5" cy="788.5" r="7.5" fill="white"/>
<circle cx="131.5" cy="803.5" r="7.5" fill="white"/>
<circle cx="176.5" cy="778.5" r="7.5" fill="white"/>
<circle cx="151.5" cy="823.5" r="7.5" fill="white"/>
<circle cx="196.5" cy="798.5" r="7.5" fill="white"/>
<circle cx="191" cy="784" r="5" fill="white"/>
<circle cx="136" cy="819" r="5" fill="white"/>
<circle cx="124" cy="841" r="10" fill="white"/>
<circle cx="144" cy="841" r="10" fill="white"/>
<circle cx="144" cy="861" r="10" fill="white"/>
<circle cx="164" cy="861" r="10" fill="white"/>
<circle cx="164" cy="881" r="10" fill="white"/>
<circle cx="184" cy="881" r="10" fill="white"/>
<circle cx="184" cy="901" r="10" fill="white"/>
<circle cx="204" cy="901" r="10" fill="white"/>
<circle cx="201.5" cy="883.5" r="7.5" fill="white"/>
<circle cx="166.5" cy="898.5" r="7.5" fill="white"/>
<circle cx="181.5" cy="863.5" r="7.5" fill="white"/>
<circle cx="146.5" cy="878.5" r="7.5" fill="white"/>
<circle cx="161.5" cy="843.5" r="7.5" fill="white"/>
<circle cx="126.5" cy="858.5" r="7.5" fill="white"/>
<circle cx="131.5" cy="873.5" r="7.5" fill="white"/>
<circle cx="176.5" cy="848.5" r="7.5" fill="white"/>
<circle cx="151.5" cy="893.5" r="7.5" fill="white"/>
<circle cx="196.5" cy="868.5" r="7.5" fill="white"/>
<circle cx="191" cy="854" r="5" fill="white"/>
<circle cx="136" cy="889" r="5" fill="white"/>
<circle cx="209" cy="852" r="10" fill="white"/>
<circle cx="229" cy="852" r="10" fill="white"/>
<circle cx="229" cy="872" r="10" fill="white"/>
<circle cx="249" cy="872" r="10" fill="white"/>
<circle cx="249" cy="892" r="10" fill="white"/>
<circle cx="269" cy="892" r="10" fill="white"/>
<circle cx="269" cy="912" r="10" fill="white"/>
<circle cx="289" cy="912" r="10" fill="white"/>
<circle cx="286.5" cy="894.5" r="7.5" fill="white"/>
<circle cx="251.5" cy="909.5" r="7.5" fill="white"/>
<circle cx="266.5" cy="874.5" r="7.5" fill="white"/>
<circle cx="231.5" cy="889.5" r="7.5" fill="white"/>
<circle cx="246.5" cy="854.5" r="7.5" fill="white"/>
<circle cx="211.5" cy="869.5" r="7.5" fill="white"/>
<circle cx="216.5" cy="884.5" r="7.5" fill="white"/>
<circle cx="261.5" cy="859.5" r="7.5" fill="white"/>
<circle cx="236.5" cy="904.5" r="7.5" fill="white"/>
<circle cx="281.5" cy="879.5" r="7.5" fill="white"/>
<circle cx="276" cy="865" r="5" fill="white"/>
<circle cx="221" cy="900" r="5" fill="white"/>
<circle cx="376" cy="949" r="10" fill="white"/>
<circle cx="396" cy="949" r="10" fill="white"/>
<circle cx="396" cy="969" r="10" fill="white"/>
<circle cx="416" cy="969" r="10" fill="white"/>
<circle cx="416" cy="989" r="10" fill="white"/>
<circle cx="436" cy="989" r="10" fill="white"/>
<circle cx="436" cy="1009" r="10" fill="white"/>
<circle cx="456" cy="1009" r="10" fill="white"/>
<circle cx="453.5" cy="991.5" r="7.5" fill="white"/>
<circle cx="418.5" cy="1006.5" r="7.5" fill="white"/>
<circle cx="433.5" cy="971.5" r="7.5" fill="white"/>
<circle cx="398.5" cy="986.5" r="7.5" fill="white"/>
<circle cx="413.5" cy="951.5" r="7.5" fill="white"/>
<circle cx="378.5" cy="966.5" r="7.5" fill="white"/>
<circle cx="383.5" cy="981.5" r="7.5" fill="white"/>
<circle cx="428.5" cy="956.5" r="7.5" fill="white"/>
<circle cx="403.5" cy="1001.5" r="7.5" fill="white"/>
<circle cx="448.5" cy="976.5" r="7.5" fill="white"/>
<circle cx="443" cy="962" r="5" fill="white"/>
<circle cx="388" cy="997" r="5" fill="white"/>
<circle cx="369" cy="1015" r="10" fill="white"/>
<circle cx="389" cy="1015" r="10" fill="white"/>
<circle cx="389" cy="1035" r="10" fill="white"/>
<circle cx="409" cy="1035" r="10" fill="white"/>
<circle cx="409" cy="1055" r="10" fill="white"/>
<circle cx="429" cy="1055" r="10" fill="white"/>
<circle cx="429" cy="1075" r="10" fill="white"/>
<circle cx="449" cy="1075" r="10" fill="white"/>
<circle cx="446.5" cy="1057.5" r="7.5" fill="white"/>
<circle cx="411.5" cy="1072.5" r="7.5" fill="white"/>
<circle cx="426.5" cy="1037.5" r="7.5" fill="white"/>
<circle cx="391.5" cy="1052.5" r="7.5" fill="white"/>
<circle cx="406.5" cy="1017.5" r="7.5" fill="white"/>
<circle cx="371.5" cy="1032.5" r="7.5" fill="white"/>
<circle cx="376.5" cy="1047.5" r="7.5" fill="white"/>
<circle cx="421.5" cy="1022.5" r="7.5" fill="white"/>
<circle cx="396.5" cy="1067.5" r="7.5" fill="white"/>
<circle cx="441.5" cy="1042.5" r="7.5" fill="white"/>
<circle cx="436" cy="1028" r="5" fill="white"/>
<circle cx="381" cy="1063" r="5" fill="white"/>
<circle cx="456" cy="1029" r="10" fill="white"/>
<circle cx="476" cy="1029" r="10" fill="white"/>
<circle cx="476" cy="1049" r="10" fill="white"/>
<circle cx="496" cy="1049" r="10" fill="white"/>
<circle cx="496" cy="1069" r="10" fill="white"/>
<circle cx="516" cy="1069" r="10" fill="white"/>
<circle cx="516" cy="1089" r="10" fill="white"/>
<circle cx="536" cy="1089" r="10" fill="white"/>
<circle cx="533.5" cy="1071.5" r="7.5" fill="white"/>
<circle cx="498.5" cy="1086.5" r="7.5" fill="white"/>
<circle cx="513.5" cy="1051.5" r="7.5" fill="white"/>
<circle cx="478.5" cy="1066.5" r="7.5" fill="white"/>
<circle cx="493.5" cy="1031.5" r="7.5" fill="white"/>
<circle cx="458.5" cy="1046.5" r="7.5" fill="white"/>
<circle cx="463.5" cy="1061.5" r="7.5" fill="white"/>
<circle cx="508.5" cy="1036.5" r="7.5" fill="white"/>
<circle cx="483.5" cy="1081.5" r="7.5" fill="white"/>
<circle cx="528.5" cy="1056.5" r="7.5" fill="white"/>
<circle cx="523" cy="1042" r="5" fill="white"/>
<circle cx="468" cy="1077" r="5" fill="white"/>
<circle cx="464" cy="962" r="10" fill="white"/>
<circle cx="484" cy="962" r="10" fill="white"/>
<circle cx="484" cy="982" r="10" fill="white"/>
<circle cx="504" cy="982" r="10" fill="white"/>
<circle cx="504" cy="1002" r="10" fill="white"/>
<circle cx="524" cy="1002" r="10" fill="white"/>
<circle cx="524" cy="1022" r="10" fill="white"/>
<circle cx="544" cy="1022" r="10" fill="white"/>
<circle cx="541.5" cy="1004.5" r="7.5" fill="white"/>
<circle cx="506.5" cy="1019.5" r="7.5" fill="white"/>
<circle cx="521.5" cy="984.5" r="7.5" fill="white"/>
<circle cx="486.5" cy="999.5" r="7.5" fill="white"/>
<circle cx="501.5" cy="964.5" r="7.5" fill="white"/>
<circle cx="466.5" cy="979.5" r="7.5" fill="white"/>
<circle cx="471.5" cy="994.5" r="7.5" fill="white"/>
<circle cx="516.5" cy="969.5" r="7.5" fill="white"/>
<circle cx="491.5" cy="1014.5" r="7.5" fill="white"/>
<circle cx="536.5" cy="989.5" r="7.5" fill="white"/>
<circle cx="531" cy="975" r="5" fill="white"/>
<circle cx="476" cy="1010" r="5" fill="white"/>
<circle cx="474" cy="897" r="10" fill="white"/>
<circle cx="494" cy="897" r="10" fill="white"/>
<circle cx="494" cy="917" r="10" fill="white"/>
<circle cx="514" cy="917" r="10" fill="white"/>
<circle cx="514" cy="937" r="10" fill="white"/>
<circle cx="534" cy="937" r="10" fill="white"/>
<circle cx="534" cy="957" r="10" fill="white"/>
<circle cx="554" cy="957" r="10" fill="white"/>
<circle cx="551.5" cy="939.5" r="7.5" fill="white"/>
<circle cx="516.5" cy="954.5" r="7.5" fill="white"/>
<circle cx="531.5" cy="919.5" r="7.5" fill="white"/>
<circle cx="496.5" cy="934.5" r="7.5" fill="white"/>
<circle cx="511.5" cy="899.5" r="7.5" fill="white"/>
<circle cx="476.5" cy="914.5" r="7.5" fill="white"/>
<circle cx="481.5" cy="929.5" r="7.5" fill="white"/>
<circle cx="526.5" cy="904.5" r="7.5" fill="white"/>
<circle cx="501.5" cy="949.5" r="7.5" fill="white"/>
<circle cx="546.5" cy="924.5" r="7.5" fill="white"/>
<circle cx="541" cy="910" r="5" fill="white"/>
<circle cx="486" cy="945" r="5" fill="white"/>
<circle cx="384" cy="882" r="10" fill="white"/>
<circle cx="404" cy="882" r="10" fill="white"/>
<circle cx="404" cy="902" r="10" fill="white"/>
<circle cx="424" cy="902" r="10" fill="white"/>
<circle cx="424" cy="922" r="10" fill="white"/>
<circle cx="444" cy="922" r="10" fill="white"/>
<circle cx="444" cy="942" r="10" fill="white"/>
<circle cx="464" cy="942" r="10" fill="white"/>
<circle cx="461.5" cy="924.5" r="7.5" fill="white"/>
<circle cx="426.5" cy="939.5" r="7.5" fill="white"/>
<circle cx="441.5" cy="904.5" r="7.5" fill="white"/>
<circle cx="406.5" cy="919.5" r="7.5" fill="white"/>
<circle cx="421.5" cy="884.5" r="7.5" fill="white"/>
<circle cx="386.5" cy="899.5" r="7.5" fill="white"/>
<circle cx="391.5" cy="914.5" r="7.5" fill="white"/>
<circle cx="436.5" cy="889.5" r="7.5" fill="white"/>
<circle cx="411.5" cy="934.5" r="7.5" fill="white"/>
<circle cx="456.5" cy="909.5" r="7.5" fill="white"/>
<circle cx="451" cy="895" r="5" fill="white"/>
<circle cx="396" cy="930" r="5" fill="white"/>
<circle cx="298" cy="869" r="10" fill="white"/>
<circle cx="318" cy="869" r="10" fill="white"/>
<circle cx="318" cy="889" r="10" fill="white"/>
<circle cx="338" cy="889" r="10" fill="white"/>
<circle cx="338" cy="909" r="10" fill="white"/>
<circle cx="358" cy="909" r="10" fill="white"/>
<circle cx="358" cy="929" r="10" fill="white"/>
<circle cx="378" cy="929" r="10" fill="white"/>
<circle cx="375.5" cy="911.5" r="7.5" fill="white"/>
<circle cx="340.5" cy="926.5" r="7.5" fill="white"/>
<circle cx="355.5" cy="891.5" r="7.5" fill="white"/>
<circle cx="320.5" cy="906.5" r="7.5" fill="white"/>
<circle cx="335.5" cy="871.5" r="7.5" fill="white"/>
<circle cx="300.5" cy="886.5" r="7.5" fill="white"/>
<circle cx="305.5" cy="901.5" r="7.5" fill="white"/>
<circle cx="350.5" cy="876.5" r="7.5" fill="white"/>
<circle cx="325.5" cy="921.5" r="7.5" fill="white"/>
<circle cx="370.5" cy="896.5" r="7.5" fill="white"/>
<circle cx="365" cy="882" r="5" fill="white"/>
<circle cx="310" cy="917" r="5" fill="white"/>
<circle cx="289" cy="935" r="10" fill="white"/>
<circle cx="309" cy="935" r="10" fill="white"/>
<circle cx="309" cy="955" r="10" fill="white"/>
<circle cx="329" cy="955" r="10" fill="white"/>
<circle cx="329" cy="975" r="10" fill="white"/>
<circle cx="349" cy="975" r="10" fill="white"/>
<circle cx="349" cy="995" r="10" fill="white"/>
<circle cx="369" cy="995" r="10" fill="white"/>
<circle cx="366.5" cy="977.5" r="7.5" fill="white"/>
<circle cx="331.5" cy="992.5" r="7.5" fill="white"/>
<circle cx="346.5" cy="957.5" r="7.5" fill="white"/>
<circle cx="311.5" cy="972.5" r="7.5" fill="white"/>
<circle cx="326.5" cy="937.5" r="7.5" fill="white"/>
<circle cx="291.5" cy="952.5" r="7.5" fill="white"/>
<circle cx="296.5" cy="967.5" r="7.5" fill="white"/>
<circle cx="341.5" cy="942.5" r="7.5" fill="white"/>
<circle cx="316.5" cy="987.5" r="7.5" fill="white"/>
<circle cx="361.5" cy="962.5" r="7.5" fill="white"/>
<circle cx="356" cy="948" r="5" fill="white"/>
<circle cx="301" cy="983" r="5" fill="white"/>
<circle cx="284" cy="1002" r="10" fill="white"/>
<circle cx="304" cy="1002" r="10" fill="white"/>
<circle cx="304" cy="1022" r="10" fill="white"/>
<circle cx="324" cy="1022" r="10" fill="white"/>
<circle cx="324" cy="1042" r="10" fill="white"/>
<circle cx="344" cy="1042" r="10" fill="white"/>
<circle cx="344" cy="1062" r="10" fill="white"/>
<circle cx="364" cy="1062" r="10" fill="white"/>
<circle cx="361.5" cy="1044.5" r="7.5" fill="white"/>
<circle cx="326.5" cy="1059.5" r="7.5" fill="white"/>
<circle cx="341.5" cy="1024.5" r="7.5" fill="white"/>
<circle cx="306.5" cy="1039.5" r="7.5" fill="white"/>
<circle cx="321.5" cy="1004.5" r="7.5" fill="white"/>
<circle cx="286.5" cy="1019.5" r="7.5" fill="white"/>
<circle cx="291.5" cy="1034.5" r="7.5" fill="white"/>
<circle cx="336.5" cy="1009.5" r="7.5" fill="white"/>
<circle cx="311.5" cy="1054.5" r="7.5" fill="white"/>
<circle cx="356.5" cy="1029.5" r="7.5" fill="white"/>
<circle cx="351" cy="1015" r="5" fill="white"/>
<circle cx="296" cy="1050" r="5" fill="white"/>
<circle cx="284" cy="1072" r="10" fill="white"/>
<circle cx="304" cy="1072" r="10" fill="white"/>
<circle cx="304" cy="1092" r="10" fill="white"/>
<circle cx="324" cy="1092" r="10" fill="white"/>
<circle cx="324" cy="1112" r="10" fill="white"/>
<circle cx="344" cy="1112" r="10" fill="white"/>
<circle cx="344" cy="1132" r="10" fill="white"/>
<circle cx="364" cy="1132" r="10" fill="white"/>
<circle cx="361.5" cy="1114.5" r="7.5" fill="white"/>
<circle cx="326.5" cy="1129.5" r="7.5" fill="white"/>
<circle cx="341.5" cy="1094.5" r="7.5" fill="white"/>
<circle cx="306.5" cy="1109.5" r="7.5" fill="white"/>
<circle cx="321.5" cy="1074.5" r="7.5" fill="white"/>
<circle cx="286.5" cy="1089.5" r="7.5" fill="white"/>
<circle cx="291.5" cy="1104.5" r="7.5" fill="white"/>
<circle cx="336.5" cy="1079.5" r="7.5" fill="white"/>
<circle cx="311.5" cy="1124.5" r="7.5" fill="white"/>
<circle cx="356.5" cy="1099.5" r="7.5" fill="white"/>
<circle cx="351" cy="1085" r="5" fill="white"/>
<circle cx="296" cy="1120" r="5" fill="white"/>
<circle cx="369" cy="1083" r="10" fill="white"/>
<circle cx="389" cy="1083" r="10" fill="white"/>
<circle cx="389" cy="1103" r="10" fill="white"/>
<circle cx="409" cy="1103" r="10" fill="white"/>
<circle cx="409" cy="1123" r="10" fill="white"/>
<circle cx="429" cy="1123" r="10" fill="white"/>
<circle cx="429" cy="1143" r="10" fill="white"/>
<circle cx="449" cy="1143" r="10" fill="white"/>
<circle cx="446.5" cy="1125.5" r="7.5" fill="white"/>
<circle cx="411.5" cy="1140.5" r="7.5" fill="white"/>
<circle cx="426.5" cy="1105.5" r="7.5" fill="white"/>
<circle cx="391.5" cy="1120.5" r="7.5" fill="white"/>
<circle cx="406.5" cy="1085.5" r="7.5" fill="white"/>
<circle cx="371.5" cy="1100.5" r="7.5" fill="white"/>
<circle cx="376.5" cy="1115.5" r="7.5" fill="white"/>
<circle cx="421.5" cy="1090.5" r="7.5" fill="white"/>
<circle cx="396.5" cy="1135.5" r="7.5" fill="white"/>
<circle cx="441.5" cy="1110.5" r="7.5" fill="white"/>
<circle cx="436" cy="1096" r="5" fill="white"/>
<circle cx="381" cy="1131" r="5" fill="white"/>
<circle cx="102" cy="975" r="10" fill="white"/>
<circle cx="122" cy="975" r="10" fill="white"/>
<circle cx="122" cy="995" r="10" fill="white"/>
<circle cx="142" cy="995" r="10" fill="white"/>
<circle cx="142" cy="1015" r="10" fill="white"/>
<circle cx="162" cy="1015" r="10" fill="white"/>
<circle cx="162" cy="1035" r="10" fill="white"/>
<circle cx="182" cy="1035" r="10" fill="white"/>
<circle cx="179.5" cy="1017.5" r="7.5" fill="white"/>
<circle cx="144.5" cy="1032.5" r="7.5" fill="white"/>
<circle cx="159.5" cy="997.5" r="7.5" fill="white"/>
<circle cx="124.5" cy="1012.5" r="7.5" fill="white"/>
<circle cx="139.5" cy="977.5" r="7.5" fill="white"/>
<circle cx="104.5" cy="992.5" r="7.5" fill="white"/>
<circle cx="109.5" cy="1007.5" r="7.5" fill="white"/>
<circle cx="154.5" cy="982.5" r="7.5" fill="white"/>
<circle cx="129.5" cy="1027.5" r="7.5" fill="white"/>
<circle cx="174.5" cy="1002.5" r="7.5" fill="white"/>
<circle cx="169" cy="988" r="5" fill="white"/>
<circle cx="114" cy="1023" r="5" fill="white"/>
<circle cx="95" cy="1041" r="10" fill="white"/>
<circle cx="115" cy="1041" r="10" fill="white"/>
<circle cx="115" cy="1061" r="10" fill="white"/>
<circle cx="135" cy="1061" r="10" fill="white"/>
<circle cx="135" cy="1081" r="10" fill="white"/>
<circle cx="155" cy="1081" r="10" fill="white"/>
<circle cx="155" cy="1101" r="10" fill="white"/>
<circle cx="175" cy="1101" r="10" fill="white"/>
<circle cx="172.5" cy="1083.5" r="7.5" fill="white"/>
<circle cx="137.5" cy="1098.5" r="7.5" fill="white"/>
<circle cx="152.5" cy="1063.5" r="7.5" fill="white"/>
<circle cx="117.5" cy="1078.5" r="7.5" fill="white"/>
<circle cx="132.5" cy="1043.5" r="7.5" fill="white"/>
<circle cx="97.5" cy="1058.5" r="7.5" fill="white"/>
<circle cx="102.5" cy="1073.5" r="7.5" fill="white"/>
<circle cx="147.5" cy="1048.5" r="7.5" fill="white"/>
<circle cx="122.5" cy="1093.5" r="7.5" fill="white"/>
<circle cx="167.5" cy="1068.5" r="7.5" fill="white"/>
<circle cx="162" cy="1054" r="5" fill="white"/>
<circle cx="107" cy="1089" r="5" fill="white"/>
<circle cx="182" cy="1055" r="10" fill="white"/>
<circle cx="202" cy="1055" r="10" fill="white"/>
<circle cx="202" cy="1075" r="10" fill="white"/>
<circle cx="222" cy="1075" r="10" fill="white"/>
<circle cx="222" cy="1095" r="10" fill="white"/>
<circle cx="242" cy="1095" r="10" fill="white"/>
<circle cx="242" cy="1115" r="10" fill="white"/>
<circle cx="262" cy="1115" r="10" fill="white"/>
<circle cx="259.5" cy="1097.5" r="7.5" fill="white"/>
<circle cx="224.5" cy="1112.5" r="7.5" fill="white"/>
<circle cx="239.5" cy="1077.5" r="7.5" fill="white"/>
<circle cx="204.5" cy="1092.5" r="7.5" fill="white"/>
<circle cx="219.5" cy="1057.5" r="7.5" fill="white"/>
<circle cx="184.5" cy="1072.5" r="7.5" fill="white"/>
<circle cx="189.5" cy="1087.5" r="7.5" fill="white"/>
<circle cx="234.5" cy="1062.5" r="7.5" fill="white"/>
<circle cx="209.5" cy="1107.5" r="7.5" fill="white"/>
<circle cx="254.5" cy="1082.5" r="7.5" fill="white"/>
<circle cx="249" cy="1068" r="5" fill="white"/>
<circle cx="194" cy="1103" r="5" fill="white"/>
<circle cx="190" cy="988" r="10" fill="white"/>
<circle cx="210" cy="988" r="10" fill="white"/>
<circle cx="210" cy="1008" r="10" fill="white"/>
<circle cx="230" cy="1008" r="10" fill="white"/>
<circle cx="230" cy="1028" r="10" fill="white"/>
<circle cx="250" cy="1028" r="10" fill="white"/>
<circle cx="250" cy="1048" r="10" fill="white"/>
<circle cx="270" cy="1048" r="10" fill="white"/>
<circle cx="267.5" cy="1030.5" r="7.5" fill="white"/>
<circle cx="232.5" cy="1045.5" r="7.5" fill="white"/>
<circle cx="247.5" cy="1010.5" r="7.5" fill="white"/>
<circle cx="212.5" cy="1025.5" r="7.5" fill="white"/>
<circle cx="227.5" cy="990.5" r="7.5" fill="white"/>
<circle cx="192.5" cy="1005.5" r="7.5" fill="white"/>
<circle cx="197.5" cy="1020.5" r="7.5" fill="white"/>
<circle cx="242.5" cy="995.5" r="7.5" fill="white"/>
<circle cx="217.5" cy="1040.5" r="7.5" fill="white"/>
<circle cx="262.5" cy="1015.5" r="7.5" fill="white"/>
<circle cx="257" cy="1001" r="5" fill="white"/>
<circle cx="202" cy="1036" r="5" fill="white"/>
<circle cx="200" cy="923" r="10" fill="white"/>
<circle cx="220" cy="923" r="10" fill="white"/>
<circle cx="220" cy="943" r="10" fill="white"/>
<circle cx="240" cy="943" r="10" fill="white"/>
<circle cx="240" cy="963" r="10" fill="white"/>
<circle cx="260" cy="963" r="10" fill="white"/>
<circle cx="260" cy="983" r="10" fill="white"/>
<circle cx="280" cy="983" r="10" fill="white"/>
<circle cx="277.5" cy="965.5" r="7.5" fill="white"/>
<circle cx="242.5" cy="980.5" r="7.5" fill="white"/>
<circle cx="257.5" cy="945.5" r="7.5" fill="white"/>
<circle cx="222.5" cy="960.5" r="7.5" fill="white"/>
<circle cx="237.5" cy="925.5" r="7.5" fill="white"/>
<circle cx="202.5" cy="940.5" r="7.5" fill="white"/>
<circle cx="207.5" cy="955.5" r="7.5" fill="white"/>
<circle cx="252.5" cy="930.5" r="7.5" fill="white"/>
<circle cx="227.5" cy="975.5" r="7.5" fill="white"/>
<circle cx="272.5" cy="950.5" r="7.5" fill="white"/>
<circle cx="267" cy="936" r="5" fill="white"/>
<circle cx="212" cy="971" r="5" fill="white"/>
<circle cx="110" cy="908" r="10" fill="white"/>
<circle cx="130" cy="908" r="10" fill="white"/>
<circle cx="130" cy="928" r="10" fill="white"/>
<circle cx="150" cy="928" r="10" fill="white"/>
<circle cx="150" cy="948" r="10" fill="white"/>
<circle cx="170" cy="948" r="10" fill="white"/>
<circle cx="170" cy="968" r="10" fill="white"/>
<circle cx="190" cy="968" r="10" fill="white"/>
<circle cx="187.5" cy="950.5" r="7.5" fill="white"/>
<circle cx="152.5" cy="965.5" r="7.5" fill="white"/>
<circle cx="167.5" cy="930.5" r="7.5" fill="white"/>
<circle cx="132.5" cy="945.5" r="7.5" fill="white"/>
<circle cx="147.5" cy="910.5" r="7.5" fill="white"/>
<circle cx="112.5" cy="925.5" r="7.5" fill="white"/>
<circle cx="117.5" cy="940.5" r="7.5" fill="white"/>
<circle cx="162.5" cy="915.5" r="7.5" fill="white"/>
<circle cx="137.5" cy="960.5" r="7.5" fill="white"/>
<circle cx="182.5" cy="935.5" r="7.5" fill="white"/>
<circle cx="177" cy="921" r="5" fill="white"/>
<circle cx="122" cy="956" r="5" fill="white"/>
<circle cx="24" cy="895" r="10" fill="white"/>
<circle cx="44" cy="895" r="10" fill="white"/>
<circle cx="44" cy="915" r="10" fill="white"/>
<circle cx="64" cy="915" r="10" fill="white"/>
<circle cx="64" cy="935" r="10" fill="white"/>
<circle cx="84" cy="935" r="10" fill="white"/>
<circle cx="84" cy="955" r="10" fill="white"/>
<circle cx="104" cy="955" r="10" fill="white"/>
<circle cx="101.5" cy="937.5" r="7.5" fill="white"/>
<circle cx="66.5" cy="952.5" r="7.5" fill="white"/>
<circle cx="81.5" cy="917.5" r="7.5" fill="white"/>
<circle cx="46.5" cy="932.5" r="7.5" fill="white"/>
<circle cx="61.5" cy="897.5" r="7.5" fill="white"/>
<circle cx="26.5" cy="912.5" r="7.5" fill="white"/>
<circle cx="31.5" cy="927.5" r="7.5" fill="white"/>
<circle cx="76.5" cy="902.5" r="7.5" fill="white"/>
<circle cx="51.5" cy="947.5" r="7.5" fill="white"/>
<circle cx="96.5" cy="922.5" r="7.5" fill="white"/>
<circle cx="91" cy="908" r="5" fill="white"/>
<circle cx="36" cy="943" r="5" fill="white"/>
<circle cx="15" cy="961" r="10" fill="white"/>
<circle cx="35" cy="961" r="10" fill="white"/>
<circle cx="35" cy="981" r="10" fill="white"/>
<circle cx="55" cy="981" r="10" fill="white"/>
<circle cx="55" cy="1001" r="10" fill="white"/>
<circle cx="75" cy="1001" r="10" fill="white"/>
<circle cx="75" cy="1021" r="10" fill="white"/>
<circle cx="95" cy="1021" r="10" fill="white"/>
<circle cx="92.5" cy="1003.5" r="7.5" fill="white"/>
<circle cx="57.5" cy="1018.5" r="7.5" fill="white"/>
<circle cx="72.5" cy="983.5" r="7.5" fill="white"/>
<circle cx="37.5" cy="998.5" r="7.5" fill="white"/>
<circle cx="52.5" cy="963.5" r="7.5" fill="white"/>
<circle cx="17.5" cy="978.5" r="7.5" fill="white"/>
<circle cx="22.5" cy="993.5" r="7.5" fill="white"/>
<circle cx="67.5" cy="968.5" r="7.5" fill="white"/>
<circle cx="42.5" cy="1013.5" r="7.5" fill="white"/>
<circle cx="87.5" cy="988.5" r="7.5" fill="white"/>
<circle cx="82" cy="974" r="5" fill="white"/>
<circle cx="27" cy="1009" r="5" fill="white"/>
<circle cx="10" cy="1028" r="10" fill="white"/>
<circle cx="30" cy="1028" r="10" fill="white"/>
<circle cx="30" cy="1048" r="10" fill="white"/>
<circle cx="50" cy="1048" r="10" fill="white"/>
<circle cx="50" cy="1068" r="10" fill="white"/>
<circle cx="70" cy="1068" r="10" fill="white"/>
<circle cx="70" cy="1088" r="10" fill="white"/>
<circle cx="90" cy="1088" r="10" fill="white"/>
<circle cx="87.5" cy="1070.5" r="7.5" fill="white"/>
<circle cx="52.5" cy="1085.5" r="7.5" fill="white"/>
<circle cx="67.5" cy="1050.5" r="7.5" fill="white"/>
<circle cx="32.5" cy="1065.5" r="7.5" fill="white"/>
<circle cx="47.5" cy="1030.5" r="7.5" fill="white"/>
<circle cx="12.5" cy="1045.5" r="7.5" fill="white"/>
<circle cx="17.5" cy="1060.5" r="7.5" fill="white"/>
<circle cx="62.5" cy="1035.5" r="7.5" fill="white"/>
<circle cx="37.5" cy="1080.5" r="7.5" fill="white"/>
<circle cx="82.5" cy="1055.5" r="7.5" fill="white"/>
<circle cx="77" cy="1041" r="5" fill="white"/>
<circle cx="22" cy="1076" r="5" fill="white"/>
<circle cx="10" cy="1098" r="10" fill="white"/>
<circle cx="30" cy="1098" r="10" fill="white"/>
<circle cx="30" cy="1118" r="10" fill="white"/>
<circle cx="50" cy="1118" r="10" fill="white"/>
<circle cx="50" cy="1138" r="10" fill="white"/>
<circle cx="70" cy="1138" r="10" fill="white"/>
<circle cx="70" cy="1158" r="10" fill="white"/>
<circle cx="90" cy="1158" r="10" fill="white"/>
<circle cx="87.5" cy="1140.5" r="7.5" fill="white"/>
<circle cx="52.5" cy="1155.5" r="7.5" fill="white"/>
<circle cx="67.5" cy="1120.5" r="7.5" fill="white"/>
<circle cx="32.5" cy="1135.5" r="7.5" fill="white"/>
<circle cx="47.5" cy="1100.5" r="7.5" fill="white"/>
<circle cx="12.5" cy="1115.5" r="7.5" fill="white"/>
<circle cx="17.5" cy="1130.5" r="7.5" fill="white"/>
<circle cx="62.5" cy="1105.5" r="7.5" fill="white"/>
<circle cx="37.5" cy="1150.5" r="7.5" fill="white"/>
<circle cx="82.5" cy="1125.5" r="7.5" fill="white"/>
<circle cx="77" cy="1111" r="5" fill="white"/>
<circle cx="22" cy="1146" r="5" fill="white"/>
<circle cx="95" cy="1109" r="10" fill="white"/>
<circle cx="115" cy="1109" r="10" fill="white"/>
<circle cx="115" cy="1129" r="10" fill="white"/>
<circle cx="135" cy="1129" r="10" fill="white"/>
<circle cx="135" cy="1149" r="10" fill="white"/>
<circle cx="155" cy="1149" r="10" fill="white"/>
<circle cx="155" cy="1169" r="10" fill="white"/>
<circle cx="175" cy="1169" r="10" fill="white"/>
<circle cx="172.5" cy="1151.5" r="7.5" fill="white"/>
<circle cx="137.5" cy="1166.5" r="7.5" fill="white"/>
<circle cx="152.5" cy="1131.5" r="7.5" fill="white"/>
<circle cx="117.5" cy="1146.5" r="7.5" fill="white"/>
<circle cx="132.5" cy="1111.5" r="7.5" fill="white"/>
<circle cx="97.5" cy="1126.5" r="7.5" fill="white"/>
<circle cx="102.5" cy="1141.5" r="7.5" fill="white"/>
<circle cx="147.5" cy="1116.5" r="7.5" fill="white"/>
<circle cx="122.5" cy="1161.5" r="7.5" fill="white"/>
<circle cx="167.5" cy="1136.5" r="7.5" fill="white"/>
<circle cx="162" cy="1122" r="5" fill="white"/>
<circle cx="107" cy="1157" r="5" fill="white"/>
<circle cx="488" cy="692" r="10" fill="white"/>
<circle cx="508" cy="692" r="10" fill="white"/>
<circle cx="508" cy="712" r="10" fill="white"/>
<circle cx="528" cy="712" r="10" fill="white"/>
<circle cx="528" cy="732" r="10" fill="white"/>
<circle cx="548" cy="732" r="10" fill="white"/>
<circle cx="548" cy="752" r="10" fill="white"/>
<circle cx="568" cy="752" r="10" fill="white"/>
<circle cx="565.5" cy="734.5" r="7.5" fill="white"/>
<circle cx="530.5" cy="749.5" r="7.5" fill="white"/>
<circle cx="545.5" cy="714.5" r="7.5" fill="white"/>
<circle cx="510.5" cy="729.5" r="7.5" fill="white"/>
<circle cx="525.5" cy="694.5" r="7.5" fill="white"/>
<circle cx="490.5" cy="709.5" r="7.5" fill="white"/>
<circle cx="495.5" cy="724.5" r="7.5" fill="white"/>
<circle cx="540.5" cy="699.5" r="7.5" fill="white"/>
<circle cx="515.5" cy="744.5" r="7.5" fill="white"/>
<circle cx="560.5" cy="719.5" r="7.5" fill="white"/>
<circle cx="555" cy="705" r="5" fill="white"/>
<circle cx="500" cy="740" r="5" fill="white"/>
<circle cx="481" cy="758" r="10" fill="white"/>
<circle cx="501" cy="758" r="10" fill="white"/>
<circle cx="501" cy="778" r="10" fill="white"/>
<circle cx="521" cy="778" r="10" fill="white"/>
<circle cx="521" cy="798" r="10" fill="white"/>
<circle cx="541" cy="798" r="10" fill="white"/>
<circle cx="541" cy="818" r="10" fill="white"/>
<circle cx="561" cy="818" r="10" fill="white"/>
<circle cx="558.5" cy="800.5" r="7.5" fill="white"/>
<circle cx="523.5" cy="815.5" r="7.5" fill="white"/>
<circle cx="538.5" cy="780.5" r="7.5" fill="white"/>
<circle cx="503.5" cy="795.5" r="7.5" fill="white"/>
<circle cx="518.5" cy="760.5" r="7.5" fill="white"/>
<circle cx="483.5" cy="775.5" r="7.5" fill="white"/>
<circle cx="488.5" cy="790.5" r="7.5" fill="white"/>
<circle cx="533.5" cy="765.5" r="7.5" fill="white"/>
<circle cx="508.5" cy="810.5" r="7.5" fill="white"/>
<circle cx="553.5" cy="785.5" r="7.5" fill="white"/>
<circle cx="548" cy="771" r="5" fill="white"/>
<circle cx="493" cy="806" r="5" fill="white"/>
<circle cx="568" cy="772" r="10" fill="white"/>
<circle cx="588" cy="772" r="10" fill="white"/>
<circle cx="588" cy="792" r="10" fill="white"/>
<circle cx="608" cy="792" r="10" fill="white"/>
<circle cx="608" cy="812" r="10" fill="white"/>
<circle cx="628" cy="812" r="10" fill="white"/>
<circle cx="628" cy="832" r="10" fill="white"/>
<circle cx="648" cy="832" r="10" fill="white"/>
<circle cx="645.5" cy="814.5" r="7.5" fill="white"/>
<circle cx="610.5" cy="829.5" r="7.5" fill="white"/>
<circle cx="625.5" cy="794.5" r="7.5" fill="white"/>
<circle cx="590.5" cy="809.5" r="7.5" fill="white"/>
<circle cx="605.5" cy="774.5" r="7.5" fill="white"/>
<circle cx="570.5" cy="789.5" r="7.5" fill="white"/>
<circle cx="575.5" cy="804.5" r="7.5" fill="white"/>
<circle cx="620.5" cy="779.5" r="7.5" fill="white"/>
<circle cx="595.5" cy="824.5" r="7.5" fill="white"/>
<circle cx="640.5" cy="799.5" r="7.5" fill="white"/>
<circle cx="635" cy="785" r="5" fill="white"/>
<circle cx="580" cy="820" r="5" fill="white"/>
<circle cx="576" cy="705" r="10" fill="white"/>
<circle cx="596" cy="705" r="10" fill="white"/>
<circle cx="596" cy="725" r="10" fill="white"/>
<circle cx="616" cy="725" r="10" fill="white"/>
<circle cx="616" cy="745" r="10" fill="white"/>
<circle cx="636" cy="745" r="10" fill="white"/>
<circle cx="636" cy="765" r="10" fill="white"/>
<circle cx="656" cy="765" r="10" fill="white"/>
<circle cx="653.5" cy="747.5" r="7.5" fill="white"/>
<circle cx="618.5" cy="762.5" r="7.5" fill="white"/>
<circle cx="633.5" cy="727.5" r="7.5" fill="white"/>
<circle cx="598.5" cy="742.5" r="7.5" fill="white"/>
<circle cx="613.5" cy="707.5" r="7.5" fill="white"/>
<circle cx="578.5" cy="722.5" r="7.5" fill="white"/>
<circle cx="583.5" cy="737.5" r="7.5" fill="white"/>
<circle cx="628.5" cy="712.5" r="7.5" fill="white"/>
<circle cx="603.5" cy="757.5" r="7.5" fill="white"/>
<circle cx="648.5" cy="732.5" r="7.5" fill="white"/>
<circle cx="643" cy="718" r="5" fill="white"/>
<circle cx="588" cy="753" r="5" fill="white"/>
<circle cx="586" cy="640" r="10" fill="white"/>
<circle cx="606" cy="640" r="10" fill="white"/>
<circle cx="606" cy="660" r="10" fill="white"/>
<circle cx="626" cy="660" r="10" fill="white"/>
<circle cx="626" cy="680" r="10" fill="white"/>
<circle cx="646" cy="680" r="10" fill="white"/>
<circle cx="646" cy="700" r="10" fill="white"/>
<circle cx="666" cy="700" r="10" fill="white"/>
<circle cx="663.5" cy="682.5" r="7.5" fill="white"/>
<circle cx="628.5" cy="697.5" r="7.5" fill="white"/>
<circle cx="643.5" cy="662.5" r="7.5" fill="white"/>
<circle cx="608.5" cy="677.5" r="7.5" fill="white"/>
<circle cx="623.5" cy="642.5" r="7.5" fill="white"/>
<circle cx="588.5" cy="657.5" r="7.5" fill="white"/>
<circle cx="593.5" cy="672.5" r="7.5" fill="white"/>
<circle cx="638.5" cy="647.5" r="7.5" fill="white"/>
<circle cx="613.5" cy="692.5" r="7.5" fill="white"/>
<circle cx="658.5" cy="667.5" r="7.5" fill="white"/>
<circle cx="653" cy="653" r="5" fill="white"/>
<circle cx="598" cy="688" r="5" fill="white"/>
<circle cx="496" cy="625" r="10" fill="white"/>
<circle cx="516" cy="625" r="10" fill="white"/>
<circle cx="516" cy="645" r="10" fill="white"/>
<circle cx="536" cy="645" r="10" fill="white"/>
<circle cx="536" cy="665" r="10" fill="white"/>
<circle cx="556" cy="665" r="10" fill="white"/>
<circle cx="556" cy="685" r="10" fill="white"/>
<circle cx="576" cy="685" r="10" fill="white"/>
<circle cx="573.5" cy="667.5" r="7.5" fill="white"/>
<circle cx="538.5" cy="682.5" r="7.5" fill="white"/>
<circle cx="553.5" cy="647.5" r="7.5" fill="white"/>
<circle cx="518.5" cy="662.5" r="7.5" fill="white"/>
<circle cx="533.5" cy="627.5" r="7.5" fill="white"/>
<circle cx="498.5" cy="642.5" r="7.5" fill="white"/>
<circle cx="503.5" cy="657.5" r="7.5" fill="white"/>
<circle cx="548.5" cy="632.5" r="7.5" fill="white"/>
<circle cx="523.5" cy="677.5" r="7.5" fill="white"/>
<circle cx="568.5" cy="652.5" r="7.5" fill="white"/>
<circle cx="563" cy="638" r="5" fill="white"/>
<circle cx="508" cy="673" r="5" fill="white"/>
<circle cx="410" cy="612" r="10" fill="white"/>
<circle cx="430" cy="612" r="10" fill="white"/>
<circle cx="430" cy="632" r="10" fill="white"/>
<circle cx="450" cy="632" r="10" fill="white"/>
<circle cx="450" cy="652" r="10" fill="white"/>
<circle cx="470" cy="652" r="10" fill="white"/>
<circle cx="470" cy="672" r="10" fill="white"/>
<circle cx="490" cy="672" r="10" fill="white"/>
<circle cx="487.5" cy="654.5" r="7.5" fill="white"/>
<circle cx="452.5" cy="669.5" r="7.5" fill="white"/>
<circle cx="467.5" cy="634.5" r="7.5" fill="white"/>
<circle cx="432.5" cy="649.5" r="7.5" fill="white"/>
<circle cx="447.5" cy="614.5" r="7.5" fill="white"/>
<circle cx="412.5" cy="629.5" r="7.5" fill="white"/>
<circle cx="417.5" cy="644.5" r="7.5" fill="white"/>
<circle cx="462.5" cy="619.5" r="7.5" fill="white"/>
<circle cx="437.5" cy="664.5" r="7.5" fill="white"/>
<circle cx="482.5" cy="639.5" r="7.5" fill="white"/>
<circle cx="477" cy="625" r="5" fill="white"/>
<circle cx="422" cy="660" r="5" fill="white"/>
<circle cx="401" cy="678" r="10" fill="white"/>
<circle cx="421" cy="678" r="10" fill="white"/>
<circle cx="421" cy="698" r="10" fill="white"/>
<circle cx="441" cy="698" r="10" fill="white"/>
<circle cx="441" cy="718" r="10" fill="white"/>
<circle cx="461" cy="718" r="10" fill="white"/>
<circle cx="461" cy="738" r="10" fill="white"/>
<circle cx="481" cy="738" r="10" fill="white"/>
<circle cx="478.5" cy="720.5" r="7.5" fill="white"/>
<circle cx="443.5" cy="735.5" r="7.5" fill="white"/>
<circle cx="458.5" cy="700.5" r="7.5" fill="white"/>
<circle cx="423.5" cy="715.5" r="7.5" fill="white"/>
<circle cx="438.5" cy="680.5" r="7.5" fill="white"/>
<circle cx="403.5" cy="695.5" r="7.5" fill="white"/>
<circle cx="408.5" cy="710.5" r="7.5" fill="white"/>
<circle cx="453.5" cy="685.5" r="7.5" fill="white"/>
<circle cx="428.5" cy="730.5" r="7.5" fill="white"/>
<circle cx="473.5" cy="705.5" r="7.5" fill="white"/>
<circle cx="468" cy="691" r="5" fill="white"/>
<circle cx="413" cy="726" r="5" fill="white"/>
<circle cx="396" cy="745" r="10" fill="white"/>
<circle cx="416" cy="745" r="10" fill="white"/>
<circle cx="416" cy="765" r="10" fill="white"/>
<circle cx="436" cy="765" r="10" fill="white"/>
<circle cx="436" cy="785" r="10" fill="white"/>
<circle cx="456" cy="785" r="10" fill="white"/>
<circle cx="456" cy="805" r="10" fill="white"/>
<circle cx="476" cy="805" r="10" fill="white"/>
<circle cx="473.5" cy="787.5" r="7.5" fill="white"/>
<circle cx="438.5" cy="802.5" r="7.5" fill="white"/>
<circle cx="453.5" cy="767.5" r="7.5" fill="white"/>
<circle cx="418.5" cy="782.5" r="7.5" fill="white"/>
<circle cx="433.5" cy="747.5" r="7.5" fill="white"/>
<circle cx="398.5" cy="762.5" r="7.5" fill="white"/>
<circle cx="403.5" cy="777.5" r="7.5" fill="white"/>
<circle cx="448.5" cy="752.5" r="7.5" fill="white"/>
<circle cx="423.5" cy="797.5" r="7.5" fill="white"/>
<circle cx="468.5" cy="772.5" r="7.5" fill="white"/>
<circle cx="463" cy="758" r="5" fill="white"/>
<circle cx="408" cy="793" r="5" fill="white"/>
<circle cx="396" cy="815" r="10" fill="white"/>
<circle cx="416" cy="815" r="10" fill="white"/>
<circle cx="416" cy="835" r="10" fill="white"/>
<circle cx="436" cy="835" r="10" fill="white"/>
<circle cx="436" cy="855" r="10" fill="white"/>
<circle cx="456" cy="855" r="10" fill="white"/>
<circle cx="456" cy="875" r="10" fill="white"/>
<circle cx="476" cy="875" r="10" fill="white"/>
<circle cx="473.5" cy="857.5" r="7.5" fill="white"/>
<circle cx="438.5" cy="872.5" r="7.5" fill="white"/>
<circle cx="453.5" cy="837.5" r="7.5" fill="white"/>
<circle cx="418.5" cy="852.5" r="7.5" fill="white"/>
<circle cx="433.5" cy="817.5" r="7.5" fill="white"/>
<circle cx="398.5" cy="832.5" r="7.5" fill="white"/>
<circle cx="403.5" cy="847.5" r="7.5" fill="white"/>
<circle cx="448.5" cy="822.5" r="7.5" fill="white"/>
<circle cx="423.5" cy="867.5" r="7.5" fill="white"/>
<circle cx="468.5" cy="842.5" r="7.5" fill="white"/>
<circle cx="463" cy="828" r="5" fill="white"/>
<circle cx="408" cy="863" r="5" fill="white"/>
<circle cx="481" cy="826" r="10" fill="white"/>
<circle cx="501" cy="826" r="10" fill="white"/>
<circle cx="501" cy="846" r="10" fill="white"/>
<circle cx="521" cy="846" r="10" fill="white"/>
<circle cx="521" cy="866" r="10" fill="white"/>
<circle cx="541" cy="866" r="10" fill="white"/>
<circle cx="541" cy="886" r="10" fill="white"/>
<circle cx="561" cy="886" r="10" fill="white"/>
<circle cx="558.5" cy="868.5" r="7.5" fill="white"/>
<circle cx="523.5" cy="883.5" r="7.5" fill="white"/>
<circle cx="538.5" cy="848.5" r="7.5" fill="white"/>
<circle cx="503.5" cy="863.5" r="7.5" fill="white"/>
<circle cx="518.5" cy="828.5" r="7.5" fill="white"/>
<circle cx="483.5" cy="843.5" r="7.5" fill="white"/>
<circle cx="488.5" cy="858.5" r="7.5" fill="white"/>
<circle cx="533.5" cy="833.5" r="7.5" fill="white"/>
<circle cx="508.5" cy="878.5" r="7.5" fill="white"/>
<circle cx="553.5" cy="853.5" r="7.5" fill="white"/>
<circle cx="548" cy="839" r="5" fill="white"/>
<circle cx="493" cy="874" r="5" fill="white"/>
<circle cx="647" cy="922" r="10" fill="white"/>
<circle cx="667" cy="922" r="10" fill="white"/>
<circle cx="667" cy="942" r="10" fill="white"/>
<circle cx="687" cy="942" r="10" fill="white"/>
<circle cx="687" cy="962" r="10" fill="white"/>
<circle cx="707" cy="962" r="10" fill="white"/>
<circle cx="707" cy="982" r="10" fill="white"/>
<circle cx="727" cy="982" r="10" fill="white"/>
<circle cx="724.5" cy="964.5" r="7.5" fill="white"/>
<circle cx="689.5" cy="979.5" r="7.5" fill="white"/>
<circle cx="704.5" cy="944.5" r="7.5" fill="white"/>
<circle cx="669.5" cy="959.5" r="7.5" fill="white"/>
<circle cx="684.5" cy="924.5" r="7.5" fill="white"/>
<circle cx="649.5" cy="939.5" r="7.5" fill="white"/>
<circle cx="654.5" cy="954.5" r="7.5" fill="white"/>
<circle cx="699.5" cy="929.5" r="7.5" fill="white"/>
<circle cx="674.5" cy="974.5" r="7.5" fill="white"/>
<circle cx="719.5" cy="949.5" r="7.5" fill="white"/>
<circle cx="714" cy="935" r="5" fill="white"/>
<circle cx="659" cy="970" r="5" fill="white"/>
<circle cx="640" cy="988" r="10" fill="white"/>
<circle cx="660" cy="988" r="10" fill="white"/>
<circle cx="660" cy="1008" r="10" fill="white"/>
<circle cx="680" cy="1008" r="10" fill="white"/>
<circle cx="680" cy="1028" r="10" fill="white"/>
<circle cx="700" cy="1028" r="10" fill="white"/>
<circle cx="700" cy="1048" r="10" fill="white"/>
<circle cx="720" cy="1048" r="10" fill="white"/>
<circle cx="717.5" cy="1030.5" r="7.5" fill="white"/>
<circle cx="682.5" cy="1045.5" r="7.5" fill="white"/>
<circle cx="697.5" cy="1010.5" r="7.5" fill="white"/>
<circle cx="662.5" cy="1025.5" r="7.5" fill="white"/>
<circle cx="677.5" cy="990.5" r="7.5" fill="white"/>
<circle cx="642.5" cy="1005.5" r="7.5" fill="white"/>
<circle cx="647.5" cy="1020.5" r="7.5" fill="white"/>
<circle cx="692.5" cy="995.5" r="7.5" fill="white"/>
<circle cx="667.5" cy="1040.5" r="7.5" fill="white"/>
<circle cx="712.5" cy="1015.5" r="7.5" fill="white"/>
<circle cx="707" cy="1001" r="5" fill="white"/>
<circle cx="652" cy="1036" r="5" fill="white"/>
<circle cx="727" cy="1002" r="10" fill="white"/>
<circle cx="747" cy="1002" r="10" fill="white"/>
<circle cx="747" cy="1022" r="10" fill="white"/>
<circle cx="767" cy="1022" r="10" fill="white"/>
<circle cx="767" cy="1042" r="10" fill="white"/>
<circle cx="787" cy="1042" r="10" fill="white"/>
<circle cx="787" cy="1062" r="10" fill="white"/>
<circle cx="807" cy="1062" r="10" fill="white"/>
<circle cx="804.5" cy="1044.5" r="7.5" fill="white"/>
<circle cx="769.5" cy="1059.5" r="7.5" fill="white"/>
<circle cx="784.5" cy="1024.5" r="7.5" fill="white"/>
<circle cx="749.5" cy="1039.5" r="7.5" fill="white"/>
<circle cx="764.5" cy="1004.5" r="7.5" fill="white"/>
<circle cx="729.5" cy="1019.5" r="7.5" fill="white"/>
<circle cx="734.5" cy="1034.5" r="7.5" fill="white"/>
<circle cx="779.5" cy="1009.5" r="7.5" fill="white"/>
<circle cx="754.5" cy="1054.5" r="7.5" fill="white"/>
<circle cx="799.5" cy="1029.5" r="7.5" fill="white"/>
<circle cx="794" cy="1015" r="5" fill="white"/>
<circle cx="739" cy="1050" r="5" fill="white"/>
<circle cx="735" cy="935" r="10" fill="white"/>
<circle cx="755" cy="935" r="10" fill="white"/>
<circle cx="755" cy="955" r="10" fill="white"/>
<circle cx="775" cy="955" r="10" fill="white"/>
<circle cx="775" cy="975" r="10" fill="white"/>
<circle cx="795" cy="975" r="10" fill="white"/>
<circle cx="795" cy="995" r="10" fill="white"/>
<circle cx="815" cy="995" r="10" fill="white"/>
<circle cx="812.5" cy="977.5" r="7.5" fill="white"/>
<circle cx="777.5" cy="992.5" r="7.5" fill="white"/>
<circle cx="792.5" cy="957.5" r="7.5" fill="white"/>
<circle cx="757.5" cy="972.5" r="7.5" fill="white"/>
<circle cx="772.5" cy="937.5" r="7.5" fill="white"/>
<circle cx="737.5" cy="952.5" r="7.5" fill="white"/>
<circle cx="742.5" cy="967.5" r="7.5" fill="white"/>
<circle cx="787.5" cy="942.5" r="7.5" fill="white"/>
<circle cx="762.5" cy="987.5" r="7.5" fill="white"/>
<circle cx="807.5" cy="962.5" r="7.5" fill="white"/>
<circle cx="802" cy="948" r="5" fill="white"/>
<circle cx="747" cy="983" r="5" fill="white"/>
<circle cx="745" cy="870" r="10" fill="white"/>
<circle cx="765" cy="870" r="10" fill="white"/>
<circle cx="765" cy="890" r="10" fill="white"/>
<circle cx="785" cy="890" r="10" fill="white"/>
<circle cx="785" cy="910" r="10" fill="white"/>
<circle cx="805" cy="910" r="10" fill="white"/>
<circle cx="805" cy="930" r="10" fill="white"/>
<circle cx="825" cy="930" r="10" fill="white"/>
<circle cx="822.5" cy="912.5" r="7.5" fill="white"/>
<circle cx="787.5" cy="927.5" r="7.5" fill="white"/>
<circle cx="802.5" cy="892.5" r="7.5" fill="white"/>
<circle cx="767.5" cy="907.5" r="7.5" fill="white"/>
<circle cx="782.5" cy="872.5" r="7.5" fill="white"/>
<circle cx="747.5" cy="887.5" r="7.5" fill="white"/>
<circle cx="752.5" cy="902.5" r="7.5" fill="white"/>
<circle cx="797.5" cy="877.5" r="7.5" fill="white"/>
<circle cx="772.5" cy="922.5" r="7.5" fill="white"/>
<circle cx="817.5" cy="897.5" r="7.5" fill="white"/>
<circle cx="812" cy="883" r="5" fill="white"/>
<circle cx="757" cy="918" r="5" fill="white"/>
<circle cx="655" cy="855" r="10" fill="white"/>
<circle cx="675" cy="855" r="10" fill="white"/>
<circle cx="675" cy="875" r="10" fill="white"/>
<circle cx="695" cy="875" r="10" fill="white"/>
<circle cx="695" cy="895" r="10" fill="white"/>
<circle cx="715" cy="895" r="10" fill="white"/>
<circle cx="715" cy="915" r="10" fill="white"/>
<circle cx="735" cy="915" r="10" fill="white"/>
<circle cx="732.5" cy="897.5" r="7.5" fill="white"/>
<circle cx="697.5" cy="912.5" r="7.5" fill="white"/>
<circle cx="712.5" cy="877.5" r="7.5" fill="white"/>
<circle cx="677.5" cy="892.5" r="7.5" fill="white"/>
<circle cx="692.5" cy="857.5" r="7.5" fill="white"/>
<circle cx="657.5" cy="872.5" r="7.5" fill="white"/>
<circle cx="662.5" cy="887.5" r="7.5" fill="white"/>
<circle cx="707.5" cy="862.5" r="7.5" fill="white"/>
<circle cx="682.5" cy="907.5" r="7.5" fill="white"/>
<circle cx="727.5" cy="882.5" r="7.5" fill="white"/>
<circle cx="722" cy="868" r="5" fill="white"/>
<circle cx="667" cy="903" r="5" fill="white"/>
<circle cx="569" cy="842" r="10" fill="white"/>
<circle cx="589" cy="842" r="10" fill="white"/>
<circle cx="589" cy="862" r="10" fill="white"/>
<circle cx="609" cy="862" r="10" fill="white"/>
<circle cx="609" cy="882" r="10" fill="white"/>
<circle cx="629" cy="882" r="10" fill="white"/>
<circle cx="629" cy="902" r="10" fill="white"/>
<circle cx="649" cy="902" r="10" fill="white"/>
<circle cx="646.5" cy="884.5" r="7.5" fill="white"/>
<circle cx="611.5" cy="899.5" r="7.5" fill="white"/>
<circle cx="626.5" cy="864.5" r="7.5" fill="white"/>
<circle cx="591.5" cy="879.5" r="7.5" fill="white"/>
<circle cx="606.5" cy="844.5" r="7.5" fill="white"/>
<circle cx="571.5" cy="859.5" r="7.5" fill="white"/>
<circle cx="576.5" cy="874.5" r="7.5" fill="white"/>
<circle cx="621.5" cy="849.5" r="7.5" fill="white"/>
<circle cx="596.5" cy="894.5" r="7.5" fill="white"/>
<circle cx="641.5" cy="869.5" r="7.5" fill="white"/>
<circle cx="636" cy="855" r="5" fill="white"/>
<circle cx="581" cy="890" r="5" fill="white"/>
<circle cx="560" cy="908" r="10" fill="white"/>
<circle cx="580" cy="908" r="10" fill="white"/>
<circle cx="580" cy="928" r="10" fill="white"/>
<circle cx="600" cy="928" r="10" fill="white"/>
<circle cx="600" cy="948" r="10" fill="white"/>
<circle cx="620" cy="948" r="10" fill="white"/>
<circle cx="620" cy="968" r="10" fill="white"/>
<circle cx="640" cy="968" r="10" fill="white"/>
<circle cx="637.5" cy="950.5" r="7.5" fill="white"/>
<circle cx="602.5" cy="965.5" r="7.5" fill="white"/>
<circle cx="617.5" cy="930.5" r="7.5" fill="white"/>
<circle cx="582.5" cy="945.5" r="7.5" fill="white"/>
<circle cx="597.5" cy="910.5" r="7.5" fill="white"/>
<circle cx="562.5" cy="925.5" r="7.5" fill="white"/>
<circle cx="567.5" cy="940.5" r="7.5" fill="white"/>
<circle cx="612.5" cy="915.5" r="7.5" fill="white"/>
<circle cx="587.5" cy="960.5" r="7.5" fill="white"/>
<circle cx="632.5" cy="935.5" r="7.5" fill="white"/>
<circle cx="627" cy="921" r="5" fill="white"/>
<circle cx="572" cy="956" r="5" fill="white"/>
<circle cx="555" cy="975" r="10" fill="white"/>
<circle cx="575" cy="975" r="10" fill="white"/>
<circle cx="575" cy="995" r="10" fill="white"/>
<circle cx="595" cy="995" r="10" fill="white"/>
<circle cx="595" cy="1015" r="10" fill="white"/>
<circle cx="615" cy="1015" r="10" fill="white"/>
<circle cx="615" cy="1035" r="10" fill="white"/>
<circle cx="635" cy="1035" r="10" fill="white"/>
<circle cx="632.5" cy="1017.5" r="7.5" fill="white"/>
<circle cx="597.5" cy="1032.5" r="7.5" fill="white"/>
<circle cx="612.5" cy="997.5" r="7.5" fill="white"/>
<circle cx="577.5" cy="1012.5" r="7.5" fill="white"/>
<circle cx="592.5" cy="977.5" r="7.5" fill="white"/>
<circle cx="557.5" cy="992.5" r="7.5" fill="white"/>
<circle cx="562.5" cy="1007.5" r="7.5" fill="white"/>
<circle cx="607.5" cy="982.5" r="7.5" fill="white"/>
<circle cx="582.5" cy="1027.5" r="7.5" fill="white"/>
<circle cx="627.5" cy="1002.5" r="7.5" fill="white"/>
<circle cx="622" cy="988" r="5" fill="white"/>
<circle cx="567" cy="1023" r="5" fill="white"/>
<circle cx="555" cy="1045" r="10" fill="white"/>
<circle cx="575" cy="1045" r="10" fill="white"/>
<circle cx="575" cy="1065" r="10" fill="white"/>
<circle cx="595" cy="1065" r="10" fill="white"/>
<circle cx="595" cy="1085" r="10" fill="white"/>
<circle cx="615" cy="1085" r="10" fill="white"/>
<circle cx="615" cy="1105" r="10" fill="white"/>
<circle cx="635" cy="1105" r="10" fill="white"/>
<circle cx="632.5" cy="1087.5" r="7.5" fill="white"/>
<circle cx="597.5" cy="1102.5" r="7.5" fill="white"/>
<circle cx="612.5" cy="1067.5" r="7.5" fill="white"/>
<circle cx="577.5" cy="1082.5" r="7.5" fill="white"/>
<circle cx="592.5" cy="1047.5" r="7.5" fill="white"/>
<circle cx="557.5" cy="1062.5" r="7.5" fill="white"/>
<circle cx="562.5" cy="1077.5" r="7.5" fill="white"/>
<circle cx="607.5" cy="1052.5" r="7.5" fill="white"/>
<circle cx="582.5" cy="1097.5" r="7.5" fill="white"/>
<circle cx="627.5" cy="1072.5" r="7.5" fill="white"/>
<circle cx="622" cy="1058" r="5" fill="white"/>
<circle cx="567" cy="1093" r="5" fill="white"/>
<circle cx="640" cy="1056" r="10" fill="white"/>
<circle cx="660" cy="1056" r="10" fill="white"/>
<circle cx="660" cy="1076" r="10" fill="white"/>
<circle cx="680" cy="1076" r="10" fill="white"/>
<circle cx="680" cy="1096" r="10" fill="white"/>
<circle cx="700" cy="1096" r="10" fill="white"/>
<circle cx="700" cy="1116" r="10" fill="white"/>
<circle cx="720" cy="1116" r="10" fill="white"/>
<circle cx="717.5" cy="1098.5" r="7.5" fill="white"/>
<circle cx="682.5" cy="1113.5" r="7.5" fill="white"/>
<circle cx="697.5" cy="1078.5" r="7.5" fill="white"/>
<circle cx="662.5" cy="1093.5" r="7.5" fill="white"/>
<circle cx="677.5" cy="1058.5" r="7.5" fill="white"/>
<circle cx="642.5" cy="1073.5" r="7.5" fill="white"/>
<circle cx="647.5" cy="1088.5" r="7.5" fill="white"/>
<circle cx="692.5" cy="1063.5" r="7.5" fill="white"/>
<circle cx="667.5" cy="1108.5" r="7.5" fill="white"/>
<circle cx="712.5" cy="1083.5" r="7.5" fill="white"/>
<circle cx="707" cy="1069" r="5" fill="white"/>
<circle cx="652" cy="1104" r="5" fill="white"/>
<circle cx="322" cy="459" r="10" fill="white"/>
<circle cx="342" cy="459" r="10" fill="white"/>
<circle cx="342" cy="479" r="10" fill="white"/>
<circle cx="362" cy="479" r="10" fill="white"/>
<circle cx="362" cy="499" r="10" fill="white"/>
<circle cx="382" cy="499" r="10" fill="white"/>
<circle cx="382" cy="519" r="10" fill="white"/>
<circle cx="402" cy="519" r="10" fill="white"/>
<circle cx="399.5" cy="501.5" r="7.5" fill="white"/>
<circle cx="364.5" cy="516.5" r="7.5" fill="white"/>
<circle cx="379.5" cy="481.5" r="7.5" fill="white"/>
<circle cx="344.5" cy="496.5" r="7.5" fill="white"/>
<circle cx="359.5" cy="461.5" r="7.5" fill="white"/>
<circle cx="324.5" cy="476.5" r="7.5" fill="white"/>
<circle cx="329.5" cy="491.5" r="7.5" fill="white"/>
<circle cx="374.5" cy="466.5" r="7.5" fill="white"/>
<circle cx="349.5" cy="511.5" r="7.5" fill="white"/>
<circle cx="394.5" cy="486.5" r="7.5" fill="white"/>
<circle cx="389" cy="472" r="5" fill="white"/>
<circle cx="334" cy="507" r="5" fill="white"/>
<circle cx="315" cy="525" r="10" fill="white"/>
<circle cx="335" cy="525" r="10" fill="white"/>
<circle cx="335" cy="545" r="10" fill="white"/>
<circle cx="355" cy="545" r="10" fill="white"/>
<circle cx="355" cy="565" r="10" fill="white"/>
<circle cx="375" cy="565" r="10" fill="white"/>
<circle cx="375" cy="585" r="10" fill="white"/>
<circle cx="395" cy="585" r="10" fill="white"/>
<circle cx="392.5" cy="567.5" r="7.5" fill="white"/>
<circle cx="357.5" cy="582.5" r="7.5" fill="white"/>
<circle cx="372.5" cy="547.5" r="7.5" fill="white"/>
<circle cx="337.5" cy="562.5" r="7.5" fill="white"/>
<circle cx="352.5" cy="527.5" r="7.5" fill="white"/>
<circle cx="317.5" cy="542.5" r="7.5" fill="white"/>
<circle cx="322.5" cy="557.5" r="7.5" fill="white"/>
<circle cx="367.5" cy="532.5" r="7.5" fill="white"/>
<circle cx="342.5" cy="577.5" r="7.5" fill="white"/>
<circle cx="387.5" cy="552.5" r="7.5" fill="white"/>
<circle cx="382" cy="538" r="5" fill="white"/>
<circle cx="327" cy="573" r="5" fill="white"/>
<circle cx="402" cy="539" r="10" fill="white"/>
<circle cx="422" cy="539" r="10" fill="white"/>
<circle cx="422" cy="559" r="10" fill="white"/>
<circle cx="442" cy="559" r="10" fill="white"/>
<circle cx="442" cy="579" r="10" fill="white"/>
<circle cx="462" cy="579" r="10" fill="white"/>
<circle cx="462" cy="599" r="10" fill="white"/>
<circle cx="482" cy="599" r="10" fill="white"/>
<circle cx="479.5" cy="581.5" r="7.5" fill="white"/>
<circle cx="444.5" cy="596.5" r="7.5" fill="white"/>
<circle cx="459.5" cy="561.5" r="7.5" fill="white"/>
<circle cx="424.5" cy="576.5" r="7.5" fill="white"/>
<circle cx="439.5" cy="541.5" r="7.5" fill="white"/>
<circle cx="404.5" cy="556.5" r="7.5" fill="white"/>
<circle cx="409.5" cy="571.5" r="7.5" fill="white"/>
<circle cx="454.5" cy="546.5" r="7.5" fill="white"/>
<circle cx="429.5" cy="591.5" r="7.5" fill="white"/>
<circle cx="474.5" cy="566.5" r="7.5" fill="white"/>
<circle cx="469" cy="552" r="5" fill="white"/>
<circle cx="414" cy="587" r="5" fill="white"/>
<circle cx="410" cy="472" r="10" fill="white"/>
<circle cx="430" cy="472" r="10" fill="white"/>
<circle cx="430" cy="492" r="10" fill="white"/>
<circle cx="450" cy="492" r="10" fill="white"/>
<circle cx="450" cy="512" r="10" fill="white"/>
<circle cx="470" cy="512" r="10" fill="white"/>
<circle cx="470" cy="532" r="10" fill="white"/>
<circle cx="490" cy="532" r="10" fill="white"/>
<circle cx="487.5" cy="514.5" r="7.5" fill="white"/>
<circle cx="452.5" cy="529.5" r="7.5" fill="white"/>
<circle cx="467.5" cy="494.5" r="7.5" fill="white"/>
<circle cx="432.5" cy="509.5" r="7.5" fill="white"/>
<circle cx="447.5" cy="474.5" r="7.5" fill="white"/>
<circle cx="412.5" cy="489.5" r="7.5" fill="white"/>
<circle cx="417.5" cy="504.5" r="7.5" fill="white"/>
<circle cx="462.5" cy="479.5" r="7.5" fill="white"/>
<circle cx="437.5" cy="524.5" r="7.5" fill="white"/>
<circle cx="482.5" cy="499.5" r="7.5" fill="white"/>
<circle cx="477" cy="485" r="5" fill="white"/>
<circle cx="422" cy="520" r="5" fill="white"/>
<circle cx="420" cy="407" r="10" fill="white"/>
<circle cx="440" cy="407" r="10" fill="white"/>
<circle cx="440" cy="427" r="10" fill="white"/>
<circle cx="460" cy="427" r="10" fill="white"/>
<circle cx="460" cy="447" r="10" fill="white"/>
<circle cx="480" cy="447" r="10" fill="white"/>
<circle cx="480" cy="467" r="10" fill="white"/>
<circle cx="500" cy="467" r="10" fill="white"/>
<circle cx="497.5" cy="449.5" r="7.5" fill="white"/>
<circle cx="462.5" cy="464.5" r="7.5" fill="white"/>
<circle cx="477.5" cy="429.5" r="7.5" fill="white"/>
<circle cx="442.5" cy="444.5" r="7.5" fill="white"/>
<circle cx="457.5" cy="409.5" r="7.5" fill="white"/>
<circle cx="422.5" cy="424.5" r="7.5" fill="white"/>
<circle cx="427.5" cy="439.5" r="7.5" fill="white"/>
<circle cx="472.5" cy="414.5" r="7.5" fill="white"/>
<circle cx="447.5" cy="459.5" r="7.5" fill="white"/>
<circle cx="492.5" cy="434.5" r="7.5" fill="white"/>
<circle cx="487" cy="420" r="5" fill="white"/>
<circle cx="432" cy="455" r="5" fill="white"/>
<circle cx="330" cy="392" r="10" fill="white"/>
<circle cx="350" cy="392" r="10" fill="white"/>
<circle cx="350" cy="412" r="10" fill="white"/>
<circle cx="370" cy="412" r="10" fill="white"/>
<circle cx="370" cy="432" r="10" fill="white"/>
<circle cx="390" cy="432" r="10" fill="white"/>
<circle cx="390" cy="452" r="10" fill="white"/>
<circle cx="410" cy="452" r="10" fill="white"/>
<circle cx="407.5" cy="434.5" r="7.5" fill="white"/>
<circle cx="372.5" cy="449.5" r="7.5" fill="white"/>
<circle cx="387.5" cy="414.5" r="7.5" fill="white"/>
<circle cx="352.5" cy="429.5" r="7.5" fill="white"/>
<circle cx="367.5" cy="394.5" r="7.5" fill="white"/>
<circle cx="332.5" cy="409.5" r="7.5" fill="white"/>
<circle cx="337.5" cy="424.5" r="7.5" fill="white"/>
<circle cx="382.5" cy="399.5" r="7.5" fill="white"/>
<circle cx="357.5" cy="444.5" r="7.5" fill="white"/>
<circle cx="402.5" cy="419.5" r="7.5" fill="white"/>
<circle cx="397" cy="405" r="5" fill="white"/>
<circle cx="342" cy="440" r="5" fill="white"/>
<circle cx="244" cy="379" r="10" fill="white"/>
<circle cx="264" cy="379" r="10" fill="white"/>
<circle cx="264" cy="399" r="10" fill="white"/>
<circle cx="284" cy="399" r="10" fill="white"/>
<circle cx="284" cy="419" r="10" fill="white"/>
<circle cx="304" cy="419" r="10" fill="white"/>
<circle cx="304" cy="439" r="10" fill="white"/>
<circle cx="324" cy="439" r="10" fill="white"/>
<circle cx="321.5" cy="421.5" r="7.5" fill="white"/>
<circle cx="286.5" cy="436.5" r="7.5" fill="white"/>
<circle cx="301.5" cy="401.5" r="7.5" fill="white"/>
<circle cx="266.5" cy="416.5" r="7.5" fill="white"/>
<circle cx="281.5" cy="381.5" r="7.5" fill="white"/>
<circle cx="246.5" cy="396.5" r="7.5" fill="white"/>
<circle cx="251.5" cy="411.5" r="7.5" fill="white"/>
<circle cx="296.5" cy="386.5" r="7.5" fill="white"/>
<circle cx="271.5" cy="431.5" r="7.5" fill="white"/>
<circle cx="316.5" cy="406.5" r="7.5" fill="white"/>
<circle cx="311" cy="392" r="5" fill="white"/>
<circle cx="256" cy="427" r="5" fill="white"/>
<circle cx="235" cy="445" r="10" fill="white"/>
<circle cx="255" cy="445" r="10" fill="white"/>
<circle cx="255" cy="465" r="10" fill="white"/>
<circle cx="275" cy="465" r="10" fill="white"/>
<circle cx="275" cy="485" r="10" fill="white"/>
<circle cx="295" cy="485" r="10" fill="white"/>
<circle cx="295" cy="505" r="10" fill="white"/>
<circle cx="315" cy="505" r="10" fill="white"/>
<circle cx="312.5" cy="487.5" r="7.5" fill="white"/>
<circle cx="277.5" cy="502.5" r="7.5" fill="white"/>
<circle cx="292.5" cy="467.5" r="7.5" fill="white"/>
<circle cx="257.5" cy="482.5" r="7.5" fill="white"/>
<circle cx="272.5" cy="447.5" r="7.5" fill="white"/>
<circle cx="237.5" cy="462.5" r="7.5" fill="white"/>
<circle cx="242.5" cy="477.5" r="7.5" fill="white"/>
<circle cx="287.5" cy="452.5" r="7.5" fill="white"/>
<circle cx="262.5" cy="497.5" r="7.5" fill="white"/>
<circle cx="307.5" cy="472.5" r="7.5" fill="white"/>
<circle cx="302" cy="458" r="5" fill="white"/>
<circle cx="247" cy="493" r="5" fill="white"/>
<circle cx="230" cy="512" r="10" fill="white"/>
<circle cx="250" cy="512" r="10" fill="white"/>
<circle cx="250" cy="532" r="10" fill="white"/>
<circle cx="270" cy="532" r="10" fill="white"/>
<circle cx="270" cy="552" r="10" fill="white"/>
<circle cx="290" cy="552" r="10" fill="white"/>
<circle cx="290" cy="572" r="10" fill="white"/>
<circle cx="310" cy="572" r="10" fill="white"/>
<circle cx="307.5" cy="554.5" r="7.5" fill="white"/>
<circle cx="272.5" cy="569.5" r="7.5" fill="white"/>
<circle cx="287.5" cy="534.5" r="7.5" fill="white"/>
<circle cx="252.5" cy="549.5" r="7.5" fill="white"/>
<circle cx="267.5" cy="514.5" r="7.5" fill="white"/>
<circle cx="232.5" cy="529.5" r="7.5" fill="white"/>
<circle cx="237.5" cy="544.5" r="7.5" fill="white"/>
<circle cx="282.5" cy="519.5" r="7.5" fill="white"/>
<circle cx="257.5" cy="564.5" r="7.5" fill="white"/>
<circle cx="302.5" cy="539.5" r="7.5" fill="white"/>
<circle cx="297" cy="525" r="5" fill="white"/>
<circle cx="242" cy="560" r="5" fill="white"/>
<circle cx="230" cy="582" r="10" fill="white"/>
<circle cx="250" cy="582" r="10" fill="white"/>
<circle cx="250" cy="602" r="10" fill="white"/>
<circle cx="270" cy="602" r="10" fill="white"/>
<circle cx="270" cy="622" r="10" fill="white"/>
<circle cx="290" cy="622" r="10" fill="white"/>
<circle cx="290" cy="642" r="10" fill="white"/>
<circle cx="310" cy="642" r="10" fill="white"/>
<circle cx="307.5" cy="624.5" r="7.5" fill="white"/>
<circle cx="272.5" cy="639.5" r="7.5" fill="white"/>
<circle cx="287.5" cy="604.5" r="7.5" fill="white"/>
<circle cx="252.5" cy="619.5" r="7.5" fill="white"/>
<circle cx="267.5" cy="584.5" r="7.5" fill="white"/>
<circle cx="232.5" cy="599.5" r="7.5" fill="white"/>
<circle cx="237.5" cy="614.5" r="7.5" fill="white"/>
<circle cx="282.5" cy="589.5" r="7.5" fill="white"/>
<circle cx="257.5" cy="634.5" r="7.5" fill="white"/>
<circle cx="302.5" cy="609.5" r="7.5" fill="white"/>
<circle cx="297" cy="595" r="5" fill="white"/>
<circle cx="242" cy="630" r="5" fill="white"/>
<circle cx="315" cy="593" r="10" fill="white"/>
<circle cx="335" cy="593" r="10" fill="white"/>
<circle cx="335" cy="613" r="10" fill="white"/>
<circle cx="355" cy="613" r="10" fill="white"/>
<circle cx="355" cy="633" r="10" fill="white"/>
<circle cx="375" cy="633" r="10" fill="white"/>
<circle cx="375" cy="653" r="10" fill="white"/>
<circle cx="395" cy="653" r="10" fill="white"/>
<circle cx="392.5" cy="635.5" r="7.5" fill="white"/>
<circle cx="357.5" cy="650.5" r="7.5" fill="white"/>
<circle cx="372.5" cy="615.5" r="7.5" fill="white"/>
<circle cx="337.5" cy="630.5" r="7.5" fill="white"/>
<circle cx="352.5" cy="595.5" r="7.5" fill="white"/>
<circle cx="317.5" cy="610.5" r="7.5" fill="white"/>
<circle cx="322.5" cy="625.5" r="7.5" fill="white"/>
<circle cx="367.5" cy="600.5" r="7.5" fill="white"/>
<circle cx="342.5" cy="645.5" r="7.5" fill="white"/>
<circle cx="387.5" cy="620.5" r="7.5" fill="white"/>
<circle cx="382" cy="606" r="5" fill="white"/>
<circle cx="327" cy="641" r="5" fill="white"/>
<circle cx="1264" cy="998" r="10" transform="rotate(180 1264 998)" fill="white"/>
<circle cx="1244" cy="998" r="10" transform="rotate(180 1244 998)" fill="white"/>
<circle cx="1244" cy="978" r="10" transform="rotate(180 1244 978)" fill="white"/>
<circle cx="1224" cy="978" r="10" transform="rotate(180 1224 978)" fill="white"/>
<circle cx="1224" cy="958" r="10" transform="rotate(180 1224 958)" fill="white"/>
<circle cx="1204" cy="958" r="10" transform="rotate(180 1204 958)" fill="white"/>
<circle cx="1204" cy="938" r="10" transform="rotate(180 1204 938)" fill="white"/>
<circle cx="1184" cy="938" r="10" transform="rotate(180 1184 938)" fill="white"/>
<circle cx="1186.5" cy="955.5" r="7.5" transform="rotate(180 1186.5 955.5)" fill="white"/>
<circle cx="1221.5" cy="940.5" r="7.5" transform="rotate(180 1221.5 940.5)" fill="white"/>
<circle cx="1206.5" cy="975.5" r="7.5" transform="rotate(180 1206.5 975.5)" fill="white"/>
<circle cx="1241.5" cy="960.5" r="7.5" transform="rotate(180 1241.5 960.5)" fill="white"/>
<circle cx="1226.5" cy="995.5" r="7.5" transform="rotate(180 1226.5 995.5)" fill="white"/>
<circle cx="1261.5" cy="980.5" r="7.5" transform="rotate(180 1261.5 980.5)" fill="white"/>
<circle cx="1256.5" cy="965.5" r="7.5" transform="rotate(180 1256.5 965.5)" fill="white"/>
<circle cx="1211.5" cy="990.5" r="7.5" transform="rotate(180 1211.5 990.5)" fill="white"/>
<circle cx="1236.5" cy="945.5" r="7.5" transform="rotate(180 1236.5 945.5)" fill="white"/>
<circle cx="1191.5" cy="970.5" r="7.5" transform="rotate(180 1191.5 970.5)" fill="white"/>
<circle cx="1197" cy="985" r="5" transform="rotate(180 1197 985)" fill="white"/>
<circle cx="1252" cy="950" r="5" transform="rotate(180 1252 950)" fill="white"/>
<circle cx="1271" cy="932" r="10" transform="rotate(180 1271 932)" fill="white"/>
<circle cx="1251" cy="932" r="10" transform="rotate(180 1251 932)" fill="white"/>
<circle cx="1251" cy="912" r="10" transform="rotate(180 1251 912)" fill="white"/>
<circle cx="1231" cy="912" r="10" transform="rotate(180 1231 912)" fill="white"/>
<circle cx="1231" cy="892" r="10" transform="rotate(180 1231 892)" fill="white"/>
<circle cx="1211" cy="892" r="10" transform="rotate(180 1211 892)" fill="white"/>
<circle cx="1211" cy="872" r="10" transform="rotate(180 1211 872)" fill="white"/>
<circle cx="1191" cy="872" r="10" transform="rotate(180 1191 872)" fill="white"/>
<circle cx="1193.5" cy="889.5" r="7.5" transform="rotate(180 1193.5 889.5)" fill="white"/>
<circle cx="1228.5" cy="874.5" r="7.5" transform="rotate(180 1228.5 874.5)" fill="white"/>
<circle cx="1213.5" cy="909.5" r="7.5" transform="rotate(180 1213.5 909.5)" fill="white"/>
<circle cx="1248.5" cy="894.5" r="7.5" transform="rotate(180 1248.5 894.5)" fill="white"/>
<circle cx="1233.5" cy="929.5" r="7.5" transform="rotate(180 1233.5 929.5)" fill="white"/>
<circle cx="1268.5" cy="914.5" r="7.5" transform="rotate(180 1268.5 914.5)" fill="white"/>
<circle cx="1263.5" cy="899.5" r="7.5" transform="rotate(180 1263.5 899.5)" fill="white"/>
<circle cx="1218.5" cy="924.5" r="7.5" transform="rotate(180 1218.5 924.5)" fill="white"/>
<circle cx="1243.5" cy="879.5" r="7.5" transform="rotate(180 1243.5 879.5)" fill="white"/>
<circle cx="1198.5" cy="904.5" r="7.5" transform="rotate(180 1198.5 904.5)" fill="white"/>
<circle cx="1204" cy="919" r="5" transform="rotate(180 1204 919)" fill="white"/>
<circle cx="1259" cy="884" r="5" transform="rotate(180 1259 884)" fill="white"/>
<circle cx="1184" cy="918" r="10" transform="rotate(180 1184 918)" fill="white"/>
<circle cx="1164" cy="918" r="10" transform="rotate(180 1164 918)" fill="white"/>
<circle cx="1164" cy="898" r="10" transform="rotate(180 1164 898)" fill="white"/>
<circle cx="1144" cy="898" r="10" transform="rotate(180 1144 898)" fill="white"/>
<circle cx="1144" cy="878" r="10" transform="rotate(180 1144 878)" fill="white"/>
<circle cx="1124" cy="878" r="10" transform="rotate(180 1124 878)" fill="white"/>
<circle cx="1124" cy="858" r="10" transform="rotate(180 1124 858)" fill="white"/>
<circle cx="1104" cy="858" r="10" transform="rotate(180 1104 858)" fill="white"/>
<circle cx="1106.5" cy="875.5" r="7.5" transform="rotate(180 1106.5 875.5)" fill="white"/>
<circle cx="1141.5" cy="860.5" r="7.5" transform="rotate(180 1141.5 860.5)" fill="white"/>
<circle cx="1126.5" cy="895.5" r="7.5" transform="rotate(180 1126.5 895.5)" fill="white"/>
<circle cx="1161.5" cy="880.5" r="7.5" transform="rotate(180 1161.5 880.5)" fill="white"/>
<circle cx="1146.5" cy="915.5" r="7.5" transform="rotate(180 1146.5 915.5)" fill="white"/>
<circle cx="1181.5" cy="900.5" r="7.5" transform="rotate(180 1181.5 900.5)" fill="white"/>
<circle cx="1176.5" cy="885.5" r="7.5" transform="rotate(180 1176.5 885.5)" fill="white"/>
<circle cx="1131.5" cy="910.5" r="7.5" transform="rotate(180 1131.5 910.5)" fill="white"/>
<circle cx="1156.5" cy="865.5" r="7.5" transform="rotate(180 1156.5 865.5)" fill="white"/>
<circle cx="1111.5" cy="890.5" r="7.5" transform="rotate(180 1111.5 890.5)" fill="white"/>
<circle cx="1117" cy="905" r="5" transform="rotate(180 1117 905)" fill="white"/>
<circle cx="1172" cy="870" r="5" transform="rotate(180 1172 870)" fill="white"/>
<circle cx="1176" cy="985" r="10" transform="rotate(180 1176 985)" fill="white"/>
<circle cx="1156" cy="985" r="10" transform="rotate(180 1156 985)" fill="white"/>
<circle cx="1156" cy="965" r="10" transform="rotate(180 1156 965)" fill="white"/>
<circle cx="1136" cy="965" r="10" transform="rotate(180 1136 965)" fill="white"/>
<circle cx="1136" cy="945" r="10" transform="rotate(180 1136 945)" fill="white"/>
<circle cx="1116" cy="945" r="10" transform="rotate(180 1116 945)" fill="white"/>
<circle cx="1116" cy="925" r="10" transform="rotate(180 1116 925)" fill="white"/>
<circle cx="1096" cy="925" r="10" transform="rotate(180 1096 925)" fill="white"/>
<circle cx="1098.5" cy="942.5" r="7.5" transform="rotate(180 1098.5 942.5)" fill="white"/>
<circle cx="1133.5" cy="927.5" r="7.5" transform="rotate(180 1133.5 927.5)" fill="white"/>
<circle cx="1118.5" cy="962.5" r="7.5" transform="rotate(180 1118.5 962.5)" fill="white"/>
<circle cx="1153.5" cy="947.5" r="7.5" transform="rotate(180 1153.5 947.5)" fill="white"/>
<circle cx="1138.5" cy="982.5" r="7.5" transform="rotate(180 1138.5 982.5)" fill="white"/>
<circle cx="1173.5" cy="967.5" r="7.5" transform="rotate(180 1173.5 967.5)" fill="white"/>
<circle cx="1168.5" cy="952.5" r="7.5" transform="rotate(180 1168.5 952.5)" fill="white"/>
<circle cx="1123.5" cy="977.5" r="7.5" transform="rotate(180 1123.5 977.5)" fill="white"/>
<circle cx="1148.5" cy="932.5" r="7.5" transform="rotate(180 1148.5 932.5)" fill="white"/>
<circle cx="1103.5" cy="957.5" r="7.5" transform="rotate(180 1103.5 957.5)" fill="white"/>
<circle cx="1109" cy="972" r="5" transform="rotate(180 1109 972)" fill="white"/>
<circle cx="1164" cy="937" r="5" transform="rotate(180 1164 937)" fill="white"/>
<circle cx="1166" cy="1050" r="10" transform="rotate(180 1166 1050)" fill="white"/>
<circle cx="1146" cy="1050" r="10" transform="rotate(180 1146 1050)" fill="white"/>
<circle cx="1146" cy="1030" r="10" transform="rotate(180 1146 1030)" fill="white"/>
<circle cx="1126" cy="1030" r="10" transform="rotate(180 1126 1030)" fill="white"/>
<circle cx="1126" cy="1010" r="10" transform="rotate(180 1126 1010)" fill="white"/>
<circle cx="1106" cy="1010" r="10" transform="rotate(180 1106 1010)" fill="white"/>
<circle cx="1106" cy="990" r="10" transform="rotate(180 1106 990)" fill="white"/>
<circle cx="1086" cy="990" r="10" transform="rotate(180 1086 990)" fill="white"/>
<circle cx="1088.5" cy="1007.5" r="7.5" transform="rotate(180 1088.5 1007.5)" fill="white"/>
<circle cx="1123.5" cy="992.5" r="7.5" transform="rotate(180 1123.5 992.5)" fill="white"/>
<circle cx="1108.5" cy="1027.5" r="7.5" transform="rotate(180 1108.5 1027.5)" fill="white"/>
<circle cx="1143.5" cy="1012.5" r="7.5" transform="rotate(180 1143.5 1012.5)" fill="white"/>
<circle cx="1128.5" cy="1047.5" r="7.5" transform="rotate(180 1128.5 1047.5)" fill="white"/>
<circle cx="1163.5" cy="1032.5" r="7.5" transform="rotate(180 1163.5 1032.5)" fill="white"/>
<circle cx="1158.5" cy="1017.5" r="7.5" transform="rotate(180 1158.5 1017.5)" fill="white"/>
<circle cx="1113.5" cy="1042.5" r="7.5" transform="rotate(180 1113.5 1042.5)" fill="white"/>
<circle cx="1138.5" cy="997.5" r="7.5" transform="rotate(180 1138.5 997.5)" fill="white"/>
<circle cx="1093.5" cy="1022.5" r="7.5" transform="rotate(180 1093.5 1022.5)" fill="white"/>
<circle cx="1099" cy="1037" r="5" transform="rotate(180 1099 1037)" fill="white"/>
<circle cx="1154" cy="1002" r="5" transform="rotate(180 1154 1002)" fill="white"/>
<circle cx="1256" cy="1065" r="10" transform="rotate(180 1256 1065)" fill="white"/>
<circle cx="1236" cy="1065" r="10" transform="rotate(180 1236 1065)" fill="white"/>
<circle cx="1236" cy="1045" r="10" transform="rotate(180 1236 1045)" fill="white"/>
<circle cx="1216" cy="1045" r="10" transform="rotate(180 1216 1045)" fill="white"/>
<circle cx="1216" cy="1025" r="10" transform="rotate(180 1216 1025)" fill="white"/>
<circle cx="1196" cy="1025" r="10" transform="rotate(180 1196 1025)" fill="white"/>
<circle cx="1196" cy="1005" r="10" transform="rotate(180 1196 1005)" fill="white"/>
<circle cx="1176" cy="1005" r="10" transform="rotate(180 1176 1005)" fill="white"/>
<circle cx="1178.5" cy="1022.5" r="7.5" transform="rotate(180 1178.5 1022.5)" fill="white"/>
<circle cx="1213.5" cy="1007.5" r="7.5" transform="rotate(180 1213.5 1007.5)" fill="white"/>
<circle cx="1198.5" cy="1042.5" r="7.5" transform="rotate(180 1198.5 1042.5)" fill="white"/>
<circle cx="1233.5" cy="1027.5" r="7.5" transform="rotate(180 1233.5 1027.5)" fill="white"/>
<circle cx="1218.5" cy="1062.5" r="7.5" transform="rotate(180 1218.5 1062.5)" fill="white"/>
<circle cx="1253.5" cy="1047.5" r="7.5" transform="rotate(180 1253.5 1047.5)" fill="white"/>
<circle cx="1248.5" cy="1032.5" r="7.5" transform="rotate(180 1248.5 1032.5)" fill="white"/>
<circle cx="1203.5" cy="1057.5" r="7.5" transform="rotate(180 1203.5 1057.5)" fill="white"/>
<circle cx="1228.5" cy="1012.5" r="7.5" transform="rotate(180 1228.5 1012.5)" fill="white"/>
<circle cx="1183.5" cy="1037.5" r="7.5" transform="rotate(180 1183.5 1037.5)" fill="white"/>
<circle cx="1189" cy="1052" r="5" transform="rotate(180 1189 1052)" fill="white"/>
<circle cx="1244" cy="1017" r="5" transform="rotate(180 1244 1017)" fill="white"/>
<circle cx="1342" cy="1078" r="10" transform="rotate(180 1342 1078)" fill="white"/>
<circle cx="1322" cy="1078" r="10" transform="rotate(180 1322 1078)" fill="white"/>
<circle cx="1322" cy="1058" r="10" transform="rotate(180 1322 1058)" fill="white"/>
<circle cx="1302" cy="1058" r="10" transform="rotate(180 1302 1058)" fill="white"/>
<circle cx="1302" cy="1038" r="10" transform="rotate(180 1302 1038)" fill="white"/>
<circle cx="1282" cy="1038" r="10" transform="rotate(180 1282 1038)" fill="white"/>
<circle cx="1282" cy="1018" r="10" transform="rotate(180 1282 1018)" fill="white"/>
<circle cx="1262" cy="1018" r="10" transform="rotate(180 1262 1018)" fill="white"/>
<circle cx="1264.5" cy="1035.5" r="7.5" transform="rotate(180 1264.5 1035.5)" fill="white"/>
<circle cx="1299.5" cy="1020.5" r="7.5" transform="rotate(180 1299.5 1020.5)" fill="white"/>
<circle cx="1284.5" cy="1055.5" r="7.5" transform="rotate(180 1284.5 1055.5)" fill="white"/>
<circle cx="1319.5" cy="1040.5" r="7.5" transform="rotate(180 1319.5 1040.5)" fill="white"/>
<circle cx="1304.5" cy="1075.5" r="7.5" transform="rotate(180 1304.5 1075.5)" fill="white"/>
<circle cx="1339.5" cy="1060.5" r="7.5" transform="rotate(180 1339.5 1060.5)" fill="white"/>
<circle cx="1334.5" cy="1045.5" r="7.5" transform="rotate(180 1334.5 1045.5)" fill="white"/>
<circle cx="1289.5" cy="1070.5" r="7.5" transform="rotate(180 1289.5 1070.5)" fill="white"/>
<circle cx="1314.5" cy="1025.5" r="7.5" transform="rotate(180 1314.5 1025.5)" fill="white"/>
<circle cx="1269.5" cy="1050.5" r="7.5" transform="rotate(180 1269.5 1050.5)" fill="white"/>
<circle cx="1275" cy="1065" r="5" transform="rotate(180 1275 1065)" fill="white"/>
<circle cx="1330" cy="1030" r="5" transform="rotate(180 1330 1030)" fill="white"/>
<circle cx="1351" cy="1012" r="10" transform="rotate(180 1351 1012)" fill="white"/>
<circle cx="1331" cy="1012" r="10" transform="rotate(180 1331 1012)" fill="white"/>
<circle cx="1331" cy="992" r="10" transform="rotate(180 1331 992)" fill="white"/>
<circle cx="1311" cy="992" r="10" transform="rotate(180 1311 992)" fill="white"/>
<circle cx="1311" cy="972" r="10" transform="rotate(180 1311 972)" fill="white"/>
<circle cx="1291" cy="972" r="10" transform="rotate(180 1291 972)" fill="white"/>
<circle cx="1291" cy="952" r="10" transform="rotate(180 1291 952)" fill="white"/>
<circle cx="1271" cy="952" r="10" transform="rotate(180 1271 952)" fill="white"/>
<circle cx="1273.5" cy="969.5" r="7.5" transform="rotate(180 1273.5 969.5)" fill="white"/>
<circle cx="1308.5" cy="954.5" r="7.5" transform="rotate(180 1308.5 954.5)" fill="white"/>
<circle cx="1293.5" cy="989.5" r="7.5" transform="rotate(180 1293.5 989.5)" fill="white"/>
<circle cx="1328.5" cy="974.5" r="7.5" transform="rotate(180 1328.5 974.5)" fill="white"/>
<circle cx="1313.5" cy="1009.5" r="7.5" transform="rotate(180 1313.5 1009.5)" fill="white"/>
<circle cx="1348.5" cy="994.5" r="7.5" transform="rotate(180 1348.5 994.5)" fill="white"/>
<circle cx="1343.5" cy="979.5" r="7.5" transform="rotate(180 1343.5 979.5)" fill="white"/>
<circle cx="1298.5" cy="1004.5" r="7.5" transform="rotate(180 1298.5 1004.5)" fill="white"/>
<circle cx="1323.5" cy="959.5" r="7.5" transform="rotate(180 1323.5 959.5)" fill="white"/>
<circle cx="1278.5" cy="984.5" r="7.5" transform="rotate(180 1278.5 984.5)" fill="white"/>
<circle cx="1284" cy="999" r="5" transform="rotate(180 1284 999)" fill="white"/>
<circle cx="1339" cy="964" r="5" transform="rotate(180 1339 964)" fill="white"/>
<circle cx="1356" cy="945" r="10" transform="rotate(180 1356 945)" fill="white"/>
<circle cx="1336" cy="945" r="10" transform="rotate(180 1336 945)" fill="white"/>
<circle cx="1336" cy="925" r="10" transform="rotate(180 1336 925)" fill="white"/>
<circle cx="1316" cy="925" r="10" transform="rotate(180 1316 925)" fill="white"/>
<circle cx="1316" cy="905" r="10" transform="rotate(180 1316 905)" fill="white"/>
<circle cx="1296" cy="905" r="10" transform="rotate(180 1296 905)" fill="white"/>
<circle cx="1296" cy="885" r="10" transform="rotate(180 1296 885)" fill="white"/>
<circle cx="1276" cy="885" r="10" transform="rotate(180 1276 885)" fill="white"/>
<circle cx="1278.5" cy="902.5" r="7.5" transform="rotate(180 1278.5 902.5)" fill="white"/>
<circle cx="1313.5" cy="887.5" r="7.5" transform="rotate(180 1313.5 887.5)" fill="white"/>
<circle cx="1298.5" cy="922.5" r="7.5" transform="rotate(180 1298.5 922.5)" fill="white"/>
<circle cx="1333.5" cy="907.5" r="7.5" transform="rotate(180 1333.5 907.5)" fill="white"/>
<circle cx="1318.5" cy="942.5" r="7.5" transform="rotate(180 1318.5 942.5)" fill="white"/>
<circle cx="1353.5" cy="927.5" r="7.5" transform="rotate(180 1353.5 927.5)" fill="white"/>
<circle cx="1348.5" cy="912.5" r="7.5" transform="rotate(180 1348.5 912.5)" fill="white"/>
<circle cx="1303.5" cy="937.5" r="7.5" transform="rotate(180 1303.5 937.5)" fill="white"/>
<circle cx="1328.5" cy="892.5" r="7.5" transform="rotate(180 1328.5 892.5)" fill="white"/>
<circle cx="1283.5" cy="917.5" r="7.5" transform="rotate(180 1283.5 917.5)" fill="white"/>
<circle cx="1289" cy="932" r="5" transform="rotate(180 1289 932)" fill="white"/>
<circle cx="1344" cy="897" r="5" transform="rotate(180 1344 897)" fill="white"/>
<circle cx="1356" cy="875" r="10" transform="rotate(180 1356 875)" fill="white"/>
<circle cx="1336" cy="875" r="10" transform="rotate(180 1336 875)" fill="white"/>
<circle cx="1336" cy="855" r="10" transform="rotate(180 1336 855)" fill="white"/>
<circle cx="1316" cy="855" r="10" transform="rotate(180 1316 855)" fill="white"/>
<circle cx="1316" cy="835" r="10" transform="rotate(180 1316 835)" fill="white"/>
<circle cx="1296" cy="835" r="10" transform="rotate(180 1296 835)" fill="white"/>
<circle cx="1296" cy="815" r="10" transform="rotate(180 1296 815)" fill="white"/>
<circle cx="1276" cy="815" r="10" transform="rotate(180 1276 815)" fill="white"/>
<circle cx="1278.5" cy="832.5" r="7.5" transform="rotate(180 1278.5 832.5)" fill="white"/>
<circle cx="1313.5" cy="817.5" r="7.5" transform="rotate(180 1313.5 817.5)" fill="white"/>
<circle cx="1298.5" cy="852.5" r="7.5" transform="rotate(180 1298.5 852.5)" fill="white"/>
<circle cx="1333.5" cy="837.5" r="7.5" transform="rotate(180 1333.5 837.5)" fill="white"/>
<circle cx="1318.5" cy="872.5" r="7.5" transform="rotate(180 1318.5 872.5)" fill="white"/>
<circle cx="1353.5" cy="857.5" r="7.5" transform="rotate(180 1353.5 857.5)" fill="white"/>
<circle cx="1348.5" cy="842.5" r="7.5" transform="rotate(180 1348.5 842.5)" fill="white"/>
<circle cx="1303.5" cy="867.5" r="7.5" transform="rotate(180 1303.5 867.5)" fill="white"/>
<circle cx="1328.5" cy="822.5" r="7.5" transform="rotate(180 1328.5 822.5)" fill="white"/>
<circle cx="1283.5" cy="847.5" r="7.5" transform="rotate(180 1283.5 847.5)" fill="white"/>
<circle cx="1289" cy="862" r="5" transform="rotate(180 1289 862)" fill="white"/>
<circle cx="1344" cy="827" r="5" transform="rotate(180 1344 827)" fill="white"/>
<circle cx="1271" cy="864" r="10" transform="rotate(180 1271 864)" fill="white"/>
<circle cx="1251" cy="864" r="10" transform="rotate(180 1251 864)" fill="white"/>
<circle cx="1251" cy="844" r="10" transform="rotate(180 1251 844)" fill="white"/>
<circle cx="1231" cy="844" r="10" transform="rotate(180 1231 844)" fill="white"/>
<circle cx="1231" cy="824" r="10" transform="rotate(180 1231 824)" fill="white"/>
<circle cx="1211" cy="824" r="10" transform="rotate(180 1211 824)" fill="white"/>
<circle cx="1211" cy="804" r="10" transform="rotate(180 1211 804)" fill="white"/>
<circle cx="1191" cy="804" r="10" transform="rotate(180 1191 804)" fill="white"/>
<circle cx="1193.5" cy="821.5" r="7.5" transform="rotate(180 1193.5 821.5)" fill="white"/>
<circle cx="1228.5" cy="806.5" r="7.5" transform="rotate(180 1228.5 806.5)" fill="white"/>
<circle cx="1213.5" cy="841.5" r="7.5" transform="rotate(180 1213.5 841.5)" fill="white"/>
<circle cx="1248.5" cy="826.5" r="7.5" transform="rotate(180 1248.5 826.5)" fill="white"/>
<circle cx="1233.5" cy="861.5" r="7.5" transform="rotate(180 1233.5 861.5)" fill="white"/>
<circle cx="1268.5" cy="846.5" r="7.5" transform="rotate(180 1268.5 846.5)" fill="white"/>
<circle cx="1263.5" cy="831.5" r="7.5" transform="rotate(180 1263.5 831.5)" fill="white"/>
<circle cx="1218.5" cy="856.5" r="7.5" transform="rotate(180 1218.5 856.5)" fill="white"/>
<circle cx="1243.5" cy="811.5" r="7.5" transform="rotate(180 1243.5 811.5)" fill="white"/>
<circle cx="1198.5" cy="836.5" r="7.5" transform="rotate(180 1198.5 836.5)" fill="white"/>
<circle cx="1204" cy="851" r="5" transform="rotate(180 1204 851)" fill="white"/>
<circle cx="1259" cy="816" r="5" transform="rotate(180 1259 816)" fill="white"/>
<circle cx="1104" cy="767" r="10" transform="rotate(180 1104 767)" fill="white"/>
<circle cx="1084" cy="767" r="10" transform="rotate(180 1084 767)" fill="white"/>
<circle cx="1084" cy="747" r="10" transform="rotate(180 1084 747)" fill="white"/>
<circle cx="1064" cy="747" r="10" transform="rotate(180 1064 747)" fill="white"/>
<circle cx="1064" cy="727" r="10" transform="rotate(180 1064 727)" fill="white"/>
<circle cx="1044" cy="727" r="10" transform="rotate(180 1044 727)" fill="white"/>
<circle cx="1044" cy="707" r="10" transform="rotate(180 1044 707)" fill="white"/>
<circle cx="1024" cy="707" r="10" transform="rotate(180 1024 707)" fill="white"/>
<circle cx="1026.5" cy="724.5" r="7.5" transform="rotate(180 1026.5 724.5)" fill="white"/>
<circle cx="1061.5" cy="709.5" r="7.5" transform="rotate(180 1061.5 709.5)" fill="white"/>
<circle cx="1046.5" cy="744.5" r="7.5" transform="rotate(180 1046.5 744.5)" fill="white"/>
<circle cx="1081.5" cy="729.5" r="7.5" transform="rotate(180 1081.5 729.5)" fill="white"/>
<circle cx="1066.5" cy="764.5" r="7.5" transform="rotate(180 1066.5 764.5)" fill="white"/>
<circle cx="1101.5" cy="749.5" r="7.5" transform="rotate(180 1101.5 749.5)" fill="white"/>
<circle cx="1096.5" cy="734.5" r="7.5" transform="rotate(180 1096.5 734.5)" fill="white"/>
<circle cx="1051.5" cy="759.5" r="7.5" transform="rotate(180 1051.5 759.5)" fill="white"/>
<circle cx="1076.5" cy="714.5" r="7.5" transform="rotate(180 1076.5 714.5)" fill="white"/>
<circle cx="1031.5" cy="739.5" r="7.5" transform="rotate(180 1031.5 739.5)" fill="white"/>
<circle cx="1037" cy="754" r="5" transform="rotate(180 1037 754)" fill="white"/>
<circle cx="1092" cy="719" r="5" transform="rotate(180 1092 719)" fill="white"/>
<circle cx="1111" cy="701" r="10" transform="rotate(180 1111 701)" fill="white"/>
<circle cx="1091" cy="701" r="10" transform="rotate(180 1091 701)" fill="white"/>
<circle cx="1091" cy="681" r="10" transform="rotate(180 1091 681)" fill="white"/>
<circle cx="1071" cy="681" r="10" transform="rotate(180 1071 681)" fill="white"/>
<circle cx="1071" cy="661" r="10" transform="rotate(180 1071 661)" fill="white"/>
<circle cx="1051" cy="661" r="10" transform="rotate(180 1051 661)" fill="white"/>
<circle cx="1051" cy="641" r="10" transform="rotate(180 1051 641)" fill="white"/>
<circle cx="1031" cy="641" r="10" transform="rotate(180 1031 641)" fill="white"/>
<circle cx="1033.5" cy="658.5" r="7.5" transform="rotate(180 1033.5 658.5)" fill="white"/>
<circle cx="1068.5" cy="643.5" r="7.5" transform="rotate(180 1068.5 643.5)" fill="white"/>
<circle cx="1053.5" cy="678.5" r="7.5" transform="rotate(180 1053.5 678.5)" fill="white"/>
<circle cx="1088.5" cy="663.5" r="7.5" transform="rotate(180 1088.5 663.5)" fill="white"/>
<circle cx="1073.5" cy="698.5" r="7.5" transform="rotate(180 1073.5 698.5)" fill="white"/>
<circle cx="1108.5" cy="683.5" r="7.5" transform="rotate(180 1108.5 683.5)" fill="white"/>
<circle cx="1103.5" cy="668.5" r="7.5" transform="rotate(180 1103.5 668.5)" fill="white"/>
<circle cx="1058.5" cy="693.5" r="7.5" transform="rotate(180 1058.5 693.5)" fill="white"/>
<circle cx="1083.5" cy="648.5" r="7.5" transform="rotate(180 1083.5 648.5)" fill="white"/>
<circle cx="1038.5" cy="673.5" r="7.5" transform="rotate(180 1038.5 673.5)" fill="white"/>
<circle cx="1044" cy="688" r="5" transform="rotate(180 1044 688)" fill="white"/>
<circle cx="1099" cy="653" r="5" transform="rotate(180 1099 653)" fill="white"/>
<circle cx="1024" cy="687" r="10" transform="rotate(180 1024 687)" fill="white"/>
<circle cx="1004" cy="687" r="10" transform="rotate(180 1004 687)" fill="white"/>
<circle cx="1004" cy="667" r="10" transform="rotate(180 1004 667)" fill="white"/>
<circle cx="984" cy="667" r="10" transform="rotate(180 984 667)" fill="white"/>
<circle cx="984" cy="647" r="10" transform="rotate(180 984 647)" fill="white"/>
<circle cx="964" cy="647" r="10" transform="rotate(180 964 647)" fill="white"/>
<circle cx="964" cy="627" r="10" transform="rotate(180 964 627)" fill="white"/>
<circle cx="944" cy="627" r="10" transform="rotate(180 944 627)" fill="white"/>
<circle cx="946.5" cy="644.5" r="7.5" transform="rotate(180 946.5 644.5)" fill="white"/>
<circle cx="981.5" cy="629.5" r="7.5" transform="rotate(180 981.5 629.5)" fill="white"/>
<circle cx="966.5" cy="664.5" r="7.5" transform="rotate(180 966.5 664.5)" fill="white"/>
<circle cx="1001.5" cy="649.5" r="7.5" transform="rotate(180 1001.5 649.5)" fill="white"/>
<circle cx="986.5" cy="684.5" r="7.5" transform="rotate(180 986.5 684.5)" fill="white"/>
<circle cx="1021.5" cy="669.5" r="7.5" transform="rotate(180 1021.5 669.5)" fill="white"/>
<circle cx="1016.5" cy="654.5" r="7.5" transform="rotate(180 1016.5 654.5)" fill="white"/>
<circle cx="971.5" cy="679.5" r="7.5" transform="rotate(180 971.5 679.5)" fill="white"/>
<circle cx="996.5" cy="634.5" r="7.5" transform="rotate(180 996.5 634.5)" fill="white"/>
<circle cx="951.5" cy="659.5" r="7.5" transform="rotate(180 951.5 659.5)" fill="white"/>
<circle cx="957" cy="674" r="5" transform="rotate(180 957 674)" fill="white"/>
<circle cx="1012" cy="639" r="5" transform="rotate(180 1012 639)" fill="white"/>
<circle cx="1016" cy="754" r="10" transform="rotate(180 1016 754)" fill="white"/>
<circle cx="996" cy="754" r="10" transform="rotate(180 996 754)" fill="white"/>
<circle cx="996" cy="734" r="10" transform="rotate(180 996 734)" fill="white"/>
<circle cx="976" cy="734" r="10" transform="rotate(180 976 734)" fill="white"/>
<circle cx="976" cy="714" r="10" transform="rotate(180 976 714)" fill="white"/>
<circle cx="956" cy="714" r="10" transform="rotate(180 956 714)" fill="white"/>
<circle cx="956" cy="694" r="10" transform="rotate(180 956 694)" fill="white"/>
<circle cx="936" cy="694" r="10" transform="rotate(180 936 694)" fill="white"/>
<circle cx="938.5" cy="711.5" r="7.5" transform="rotate(180 938.5 711.5)" fill="white"/>
<circle cx="973.5" cy="696.5" r="7.5" transform="rotate(180 973.5 696.5)" fill="white"/>
<circle cx="958.5" cy="731.5" r="7.5" transform="rotate(180 958.5 731.5)" fill="white"/>
<circle cx="993.5" cy="716.5" r="7.5" transform="rotate(180 993.5 716.5)" fill="white"/>
<circle cx="978.5" cy="751.5" r="7.5" transform="rotate(180 978.5 751.5)" fill="white"/>
<circle cx="1013.5" cy="736.5" r="7.5" transform="rotate(180 1013.5 736.5)" fill="white"/>
<circle cx="1008.5" cy="721.5" r="7.5" transform="rotate(180 1008.5 721.5)" fill="white"/>
<circle cx="963.5" cy="746.5" r="7.5" transform="rotate(180 963.5 746.5)" fill="white"/>
<circle cx="988.5" cy="701.5" r="7.5" transform="rotate(180 988.5 701.5)" fill="white"/>
<circle cx="943.5" cy="726.5" r="7.5" transform="rotate(180 943.5 726.5)" fill="white"/>
<circle cx="949" cy="741" r="5" transform="rotate(180 949 741)" fill="white"/>
<circle cx="1004" cy="706" r="5" transform="rotate(180 1004 706)" fill="white"/>
<circle cx="1006" cy="819" r="10" transform="rotate(180 1006 819)" fill="white"/>
<circle cx="986" cy="819" r="10" transform="rotate(180 986 819)" fill="white"/>
<circle cx="986" cy="799" r="10" transform="rotate(180 986 799)" fill="white"/>
<circle cx="966" cy="799" r="10" transform="rotate(180 966 799)" fill="white"/>
<circle cx="966" cy="779" r="10" transform="rotate(180 966 779)" fill="white"/>
<circle cx="946" cy="779" r="10" transform="rotate(180 946 779)" fill="white"/>
<circle cx="946" cy="759" r="10" transform="rotate(180 946 759)" fill="white"/>
<circle cx="926" cy="759" r="10" transform="rotate(180 926 759)" fill="white"/>
<circle cx="928.5" cy="776.5" r="7.5" transform="rotate(180 928.5 776.5)" fill="white"/>
<circle cx="963.5" cy="761.5" r="7.5" transform="rotate(180 963.5 761.5)" fill="white"/>
<circle cx="948.5" cy="796.5" r="7.5" transform="rotate(180 948.5 796.5)" fill="white"/>
<circle cx="983.5" cy="781.5" r="7.5" transform="rotate(180 983.5 781.5)" fill="white"/>
<circle cx="968.5" cy="816.5" r="7.5" transform="rotate(180 968.5 816.5)" fill="white"/>
<circle cx="1003.5" cy="801.5" r="7.5" transform="rotate(180 1003.5 801.5)" fill="white"/>
<circle cx="998.5" cy="786.5" r="7.5" transform="rotate(180 998.5 786.5)" fill="white"/>
<circle cx="953.5" cy="811.5" r="7.5" transform="rotate(180 953.5 811.5)" fill="white"/>
<circle cx="978.5" cy="766.5" r="7.5" transform="rotate(180 978.5 766.5)" fill="white"/>
<circle cx="933.5" cy="791.5" r="7.5" transform="rotate(180 933.5 791.5)" fill="white"/>
<circle cx="939" cy="806" r="5" transform="rotate(180 939 806)" fill="white"/>
<circle cx="994" cy="771" r="5" transform="rotate(180 994 771)" fill="white"/>
<circle cx="1096" cy="834" r="10" transform="rotate(180 1096 834)" fill="white"/>
<circle cx="1076" cy="834" r="10" transform="rotate(180 1076 834)" fill="white"/>
<circle cx="1076" cy="814" r="10" transform="rotate(180 1076 814)" fill="white"/>
<circle cx="1056" cy="814" r="10" transform="rotate(180 1056 814)" fill="white"/>
<circle cx="1056" cy="794" r="10" transform="rotate(180 1056 794)" fill="white"/>
<circle cx="1036" cy="794" r="10" transform="rotate(180 1036 794)" fill="white"/>
<circle cx="1036" cy="774" r="10" transform="rotate(180 1036 774)" fill="white"/>
<circle cx="1016" cy="774" r="10" transform="rotate(180 1016 774)" fill="white"/>
<circle cx="1018.5" cy="791.5" r="7.5" transform="rotate(180 1018.5 791.5)" fill="white"/>
<circle cx="1053.5" cy="776.5" r="7.5" transform="rotate(180 1053.5 776.5)" fill="white"/>
<circle cx="1038.5" cy="811.5" r="7.5" transform="rotate(180 1038.5 811.5)" fill="white"/>
<circle cx="1073.5" cy="796.5" r="7.5" transform="rotate(180 1073.5 796.5)" fill="white"/>
<circle cx="1058.5" cy="831.5" r="7.5" transform="rotate(180 1058.5 831.5)" fill="white"/>
<circle cx="1093.5" cy="816.5" r="7.5" transform="rotate(180 1093.5 816.5)" fill="white"/>
<circle cx="1088.5" cy="801.5" r="7.5" transform="rotate(180 1088.5 801.5)" fill="white"/>
<circle cx="1043.5" cy="826.5" r="7.5" transform="rotate(180 1043.5 826.5)" fill="white"/>
<circle cx="1068.5" cy="781.5" r="7.5" transform="rotate(180 1068.5 781.5)" fill="white"/>
<circle cx="1023.5" cy="806.5" r="7.5" transform="rotate(180 1023.5 806.5)" fill="white"/>
<circle cx="1029" cy="821" r="5" transform="rotate(180 1029 821)" fill="white"/>
<circle cx="1084" cy="786" r="5" transform="rotate(180 1084 786)" fill="white"/>
<circle cx="1182" cy="847" r="10" transform="rotate(180 1182 847)" fill="white"/>
<circle cx="1162" cy="847" r="10" transform="rotate(180 1162 847)" fill="white"/>
<circle cx="1162" cy="827" r="10" transform="rotate(180 1162 827)" fill="white"/>
<circle cx="1142" cy="827" r="10" transform="rotate(180 1142 827)" fill="white"/>
<circle cx="1142" cy="807" r="10" transform="rotate(180 1142 807)" fill="white"/>
<circle cx="1122" cy="807" r="10" transform="rotate(180 1122 807)" fill="white"/>
<circle cx="1122" cy="787" r="10" transform="rotate(180 1122 787)" fill="white"/>
<circle cx="1102" cy="787" r="10" transform="rotate(180 1102 787)" fill="white"/>
<circle cx="1104.5" cy="804.5" r="7.5" transform="rotate(180 1104.5 804.5)" fill="white"/>
<circle cx="1139.5" cy="789.5" r="7.5" transform="rotate(180 1139.5 789.5)" fill="white"/>
<circle cx="1124.5" cy="824.5" r="7.5" transform="rotate(180 1124.5 824.5)" fill="white"/>
<circle cx="1159.5" cy="809.5" r="7.5" transform="rotate(180 1159.5 809.5)" fill="white"/>
<circle cx="1144.5" cy="844.5" r="7.5" transform="rotate(180 1144.5 844.5)" fill="white"/>
<circle cx="1179.5" cy="829.5" r="7.5" transform="rotate(180 1179.5 829.5)" fill="white"/>
<circle cx="1174.5" cy="814.5" r="7.5" transform="rotate(180 1174.5 814.5)" fill="white"/>
<circle cx="1129.5" cy="839.5" r="7.5" transform="rotate(180 1129.5 839.5)" fill="white"/>
<circle cx="1154.5" cy="794.5" r="7.5" transform="rotate(180 1154.5 794.5)" fill="white"/>
<circle cx="1109.5" cy="819.5" r="7.5" transform="rotate(180 1109.5 819.5)" fill="white"/>
<circle cx="1115" cy="834" r="5" transform="rotate(180 1115 834)" fill="white"/>
<circle cx="1170" cy="799" r="5" transform="rotate(180 1170 799)" fill="white"/>
<circle cx="1191" cy="781" r="10" transform="rotate(180 1191 781)" fill="white"/>
<circle cx="1171" cy="781" r="10" transform="rotate(180 1171 781)" fill="white"/>
<circle cx="1171" cy="761" r="10" transform="rotate(180 1171 761)" fill="white"/>
<circle cx="1151" cy="761" r="10" transform="rotate(180 1151 761)" fill="white"/>
<circle cx="1151" cy="741" r="10" transform="rotate(180 1151 741)" fill="white"/>
<circle cx="1131" cy="741" r="10" transform="rotate(180 1131 741)" fill="white"/>
<circle cx="1131" cy="721" r="10" transform="rotate(180 1131 721)" fill="white"/>
<circle cx="1111" cy="721" r="10" transform="rotate(180 1111 721)" fill="white"/>
<circle cx="1113.5" cy="738.5" r="7.5" transform="rotate(180 1113.5 738.5)" fill="white"/>
<circle cx="1148.5" cy="723.5" r="7.5" transform="rotate(180 1148.5 723.5)" fill="white"/>
<circle cx="1133.5" cy="758.5" r="7.5" transform="rotate(180 1133.5 758.5)" fill="white"/>
<circle cx="1168.5" cy="743.5" r="7.5" transform="rotate(180 1168.5 743.5)" fill="white"/>
<circle cx="1153.5" cy="778.5" r="7.5" transform="rotate(180 1153.5 778.5)" fill="white"/>
<circle cx="1188.5" cy="763.5" r="7.5" transform="rotate(180 1188.5 763.5)" fill="white"/>
<circle cx="1183.5" cy="748.5" r="7.5" transform="rotate(180 1183.5 748.5)" fill="white"/>
<circle cx="1138.5" cy="773.5" r="7.5" transform="rotate(180 1138.5 773.5)" fill="white"/>
<circle cx="1163.5" cy="728.5" r="7.5" transform="rotate(180 1163.5 728.5)" fill="white"/>
<circle cx="1118.5" cy="753.5" r="7.5" transform="rotate(180 1118.5 753.5)" fill="white"/>
<circle cx="1124" cy="768" r="5" transform="rotate(180 1124 768)" fill="white"/>
<circle cx="1179" cy="733" r="5" transform="rotate(180 1179 733)" fill="white"/>
<circle cx="1196" cy="714" r="10" transform="rotate(180 1196 714)" fill="white"/>
<circle cx="1176" cy="714" r="10" transform="rotate(180 1176 714)" fill="white"/>
<circle cx="1176" cy="694" r="10" transform="rotate(180 1176 694)" fill="white"/>
<circle cx="1156" cy="694" r="10" transform="rotate(180 1156 694)" fill="white"/>
<circle cx="1156" cy="674" r="10" transform="rotate(180 1156 674)" fill="white"/>
<circle cx="1136" cy="674" r="10" transform="rotate(180 1136 674)" fill="white"/>
<circle cx="1136" cy="654" r="10" transform="rotate(180 1136 654)" fill="white"/>
<circle cx="1116" cy="654" r="10" transform="rotate(180 1116 654)" fill="white"/>
<circle cx="1118.5" cy="671.5" r="7.5" transform="rotate(180 1118.5 671.5)" fill="white"/>
<circle cx="1153.5" cy="656.5" r="7.5" transform="rotate(180 1153.5 656.5)" fill="white"/>
<circle cx="1138.5" cy="691.5" r="7.5" transform="rotate(180 1138.5 691.5)" fill="white"/>
<circle cx="1173.5" cy="676.5" r="7.5" transform="rotate(180 1173.5 676.5)" fill="white"/>
<circle cx="1158.5" cy="711.5" r="7.5" transform="rotate(180 1158.5 711.5)" fill="white"/>
<circle cx="1193.5" cy="696.5" r="7.5" transform="rotate(180 1193.5 696.5)" fill="white"/>
<circle cx="1188.5" cy="681.5" r="7.5" transform="rotate(180 1188.5 681.5)" fill="white"/>
<circle cx="1143.5" cy="706.5" r="7.5" transform="rotate(180 1143.5 706.5)" fill="white"/>
<circle cx="1168.5" cy="661.5" r="7.5" transform="rotate(180 1168.5 661.5)" fill="white"/>
<circle cx="1123.5" cy="686.5" r="7.5" transform="rotate(180 1123.5 686.5)" fill="white"/>
<circle cx="1129" cy="701" r="5" transform="rotate(180 1129 701)" fill="white"/>
<circle cx="1184" cy="666" r="5" transform="rotate(180 1184 666)" fill="white"/>
<circle cx="1196" cy="644" r="10" transform="rotate(180 1196 644)" fill="white"/>
<circle cx="1176" cy="644" r="10" transform="rotate(180 1176 644)" fill="white"/>
<circle cx="1176" cy="624" r="10" transform="rotate(180 1176 624)" fill="white"/>
<circle cx="1156" cy="624" r="10" transform="rotate(180 1156 624)" fill="white"/>
<circle cx="1156" cy="604" r="10" transform="rotate(180 1156 604)" fill="white"/>
<circle cx="1136" cy="604" r="10" transform="rotate(180 1136 604)" fill="white"/>
<circle cx="1136" cy="584" r="10" transform="rotate(180 1136 584)" fill="white"/>
<circle cx="1116" cy="584" r="10" transform="rotate(180 1116 584)" fill="white"/>
<circle cx="1118.5" cy="601.5" r="7.5" transform="rotate(180 1118.5 601.5)" fill="white"/>
<circle cx="1153.5" cy="586.5" r="7.5" transform="rotate(180 1153.5 586.5)" fill="white"/>
<circle cx="1138.5" cy="621.5" r="7.5" transform="rotate(180 1138.5 621.5)" fill="white"/>
<circle cx="1173.5" cy="606.5" r="7.5" transform="rotate(180 1173.5 606.5)" fill="white"/>
<circle cx="1158.5" cy="641.5" r="7.5" transform="rotate(180 1158.5 641.5)" fill="white"/>
<circle cx="1193.5" cy="626.5" r="7.5" transform="rotate(180 1193.5 626.5)" fill="white"/>
<circle cx="1188.5" cy="611.5" r="7.5" transform="rotate(180 1188.5 611.5)" fill="white"/>
<circle cx="1143.5" cy="636.5" r="7.5" transform="rotate(180 1143.5 636.5)" fill="white"/>
<circle cx="1168.5" cy="591.5" r="7.5" transform="rotate(180 1168.5 591.5)" fill="white"/>
<circle cx="1123.5" cy="616.5" r="7.5" transform="rotate(180 1123.5 616.5)" fill="white"/>
<circle cx="1129" cy="631" r="5" transform="rotate(180 1129 631)" fill="white"/>
<circle cx="1184" cy="596" r="5" transform="rotate(180 1184 596)" fill="white"/>
<circle cx="1111" cy="633" r="10" transform="rotate(180 1111 633)" fill="white"/>
<circle cx="1091" cy="633" r="10" transform="rotate(180 1091 633)" fill="white"/>
<circle cx="1091" cy="613" r="10" transform="rotate(180 1091 613)" fill="white"/>
<circle cx="1071" cy="613" r="10" transform="rotate(180 1071 613)" fill="white"/>
<circle cx="1071" cy="593" r="10" transform="rotate(180 1071 593)" fill="white"/>
<circle cx="1051" cy="593" r="10" transform="rotate(180 1051 593)" fill="white"/>
<circle cx="1051" cy="573" r="10" transform="rotate(180 1051 573)" fill="white"/>
<circle cx="1031" cy="573" r="10" transform="rotate(180 1031 573)" fill="white"/>
<circle cx="1033.5" cy="590.5" r="7.5" transform="rotate(180 1033.5 590.5)" fill="white"/>
<circle cx="1068.5" cy="575.5" r="7.5" transform="rotate(180 1068.5 575.5)" fill="white"/>
<circle cx="1053.5" cy="610.5" r="7.5" transform="rotate(180 1053.5 610.5)" fill="white"/>
<circle cx="1088.5" cy="595.5" r="7.5" transform="rotate(180 1088.5 595.5)" fill="white"/>
<circle cx="1073.5" cy="630.5" r="7.5" transform="rotate(180 1073.5 630.5)" fill="white"/>
<circle cx="1108.5" cy="615.5" r="7.5" transform="rotate(180 1108.5 615.5)" fill="white"/>
<circle cx="1103.5" cy="600.5" r="7.5" transform="rotate(180 1103.5 600.5)" fill="white"/>
<circle cx="1058.5" cy="625.5" r="7.5" transform="rotate(180 1058.5 625.5)" fill="white"/>
<circle cx="1083.5" cy="580.5" r="7.5" transform="rotate(180 1083.5 580.5)" fill="white"/>
<circle cx="1038.5" cy="605.5" r="7.5" transform="rotate(180 1038.5 605.5)" fill="white"/>
<circle cx="1044" cy="620" r="5" transform="rotate(180 1044 620)" fill="white"/>
<circle cx="1099" cy="585" r="5" transform="rotate(180 1099 585)" fill="white"/>
<circle cx="1378" cy="741" r="10" transform="rotate(180 1378 741)" fill="white"/>
<circle cx="1358" cy="741" r="10" transform="rotate(180 1358 741)" fill="white"/>
<circle cx="1358" cy="721" r="10" transform="rotate(180 1358 721)" fill="white"/>
<circle cx="1338" cy="721" r="10" transform="rotate(180 1338 721)" fill="white"/>
<circle cx="1338" cy="701" r="10" transform="rotate(180 1338 701)" fill="white"/>
<circle cx="1318" cy="701" r="10" transform="rotate(180 1318 701)" fill="white"/>
<circle cx="1318" cy="681" r="10" transform="rotate(180 1318 681)" fill="white"/>
<circle cx="1298" cy="681" r="10" transform="rotate(180 1298 681)" fill="white"/>
<circle cx="1300.5" cy="698.5" r="7.5" transform="rotate(180 1300.5 698.5)" fill="white"/>
<circle cx="1335.5" cy="683.5" r="7.5" transform="rotate(180 1335.5 683.5)" fill="white"/>
<circle cx="1320.5" cy="718.5" r="7.5" transform="rotate(180 1320.5 718.5)" fill="white"/>
<circle cx="1355.5" cy="703.5" r="7.5" transform="rotate(180 1355.5 703.5)" fill="white"/>
<circle cx="1340.5" cy="738.5" r="7.5" transform="rotate(180 1340.5 738.5)" fill="white"/>
<circle cx="1375.5" cy="723.5" r="7.5" transform="rotate(180 1375.5 723.5)" fill="white"/>
<circle cx="1370.5" cy="708.5" r="7.5" transform="rotate(180 1370.5 708.5)" fill="white"/>
<circle cx="1325.5" cy="733.5" r="7.5" transform="rotate(180 1325.5 733.5)" fill="white"/>
<circle cx="1350.5" cy="688.5" r="7.5" transform="rotate(180 1350.5 688.5)" fill="white"/>
<circle cx="1305.5" cy="713.5" r="7.5" transform="rotate(180 1305.5 713.5)" fill="white"/>
<circle cx="1311" cy="728" r="5" transform="rotate(180 1311 728)" fill="white"/>
<circle cx="1366" cy="693" r="5" transform="rotate(180 1366 693)" fill="white"/>
<circle cx="1385" cy="675" r="10" transform="rotate(180 1385 675)" fill="white"/>
<circle cx="1365" cy="675" r="10" transform="rotate(180 1365 675)" fill="white"/>
<circle cx="1365" cy="655" r="10" transform="rotate(180 1365 655)" fill="white"/>
<circle cx="1345" cy="655" r="10" transform="rotate(180 1345 655)" fill="white"/>
<circle cx="1345" cy="635" r="10" transform="rotate(180 1345 635)" fill="white"/>
<circle cx="1325" cy="635" r="10" transform="rotate(180 1325 635)" fill="white"/>
<circle cx="1325" cy="615" r="10" transform="rotate(180 1325 615)" fill="white"/>
<circle cx="1305" cy="615" r="10" transform="rotate(180 1305 615)" fill="white"/>
<circle cx="1307.5" cy="632.5" r="7.5" transform="rotate(180 1307.5 632.5)" fill="white"/>
<circle cx="1342.5" cy="617.5" r="7.5" transform="rotate(180 1342.5 617.5)" fill="white"/>
<circle cx="1327.5" cy="652.5" r="7.5" transform="rotate(180 1327.5 652.5)" fill="white"/>
<circle cx="1362.5" cy="637.5" r="7.5" transform="rotate(180 1362.5 637.5)" fill="white"/>
<circle cx="1347.5" cy="672.5" r="7.5" transform="rotate(180 1347.5 672.5)" fill="white"/>
<circle cx="1382.5" cy="657.5" r="7.5" transform="rotate(180 1382.5 657.5)" fill="white"/>
<circle cx="1377.5" cy="642.5" r="7.5" transform="rotate(180 1377.5 642.5)" fill="white"/>
<circle cx="1332.5" cy="667.5" r="7.5" transform="rotate(180 1332.5 667.5)" fill="white"/>
<circle cx="1357.5" cy="622.5" r="7.5" transform="rotate(180 1357.5 622.5)" fill="white"/>
<circle cx="1312.5" cy="647.5" r="7.5" transform="rotate(180 1312.5 647.5)" fill="white"/>
<circle cx="1318" cy="662" r="5" transform="rotate(180 1318 662)" fill="white"/>
<circle cx="1373" cy="627" r="5" transform="rotate(180 1373 627)" fill="white"/>
<circle cx="1298" cy="661" r="10" transform="rotate(180 1298 661)" fill="white"/>
<circle cx="1278" cy="661" r="10" transform="rotate(180 1278 661)" fill="white"/>
<circle cx="1278" cy="641" r="10" transform="rotate(180 1278 641)" fill="white"/>
<circle cx="1258" cy="641" r="10" transform="rotate(180 1258 641)" fill="white"/>
<circle cx="1258" cy="621" r="10" transform="rotate(180 1258 621)" fill="white"/>
<circle cx="1238" cy="621" r="10" transform="rotate(180 1238 621)" fill="white"/>
<circle cx="1238" cy="601" r="10" transform="rotate(180 1238 601)" fill="white"/>
<circle cx="1218" cy="601" r="10" transform="rotate(180 1218 601)" fill="white"/>
<circle cx="1220.5" cy="618.5" r="7.5" transform="rotate(180 1220.5 618.5)" fill="white"/>
<circle cx="1255.5" cy="603.5" r="7.5" transform="rotate(180 1255.5 603.5)" fill="white"/>
<circle cx="1240.5" cy="638.5" r="7.5" transform="rotate(180 1240.5 638.5)" fill="white"/>
<circle cx="1275.5" cy="623.5" r="7.5" transform="rotate(180 1275.5 623.5)" fill="white"/>
<circle cx="1260.5" cy="658.5" r="7.5" transform="rotate(180 1260.5 658.5)" fill="white"/>
<circle cx="1295.5" cy="643.5" r="7.5" transform="rotate(180 1295.5 643.5)" fill="white"/>
<circle cx="1290.5" cy="628.5" r="7.5" transform="rotate(180 1290.5 628.5)" fill="white"/>
<circle cx="1245.5" cy="653.5" r="7.5" transform="rotate(180 1245.5 653.5)" fill="white"/>
<circle cx="1270.5" cy="608.5" r="7.5" transform="rotate(180 1270.5 608.5)" fill="white"/>
<circle cx="1225.5" cy="633.5" r="7.5" transform="rotate(180 1225.5 633.5)" fill="white"/>
<circle cx="1231" cy="648" r="5" transform="rotate(180 1231 648)" fill="white"/>
<circle cx="1286" cy="613" r="5" transform="rotate(180 1286 613)" fill="white"/>
<circle cx="1290" cy="728" r="10" transform="rotate(180 1290 728)" fill="white"/>
<circle cx="1270" cy="728" r="10" transform="rotate(180 1270 728)" fill="white"/>
<circle cx="1270" cy="708" r="10" transform="rotate(180 1270 708)" fill="white"/>
<circle cx="1250" cy="708" r="10" transform="rotate(180 1250 708)" fill="white"/>
<circle cx="1250" cy="688" r="10" transform="rotate(180 1250 688)" fill="white"/>
<circle cx="1230" cy="688" r="10" transform="rotate(180 1230 688)" fill="white"/>
<circle cx="1230" cy="668" r="10" transform="rotate(180 1230 668)" fill="white"/>
<circle cx="1210" cy="668" r="10" transform="rotate(180 1210 668)" fill="white"/>
<circle cx="1212.5" cy="685.5" r="7.5" transform="rotate(180 1212.5 685.5)" fill="white"/>
<circle cx="1247.5" cy="670.5" r="7.5" transform="rotate(180 1247.5 670.5)" fill="white"/>
<circle cx="1232.5" cy="705.5" r="7.5" transform="rotate(180 1232.5 705.5)" fill="white"/>
<circle cx="1267.5" cy="690.5" r="7.5" transform="rotate(180 1267.5 690.5)" fill="white"/>
<circle cx="1252.5" cy="725.5" r="7.5" transform="rotate(180 1252.5 725.5)" fill="white"/>
<circle cx="1287.5" cy="710.5" r="7.5" transform="rotate(180 1287.5 710.5)" fill="white"/>
<circle cx="1282.5" cy="695.5" r="7.5" transform="rotate(180 1282.5 695.5)" fill="white"/>
<circle cx="1237.5" cy="720.5" r="7.5" transform="rotate(180 1237.5 720.5)" fill="white"/>
<circle cx="1262.5" cy="675.5" r="7.5" transform="rotate(180 1262.5 675.5)" fill="white"/>
<circle cx="1217.5" cy="700.5" r="7.5" transform="rotate(180 1217.5 700.5)" fill="white"/>
<circle cx="1223" cy="715" r="5" transform="rotate(180 1223 715)" fill="white"/>
<circle cx="1278" cy="680" r="5" transform="rotate(180 1278 680)" fill="white"/>
<circle cx="1280" cy="793" r="10" transform="rotate(180 1280 793)" fill="white"/>
<circle cx="1260" cy="793" r="10" transform="rotate(180 1260 793)" fill="white"/>
<circle cx="1260" cy="773" r="10" transform="rotate(180 1260 773)" fill="white"/>
<circle cx="1240" cy="773" r="10" transform="rotate(180 1240 773)" fill="white"/>
<circle cx="1240" cy="753" r="10" transform="rotate(180 1240 753)" fill="white"/>
<circle cx="1220" cy="753" r="10" transform="rotate(180 1220 753)" fill="white"/>
<circle cx="1220" cy="733" r="10" transform="rotate(180 1220 733)" fill="white"/>
<circle cx="1200" cy="733" r="10" transform="rotate(180 1200 733)" fill="white"/>
<circle cx="1202.5" cy="750.5" r="7.5" transform="rotate(180 1202.5 750.5)" fill="white"/>
<circle cx="1237.5" cy="735.5" r="7.5" transform="rotate(180 1237.5 735.5)" fill="white"/>
<circle cx="1222.5" cy="770.5" r="7.5" transform="rotate(180 1222.5 770.5)" fill="white"/>
<circle cx="1257.5" cy="755.5" r="7.5" transform="rotate(180 1257.5 755.5)" fill="white"/>
<circle cx="1242.5" cy="790.5" r="7.5" transform="rotate(180 1242.5 790.5)" fill="white"/>
<circle cx="1277.5" cy="775.5" r="7.5" transform="rotate(180 1277.5 775.5)" fill="white"/>
<circle cx="1272.5" cy="760.5" r="7.5" transform="rotate(180 1272.5 760.5)" fill="white"/>
<circle cx="1227.5" cy="785.5" r="7.5" transform="rotate(180 1227.5 785.5)" fill="white"/>
<circle cx="1252.5" cy="740.5" r="7.5" transform="rotate(180 1252.5 740.5)" fill="white"/>
<circle cx="1207.5" cy="765.5" r="7.5" transform="rotate(180 1207.5 765.5)" fill="white"/>
<circle cx="1213" cy="780" r="5" transform="rotate(180 1213 780)" fill="white"/>
<circle cx="1268" cy="745" r="5" transform="rotate(180 1268 745)" fill="white"/>
<circle cx="1370" cy="808" r="10" transform="rotate(180 1370 808)" fill="white"/>
<circle cx="1350" cy="808" r="10" transform="rotate(180 1350 808)" fill="white"/>
<circle cx="1350" cy="788" r="10" transform="rotate(180 1350 788)" fill="white"/>
<circle cx="1330" cy="788" r="10" transform="rotate(180 1330 788)" fill="white"/>
<circle cx="1330" cy="768" r="10" transform="rotate(180 1330 768)" fill="white"/>
<circle cx="1310" cy="768" r="10" transform="rotate(180 1310 768)" fill="white"/>
<circle cx="1310" cy="748" r="10" transform="rotate(180 1310 748)" fill="white"/>
<circle cx="1290" cy="748" r="10" transform="rotate(180 1290 748)" fill="white"/>
<circle cx="1292.5" cy="765.5" r="7.5" transform="rotate(180 1292.5 765.5)" fill="white"/>
<circle cx="1327.5" cy="750.5" r="7.5" transform="rotate(180 1327.5 750.5)" fill="white"/>
<circle cx="1312.5" cy="785.5" r="7.5" transform="rotate(180 1312.5 785.5)" fill="white"/>
<circle cx="1347.5" cy="770.5" r="7.5" transform="rotate(180 1347.5 770.5)" fill="white"/>
<circle cx="1332.5" cy="805.5" r="7.5" transform="rotate(180 1332.5 805.5)" fill="white"/>
<circle cx="1367.5" cy="790.5" r="7.5" transform="rotate(180 1367.5 790.5)" fill="white"/>
<circle cx="1362.5" cy="775.5" r="7.5" transform="rotate(180 1362.5 775.5)" fill="white"/>
<circle cx="1317.5" cy="800.5" r="7.5" transform="rotate(180 1317.5 800.5)" fill="white"/>
<circle cx="1342.5" cy="755.5" r="7.5" transform="rotate(180 1342.5 755.5)" fill="white"/>
<circle cx="1297.5" cy="780.5" r="7.5" transform="rotate(180 1297.5 780.5)" fill="white"/>
<circle cx="1303" cy="795" r="5" transform="rotate(180 1303 795)" fill="white"/>
<circle cx="1358" cy="760" r="5" transform="rotate(180 1358 760)" fill="white"/>
<circle cx="1456" cy="821" r="10" transform="rotate(180 1456 821)" fill="white"/>
<circle cx="1436" cy="821" r="10" transform="rotate(180 1436 821)" fill="white"/>
<circle cx="1436" cy="801" r="10" transform="rotate(180 1436 801)" fill="white"/>
<circle cx="1416" cy="801" r="10" transform="rotate(180 1416 801)" fill="white"/>
<circle cx="1416" cy="781" r="10" transform="rotate(180 1416 781)" fill="white"/>
<circle cx="1396" cy="781" r="10" transform="rotate(180 1396 781)" fill="white"/>
<circle cx="1396" cy="761" r="10" transform="rotate(180 1396 761)" fill="white"/>
<circle cx="1376" cy="761" r="10" transform="rotate(180 1376 761)" fill="white"/>
<circle cx="1378.5" cy="778.5" r="7.5" transform="rotate(180 1378.5 778.5)" fill="white"/>
<circle cx="1413.5" cy="763.5" r="7.5" transform="rotate(180 1413.5 763.5)" fill="white"/>
<circle cx="1398.5" cy="798.5" r="7.5" transform="rotate(180 1398.5 798.5)" fill="white"/>
<circle cx="1433.5" cy="783.5" r="7.5" transform="rotate(180 1433.5 783.5)" fill="white"/>
<circle cx="1418.5" cy="818.5" r="7.5" transform="rotate(180 1418.5 818.5)" fill="white"/>
<circle cx="1453.5" cy="803.5" r="7.5" transform="rotate(180 1453.5 803.5)" fill="white"/>
<circle cx="1448.5" cy="788.5" r="7.5" transform="rotate(180 1448.5 788.5)" fill="white"/>
<circle cx="1403.5" cy="813.5" r="7.5" transform="rotate(180 1403.5 813.5)" fill="white"/>
<circle cx="1428.5" cy="768.5" r="7.5" transform="rotate(180 1428.5 768.5)" fill="white"/>
<circle cx="1383.5" cy="793.5" r="7.5" transform="rotate(180 1383.5 793.5)" fill="white"/>
<circle cx="1389" cy="808" r="5" transform="rotate(180 1389 808)" fill="white"/>
<circle cx="1444" cy="773" r="5" transform="rotate(180 1444 773)" fill="white"/>
<circle cx="1465" cy="755" r="10" transform="rotate(180 1465 755)" fill="white"/>
<circle cx="1445" cy="755" r="10" transform="rotate(180 1445 755)" fill="white"/>
<circle cx="1445" cy="735" r="10" transform="rotate(180 1445 735)" fill="white"/>
<circle cx="1425" cy="735" r="10" transform="rotate(180 1425 735)" fill="white"/>
<circle cx="1425" cy="715" r="10" transform="rotate(180 1425 715)" fill="white"/>
<circle cx="1405" cy="715" r="10" transform="rotate(180 1405 715)" fill="white"/>
<circle cx="1405" cy="695" r="10" transform="rotate(180 1405 695)" fill="white"/>
<circle cx="1385" cy="695" r="10" transform="rotate(180 1385 695)" fill="white"/>
<circle cx="1387.5" cy="712.5" r="7.5" transform="rotate(180 1387.5 712.5)" fill="white"/>
<circle cx="1422.5" cy="697.5" r="7.5" transform="rotate(180 1422.5 697.5)" fill="white"/>
<circle cx="1407.5" cy="732.5" r="7.5" transform="rotate(180 1407.5 732.5)" fill="white"/>
<circle cx="1442.5" cy="717.5" r="7.5" transform="rotate(180 1442.5 717.5)" fill="white"/>
<circle cx="1427.5" cy="752.5" r="7.5" transform="rotate(180 1427.5 752.5)" fill="white"/>
<circle cx="1462.5" cy="737.5" r="7.5" transform="rotate(180 1462.5 737.5)" fill="white"/>
<circle cx="1457.5" cy="722.5" r="7.5" transform="rotate(180 1457.5 722.5)" fill="white"/>
<circle cx="1412.5" cy="747.5" r="7.5" transform="rotate(180 1412.5 747.5)" fill="white"/>
<circle cx="1437.5" cy="702.5" r="7.5" transform="rotate(180 1437.5 702.5)" fill="white"/>
<circle cx="1392.5" cy="727.5" r="7.5" transform="rotate(180 1392.5 727.5)" fill="white"/>
<circle cx="1398" cy="742" r="5" transform="rotate(180 1398 742)" fill="white"/>
<circle cx="1453" cy="707" r="5" transform="rotate(180 1453 707)" fill="white"/>
<circle cx="1470" cy="688" r="10" transform="rotate(180 1470 688)" fill="white"/>
<circle cx="1450" cy="688" r="10" transform="rotate(180 1450 688)" fill="white"/>
<circle cx="1450" cy="668" r="10" transform="rotate(180 1450 668)" fill="white"/>
<circle cx="1430" cy="668" r="10" transform="rotate(180 1430 668)" fill="white"/>
<circle cx="1430" cy="648" r="10" transform="rotate(180 1430 648)" fill="white"/>
<circle cx="1410" cy="648" r="10" transform="rotate(180 1410 648)" fill="white"/>
<circle cx="1410" cy="628" r="10" transform="rotate(180 1410 628)" fill="white"/>
<circle cx="1390" cy="628" r="10" transform="rotate(180 1390 628)" fill="white"/>
<circle cx="1392.5" cy="645.5" r="7.5" transform="rotate(180 1392.5 645.5)" fill="white"/>
<circle cx="1427.5" cy="630.5" r="7.5" transform="rotate(180 1427.5 630.5)" fill="white"/>
<circle cx="1412.5" cy="665.5" r="7.5" transform="rotate(180 1412.5 665.5)" fill="white"/>
<circle cx="1447.5" cy="650.5" r="7.5" transform="rotate(180 1447.5 650.5)" fill="white"/>
<circle cx="1432.5" cy="685.5" r="7.5" transform="rotate(180 1432.5 685.5)" fill="white"/>
<circle cx="1467.5" cy="670.5" r="7.5" transform="rotate(180 1467.5 670.5)" fill="white"/>
<circle cx="1462.5" cy="655.5" r="7.5" transform="rotate(180 1462.5 655.5)" fill="white"/>
<circle cx="1417.5" cy="680.5" r="7.5" transform="rotate(180 1417.5 680.5)" fill="white"/>
<circle cx="1442.5" cy="635.5" r="7.5" transform="rotate(180 1442.5 635.5)" fill="white"/>
<circle cx="1397.5" cy="660.5" r="7.5" transform="rotate(180 1397.5 660.5)" fill="white"/>
<circle cx="1403" cy="675" r="5" transform="rotate(180 1403 675)" fill="white"/>
<circle cx="1458" cy="640" r="5" transform="rotate(180 1458 640)" fill="white"/>
<circle cx="1470" cy="618" r="10" transform="rotate(180 1470 618)" fill="white"/>
<circle cx="1450" cy="618" r="10" transform="rotate(180 1450 618)" fill="white"/>
<circle cx="1450" cy="598" r="10" transform="rotate(180 1450 598)" fill="white"/>
<circle cx="1430" cy="598" r="10" transform="rotate(180 1430 598)" fill="white"/>
<circle cx="1430" cy="578" r="10" transform="rotate(180 1430 578)" fill="white"/>
<circle cx="1410" cy="578" r="10" transform="rotate(180 1410 578)" fill="white"/>
<circle cx="1410" cy="558" r="10" transform="rotate(180 1410 558)" fill="white"/>
<circle cx="1390" cy="558" r="10" transform="rotate(180 1390 558)" fill="white"/>
<circle cx="1392.5" cy="575.5" r="7.5" transform="rotate(180 1392.5 575.5)" fill="white"/>
<circle cx="1427.5" cy="560.5" r="7.5" transform="rotate(180 1427.5 560.5)" fill="white"/>
<circle cx="1412.5" cy="595.5" r="7.5" transform="rotate(180 1412.5 595.5)" fill="white"/>
<circle cx="1447.5" cy="580.5" r="7.5" transform="rotate(180 1447.5 580.5)" fill="white"/>
<circle cx="1432.5" cy="615.5" r="7.5" transform="rotate(180 1432.5 615.5)" fill="white"/>
<circle cx="1467.5" cy="600.5" r="7.5" transform="rotate(180 1467.5 600.5)" fill="white"/>
<circle cx="1462.5" cy="585.5" r="7.5" transform="rotate(180 1462.5 585.5)" fill="white"/>
<circle cx="1417.5" cy="610.5" r="7.5" transform="rotate(180 1417.5 610.5)" fill="white"/>
<circle cx="1442.5" cy="565.5" r="7.5" transform="rotate(180 1442.5 565.5)" fill="white"/>
<circle cx="1397.5" cy="590.5" r="7.5" transform="rotate(180 1397.5 590.5)" fill="white"/>
<circle cx="1403" cy="605" r="5" transform="rotate(180 1403 605)" fill="white"/>
<circle cx="1458" cy="570" r="5" transform="rotate(180 1458 570)" fill="white"/>
<circle cx="1385" cy="607" r="10" transform="rotate(180 1385 607)" fill="white"/>
<circle cx="1365" cy="607" r="10" transform="rotate(180 1365 607)" fill="white"/>
<circle cx="1365" cy="587" r="10" transform="rotate(180 1365 587)" fill="white"/>
<circle cx="1345" cy="587" r="10" transform="rotate(180 1345 587)" fill="white"/>
<circle cx="1345" cy="567" r="10" transform="rotate(180 1345 567)" fill="white"/>
<circle cx="1325" cy="567" r="10" transform="rotate(180 1325 567)" fill="white"/>
<circle cx="1325" cy="547" r="10" transform="rotate(180 1325 547)" fill="white"/>
<circle cx="1305" cy="547" r="10" transform="rotate(180 1305 547)" fill="white"/>
<circle cx="1307.5" cy="564.5" r="7.5" transform="rotate(180 1307.5 564.5)" fill="white"/>
<circle cx="1342.5" cy="549.5" r="7.5" transform="rotate(180 1342.5 549.5)" fill="white"/>
<circle cx="1327.5" cy="584.5" r="7.5" transform="rotate(180 1327.5 584.5)" fill="white"/>
<circle cx="1362.5" cy="569.5" r="7.5" transform="rotate(180 1362.5 569.5)" fill="white"/>
<circle cx="1347.5" cy="604.5" r="7.5" transform="rotate(180 1347.5 604.5)" fill="white"/>
<circle cx="1382.5" cy="589.5" r="7.5" transform="rotate(180 1382.5 589.5)" fill="white"/>
<circle cx="1377.5" cy="574.5" r="7.5" transform="rotate(180 1377.5 574.5)" fill="white"/>
<circle cx="1332.5" cy="599.5" r="7.5" transform="rotate(180 1332.5 599.5)" fill="white"/>
<circle cx="1357.5" cy="554.5" r="7.5" transform="rotate(180 1357.5 554.5)" fill="white"/>
<circle cx="1312.5" cy="579.5" r="7.5" transform="rotate(180 1312.5 579.5)" fill="white"/>
<circle cx="1318" cy="594" r="5" transform="rotate(180 1318 594)" fill="white"/>
<circle cx="1373" cy="559" r="5" transform="rotate(180 1373 559)" fill="white"/>
<circle cx="992" cy="1024" r="10" transform="rotate(180 992 1024)" fill="white"/>
<circle cx="972" cy="1024" r="10" transform="rotate(180 972 1024)" fill="white"/>
<circle cx="972" cy="1004" r="10" transform="rotate(180 972 1004)" fill="white"/>
<circle cx="952" cy="1004" r="10" transform="rotate(180 952 1004)" fill="white"/>
<circle cx="952" cy="984" r="10" transform="rotate(180 952 984)" fill="white"/>
<circle cx="932" cy="984" r="10" transform="rotate(180 932 984)" fill="white"/>
<circle cx="932" cy="964" r="10" transform="rotate(180 932 964)" fill="white"/>
<circle cx="912" cy="964" r="10" transform="rotate(180 912 964)" fill="white"/>
<circle cx="914.5" cy="981.5" r="7.5" transform="rotate(180 914.5 981.5)" fill="white"/>
<circle cx="949.5" cy="966.5" r="7.5" transform="rotate(180 949.5 966.5)" fill="white"/>
<circle cx="934.5" cy="1001.5" r="7.5" transform="rotate(180 934.5 1001.5)" fill="white"/>
<circle cx="969.5" cy="986.5" r="7.5" transform="rotate(180 969.5 986.5)" fill="white"/>
<circle cx="954.5" cy="1021.5" r="7.5" transform="rotate(180 954.5 1021.5)" fill="white"/>
<circle cx="989.5" cy="1006.5" r="7.5" transform="rotate(180 989.5 1006.5)" fill="white"/>
<circle cx="984.5" cy="991.5" r="7.5" transform="rotate(180 984.5 991.5)" fill="white"/>
<circle cx="939.5" cy="1016.5" r="7.5" transform="rotate(180 939.5 1016.5)" fill="white"/>
<circle cx="964.5" cy="971.5" r="7.5" transform="rotate(180 964.5 971.5)" fill="white"/>
<circle cx="919.5" cy="996.5" r="7.5" transform="rotate(180 919.5 996.5)" fill="white"/>
<circle cx="925" cy="1011" r="5" transform="rotate(180 925 1011)" fill="white"/>
<circle cx="980" cy="976" r="5" transform="rotate(180 980 976)" fill="white"/>
<circle cx="999" cy="958" r="10" transform="rotate(180 999 958)" fill="white"/>
<circle cx="979" cy="958" r="10" transform="rotate(180 979 958)" fill="white"/>
<circle cx="979" cy="938" r="10" transform="rotate(180 979 938)" fill="white"/>
<circle cx="959" cy="938" r="10" transform="rotate(180 959 938)" fill="white"/>
<circle cx="959" cy="918" r="10" transform="rotate(180 959 918)" fill="white"/>
<circle cx="939" cy="918" r="10" transform="rotate(180 939 918)" fill="white"/>
<circle cx="939" cy="898" r="10" transform="rotate(180 939 898)" fill="white"/>
<circle cx="919" cy="898" r="10" transform="rotate(180 919 898)" fill="white"/>
<circle cx="921.5" cy="915.5" r="7.5" transform="rotate(180 921.5 915.5)" fill="white"/>
<circle cx="956.5" cy="900.5" r="7.5" transform="rotate(180 956.5 900.5)" fill="white"/>
<circle cx="941.5" cy="935.5" r="7.5" transform="rotate(180 941.5 935.5)" fill="white"/>
<circle cx="976.5" cy="920.5" r="7.5" transform="rotate(180 976.5 920.5)" fill="white"/>
<circle cx="961.5" cy="955.5" r="7.5" transform="rotate(180 961.5 955.5)" fill="white"/>
<circle cx="996.5" cy="940.5" r="7.5" transform="rotate(180 996.5 940.5)" fill="white"/>
<circle cx="991.5" cy="925.5" r="7.5" transform="rotate(180 991.5 925.5)" fill="white"/>
<circle cx="946.5" cy="950.5" r="7.5" transform="rotate(180 946.5 950.5)" fill="white"/>
<circle cx="971.5" cy="905.5" r="7.5" transform="rotate(180 971.5 905.5)" fill="white"/>
<circle cx="926.5" cy="930.5" r="7.5" transform="rotate(180 926.5 930.5)" fill="white"/>
<circle cx="932" cy="945" r="5" transform="rotate(180 932 945)" fill="white"/>
<circle cx="987" cy="910" r="5" transform="rotate(180 987 910)" fill="white"/>
<circle cx="912" cy="944" r="10" transform="rotate(180 912 944)" fill="white"/>
<circle cx="892" cy="944" r="10" transform="rotate(180 892 944)" fill="white"/>
<circle cx="892" cy="924" r="10" transform="rotate(180 892 924)" fill="white"/>
<circle cx="872" cy="924" r="10" transform="rotate(180 872 924)" fill="white"/>
<circle cx="872" cy="904" r="10" transform="rotate(180 872 904)" fill="white"/>
<circle cx="852" cy="904" r="10" transform="rotate(180 852 904)" fill="white"/>
<circle cx="852" cy="884" r="10" transform="rotate(180 852 884)" fill="white"/>
<circle cx="832" cy="884" r="10" transform="rotate(180 832 884)" fill="white"/>
<circle cx="834.5" cy="901.5" r="7.5" transform="rotate(180 834.5 901.5)" fill="white"/>
<circle cx="869.5" cy="886.5" r="7.5" transform="rotate(180 869.5 886.5)" fill="white"/>
<circle cx="854.5" cy="921.5" r="7.5" transform="rotate(180 854.5 921.5)" fill="white"/>
<circle cx="889.5" cy="906.5" r="7.5" transform="rotate(180 889.5 906.5)" fill="white"/>
<circle cx="874.5" cy="941.5" r="7.5" transform="rotate(180 874.5 941.5)" fill="white"/>
<circle cx="909.5" cy="926.5" r="7.5" transform="rotate(180 909.5 926.5)" fill="white"/>
<circle cx="904.5" cy="911.5" r="7.5" transform="rotate(180 904.5 911.5)" fill="white"/>
<circle cx="859.5" cy="936.5" r="7.5" transform="rotate(180 859.5 936.5)" fill="white"/>
<circle cx="884.5" cy="891.5" r="7.5" transform="rotate(180 884.5 891.5)" fill="white"/>
<circle cx="839.5" cy="916.5" r="7.5" transform="rotate(180 839.5 916.5)" fill="white"/>
<circle cx="845" cy="931" r="5" transform="rotate(180 845 931)" fill="white"/>
<circle cx="900" cy="896" r="5" transform="rotate(180 900 896)" fill="white"/>
<circle cx="904" cy="1011" r="10" transform="rotate(180 904 1011)" fill="white"/>
<circle cx="884" cy="1011" r="10" transform="rotate(180 884 1011)" fill="white"/>
<circle cx="884" cy="991" r="10" transform="rotate(180 884 991)" fill="white"/>
<circle cx="864" cy="991" r="10" transform="rotate(180 864 991)" fill="white"/>
<circle cx="864" cy="971" r="10" transform="rotate(180 864 971)" fill="white"/>
<circle cx="844" cy="971" r="10" transform="rotate(180 844 971)" fill="white"/>
<circle cx="844" cy="951" r="10" transform="rotate(180 844 951)" fill="white"/>
<circle cx="824" cy="951" r="10" transform="rotate(180 824 951)" fill="white"/>
<circle cx="826.5" cy="968.5" r="7.5" transform="rotate(180 826.5 968.5)" fill="white"/>
<circle cx="861.5" cy="953.5" r="7.5" transform="rotate(180 861.5 953.5)" fill="white"/>
<circle cx="846.5" cy="988.5" r="7.5" transform="rotate(180 846.5 988.5)" fill="white"/>
<circle cx="881.5" cy="973.5" r="7.5" transform="rotate(180 881.5 973.5)" fill="white"/>
<circle cx="866.5" cy="1008.5" r="7.5" transform="rotate(180 866.5 1008.5)" fill="white"/>
<circle cx="901.5" cy="993.5" r="7.5" transform="rotate(180 901.5 993.5)" fill="white"/>
<circle cx="896.5" cy="978.5" r="7.5" transform="rotate(180 896.5 978.5)" fill="white"/>
<circle cx="851.5" cy="1003.5" r="7.5" transform="rotate(180 851.5 1003.5)" fill="white"/>
<circle cx="876.5" cy="958.5" r="7.5" transform="rotate(180 876.5 958.5)" fill="white"/>
<circle cx="831.5" cy="983.5" r="7.5" transform="rotate(180 831.5 983.5)" fill="white"/>
<circle cx="837" cy="998" r="5" transform="rotate(180 837 998)" fill="white"/>
<circle cx="892" cy="963" r="5" transform="rotate(180 892 963)" fill="white"/>
<circle cx="894" cy="1076" r="10" transform="rotate(180 894 1076)" fill="white"/>
<circle cx="874" cy="1076" r="10" transform="rotate(180 874 1076)" fill="white"/>
<circle cx="874" cy="1056" r="10" transform="rotate(180 874 1056)" fill="white"/>
<circle cx="854" cy="1056" r="10" transform="rotate(180 854 1056)" fill="white"/>
<circle cx="854" cy="1036" r="10" transform="rotate(180 854 1036)" fill="white"/>
<circle cx="834" cy="1036" r="10" transform="rotate(180 834 1036)" fill="white"/>
<circle cx="834" cy="1016" r="10" transform="rotate(180 834 1016)" fill="white"/>
<circle cx="814" cy="1016" r="10" transform="rotate(180 814 1016)" fill="white"/>
<circle cx="816.5" cy="1033.5" r="7.5" transform="rotate(180 816.5 1033.5)" fill="white"/>
<circle cx="851.5" cy="1018.5" r="7.5" transform="rotate(180 851.5 1018.5)" fill="white"/>
<circle cx="836.5" cy="1053.5" r="7.5" transform="rotate(180 836.5 1053.5)" fill="white"/>
<circle cx="871.5" cy="1038.5" r="7.5" transform="rotate(180 871.5 1038.5)" fill="white"/>
<circle cx="856.5" cy="1073.5" r="7.5" transform="rotate(180 856.5 1073.5)" fill="white"/>
<circle cx="891.5" cy="1058.5" r="7.5" transform="rotate(180 891.5 1058.5)" fill="white"/>
<circle cx="886.5" cy="1043.5" r="7.5" transform="rotate(180 886.5 1043.5)" fill="white"/>
<circle cx="841.5" cy="1068.5" r="7.5" transform="rotate(180 841.5 1068.5)" fill="white"/>
<circle cx="866.5" cy="1023.5" r="7.5" transform="rotate(180 866.5 1023.5)" fill="white"/>
<circle cx="821.5" cy="1048.5" r="7.5" transform="rotate(180 821.5 1048.5)" fill="white"/>
<circle cx="827" cy="1063" r="5" transform="rotate(180 827 1063)" fill="white"/>
<circle cx="882" cy="1028" r="5" transform="rotate(180 882 1028)" fill="white"/>
<circle cx="984" cy="1091" r="10" transform="rotate(180 984 1091)" fill="white"/>
<circle cx="964" cy="1091" r="10" transform="rotate(180 964 1091)" fill="white"/>
<circle cx="964" cy="1071" r="10" transform="rotate(180 964 1071)" fill="white"/>
<circle cx="944" cy="1071" r="10" transform="rotate(180 944 1071)" fill="white"/>
<circle cx="944" cy="1051" r="10" transform="rotate(180 944 1051)" fill="white"/>
<circle cx="924" cy="1051" r="10" transform="rotate(180 924 1051)" fill="white"/>
<circle cx="924" cy="1031" r="10" transform="rotate(180 924 1031)" fill="white"/>
<circle cx="904" cy="1031" r="10" transform="rotate(180 904 1031)" fill="white"/>
<circle cx="906.5" cy="1048.5" r="7.5" transform="rotate(180 906.5 1048.5)" fill="white"/>
<circle cx="941.5" cy="1033.5" r="7.5" transform="rotate(180 941.5 1033.5)" fill="white"/>
<circle cx="926.5" cy="1068.5" r="7.5" transform="rotate(180 926.5 1068.5)" fill="white"/>
<circle cx="961.5" cy="1053.5" r="7.5" transform="rotate(180 961.5 1053.5)" fill="white"/>
<circle cx="946.5" cy="1088.5" r="7.5" transform="rotate(180 946.5 1088.5)" fill="white"/>
<circle cx="981.5" cy="1073.5" r="7.5" transform="rotate(180 981.5 1073.5)" fill="white"/>
<circle cx="976.5" cy="1058.5" r="7.5" transform="rotate(180 976.5 1058.5)" fill="white"/>
<circle cx="931.5" cy="1083.5" r="7.5" transform="rotate(180 931.5 1083.5)" fill="white"/>
<circle cx="956.5" cy="1038.5" r="7.5" transform="rotate(180 956.5 1038.5)" fill="white"/>
<circle cx="911.5" cy="1063.5" r="7.5" transform="rotate(180 911.5 1063.5)" fill="white"/>
<circle cx="917" cy="1078" r="5" transform="rotate(180 917 1078)" fill="white"/>
<circle cx="972" cy="1043" r="5" transform="rotate(180 972 1043)" fill="white"/>
<circle cx="1070" cy="1104" r="10" transform="rotate(180 1070 1104)" fill="white"/>
<circle cx="1050" cy="1104" r="10" transform="rotate(180 1050 1104)" fill="white"/>
<circle cx="1050" cy="1084" r="10" transform="rotate(180 1050 1084)" fill="white"/>
<circle cx="1030" cy="1084" r="10" transform="rotate(180 1030 1084)" fill="white"/>
<circle cx="1030" cy="1064" r="10" transform="rotate(180 1030 1064)" fill="white"/>
<circle cx="1010" cy="1064" r="10" transform="rotate(180 1010 1064)" fill="white"/>
<circle cx="1010" cy="1044" r="10" transform="rotate(180 1010 1044)" fill="white"/>
<circle cx="990" cy="1044" r="10" transform="rotate(180 990 1044)" fill="white"/>
<circle cx="992.5" cy="1061.5" r="7.5" transform="rotate(180 992.5 1061.5)" fill="white"/>
<circle cx="1027.5" cy="1046.5" r="7.5" transform="rotate(180 1027.5 1046.5)" fill="white"/>
<circle cx="1012.5" cy="1081.5" r="7.5" transform="rotate(180 1012.5 1081.5)" fill="white"/>
<circle cx="1047.5" cy="1066.5" r="7.5" transform="rotate(180 1047.5 1066.5)" fill="white"/>
<circle cx="1032.5" cy="1101.5" r="7.5" transform="rotate(180 1032.5 1101.5)" fill="white"/>
<circle cx="1067.5" cy="1086.5" r="7.5" transform="rotate(180 1067.5 1086.5)" fill="white"/>
<circle cx="1062.5" cy="1071.5" r="7.5" transform="rotate(180 1062.5 1071.5)" fill="white"/>
<circle cx="1017.5" cy="1096.5" r="7.5" transform="rotate(180 1017.5 1096.5)" fill="white"/>
<circle cx="1042.5" cy="1051.5" r="7.5" transform="rotate(180 1042.5 1051.5)" fill="white"/>
<circle cx="997.5" cy="1076.5" r="7.5" transform="rotate(180 997.5 1076.5)" fill="white"/>
<circle cx="1003" cy="1091" r="5" transform="rotate(180 1003 1091)" fill="white"/>
<circle cx="1058" cy="1056" r="5" transform="rotate(180 1058 1056)" fill="white"/>
<circle cx="1079" cy="1038" r="10" transform="rotate(180 1079 1038)" fill="white"/>
<circle cx="1059" cy="1038" r="10" transform="rotate(180 1059 1038)" fill="white"/>
<circle cx="1059" cy="1018" r="10" transform="rotate(180 1059 1018)" fill="white"/>
<circle cx="1039" cy="1018" r="10" transform="rotate(180 1039 1018)" fill="white"/>
<circle cx="1039" cy="998" r="10" transform="rotate(180 1039 998)" fill="white"/>
<circle cx="1019" cy="998" r="10" transform="rotate(180 1019 998)" fill="white"/>
<circle cx="1019" cy="978" r="10" transform="rotate(180 1019 978)" fill="white"/>
<circle cx="999" cy="978" r="10" transform="rotate(180 999 978)" fill="white"/>
<circle cx="1001.5" cy="995.5" r="7.5" transform="rotate(180 1001.5 995.5)" fill="white"/>
<circle cx="1036.5" cy="980.5" r="7.5" transform="rotate(180 1036.5 980.5)" fill="white"/>
<circle cx="1021.5" cy="1015.5" r="7.5" transform="rotate(180 1021.5 1015.5)" fill="white"/>
<circle cx="1056.5" cy="1000.5" r="7.5" transform="rotate(180 1056.5 1000.5)" fill="white"/>
<circle cx="1041.5" cy="1035.5" r="7.5" transform="rotate(180 1041.5 1035.5)" fill="white"/>
<circle cx="1076.5" cy="1020.5" r="7.5" transform="rotate(180 1076.5 1020.5)" fill="white"/>
<circle cx="1071.5" cy="1005.5" r="7.5" transform="rotate(180 1071.5 1005.5)" fill="white"/>
<circle cx="1026.5" cy="1030.5" r="7.5" transform="rotate(180 1026.5 1030.5)" fill="white"/>
<circle cx="1051.5" cy="985.5" r="7.5" transform="rotate(180 1051.5 985.5)" fill="white"/>
<circle cx="1006.5" cy="1010.5" r="7.5" transform="rotate(180 1006.5 1010.5)" fill="white"/>
<circle cx="1012" cy="1025" r="5" transform="rotate(180 1012 1025)" fill="white"/>
<circle cx="1067" cy="990" r="5" transform="rotate(180 1067 990)" fill="white"/>
<circle cx="1084" cy="971" r="10" transform="rotate(180 1084 971)" fill="white"/>
<circle cx="1064" cy="971" r="10" transform="rotate(180 1064 971)" fill="white"/>
<circle cx="1064" cy="951" r="10" transform="rotate(180 1064 951)" fill="white"/>
<circle cx="1044" cy="951" r="10" transform="rotate(180 1044 951)" fill="white"/>
<circle cx="1044" cy="931" r="10" transform="rotate(180 1044 931)" fill="white"/>
<circle cx="1024" cy="931" r="10" transform="rotate(180 1024 931)" fill="white"/>
<circle cx="1024" cy="911" r="10" transform="rotate(180 1024 911)" fill="white"/>
<circle cx="1004" cy="911" r="10" transform="rotate(180 1004 911)" fill="white"/>
<circle cx="1006.5" cy="928.5" r="7.5" transform="rotate(180 1006.5 928.5)" fill="white"/>
<circle cx="1041.5" cy="913.5" r="7.5" transform="rotate(180 1041.5 913.5)" fill="white"/>
<circle cx="1026.5" cy="948.5" r="7.5" transform="rotate(180 1026.5 948.5)" fill="white"/>
<circle cx="1061.5" cy="933.5" r="7.5" transform="rotate(180 1061.5 933.5)" fill="white"/>
<circle cx="1046.5" cy="968.5" r="7.5" transform="rotate(180 1046.5 968.5)" fill="white"/>
<circle cx="1081.5" cy="953.5" r="7.5" transform="rotate(180 1081.5 953.5)" fill="white"/>
<circle cx="1076.5" cy="938.5" r="7.5" transform="rotate(180 1076.5 938.5)" fill="white"/>
<circle cx="1031.5" cy="963.5" r="7.5" transform="rotate(180 1031.5 963.5)" fill="white"/>
<circle cx="1056.5" cy="918.5" r="7.5" transform="rotate(180 1056.5 918.5)" fill="white"/>
<circle cx="1011.5" cy="943.5" r="7.5" transform="rotate(180 1011.5 943.5)" fill="white"/>
<circle cx="1017" cy="958" r="5" transform="rotate(180 1017 958)" fill="white"/>
<circle cx="1072" cy="923" r="5" transform="rotate(180 1072 923)" fill="white"/>
<circle cx="1084" cy="901" r="10" transform="rotate(180 1084 901)" fill="white"/>
<circle cx="1064" cy="901" r="10" transform="rotate(180 1064 901)" fill="white"/>
<circle cx="1064" cy="881" r="10" transform="rotate(180 1064 881)" fill="white"/>
<circle cx="1044" cy="881" r="10" transform="rotate(180 1044 881)" fill="white"/>
<circle cx="1044" cy="861" r="10" transform="rotate(180 1044 861)" fill="white"/>
<circle cx="1024" cy="861" r="10" transform="rotate(180 1024 861)" fill="white"/>
<circle cx="1024" cy="841" r="10" transform="rotate(180 1024 841)" fill="white"/>
<circle cx="1004" cy="841" r="10" transform="rotate(180 1004 841)" fill="white"/>
<circle cx="1006.5" cy="858.5" r="7.5" transform="rotate(180 1006.5 858.5)" fill="white"/>
<circle cx="1041.5" cy="843.5" r="7.5" transform="rotate(180 1041.5 843.5)" fill="white"/>
<circle cx="1026.5" cy="878.5" r="7.5" transform="rotate(180 1026.5 878.5)" fill="white"/>
<circle cx="1061.5" cy="863.5" r="7.5" transform="rotate(180 1061.5 863.5)" fill="white"/>
<circle cx="1046.5" cy="898.5" r="7.5" transform="rotate(180 1046.5 898.5)" fill="white"/>
<circle cx="1081.5" cy="883.5" r="7.5" transform="rotate(180 1081.5 883.5)" fill="white"/>
<circle cx="1076.5" cy="868.5" r="7.5" transform="rotate(180 1076.5 868.5)" fill="white"/>
<circle cx="1031.5" cy="893.5" r="7.5" transform="rotate(180 1031.5 893.5)" fill="white"/>
<circle cx="1056.5" cy="848.5" r="7.5" transform="rotate(180 1056.5 848.5)" fill="white"/>
<circle cx="1011.5" cy="873.5" r="7.5" transform="rotate(180 1011.5 873.5)" fill="white"/>
<circle cx="1017" cy="888" r="5" transform="rotate(180 1017 888)" fill="white"/>
<circle cx="1072" cy="853" r="5" transform="rotate(180 1072 853)" fill="white"/>
<circle cx="999" cy="890" r="10" transform="rotate(180 999 890)" fill="white"/>
<circle cx="979" cy="890" r="10" transform="rotate(180 979 890)" fill="white"/>
<circle cx="979" cy="870" r="10" transform="rotate(180 979 870)" fill="white"/>
<circle cx="959" cy="870" r="10" transform="rotate(180 959 870)" fill="white"/>
<circle cx="959" cy="850" r="10" transform="rotate(180 959 850)" fill="white"/>
<circle cx="939" cy="850" r="10" transform="rotate(180 939 850)" fill="white"/>
<circle cx="939" cy="830" r="10" transform="rotate(180 939 830)" fill="white"/>
<circle cx="919" cy="830" r="10" transform="rotate(180 919 830)" fill="white"/>
<circle cx="921.5" cy="847.5" r="7.5" transform="rotate(180 921.5 847.5)" fill="white"/>
<circle cx="956.5" cy="832.5" r="7.5" transform="rotate(180 956.5 832.5)" fill="white"/>
<circle cx="941.5" cy="867.5" r="7.5" transform="rotate(180 941.5 867.5)" fill="white"/>
<circle cx="976.5" cy="852.5" r="7.5" transform="rotate(180 976.5 852.5)" fill="white"/>
<circle cx="961.5" cy="887.5" r="7.5" transform="rotate(180 961.5 887.5)" fill="white"/>
<circle cx="996.5" cy="872.5" r="7.5" transform="rotate(180 996.5 872.5)" fill="white"/>
<circle cx="991.5" cy="857.5" r="7.5" transform="rotate(180 991.5 857.5)" fill="white"/>
<circle cx="946.5" cy="882.5" r="7.5" transform="rotate(180 946.5 882.5)" fill="white"/>
<circle cx="971.5" cy="837.5" r="7.5" transform="rotate(180 971.5 837.5)" fill="white"/>
<circle cx="926.5" cy="862.5" r="7.5" transform="rotate(180 926.5 862.5)" fill="white"/>
<circle cx="932" cy="877" r="5" transform="rotate(180 932 877)" fill="white"/>
<circle cx="987" cy="842" r="5" transform="rotate(180 987 842)" fill="white"/>
<circle cx="833" cy="794" r="10" transform="rotate(180 833 794)" fill="white"/>
<circle cx="813" cy="794" r="10" transform="rotate(180 813 794)" fill="white"/>
<circle cx="813" cy="774" r="10" transform="rotate(180 813 774)" fill="white"/>
<circle cx="793" cy="774" r="10" transform="rotate(180 793 774)" fill="white"/>
<circle cx="793" cy="754" r="10" transform="rotate(180 793 754)" fill="white"/>
<circle cx="773" cy="754" r="10" transform="rotate(180 773 754)" fill="white"/>
<circle cx="773" cy="734" r="10" transform="rotate(180 773 734)" fill="white"/>
<circle cx="753" cy="734" r="10" transform="rotate(180 753 734)" fill="white"/>
<circle cx="755.5" cy="751.5" r="7.5" transform="rotate(180 755.5 751.5)" fill="white"/>
<circle cx="790.5" cy="736.5" r="7.5" transform="rotate(180 790.5 736.5)" fill="white"/>
<circle cx="775.5" cy="771.5" r="7.5" transform="rotate(180 775.5 771.5)" fill="white"/>
<circle cx="810.5" cy="756.5" r="7.5" transform="rotate(180 810.5 756.5)" fill="white"/>
<circle cx="795.5" cy="791.5" r="7.5" transform="rotate(180 795.5 791.5)" fill="white"/>
<circle cx="830.5" cy="776.5" r="7.5" transform="rotate(180 830.5 776.5)" fill="white"/>
<circle cx="825.5" cy="761.5" r="7.5" transform="rotate(180 825.5 761.5)" fill="white"/>
<circle cx="780.5" cy="786.5" r="7.5" transform="rotate(180 780.5 786.5)" fill="white"/>
<circle cx="805.5" cy="741.5" r="7.5" transform="rotate(180 805.5 741.5)" fill="white"/>
<circle cx="760.5" cy="766.5" r="7.5" transform="rotate(180 760.5 766.5)" fill="white"/>
<circle cx="766" cy="781" r="5" transform="rotate(180 766 781)" fill="white"/>
<circle cx="821" cy="746" r="5" transform="rotate(180 821 746)" fill="white"/>
<circle cx="840" cy="728" r="10" transform="rotate(180 840 728)" fill="white"/>
<circle cx="820" cy="728" r="10" transform="rotate(180 820 728)" fill="white"/>
<circle cx="820" cy="708" r="10" transform="rotate(180 820 708)" fill="white"/>
<circle cx="800" cy="708" r="10" transform="rotate(180 800 708)" fill="white"/>
<circle cx="800" cy="688" r="10" transform="rotate(180 800 688)" fill="white"/>
<circle cx="780" cy="688" r="10" transform="rotate(180 780 688)" fill="white"/>
<circle cx="780" cy="668" r="10" transform="rotate(180 780 668)" fill="white"/>
<circle cx="760" cy="668" r="10" transform="rotate(180 760 668)" fill="white"/>
<circle cx="762.5" cy="685.5" r="7.5" transform="rotate(180 762.5 685.5)" fill="white"/>
<circle cx="797.5" cy="670.5" r="7.5" transform="rotate(180 797.5 670.5)" fill="white"/>
<circle cx="782.5" cy="705.5" r="7.5" transform="rotate(180 782.5 705.5)" fill="white"/>
<circle cx="817.5" cy="690.5" r="7.5" transform="rotate(180 817.5 690.5)" fill="white"/>
<circle cx="802.5" cy="725.5" r="7.5" transform="rotate(180 802.5 725.5)" fill="white"/>
<circle cx="837.5" cy="710.5" r="7.5" transform="rotate(180 837.5 710.5)" fill="white"/>
<circle cx="832.5" cy="695.5" r="7.5" transform="rotate(180 832.5 695.5)" fill="white"/>
<circle cx="787.5" cy="720.5" r="7.5" transform="rotate(180 787.5 720.5)" fill="white"/>
<circle cx="812.5" cy="675.5" r="7.5" transform="rotate(180 812.5 675.5)" fill="white"/>
<circle cx="767.5" cy="700.5" r="7.5" transform="rotate(180 767.5 700.5)" fill="white"/>
<circle cx="773" cy="715" r="5" transform="rotate(180 773 715)" fill="white"/>
<circle cx="828" cy="680" r="5" transform="rotate(180 828 680)" fill="white"/>
<circle cx="753" cy="714" r="10" transform="rotate(180 753 714)" fill="white"/>
<circle cx="733" cy="714" r="10" transform="rotate(180 733 714)" fill="white"/>
<circle cx="733" cy="694" r="10" transform="rotate(180 733 694)" fill="white"/>
<circle cx="713" cy="694" r="10" transform="rotate(180 713 694)" fill="white"/>
<circle cx="713" cy="674" r="10" transform="rotate(180 713 674)" fill="white"/>
<circle cx="693" cy="674" r="10" transform="rotate(180 693 674)" fill="white"/>
<circle cx="693" cy="654" r="10" transform="rotate(180 693 654)" fill="white"/>
<circle cx="673" cy="654" r="10" transform="rotate(180 673 654)" fill="white"/>
<circle cx="675.5" cy="671.5" r="7.5" transform="rotate(180 675.5 671.5)" fill="white"/>
<circle cx="710.5" cy="656.5" r="7.5" transform="rotate(180 710.5 656.5)" fill="white"/>
<circle cx="695.5" cy="691.5" r="7.5" transform="rotate(180 695.5 691.5)" fill="white"/>
<circle cx="730.5" cy="676.5" r="7.5" transform="rotate(180 730.5 676.5)" fill="white"/>
<circle cx="715.5" cy="711.5" r="7.5" transform="rotate(180 715.5 711.5)" fill="white"/>
<circle cx="750.5" cy="696.5" r="7.5" transform="rotate(180 750.5 696.5)" fill="white"/>
<circle cx="745.5" cy="681.5" r="7.5" transform="rotate(180 745.5 681.5)" fill="white"/>
<circle cx="700.5" cy="706.5" r="7.5" transform="rotate(180 700.5 706.5)" fill="white"/>
<circle cx="725.5" cy="661.5" r="7.5" transform="rotate(180 725.5 661.5)" fill="white"/>
<circle cx="680.5" cy="686.5" r="7.5" transform="rotate(180 680.5 686.5)" fill="white"/>
<circle cx="686" cy="701" r="5" transform="rotate(180 686 701)" fill="white"/>
<circle cx="741" cy="666" r="5" transform="rotate(180 741 666)" fill="white"/>
<circle cx="745" cy="781" r="10" transform="rotate(180 745 781)" fill="white"/>
<circle cx="725" cy="781" r="10" transform="rotate(180 725 781)" fill="white"/>
<circle cx="725" cy="761" r="10" transform="rotate(180 725 761)" fill="white"/>
<circle cx="705" cy="761" r="10" transform="rotate(180 705 761)" fill="white"/>
<circle cx="705" cy="741" r="10" transform="rotate(180 705 741)" fill="white"/>
<circle cx="685" cy="741" r="10" transform="rotate(180 685 741)" fill="white"/>
<circle cx="685" cy="721" r="10" transform="rotate(180 685 721)" fill="white"/>
<circle cx="665" cy="721" r="10" transform="rotate(180 665 721)" fill="white"/>
<circle cx="667.5" cy="738.5" r="7.5" transform="rotate(180 667.5 738.5)" fill="white"/>
<circle cx="702.5" cy="723.5" r="7.5" transform="rotate(180 702.5 723.5)" fill="white"/>
<circle cx="687.5" cy="758.5" r="7.5" transform="rotate(180 687.5 758.5)" fill="white"/>
<circle cx="722.5" cy="743.5" r="7.5" transform="rotate(180 722.5 743.5)" fill="white"/>
<circle cx="707.5" cy="778.5" r="7.5" transform="rotate(180 707.5 778.5)" fill="white"/>
<circle cx="742.5" cy="763.5" r="7.5" transform="rotate(180 742.5 763.5)" fill="white"/>
<circle cx="737.5" cy="748.5" r="7.5" transform="rotate(180 737.5 748.5)" fill="white"/>
<circle cx="692.5" cy="773.5" r="7.5" transform="rotate(180 692.5 773.5)" fill="white"/>
<circle cx="717.5" cy="728.5" r="7.5" transform="rotate(180 717.5 728.5)" fill="white"/>
<circle cx="672.5" cy="753.5" r="7.5" transform="rotate(180 672.5 753.5)" fill="white"/>
<circle cx="678" cy="768" r="5" transform="rotate(180 678 768)" fill="white"/>
<circle cx="733" cy="733" r="5" transform="rotate(180 733 733)" fill="white"/>
<circle cx="735" cy="846" r="10" transform="rotate(180 735 846)" fill="white"/>
<circle cx="715" cy="846" r="10" transform="rotate(180 715 846)" fill="white"/>
<circle cx="715" cy="826" r="10" transform="rotate(180 715 826)" fill="white"/>
<circle cx="695" cy="826" r="10" transform="rotate(180 695 826)" fill="white"/>
<circle cx="695" cy="806" r="10" transform="rotate(180 695 806)" fill="white"/>
<circle cx="675" cy="806" r="10" transform="rotate(180 675 806)" fill="white"/>
<circle cx="675" cy="786" r="10" transform="rotate(180 675 786)" fill="white"/>
<circle cx="655" cy="786" r="10" transform="rotate(180 655 786)" fill="white"/>
<circle cx="657.5" cy="803.5" r="7.5" transform="rotate(180 657.5 803.5)" fill="white"/>
<circle cx="692.5" cy="788.5" r="7.5" transform="rotate(180 692.5 788.5)" fill="white"/>
<circle cx="677.5" cy="823.5" r="7.5" transform="rotate(180 677.5 823.5)" fill="white"/>
<circle cx="712.5" cy="808.5" r="7.5" transform="rotate(180 712.5 808.5)" fill="white"/>
<circle cx="697.5" cy="843.5" r="7.5" transform="rotate(180 697.5 843.5)" fill="white"/>
<circle cx="732.5" cy="828.5" r="7.5" transform="rotate(180 732.5 828.5)" fill="white"/>
<circle cx="727.5" cy="813.5" r="7.5" transform="rotate(180 727.5 813.5)" fill="white"/>
<circle cx="682.5" cy="838.5" r="7.5" transform="rotate(180 682.5 838.5)" fill="white"/>
<circle cx="707.5" cy="793.5" r="7.5" transform="rotate(180 707.5 793.5)" fill="white"/>
<circle cx="662.5" cy="818.5" r="7.5" transform="rotate(180 662.5 818.5)" fill="white"/>
<circle cx="668" cy="833" r="5" transform="rotate(180 668 833)" fill="white"/>
<circle cx="723" cy="798" r="5" transform="rotate(180 723 798)" fill="white"/>
<circle cx="825" cy="861" r="10" transform="rotate(180 825 861)" fill="white"/>
<circle cx="805" cy="861" r="10" transform="rotate(180 805 861)" fill="white"/>
<circle cx="805" cy="841" r="10" transform="rotate(180 805 841)" fill="white"/>
<circle cx="785" cy="841" r="10" transform="rotate(180 785 841)" fill="white"/>
<circle cx="785" cy="821" r="10" transform="rotate(180 785 821)" fill="white"/>
<circle cx="765" cy="821" r="10" transform="rotate(180 765 821)" fill="white"/>
<circle cx="765" cy="801" r="10" transform="rotate(180 765 801)" fill="white"/>
<circle cx="745" cy="801" r="10" transform="rotate(180 745 801)" fill="white"/>
<circle cx="747.5" cy="818.5" r="7.5" transform="rotate(180 747.5 818.5)" fill="white"/>
<circle cx="782.5" cy="803.5" r="7.5" transform="rotate(180 782.5 803.5)" fill="white"/>
<circle cx="767.5" cy="838.5" r="7.5" transform="rotate(180 767.5 838.5)" fill="white"/>
<circle cx="802.5" cy="823.5" r="7.5" transform="rotate(180 802.5 823.5)" fill="white"/>
<circle cx="787.5" cy="858.5" r="7.5" transform="rotate(180 787.5 858.5)" fill="white"/>
<circle cx="822.5" cy="843.5" r="7.5" transform="rotate(180 822.5 843.5)" fill="white"/>
<circle cx="817.5" cy="828.5" r="7.5" transform="rotate(180 817.5 828.5)" fill="white"/>
<circle cx="772.5" cy="853.5" r="7.5" transform="rotate(180 772.5 853.5)" fill="white"/>
<circle cx="797.5" cy="808.5" r="7.5" transform="rotate(180 797.5 808.5)" fill="white"/>
<circle cx="752.5" cy="833.5" r="7.5" transform="rotate(180 752.5 833.5)" fill="white"/>
<circle cx="758" cy="848" r="5" transform="rotate(180 758 848)" fill="white"/>
<circle cx="813" cy="813" r="5" transform="rotate(180 813 813)" fill="white"/>
<circle cx="911" cy="874" r="10" transform="rotate(180 911 874)" fill="white"/>
<circle cx="891" cy="874" r="10" transform="rotate(180 891 874)" fill="white"/>
<circle cx="891" cy="854" r="10" transform="rotate(180 891 854)" fill="white"/>
<circle cx="871" cy="854" r="10" transform="rotate(180 871 854)" fill="white"/>
<circle cx="871" cy="834" r="10" transform="rotate(180 871 834)" fill="white"/>
<circle cx="851" cy="834" r="10" transform="rotate(180 851 834)" fill="white"/>
<circle cx="851" cy="814" r="10" transform="rotate(180 851 814)" fill="white"/>
<circle cx="831" cy="814" r="10" transform="rotate(180 831 814)" fill="white"/>
<circle cx="833.5" cy="831.5" r="7.5" transform="rotate(180 833.5 831.5)" fill="white"/>
<circle cx="868.5" cy="816.5" r="7.5" transform="rotate(180 868.5 816.5)" fill="white"/>
<circle cx="853.5" cy="851.5" r="7.5" transform="rotate(180 853.5 851.5)" fill="white"/>
<circle cx="888.5" cy="836.5" r="7.5" transform="rotate(180 888.5 836.5)" fill="white"/>
<circle cx="873.5" cy="871.5" r="7.5" transform="rotate(180 873.5 871.5)" fill="white"/>
<circle cx="908.5" cy="856.5" r="7.5" transform="rotate(180 908.5 856.5)" fill="white"/>
<circle cx="903.5" cy="841.5" r="7.5" transform="rotate(180 903.5 841.5)" fill="white"/>
<circle cx="858.5" cy="866.5" r="7.5" transform="rotate(180 858.5 866.5)" fill="white"/>
<circle cx="883.5" cy="821.5" r="7.5" transform="rotate(180 883.5 821.5)" fill="white"/>
<circle cx="838.5" cy="846.5" r="7.5" transform="rotate(180 838.5 846.5)" fill="white"/>
<circle cx="844" cy="861" r="5" transform="rotate(180 844 861)" fill="white"/>
<circle cx="899" cy="826" r="5" transform="rotate(180 899 826)" fill="white"/>
<circle cx="920" cy="808" r="10" transform="rotate(180 920 808)" fill="white"/>
<circle cx="900" cy="808" r="10" transform="rotate(180 900 808)" fill="white"/>
<circle cx="900" cy="788" r="10" transform="rotate(180 900 788)" fill="white"/>
<circle cx="880" cy="788" r="10" transform="rotate(180 880 788)" fill="white"/>
<circle cx="880" cy="768" r="10" transform="rotate(180 880 768)" fill="white"/>
<circle cx="860" cy="768" r="10" transform="rotate(180 860 768)" fill="white"/>
<circle cx="860" cy="748" r="10" transform="rotate(180 860 748)" fill="white"/>
<circle cx="840" cy="748" r="10" transform="rotate(180 840 748)" fill="white"/>
<circle cx="842.5" cy="765.5" r="7.5" transform="rotate(180 842.5 765.5)" fill="white"/>
<circle cx="877.5" cy="750.5" r="7.5" transform="rotate(180 877.5 750.5)" fill="white"/>
<circle cx="862.5" cy="785.5" r="7.5" transform="rotate(180 862.5 785.5)" fill="white"/>
<circle cx="897.5" cy="770.5" r="7.5" transform="rotate(180 897.5 770.5)" fill="white"/>
<circle cx="882.5" cy="805.5" r="7.5" transform="rotate(180 882.5 805.5)" fill="white"/>
<circle cx="917.5" cy="790.5" r="7.5" transform="rotate(180 917.5 790.5)" fill="white"/>
<circle cx="912.5" cy="775.5" r="7.5" transform="rotate(180 912.5 775.5)" fill="white"/>
<circle cx="867.5" cy="800.5" r="7.5" transform="rotate(180 867.5 800.5)" fill="white"/>
<circle cx="892.5" cy="755.5" r="7.5" transform="rotate(180 892.5 755.5)" fill="white"/>
<circle cx="847.5" cy="780.5" r="7.5" transform="rotate(180 847.5 780.5)" fill="white"/>
<circle cx="853" cy="795" r="5" transform="rotate(180 853 795)" fill="white"/>
<circle cx="908" cy="760" r="5" transform="rotate(180 908 760)" fill="white"/>
<circle cx="925" cy="741" r="10" transform="rotate(180 925 741)" fill="white"/>
<circle cx="905" cy="741" r="10" transform="rotate(180 905 741)" fill="white"/>
<circle cx="905" cy="721" r="10" transform="rotate(180 905 721)" fill="white"/>
<circle cx="885" cy="721" r="10" transform="rotate(180 885 721)" fill="white"/>
<circle cx="885" cy="701" r="10" transform="rotate(180 885 701)" fill="white"/>
<circle cx="865" cy="701" r="10" transform="rotate(180 865 701)" fill="white"/>
<circle cx="865" cy="681" r="10" transform="rotate(180 865 681)" fill="white"/>
<circle cx="845" cy="681" r="10" transform="rotate(180 845 681)" fill="white"/>
<circle cx="847.5" cy="698.5" r="7.5" transform="rotate(180 847.5 698.5)" fill="white"/>
<circle cx="882.5" cy="683.5" r="7.5" transform="rotate(180 882.5 683.5)" fill="white"/>
<circle cx="867.5" cy="718.5" r="7.5" transform="rotate(180 867.5 718.5)" fill="white"/>
<circle cx="902.5" cy="703.5" r="7.5" transform="rotate(180 902.5 703.5)" fill="white"/>
<circle cx="887.5" cy="738.5" r="7.5" transform="rotate(180 887.5 738.5)" fill="white"/>
<circle cx="922.5" cy="723.5" r="7.5" transform="rotate(180 922.5 723.5)" fill="white"/>
<circle cx="917.5" cy="708.5" r="7.5" transform="rotate(180 917.5 708.5)" fill="white"/>
<circle cx="872.5" cy="733.5" r="7.5" transform="rotate(180 872.5 733.5)" fill="white"/>
<circle cx="897.5" cy="688.5" r="7.5" transform="rotate(180 897.5 688.5)" fill="white"/>
<circle cx="852.5" cy="713.5" r="7.5" transform="rotate(180 852.5 713.5)" fill="white"/>
<circle cx="858" cy="728" r="5" transform="rotate(180 858 728)" fill="white"/>
<circle cx="913" cy="693" r="5" transform="rotate(180 913 693)" fill="white"/>
<circle cx="925" cy="671" r="10" transform="rotate(180 925 671)" fill="white"/>
<circle cx="905" cy="671" r="10" transform="rotate(180 905 671)" fill="white"/>
<circle cx="905" cy="651" r="10" transform="rotate(180 905 651)" fill="white"/>
<circle cx="885" cy="651" r="10" transform="rotate(180 885 651)" fill="white"/>
<circle cx="885" cy="631" r="10" transform="rotate(180 885 631)" fill="white"/>
<circle cx="865" cy="631" r="10" transform="rotate(180 865 631)" fill="white"/>
<circle cx="865" cy="611" r="10" transform="rotate(180 865 611)" fill="white"/>
<circle cx="845" cy="611" r="10" transform="rotate(180 845 611)" fill="white"/>
<circle cx="847.5" cy="628.5" r="7.5" transform="rotate(180 847.5 628.5)" fill="white"/>
<circle cx="882.5" cy="613.5" r="7.5" transform="rotate(180 882.5 613.5)" fill="white"/>
<circle cx="867.5" cy="648.5" r="7.5" transform="rotate(180 867.5 648.5)" fill="white"/>
<circle cx="902.5" cy="633.5" r="7.5" transform="rotate(180 902.5 633.5)" fill="white"/>
<circle cx="887.5" cy="668.5" r="7.5" transform="rotate(180 887.5 668.5)" fill="white"/>
<circle cx="922.5" cy="653.5" r="7.5" transform="rotate(180 922.5 653.5)" fill="white"/>
<circle cx="917.5" cy="638.5" r="7.5" transform="rotate(180 917.5 638.5)" fill="white"/>
<circle cx="872.5" cy="663.5" r="7.5" transform="rotate(180 872.5 663.5)" fill="white"/>
<circle cx="897.5" cy="618.5" r="7.5" transform="rotate(180 897.5 618.5)" fill="white"/>
<circle cx="852.5" cy="643.5" r="7.5" transform="rotate(180 852.5 643.5)" fill="white"/>
<circle cx="858" cy="658" r="5" transform="rotate(180 858 658)" fill="white"/>
<circle cx="913" cy="623" r="5" transform="rotate(180 913 623)" fill="white"/>
<circle cx="840" cy="660" r="10" transform="rotate(180 840 660)" fill="white"/>
<circle cx="820" cy="660" r="10" transform="rotate(180 820 660)" fill="white"/>
<circle cx="820" cy="640" r="10" transform="rotate(180 820 640)" fill="white"/>
<circle cx="800" cy="640" r="10" transform="rotate(180 800 640)" fill="white"/>
<circle cx="800" cy="620" r="10" transform="rotate(180 800 620)" fill="white"/>
<circle cx="780" cy="620" r="10" transform="rotate(180 780 620)" fill="white"/>
<circle cx="780" cy="600" r="10" transform="rotate(180 780 600)" fill="white"/>
<circle cx="760" cy="600" r="10" transform="rotate(180 760 600)" fill="white"/>
<circle cx="762.5" cy="617.5" r="7.5" transform="rotate(180 762.5 617.5)" fill="white"/>
<circle cx="797.5" cy="602.5" r="7.5" transform="rotate(180 797.5 602.5)" fill="white"/>
<circle cx="782.5" cy="637.5" r="7.5" transform="rotate(180 782.5 637.5)" fill="white"/>
<circle cx="817.5" cy="622.5" r="7.5" transform="rotate(180 817.5 622.5)" fill="white"/>
<circle cx="802.5" cy="657.5" r="7.5" transform="rotate(180 802.5 657.5)" fill="white"/>
<circle cx="837.5" cy="642.5" r="7.5" transform="rotate(180 837.5 642.5)" fill="white"/>
<circle cx="832.5" cy="627.5" r="7.5" transform="rotate(180 832.5 627.5)" fill="white"/>
<circle cx="787.5" cy="652.5" r="7.5" transform="rotate(180 787.5 652.5)" fill="white"/>
<circle cx="812.5" cy="607.5" r="7.5" transform="rotate(180 812.5 607.5)" fill="white"/>
<circle cx="767.5" cy="632.5" r="7.5" transform="rotate(180 767.5 632.5)" fill="white"/>
<circle cx="773" cy="647" r="5" transform="rotate(180 773 647)" fill="white"/>
<circle cx="828" cy="612" r="5" transform="rotate(180 828 612)" fill="white"/>
<circle cx="1158" cy="1257" r="10" transform="rotate(180 1158 1257)" fill="white"/>
<circle cx="1138" cy="1257" r="10" transform="rotate(180 1138 1257)" fill="white"/>
<circle cx="1138" cy="1237" r="10" transform="rotate(180 1138 1237)" fill="white"/>
<circle cx="1118" cy="1237" r="10" transform="rotate(180 1118 1237)" fill="white"/>
<circle cx="1118" cy="1217" r="10" transform="rotate(180 1118 1217)" fill="white"/>
<circle cx="1098" cy="1217" r="10" transform="rotate(180 1098 1217)" fill="white"/>
<circle cx="1098" cy="1197" r="10" transform="rotate(180 1098 1197)" fill="white"/>
<circle cx="1078" cy="1197" r="10" transform="rotate(180 1078 1197)" fill="white"/>
<circle cx="1080.5" cy="1214.5" r="7.5" transform="rotate(180 1080.5 1214.5)" fill="white"/>
<circle cx="1115.5" cy="1199.5" r="7.5" transform="rotate(180 1115.5 1199.5)" fill="white"/>
<circle cx="1100.5" cy="1234.5" r="7.5" transform="rotate(180 1100.5 1234.5)" fill="white"/>
<circle cx="1135.5" cy="1219.5" r="7.5" transform="rotate(180 1135.5 1219.5)" fill="white"/>
<circle cx="1120.5" cy="1254.5" r="7.5" transform="rotate(180 1120.5 1254.5)" fill="white"/>
<circle cx="1155.5" cy="1239.5" r="7.5" transform="rotate(180 1155.5 1239.5)" fill="white"/>
<circle cx="1150.5" cy="1224.5" r="7.5" transform="rotate(180 1150.5 1224.5)" fill="white"/>
<circle cx="1105.5" cy="1249.5" r="7.5" transform="rotate(180 1105.5 1249.5)" fill="white"/>
<circle cx="1130.5" cy="1204.5" r="7.5" transform="rotate(180 1130.5 1204.5)" fill="white"/>
<circle cx="1085.5" cy="1229.5" r="7.5" transform="rotate(180 1085.5 1229.5)" fill="white"/>
<circle cx="1091" cy="1244" r="5" transform="rotate(180 1091 1244)" fill="white"/>
<circle cx="1146" cy="1209" r="5" transform="rotate(180 1146 1209)" fill="white"/>
<circle cx="1165" cy="1191" r="10" transform="rotate(180 1165 1191)" fill="white"/>
<circle cx="1145" cy="1191" r="10" transform="rotate(180 1145 1191)" fill="white"/>
<circle cx="1145" cy="1171" r="10" transform="rotate(180 1145 1171)" fill="white"/>
<circle cx="1125" cy="1171" r="10" transform="rotate(180 1125 1171)" fill="white"/>
<circle cx="1125" cy="1151" r="10" transform="rotate(180 1125 1151)" fill="white"/>
<circle cx="1105" cy="1151" r="10" transform="rotate(180 1105 1151)" fill="white"/>
<circle cx="1105" cy="1131" r="10" transform="rotate(180 1105 1131)" fill="white"/>
<circle cx="1085" cy="1131" r="10" transform="rotate(180 1085 1131)" fill="white"/>
<circle cx="1087.5" cy="1148.5" r="7.5" transform="rotate(180 1087.5 1148.5)" fill="white"/>
<circle cx="1122.5" cy="1133.5" r="7.5" transform="rotate(180 1122.5 1133.5)" fill="white"/>
<circle cx="1107.5" cy="1168.5" r="7.5" transform="rotate(180 1107.5 1168.5)" fill="white"/>
<circle cx="1142.5" cy="1153.5" r="7.5" transform="rotate(180 1142.5 1153.5)" fill="white"/>
<circle cx="1127.5" cy="1188.5" r="7.5" transform="rotate(180 1127.5 1188.5)" fill="white"/>
<circle cx="1162.5" cy="1173.5" r="7.5" transform="rotate(180 1162.5 1173.5)" fill="white"/>
<circle cx="1157.5" cy="1158.5" r="7.5" transform="rotate(180 1157.5 1158.5)" fill="white"/>
<circle cx="1112.5" cy="1183.5" r="7.5" transform="rotate(180 1112.5 1183.5)" fill="white"/>
<circle cx="1137.5" cy="1138.5" r="7.5" transform="rotate(180 1137.5 1138.5)" fill="white"/>
<circle cx="1092.5" cy="1163.5" r="7.5" transform="rotate(180 1092.5 1163.5)" fill="white"/>
<circle cx="1098" cy="1178" r="5" transform="rotate(180 1098 1178)" fill="white"/>
<circle cx="1153" cy="1143" r="5" transform="rotate(180 1153 1143)" fill="white"/>
<circle cx="1078" cy="1177" r="10" transform="rotate(180 1078 1177)" fill="white"/>
<circle cx="1058" cy="1177" r="10" transform="rotate(180 1058 1177)" fill="white"/>
<circle cx="1058" cy="1157" r="10" transform="rotate(180 1058 1157)" fill="white"/>
<circle cx="1038" cy="1157" r="10" transform="rotate(180 1038 1157)" fill="white"/>
<circle cx="1038" cy="1137" r="10" transform="rotate(180 1038 1137)" fill="white"/>
<circle cx="1018" cy="1137" r="10" transform="rotate(180 1018 1137)" fill="white"/>
<circle cx="1018" cy="1117" r="10" transform="rotate(180 1018 1117)" fill="white"/>
<circle cx="998" cy="1117" r="10" transform="rotate(180 998 1117)" fill="white"/>
<circle cx="1000.5" cy="1134.5" r="7.5" transform="rotate(180 1000.5 1134.5)" fill="white"/>
<circle cx="1035.5" cy="1119.5" r="7.5" transform="rotate(180 1035.5 1119.5)" fill="white"/>
<circle cx="1020.5" cy="1154.5" r="7.5" transform="rotate(180 1020.5 1154.5)" fill="white"/>
<circle cx="1055.5" cy="1139.5" r="7.5" transform="rotate(180 1055.5 1139.5)" fill="white"/>
<circle cx="1040.5" cy="1174.5" r="7.5" transform="rotate(180 1040.5 1174.5)" fill="white"/>
<circle cx="1075.5" cy="1159.5" r="7.5" transform="rotate(180 1075.5 1159.5)" fill="white"/>
<circle cx="1070.5" cy="1144.5" r="7.5" transform="rotate(180 1070.5 1144.5)" fill="white"/>
<circle cx="1025.5" cy="1169.5" r="7.5" transform="rotate(180 1025.5 1169.5)" fill="white"/>
<circle cx="1050.5" cy="1124.5" r="7.5" transform="rotate(180 1050.5 1124.5)" fill="white"/>
<circle cx="1005.5" cy="1149.5" r="7.5" transform="rotate(180 1005.5 1149.5)" fill="white"/>
<circle cx="1011" cy="1164" r="5" transform="rotate(180 1011 1164)" fill="white"/>
<circle cx="1066" cy="1129" r="5" transform="rotate(180 1066 1129)" fill="white"/>
<circle cx="1070" cy="1244" r="10" transform="rotate(180 1070 1244)" fill="white"/>
<circle cx="1050" cy="1244" r="10" transform="rotate(180 1050 1244)" fill="white"/>
<circle cx="1050" cy="1224" r="10" transform="rotate(180 1050 1224)" fill="white"/>
<circle cx="1030" cy="1224" r="10" transform="rotate(180 1030 1224)" fill="white"/>
<circle cx="1030" cy="1204" r="10" transform="rotate(180 1030 1204)" fill="white"/>
<circle cx="1010" cy="1204" r="10" transform="rotate(180 1010 1204)" fill="white"/>
<circle cx="1010" cy="1184" r="10" transform="rotate(180 1010 1184)" fill="white"/>
<circle cx="990" cy="1184" r="10" transform="rotate(180 990 1184)" fill="white"/>
<circle cx="992.5" cy="1201.5" r="7.5" transform="rotate(180 992.5 1201.5)" fill="white"/>
<circle cx="1027.5" cy="1186.5" r="7.5" transform="rotate(180 1027.5 1186.5)" fill="white"/>
<circle cx="1012.5" cy="1221.5" r="7.5" transform="rotate(180 1012.5 1221.5)" fill="white"/>
<circle cx="1047.5" cy="1206.5" r="7.5" transform="rotate(180 1047.5 1206.5)" fill="white"/>
<circle cx="1032.5" cy="1241.5" r="7.5" transform="rotate(180 1032.5 1241.5)" fill="white"/>
<circle cx="1067.5" cy="1226.5" r="7.5" transform="rotate(180 1067.5 1226.5)" fill="white"/>
<circle cx="1062.5" cy="1211.5" r="7.5" transform="rotate(180 1062.5 1211.5)" fill="white"/>
<circle cx="1017.5" cy="1236.5" r="7.5" transform="rotate(180 1017.5 1236.5)" fill="white"/>
<circle cx="1042.5" cy="1191.5" r="7.5" transform="rotate(180 1042.5 1191.5)" fill="white"/>
<circle cx="997.5" cy="1216.5" r="7.5" transform="rotate(180 997.5 1216.5)" fill="white"/>
<circle cx="1003" cy="1231" r="5" transform="rotate(180 1003 1231)" fill="white"/>
<circle cx="1058" cy="1196" r="5" transform="rotate(180 1058 1196)" fill="white"/>
<circle cx="1060" cy="1309" r="10" transform="rotate(180 1060 1309)" fill="white"/>
<circle cx="1040" cy="1309" r="10" transform="rotate(180 1040 1309)" fill="white"/>
<circle cx="1040" cy="1289" r="10" transform="rotate(180 1040 1289)" fill="white"/>
<circle cx="1020" cy="1289" r="10" transform="rotate(180 1020 1289)" fill="white"/>
<circle cx="1020" cy="1269" r="10" transform="rotate(180 1020 1269)" fill="white"/>
<circle cx="1000" cy="1269" r="10" transform="rotate(180 1000 1269)" fill="white"/>
<circle cx="1000" cy="1249" r="10" transform="rotate(180 1000 1249)" fill="white"/>
<circle cx="980" cy="1249" r="10" transform="rotate(180 980 1249)" fill="white"/>
<circle cx="982.5" cy="1266.5" r="7.5" transform="rotate(180 982.5 1266.5)" fill="white"/>
<circle cx="1017.5" cy="1251.5" r="7.5" transform="rotate(180 1017.5 1251.5)" fill="white"/>
<circle cx="1002.5" cy="1286.5" r="7.5" transform="rotate(180 1002.5 1286.5)" fill="white"/>
<circle cx="1037.5" cy="1271.5" r="7.5" transform="rotate(180 1037.5 1271.5)" fill="white"/>
<circle cx="1022.5" cy="1306.5" r="7.5" transform="rotate(180 1022.5 1306.5)" fill="white"/>
<circle cx="1057.5" cy="1291.5" r="7.5" transform="rotate(180 1057.5 1291.5)" fill="white"/>
<circle cx="1052.5" cy="1276.5" r="7.5" transform="rotate(180 1052.5 1276.5)" fill="white"/>
<circle cx="1007.5" cy="1301.5" r="7.5" transform="rotate(180 1007.5 1301.5)" fill="white"/>
<circle cx="1032.5" cy="1256.5" r="7.5" transform="rotate(180 1032.5 1256.5)" fill="white"/>
<circle cx="987.5" cy="1281.5" r="7.5" transform="rotate(180 987.5 1281.5)" fill="white"/>
<circle cx="993" cy="1296" r="5" transform="rotate(180 993 1296)" fill="white"/>
<circle cx="1048" cy="1261" r="5" transform="rotate(180 1048 1261)" fill="white"/>
<circle cx="1150" cy="1324" r="10" transform="rotate(180 1150 1324)" fill="white"/>
<circle cx="1130" cy="1324" r="10" transform="rotate(180 1130 1324)" fill="white"/>
<circle cx="1130" cy="1304" r="10" transform="rotate(180 1130 1304)" fill="white"/>
<circle cx="1110" cy="1304" r="10" transform="rotate(180 1110 1304)" fill="white"/>
<circle cx="1110" cy="1284" r="10" transform="rotate(180 1110 1284)" fill="white"/>
<circle cx="1090" cy="1284" r="10" transform="rotate(180 1090 1284)" fill="white"/>
<circle cx="1090" cy="1264" r="10" transform="rotate(180 1090 1264)" fill="white"/>
<circle cx="1070" cy="1264" r="10" transform="rotate(180 1070 1264)" fill="white"/>
<circle cx="1072.5" cy="1281.5" r="7.5" transform="rotate(180 1072.5 1281.5)" fill="white"/>
<circle cx="1107.5" cy="1266.5" r="7.5" transform="rotate(180 1107.5 1266.5)" fill="white"/>
<circle cx="1092.5" cy="1301.5" r="7.5" transform="rotate(180 1092.5 1301.5)" fill="white"/>
<circle cx="1127.5" cy="1286.5" r="7.5" transform="rotate(180 1127.5 1286.5)" fill="white"/>
<circle cx="1112.5" cy="1321.5" r="7.5" transform="rotate(180 1112.5 1321.5)" fill="white"/>
<circle cx="1147.5" cy="1306.5" r="7.5" transform="rotate(180 1147.5 1306.5)" fill="white"/>
<circle cx="1142.5" cy="1291.5" r="7.5" transform="rotate(180 1142.5 1291.5)" fill="white"/>
<circle cx="1097.5" cy="1316.5" r="7.5" transform="rotate(180 1097.5 1316.5)" fill="white"/>
<circle cx="1122.5" cy="1271.5" r="7.5" transform="rotate(180 1122.5 1271.5)" fill="white"/>
<circle cx="1077.5" cy="1296.5" r="7.5" transform="rotate(180 1077.5 1296.5)" fill="white"/>
<circle cx="1083" cy="1311" r="5" transform="rotate(180 1083 1311)" fill="white"/>
<circle cx="1138" cy="1276" r="5" transform="rotate(180 1138 1276)" fill="white"/>
<circle cx="1236" cy="1337" r="10" transform="rotate(180 1236 1337)" fill="white"/>
<circle cx="1216" cy="1337" r="10" transform="rotate(180 1216 1337)" fill="white"/>
<circle cx="1216" cy="1317" r="10" transform="rotate(180 1216 1317)" fill="white"/>
<circle cx="1196" cy="1317" r="10" transform="rotate(180 1196 1317)" fill="white"/>
<circle cx="1196" cy="1297" r="10" transform="rotate(180 1196 1297)" fill="white"/>
<circle cx="1176" cy="1297" r="10" transform="rotate(180 1176 1297)" fill="white"/>
<circle cx="1176" cy="1277" r="10" transform="rotate(180 1176 1277)" fill="white"/>
<circle cx="1156" cy="1277" r="10" transform="rotate(180 1156 1277)" fill="white"/>
<circle cx="1158.5" cy="1294.5" r="7.5" transform="rotate(180 1158.5 1294.5)" fill="white"/>
<circle cx="1193.5" cy="1279.5" r="7.5" transform="rotate(180 1193.5 1279.5)" fill="white"/>
<circle cx="1178.5" cy="1314.5" r="7.5" transform="rotate(180 1178.5 1314.5)" fill="white"/>
<circle cx="1213.5" cy="1299.5" r="7.5" transform="rotate(180 1213.5 1299.5)" fill="white"/>
<circle cx="1198.5" cy="1334.5" r="7.5" transform="rotate(180 1198.5 1334.5)" fill="white"/>
<circle cx="1233.5" cy="1319.5" r="7.5" transform="rotate(180 1233.5 1319.5)" fill="white"/>
<circle cx="1228.5" cy="1304.5" r="7.5" transform="rotate(180 1228.5 1304.5)" fill="white"/>
<circle cx="1183.5" cy="1329.5" r="7.5" transform="rotate(180 1183.5 1329.5)" fill="white"/>
<circle cx="1208.5" cy="1284.5" r="7.5" transform="rotate(180 1208.5 1284.5)" fill="white"/>
<circle cx="1163.5" cy="1309.5" r="7.5" transform="rotate(180 1163.5 1309.5)" fill="white"/>
<circle cx="1169" cy="1324" r="5" transform="rotate(180 1169 1324)" fill="white"/>
<circle cx="1224" cy="1289" r="5" transform="rotate(180 1224 1289)" fill="white"/>
<circle cx="1245" cy="1271" r="10" transform="rotate(180 1245 1271)" fill="white"/>
<circle cx="1225" cy="1271" r="10" transform="rotate(180 1225 1271)" fill="white"/>
<circle cx="1225" cy="1251" r="10" transform="rotate(180 1225 1251)" fill="white"/>
<circle cx="1205" cy="1251" r="10" transform="rotate(180 1205 1251)" fill="white"/>
<circle cx="1205" cy="1231" r="10" transform="rotate(180 1205 1231)" fill="white"/>
<circle cx="1185" cy="1231" r="10" transform="rotate(180 1185 1231)" fill="white"/>
<circle cx="1185" cy="1211" r="10" transform="rotate(180 1185 1211)" fill="white"/>
<circle cx="1165" cy="1211" r="10" transform="rotate(180 1165 1211)" fill="white"/>
<circle cx="1167.5" cy="1228.5" r="7.5" transform="rotate(180 1167.5 1228.5)" fill="white"/>
<circle cx="1202.5" cy="1213.5" r="7.5" transform="rotate(180 1202.5 1213.5)" fill="white"/>
<circle cx="1187.5" cy="1248.5" r="7.5" transform="rotate(180 1187.5 1248.5)" fill="white"/>
<circle cx="1222.5" cy="1233.5" r="7.5" transform="rotate(180 1222.5 1233.5)" fill="white"/>
<circle cx="1207.5" cy="1268.5" r="7.5" transform="rotate(180 1207.5 1268.5)" fill="white"/>
<circle cx="1242.5" cy="1253.5" r="7.5" transform="rotate(180 1242.5 1253.5)" fill="white"/>
<circle cx="1237.5" cy="1238.5" r="7.5" transform="rotate(180 1237.5 1238.5)" fill="white"/>
<circle cx="1192.5" cy="1263.5" r="7.5" transform="rotate(180 1192.5 1263.5)" fill="white"/>
<circle cx="1217.5" cy="1218.5" r="7.5" transform="rotate(180 1217.5 1218.5)" fill="white"/>
<circle cx="1172.5" cy="1243.5" r="7.5" transform="rotate(180 1172.5 1243.5)" fill="white"/>
<circle cx="1178" cy="1258" r="5" transform="rotate(180 1178 1258)" fill="white"/>
<circle cx="1233" cy="1223" r="5" transform="rotate(180 1233 1223)" fill="white"/>
<circle cx="1250" cy="1204" r="10" transform="rotate(180 1250 1204)" fill="white"/>
<circle cx="1230" cy="1204" r="10" transform="rotate(180 1230 1204)" fill="white"/>
<circle cx="1230" cy="1184" r="10" transform="rotate(180 1230 1184)" fill="white"/>
<circle cx="1210" cy="1184" r="10" transform="rotate(180 1210 1184)" fill="white"/>
<circle cx="1210" cy="1164" r="10" transform="rotate(180 1210 1164)" fill="white"/>
<circle cx="1190" cy="1164" r="10" transform="rotate(180 1190 1164)" fill="white"/>
<circle cx="1190" cy="1144" r="10" transform="rotate(180 1190 1144)" fill="white"/>
<circle cx="1170" cy="1144" r="10" transform="rotate(180 1170 1144)" fill="white"/>
<circle cx="1172.5" cy="1161.5" r="7.5" transform="rotate(180 1172.5 1161.5)" fill="white"/>
<circle cx="1207.5" cy="1146.5" r="7.5" transform="rotate(180 1207.5 1146.5)" fill="white"/>
<circle cx="1192.5" cy="1181.5" r="7.5" transform="rotate(180 1192.5 1181.5)" fill="white"/>
<circle cx="1227.5" cy="1166.5" r="7.5" transform="rotate(180 1227.5 1166.5)" fill="white"/>
<circle cx="1212.5" cy="1201.5" r="7.5" transform="rotate(180 1212.5 1201.5)" fill="white"/>
<circle cx="1247.5" cy="1186.5" r="7.5" transform="rotate(180 1247.5 1186.5)" fill="white"/>
<circle cx="1242.5" cy="1171.5" r="7.5" transform="rotate(180 1242.5 1171.5)" fill="white"/>
<circle cx="1197.5" cy="1196.5" r="7.5" transform="rotate(180 1197.5 1196.5)" fill="white"/>
<circle cx="1222.5" cy="1151.5" r="7.5" transform="rotate(180 1222.5 1151.5)" fill="white"/>
<circle cx="1177.5" cy="1176.5" r="7.5" transform="rotate(180 1177.5 1176.5)" fill="white"/>
<circle cx="1183" cy="1191" r="5" transform="rotate(180 1183 1191)" fill="white"/>
<circle cx="1238" cy="1156" r="5" transform="rotate(180 1238 1156)" fill="white"/>
<circle cx="1250" cy="1134" r="10" transform="rotate(180 1250 1134)" fill="white"/>
<circle cx="1230" cy="1134" r="10" transform="rotate(180 1230 1134)" fill="white"/>
<circle cx="1230" cy="1114" r="10" transform="rotate(180 1230 1114)" fill="white"/>
<circle cx="1210" cy="1114" r="10" transform="rotate(180 1210 1114)" fill="white"/>
<circle cx="1210" cy="1094" r="10" transform="rotate(180 1210 1094)" fill="white"/>
<circle cx="1190" cy="1094" r="10" transform="rotate(180 1190 1094)" fill="white"/>
<circle cx="1190" cy="1074" r="10" transform="rotate(180 1190 1074)" fill="white"/>
<circle cx="1170" cy="1074" r="10" transform="rotate(180 1170 1074)" fill="white"/>
<circle cx="1172.5" cy="1091.5" r="7.5" transform="rotate(180 1172.5 1091.5)" fill="white"/>
<circle cx="1207.5" cy="1076.5" r="7.5" transform="rotate(180 1207.5 1076.5)" fill="white"/>
<circle cx="1192.5" cy="1111.5" r="7.5" transform="rotate(180 1192.5 1111.5)" fill="white"/>
<circle cx="1227.5" cy="1096.5" r="7.5" transform="rotate(180 1227.5 1096.5)" fill="white"/>
<circle cx="1212.5" cy="1131.5" r="7.5" transform="rotate(180 1212.5 1131.5)" fill="white"/>
<circle cx="1247.5" cy="1116.5" r="7.5" transform="rotate(180 1247.5 1116.5)" fill="white"/>
<circle cx="1242.5" cy="1101.5" r="7.5" transform="rotate(180 1242.5 1101.5)" fill="white"/>
<circle cx="1197.5" cy="1126.5" r="7.5" transform="rotate(180 1197.5 1126.5)" fill="white"/>
<circle cx="1222.5" cy="1081.5" r="7.5" transform="rotate(180 1222.5 1081.5)" fill="white"/>
<circle cx="1177.5" cy="1106.5" r="7.5" transform="rotate(180 1177.5 1106.5)" fill="white"/>
<circle cx="1183" cy="1121" r="5" transform="rotate(180 1183 1121)" fill="white"/>
<circle cx="1238" cy="1086" r="5" transform="rotate(180 1238 1086)" fill="white"/>
<circle cx="1165" cy="1123" r="10" transform="rotate(180 1165 1123)" fill="white"/>
<circle cx="1145" cy="1123" r="10" transform="rotate(180 1145 1123)" fill="white"/>
<circle cx="1145" cy="1103" r="10" transform="rotate(180 1145 1103)" fill="white"/>
<circle cx="1125" cy="1103" r="10" transform="rotate(180 1125 1103)" fill="white"/>
<circle cx="1125" cy="1083" r="10" transform="rotate(180 1125 1083)" fill="white"/>
<circle cx="1105" cy="1083" r="10" transform="rotate(180 1105 1083)" fill="white"/>
<circle cx="1105" cy="1063" r="10" transform="rotate(180 1105 1063)" fill="white"/>
<circle cx="1085" cy="1063" r="10" transform="rotate(180 1085 1063)" fill="white"/>
<circle cx="1087.5" cy="1080.5" r="7.5" transform="rotate(180 1087.5 1080.5)" fill="white"/>
<circle cx="1122.5" cy="1065.5" r="7.5" transform="rotate(180 1122.5 1065.5)" fill="white"/>
<circle cx="1107.5" cy="1100.5" r="7.5" transform="rotate(180 1107.5 1100.5)" fill="white"/>
<circle cx="1142.5" cy="1085.5" r="7.5" transform="rotate(180 1142.5 1085.5)" fill="white"/>
<circle cx="1127.5" cy="1120.5" r="7.5" transform="rotate(180 1127.5 1120.5)" fill="white"/>
<circle cx="1162.5" cy="1105.5" r="7.5" transform="rotate(180 1162.5 1105.5)" fill="white"/>
<circle cx="1157.5" cy="1090.5" r="7.5" transform="rotate(180 1157.5 1090.5)" fill="white"/>
<circle cx="1112.5" cy="1115.5" r="7.5" transform="rotate(180 1112.5 1115.5)" fill="white"/>
<circle cx="1137.5" cy="1070.5" r="7.5" transform="rotate(180 1137.5 1070.5)" fill="white"/>
<circle cx="1092.5" cy="1095.5" r="7.5" transform="rotate(180 1092.5 1095.5)" fill="white"/>
<circle cx="1098" cy="1110" r="5" transform="rotate(180 1098 1110)" fill="white"/>
<circle cx="1153" cy="1075" r="5" transform="rotate(180 1153 1075)" fill="white"/>
<circle cx="1965" cy="1177" r="10" transform="rotate(180 1965 1177)" fill="white"/>
<circle cx="1945" cy="1177" r="10" transform="rotate(180 1945 1177)" fill="white"/>
<circle cx="1945" cy="1157" r="10" transform="rotate(180 1945 1157)" fill="white"/>
<circle cx="1925" cy="1157" r="10" transform="rotate(180 1925 1157)" fill="white"/>
<circle cx="1925" cy="1137" r="10" transform="rotate(180 1925 1137)" fill="white"/>
<circle cx="1905" cy="1137" r="10" transform="rotate(180 1905 1137)" fill="white"/>
<circle cx="1905" cy="1117" r="10" transform="rotate(180 1905 1117)" fill="white"/>
<circle cx="1885" cy="1117" r="10" transform="rotate(180 1885 1117)" fill="white"/>
<circle cx="1887.5" cy="1134.5" r="7.5" transform="rotate(180 1887.5 1134.5)" fill="white"/>
<circle cx="1922.5" cy="1119.5" r="7.5" transform="rotate(180 1922.5 1119.5)" fill="white"/>
<circle cx="1907.5" cy="1154.5" r="7.5" transform="rotate(180 1907.5 1154.5)" fill="white"/>
<circle cx="1942.5" cy="1139.5" r="7.5" transform="rotate(180 1942.5 1139.5)" fill="white"/>
<circle cx="1927.5" cy="1174.5" r="7.5" transform="rotate(180 1927.5 1174.5)" fill="white"/>
<circle cx="1962.5" cy="1159.5" r="7.5" transform="rotate(180 1962.5 1159.5)" fill="white"/>
<circle cx="1957.5" cy="1144.5" r="7.5" transform="rotate(180 1957.5 1144.5)" fill="white"/>
<circle cx="1912.5" cy="1169.5" r="7.5" transform="rotate(180 1912.5 1169.5)" fill="white"/>
<circle cx="1937.5" cy="1124.5" r="7.5" transform="rotate(180 1937.5 1124.5)" fill="white"/>
<circle cx="1892.5" cy="1149.5" r="7.5" transform="rotate(180 1892.5 1149.5)" fill="white"/>
<circle cx="1898" cy="1164" r="5" transform="rotate(180 1898 1164)" fill="white"/>
<circle cx="1953" cy="1129" r="5" transform="rotate(180 1953 1129)" fill="white"/>
<circle cx="1972" cy="1111" r="10" transform="rotate(180 1972 1111)" fill="white"/>
<circle cx="1952" cy="1111" r="10" transform="rotate(180 1952 1111)" fill="white"/>
<circle cx="1952" cy="1091" r="10" transform="rotate(180 1952 1091)" fill="white"/>
<circle cx="1932" cy="1091" r="10" transform="rotate(180 1932 1091)" fill="white"/>
<circle cx="1932" cy="1071" r="10" transform="rotate(180 1932 1071)" fill="white"/>
<circle cx="1912" cy="1071" r="10" transform="rotate(180 1912 1071)" fill="white"/>
<circle cx="1912" cy="1051" r="10" transform="rotate(180 1912 1051)" fill="white"/>
<circle cx="1892" cy="1051" r="10" transform="rotate(180 1892 1051)" fill="white"/>
<circle cx="1894.5" cy="1068.5" r="7.5" transform="rotate(180 1894.5 1068.5)" fill="white"/>
<circle cx="1929.5" cy="1053.5" r="7.5" transform="rotate(180 1929.5 1053.5)" fill="white"/>
<circle cx="1914.5" cy="1088.5" r="7.5" transform="rotate(180 1914.5 1088.5)" fill="white"/>
<circle cx="1949.5" cy="1073.5" r="7.5" transform="rotate(180 1949.5 1073.5)" fill="white"/>
<circle cx="1934.5" cy="1108.5" r="7.5" transform="rotate(180 1934.5 1108.5)" fill="white"/>
<circle cx="1969.5" cy="1093.5" r="7.5" transform="rotate(180 1969.5 1093.5)" fill="white"/>
<circle cx="1964.5" cy="1078.5" r="7.5" transform="rotate(180 1964.5 1078.5)" fill="white"/>
<circle cx="1919.5" cy="1103.5" r="7.5" transform="rotate(180 1919.5 1103.5)" fill="white"/>
<circle cx="1944.5" cy="1058.5" r="7.5" transform="rotate(180 1944.5 1058.5)" fill="white"/>
<circle cx="1899.5" cy="1083.5" r="7.5" transform="rotate(180 1899.5 1083.5)" fill="white"/>
<circle cx="1905" cy="1098" r="5" transform="rotate(180 1905 1098)" fill="white"/>
<circle cx="1960" cy="1063" r="5" transform="rotate(180 1960 1063)" fill="white"/>
<circle cx="1885" cy="1097" r="10" transform="rotate(180 1885 1097)" fill="white"/>
<circle cx="1865" cy="1097" r="10" transform="rotate(180 1865 1097)" fill="white"/>
<circle cx="1865" cy="1077" r="10" transform="rotate(180 1865 1077)" fill="white"/>
<circle cx="1845" cy="1077" r="10" transform="rotate(180 1845 1077)" fill="white"/>
<circle cx="1845" cy="1057" r="10" transform="rotate(180 1845 1057)" fill="white"/>
<circle cx="1825" cy="1057" r="10" transform="rotate(180 1825 1057)" fill="white"/>
<circle cx="1825" cy="1037" r="10" transform="rotate(180 1825 1037)" fill="white"/>
<circle cx="1805" cy="1037" r="10" transform="rotate(180 1805 1037)" fill="white"/>
<circle cx="1807.5" cy="1054.5" r="7.5" transform="rotate(180 1807.5 1054.5)" fill="white"/>
<circle cx="1842.5" cy="1039.5" r="7.5" transform="rotate(180 1842.5 1039.5)" fill="white"/>
<circle cx="1827.5" cy="1074.5" r="7.5" transform="rotate(180 1827.5 1074.5)" fill="white"/>
<circle cx="1862.5" cy="1059.5" r="7.5" transform="rotate(180 1862.5 1059.5)" fill="white"/>
<circle cx="1847.5" cy="1094.5" r="7.5" transform="rotate(180 1847.5 1094.5)" fill="white"/>
<circle cx="1882.5" cy="1079.5" r="7.5" transform="rotate(180 1882.5 1079.5)" fill="white"/>
<circle cx="1877.5" cy="1064.5" r="7.5" transform="rotate(180 1877.5 1064.5)" fill="white"/>
<circle cx="1832.5" cy="1089.5" r="7.5" transform="rotate(180 1832.5 1089.5)" fill="white"/>
<circle cx="1857.5" cy="1044.5" r="7.5" transform="rotate(180 1857.5 1044.5)" fill="white"/>
<circle cx="1812.5" cy="1069.5" r="7.5" transform="rotate(180 1812.5 1069.5)" fill="white"/>
<circle cx="1818" cy="1084" r="5" transform="rotate(180 1818 1084)" fill="white"/>
<circle cx="1873" cy="1049" r="5" transform="rotate(180 1873 1049)" fill="white"/>
<circle cx="1877" cy="1164" r="10" transform="rotate(180 1877 1164)" fill="white"/>
<circle cx="1857" cy="1164" r="10" transform="rotate(180 1857 1164)" fill="white"/>
<circle cx="1857" cy="1144" r="10" transform="rotate(180 1857 1144)" fill="white"/>
<circle cx="1837" cy="1144" r="10" transform="rotate(180 1837 1144)" fill="white"/>
<circle cx="1837" cy="1124" r="10" transform="rotate(180 1837 1124)" fill="white"/>
<circle cx="1817" cy="1124" r="10" transform="rotate(180 1817 1124)" fill="white"/>
<circle cx="1817" cy="1104" r="10" transform="rotate(180 1817 1104)" fill="white"/>
<circle cx="1797" cy="1104" r="10" transform="rotate(180 1797 1104)" fill="white"/>
<circle cx="1799.5" cy="1121.5" r="7.5" transform="rotate(180 1799.5 1121.5)" fill="white"/>
<circle cx="1834.5" cy="1106.5" r="7.5" transform="rotate(180 1834.5 1106.5)" fill="white"/>
<circle cx="1819.5" cy="1141.5" r="7.5" transform="rotate(180 1819.5 1141.5)" fill="white"/>
<circle cx="1854.5" cy="1126.5" r="7.5" transform="rotate(180 1854.5 1126.5)" fill="white"/>
<circle cx="1839.5" cy="1161.5" r="7.5" transform="rotate(180 1839.5 1161.5)" fill="white"/>
<circle cx="1874.5" cy="1146.5" r="7.5" transform="rotate(180 1874.5 1146.5)" fill="white"/>
<circle cx="1869.5" cy="1131.5" r="7.5" transform="rotate(180 1869.5 1131.5)" fill="white"/>
<circle cx="1824.5" cy="1156.5" r="7.5" transform="rotate(180 1824.5 1156.5)" fill="white"/>
<circle cx="1849.5" cy="1111.5" r="7.5" transform="rotate(180 1849.5 1111.5)" fill="white"/>
<circle cx="1804.5" cy="1136.5" r="7.5" transform="rotate(180 1804.5 1136.5)" fill="white"/>
<circle cx="1810" cy="1151" r="5" transform="rotate(180 1810 1151)" fill="white"/>
<circle cx="1865" cy="1116" r="5" transform="rotate(180 1865 1116)" fill="white"/>
<circle cx="1867" cy="1229" r="10" transform="rotate(180 1867 1229)" fill="white"/>
<circle cx="1847" cy="1229" r="10" transform="rotate(180 1847 1229)" fill="white"/>
<circle cx="1847" cy="1209" r="10" transform="rotate(180 1847 1209)" fill="white"/>
<circle cx="1827" cy="1209" r="10" transform="rotate(180 1827 1209)" fill="white"/>
<circle cx="1827" cy="1189" r="10" transform="rotate(180 1827 1189)" fill="white"/>
<circle cx="1807" cy="1189" r="10" transform="rotate(180 1807 1189)" fill="white"/>
<circle cx="1807" cy="1169" r="10" transform="rotate(180 1807 1169)" fill="white"/>
<circle cx="1787" cy="1169" r="10" transform="rotate(180 1787 1169)" fill="white"/>
<circle cx="1789.5" cy="1186.5" r="7.5" transform="rotate(180 1789.5 1186.5)" fill="white"/>
<circle cx="1824.5" cy="1171.5" r="7.5" transform="rotate(180 1824.5 1171.5)" fill="white"/>
<circle cx="1809.5" cy="1206.5" r="7.5" transform="rotate(180 1809.5 1206.5)" fill="white"/>
<circle cx="1844.5" cy="1191.5" r="7.5" transform="rotate(180 1844.5 1191.5)" fill="white"/>
<circle cx="1829.5" cy="1226.5" r="7.5" transform="rotate(180 1829.5 1226.5)" fill="white"/>
<circle cx="1864.5" cy="1211.5" r="7.5" transform="rotate(180 1864.5 1211.5)" fill="white"/>
<circle cx="1859.5" cy="1196.5" r="7.5" transform="rotate(180 1859.5 1196.5)" fill="white"/>
<circle cx="1814.5" cy="1221.5" r="7.5" transform="rotate(180 1814.5 1221.5)" fill="white"/>
<circle cx="1839.5" cy="1176.5" r="7.5" transform="rotate(180 1839.5 1176.5)" fill="white"/>
<circle cx="1794.5" cy="1201.5" r="7.5" transform="rotate(180 1794.5 1201.5)" fill="white"/>
<circle cx="1800" cy="1216" r="5" transform="rotate(180 1800 1216)" fill="white"/>
<circle cx="1855" cy="1181" r="5" transform="rotate(180 1855 1181)" fill="white"/>
<circle cx="1957" cy="1244" r="10" transform="rotate(180 1957 1244)" fill="white"/>
<circle cx="1937" cy="1244" r="10" transform="rotate(180 1937 1244)" fill="white"/>
<circle cx="1937" cy="1224" r="10" transform="rotate(180 1937 1224)" fill="white"/>
<circle cx="1917" cy="1224" r="10" transform="rotate(180 1917 1224)" fill="white"/>
<circle cx="1917" cy="1204" r="10" transform="rotate(180 1917 1204)" fill="white"/>
<circle cx="1897" cy="1204" r="10" transform="rotate(180 1897 1204)" fill="white"/>
<circle cx="1897" cy="1184" r="10" transform="rotate(180 1897 1184)" fill="white"/>
<circle cx="1877" cy="1184" r="10" transform="rotate(180 1877 1184)" fill="white"/>
<circle cx="1879.5" cy="1201.5" r="7.5" transform="rotate(180 1879.5 1201.5)" fill="white"/>
<circle cx="1914.5" cy="1186.5" r="7.5" transform="rotate(180 1914.5 1186.5)" fill="white"/>
<circle cx="1899.5" cy="1221.5" r="7.5" transform="rotate(180 1899.5 1221.5)" fill="white"/>
<circle cx="1934.5" cy="1206.5" r="7.5" transform="rotate(180 1934.5 1206.5)" fill="white"/>
<circle cx="1919.5" cy="1241.5" r="7.5" transform="rotate(180 1919.5 1241.5)" fill="white"/>
<circle cx="1954.5" cy="1226.5" r="7.5" transform="rotate(180 1954.5 1226.5)" fill="white"/>
<circle cx="1949.5" cy="1211.5" r="7.5" transform="rotate(180 1949.5 1211.5)" fill="white"/>
<circle cx="1904.5" cy="1236.5" r="7.5" transform="rotate(180 1904.5 1236.5)" fill="white"/>
<circle cx="1929.5" cy="1191.5" r="7.5" transform="rotate(180 1929.5 1191.5)" fill="white"/>
<circle cx="1884.5" cy="1216.5" r="7.5" transform="rotate(180 1884.5 1216.5)" fill="white"/>
<circle cx="1890" cy="1231" r="5" transform="rotate(180 1890 1231)" fill="white"/>
<circle cx="1945" cy="1196" r="5" transform="rotate(180 1945 1196)" fill="white"/>
<circle cx="2043" cy="1257" r="10" transform="rotate(180 2043 1257)" fill="white"/>
<circle cx="2023" cy="1257" r="10" transform="rotate(180 2023 1257)" fill="white"/>
<circle cx="2023" cy="1237" r="10" transform="rotate(180 2023 1237)" fill="white"/>
<circle cx="2003" cy="1237" r="10" transform="rotate(180 2003 1237)" fill="white"/>
<circle cx="2003" cy="1217" r="10" transform="rotate(180 2003 1217)" fill="white"/>
<circle cx="1983" cy="1217" r="10" transform="rotate(180 1983 1217)" fill="white"/>
<circle cx="1983" cy="1197" r="10" transform="rotate(180 1983 1197)" fill="white"/>
<circle cx="1963" cy="1197" r="10" transform="rotate(180 1963 1197)" fill="white"/>
<circle cx="1965.5" cy="1214.5" r="7.5" transform="rotate(180 1965.5 1214.5)" fill="white"/>
<circle cx="2000.5" cy="1199.5" r="7.5" transform="rotate(180 2000.5 1199.5)" fill="white"/>
<circle cx="1985.5" cy="1234.5" r="7.5" transform="rotate(180 1985.5 1234.5)" fill="white"/>
<circle cx="2020.5" cy="1219.5" r="7.5" transform="rotate(180 2020.5 1219.5)" fill="white"/>
<circle cx="2005.5" cy="1254.5" r="7.5" transform="rotate(180 2005.5 1254.5)" fill="white"/>
<circle cx="2040.5" cy="1239.5" r="7.5" transform="rotate(180 2040.5 1239.5)" fill="white"/>
<circle cx="2035.5" cy="1224.5" r="7.5" transform="rotate(180 2035.5 1224.5)" fill="white"/>
<circle cx="1990.5" cy="1249.5" r="7.5" transform="rotate(180 1990.5 1249.5)" fill="white"/>
<circle cx="2015.5" cy="1204.5" r="7.5" transform="rotate(180 2015.5 1204.5)" fill="white"/>
<circle cx="1970.5" cy="1229.5" r="7.5" transform="rotate(180 1970.5 1229.5)" fill="white"/>
<circle cx="1976" cy="1244" r="5" transform="rotate(180 1976 1244)" fill="white"/>
<circle cx="2031" cy="1209" r="5" transform="rotate(180 2031 1209)" fill="white"/>
<circle cx="2052" cy="1191" r="10" transform="rotate(180 2052 1191)" fill="white"/>
<circle cx="2032" cy="1191" r="10" transform="rotate(180 2032 1191)" fill="white"/>
<circle cx="2032" cy="1171" r="10" transform="rotate(180 2032 1171)" fill="white"/>
<circle cx="2012" cy="1171" r="10" transform="rotate(180 2012 1171)" fill="white"/>
<circle cx="2012" cy="1151" r="10" transform="rotate(180 2012 1151)" fill="white"/>
<circle cx="1992" cy="1151" r="10" transform="rotate(180 1992 1151)" fill="white"/>
<circle cx="1992" cy="1131" r="10" transform="rotate(180 1992 1131)" fill="white"/>
<circle cx="1972" cy="1131" r="10" transform="rotate(180 1972 1131)" fill="white"/>
<circle cx="1974.5" cy="1148.5" r="7.5" transform="rotate(180 1974.5 1148.5)" fill="white"/>
<circle cx="2009.5" cy="1133.5" r="7.5" transform="rotate(180 2009.5 1133.5)" fill="white"/>
<circle cx="1994.5" cy="1168.5" r="7.5" transform="rotate(180 1994.5 1168.5)" fill="white"/>
<circle cx="2029.5" cy="1153.5" r="7.5" transform="rotate(180 2029.5 1153.5)" fill="white"/>
<circle cx="2014.5" cy="1188.5" r="7.5" transform="rotate(180 2014.5 1188.5)" fill="white"/>
<circle cx="2049.5" cy="1173.5" r="7.5" transform="rotate(180 2049.5 1173.5)" fill="white"/>
<circle cx="2044.5" cy="1158.5" r="7.5" transform="rotate(180 2044.5 1158.5)" fill="white"/>
<circle cx="1999.5" cy="1183.5" r="7.5" transform="rotate(180 1999.5 1183.5)" fill="white"/>
<circle cx="2024.5" cy="1138.5" r="7.5" transform="rotate(180 2024.5 1138.5)" fill="white"/>
<circle cx="1979.5" cy="1163.5" r="7.5" transform="rotate(180 1979.5 1163.5)" fill="white"/>
<circle cx="1985" cy="1178" r="5" transform="rotate(180 1985 1178)" fill="white"/>
<circle cx="2040" cy="1143" r="5" transform="rotate(180 2040 1143)" fill="white"/>
<circle cx="2057" cy="1124" r="10" transform="rotate(180 2057 1124)" fill="white"/>
<circle cx="2037" cy="1124" r="10" transform="rotate(180 2037 1124)" fill="white"/>
<circle cx="2037" cy="1104" r="10" transform="rotate(180 2037 1104)" fill="white"/>
<circle cx="2017" cy="1104" r="10" transform="rotate(180 2017 1104)" fill="white"/>
<circle cx="2017" cy="1084" r="10" transform="rotate(180 2017 1084)" fill="white"/>
<circle cx="1997" cy="1084" r="10" transform="rotate(180 1997 1084)" fill="white"/>
<circle cx="1997" cy="1064" r="10" transform="rotate(180 1997 1064)" fill="white"/>
<circle cx="1977" cy="1064" r="10" transform="rotate(180 1977 1064)" fill="white"/>
<circle cx="1979.5" cy="1081.5" r="7.5" transform="rotate(180 1979.5 1081.5)" fill="white"/>
<circle cx="2014.5" cy="1066.5" r="7.5" transform="rotate(180 2014.5 1066.5)" fill="white"/>
<circle cx="1999.5" cy="1101.5" r="7.5" transform="rotate(180 1999.5 1101.5)" fill="white"/>
<circle cx="2034.5" cy="1086.5" r="7.5" transform="rotate(180 2034.5 1086.5)" fill="white"/>
<circle cx="2019.5" cy="1121.5" r="7.5" transform="rotate(180 2019.5 1121.5)" fill="white"/>
<circle cx="2054.5" cy="1106.5" r="7.5" transform="rotate(180 2054.5 1106.5)" fill="white"/>
<circle cx="2049.5" cy="1091.5" r="7.5" transform="rotate(180 2049.5 1091.5)" fill="white"/>
<circle cx="2004.5" cy="1116.5" r="7.5" transform="rotate(180 2004.5 1116.5)" fill="white"/>
<circle cx="2029.5" cy="1071.5" r="7.5" transform="rotate(180 2029.5 1071.5)" fill="white"/>
<circle cx="1984.5" cy="1096.5" r="7.5" transform="rotate(180 1984.5 1096.5)" fill="white"/>
<circle cx="1990" cy="1111" r="5" transform="rotate(180 1990 1111)" fill="white"/>
<circle cx="2045" cy="1076" r="5" transform="rotate(180 2045 1076)" fill="white"/>
<circle cx="2057" cy="1054" r="10" transform="rotate(180 2057 1054)" fill="white"/>
<circle cx="2037" cy="1054" r="10" transform="rotate(180 2037 1054)" fill="white"/>
<circle cx="2037" cy="1034" r="10" transform="rotate(180 2037 1034)" fill="white"/>
<circle cx="2017" cy="1034" r="10" transform="rotate(180 2017 1034)" fill="white"/>
<circle cx="2017" cy="1014" r="10" transform="rotate(180 2017 1014)" fill="white"/>
<circle cx="1997" cy="1014" r="10" transform="rotate(180 1997 1014)" fill="white"/>
<circle cx="1997" cy="994" r="10" transform="rotate(180 1997 994)" fill="white"/>
<circle cx="1977" cy="994" r="10" transform="rotate(180 1977 994)" fill="white"/>
<circle cx="1979.5" cy="1011.5" r="7.5" transform="rotate(180 1979.5 1011.5)" fill="white"/>
<circle cx="2014.5" cy="996.5" r="7.5" transform="rotate(180 2014.5 996.5)" fill="white"/>
<circle cx="1999.5" cy="1031.5" r="7.5" transform="rotate(180 1999.5 1031.5)" fill="white"/>
<circle cx="2034.5" cy="1016.5" r="7.5" transform="rotate(180 2034.5 1016.5)" fill="white"/>
<circle cx="2019.5" cy="1051.5" r="7.5" transform="rotate(180 2019.5 1051.5)" fill="white"/>
<circle cx="2054.5" cy="1036.5" r="7.5" transform="rotate(180 2054.5 1036.5)" fill="white"/>
<circle cx="2049.5" cy="1021.5" r="7.5" transform="rotate(180 2049.5 1021.5)" fill="white"/>
<circle cx="2004.5" cy="1046.5" r="7.5" transform="rotate(180 2004.5 1046.5)" fill="white"/>
<circle cx="2029.5" cy="1001.5" r="7.5" transform="rotate(180 2029.5 1001.5)" fill="white"/>
<circle cx="1984.5" cy="1026.5" r="7.5" transform="rotate(180 1984.5 1026.5)" fill="white"/>
<circle cx="1990" cy="1041" r="5" transform="rotate(180 1990 1041)" fill="white"/>
<circle cx="2045" cy="1006" r="5" transform="rotate(180 2045 1006)" fill="white"/>
<circle cx="1972" cy="1043" r="10" transform="rotate(180 1972 1043)" fill="white"/>
<circle cx="1952" cy="1043" r="10" transform="rotate(180 1952 1043)" fill="white"/>
<circle cx="1952" cy="1023" r="10" transform="rotate(180 1952 1023)" fill="white"/>
<circle cx="1932" cy="1023" r="10" transform="rotate(180 1932 1023)" fill="white"/>
<circle cx="1932" cy="1003" r="10" transform="rotate(180 1932 1003)" fill="white"/>
<circle cx="1912" cy="1003" r="10" transform="rotate(180 1912 1003)" fill="white"/>
<circle cx="1912" cy="983" r="10" transform="rotate(180 1912 983)" fill="white"/>
<circle cx="1892" cy="983" r="10" transform="rotate(180 1892 983)" fill="white"/>
<circle cx="1894.5" cy="1000.5" r="7.5" transform="rotate(180 1894.5 1000.5)" fill="white"/>
<circle cx="1929.5" cy="985.5" r="7.5" transform="rotate(180 1929.5 985.5)" fill="white"/>
<circle cx="1914.5" cy="1020.5" r="7.5" transform="rotate(180 1914.5 1020.5)" fill="white"/>
<circle cx="1949.5" cy="1005.5" r="7.5" transform="rotate(180 1949.5 1005.5)" fill="white"/>
<circle cx="1934.5" cy="1040.5" r="7.5" transform="rotate(180 1934.5 1040.5)" fill="white"/>
<circle cx="1969.5" cy="1025.5" r="7.5" transform="rotate(180 1969.5 1025.5)" fill="white"/>
<circle cx="1964.5" cy="1010.5" r="7.5" transform="rotate(180 1964.5 1010.5)" fill="white"/>
<circle cx="1919.5" cy="1035.5" r="7.5" transform="rotate(180 1919.5 1035.5)" fill="white"/>
<circle cx="1944.5" cy="990.5" r="7.5" transform="rotate(180 1944.5 990.5)" fill="white"/>
<circle cx="1899.5" cy="1015.5" r="7.5" transform="rotate(180 1899.5 1015.5)" fill="white"/>
<circle cx="1905" cy="1030" r="5" transform="rotate(180 1905 1030)" fill="white"/>
<circle cx="1960" cy="995" r="5" transform="rotate(180 1960 995)" fill="white"/>
<circle cx="1805" cy="946" r="10" transform="rotate(180 1805 946)" fill="white"/>
<circle cx="1785" cy="946" r="10" transform="rotate(180 1785 946)" fill="white"/>
<circle cx="1785" cy="926" r="10" transform="rotate(180 1785 926)" fill="white"/>
<circle cx="1765" cy="926" r="10" transform="rotate(180 1765 926)" fill="white"/>
<circle cx="1765" cy="906" r="10" transform="rotate(180 1765 906)" fill="white"/>
<circle cx="1745" cy="906" r="10" transform="rotate(180 1745 906)" fill="white"/>
<circle cx="1745" cy="886" r="10" transform="rotate(180 1745 886)" fill="white"/>
<circle cx="1725" cy="886" r="10" transform="rotate(180 1725 886)" fill="white"/>
<circle cx="1727.5" cy="903.5" r="7.5" transform="rotate(180 1727.5 903.5)" fill="white"/>
<circle cx="1762.5" cy="888.5" r="7.5" transform="rotate(180 1762.5 888.5)" fill="white"/>
<circle cx="1747.5" cy="923.5" r="7.5" transform="rotate(180 1747.5 923.5)" fill="white"/>
<circle cx="1782.5" cy="908.5" r="7.5" transform="rotate(180 1782.5 908.5)" fill="white"/>
<circle cx="1767.5" cy="943.5" r="7.5" transform="rotate(180 1767.5 943.5)" fill="white"/>
<circle cx="1802.5" cy="928.5" r="7.5" transform="rotate(180 1802.5 928.5)" fill="white"/>
<circle cx="1797.5" cy="913.5" r="7.5" transform="rotate(180 1797.5 913.5)" fill="white"/>
<circle cx="1752.5" cy="938.5" r="7.5" transform="rotate(180 1752.5 938.5)" fill="white"/>
<circle cx="1777.5" cy="893.5" r="7.5" transform="rotate(180 1777.5 893.5)" fill="white"/>
<circle cx="1732.5" cy="918.5" r="7.5" transform="rotate(180 1732.5 918.5)" fill="white"/>
<circle cx="1738" cy="933" r="5" transform="rotate(180 1738 933)" fill="white"/>
<circle cx="1793" cy="898" r="5" transform="rotate(180 1793 898)" fill="white"/>
<circle cx="1812" cy="880" r="10" transform="rotate(180 1812 880)" fill="white"/>
<circle cx="1792" cy="880" r="10" transform="rotate(180 1792 880)" fill="white"/>
<circle cx="1792" cy="860" r="10" transform="rotate(180 1792 860)" fill="white"/>
<circle cx="1772" cy="860" r="10" transform="rotate(180 1772 860)" fill="white"/>
<circle cx="1772" cy="840" r="10" transform="rotate(180 1772 840)" fill="white"/>
<circle cx="1752" cy="840" r="10" transform="rotate(180 1752 840)" fill="white"/>
<circle cx="1752" cy="820" r="10" transform="rotate(180 1752 820)" fill="white"/>
<circle cx="1732" cy="820" r="10" transform="rotate(180 1732 820)" fill="white"/>
<circle cx="1734.5" cy="837.5" r="7.5" transform="rotate(180 1734.5 837.5)" fill="white"/>
<circle cx="1769.5" cy="822.5" r="7.5" transform="rotate(180 1769.5 822.5)" fill="white"/>
<circle cx="1754.5" cy="857.5" r="7.5" transform="rotate(180 1754.5 857.5)" fill="white"/>
<circle cx="1789.5" cy="842.5" r="7.5" transform="rotate(180 1789.5 842.5)" fill="white"/>
<circle cx="1774.5" cy="877.5" r="7.5" transform="rotate(180 1774.5 877.5)" fill="white"/>
<circle cx="1809.5" cy="862.5" r="7.5" transform="rotate(180 1809.5 862.5)" fill="white"/>
<circle cx="1804.5" cy="847.5" r="7.5" transform="rotate(180 1804.5 847.5)" fill="white"/>
<circle cx="1759.5" cy="872.5" r="7.5" transform="rotate(180 1759.5 872.5)" fill="white"/>
<circle cx="1784.5" cy="827.5" r="7.5" transform="rotate(180 1784.5 827.5)" fill="white"/>
<circle cx="1739.5" cy="852.5" r="7.5" transform="rotate(180 1739.5 852.5)" fill="white"/>
<circle cx="1745" cy="867" r="5" transform="rotate(180 1745 867)" fill="white"/>
<circle cx="1800" cy="832" r="5" transform="rotate(180 1800 832)" fill="white"/>
<circle cx="1725" cy="866" r="10" transform="rotate(180 1725 866)" fill="white"/>
<circle cx="1705" cy="866" r="10" transform="rotate(180 1705 866)" fill="white"/>
<circle cx="1705" cy="846" r="10" transform="rotate(180 1705 846)" fill="white"/>
<circle cx="1685" cy="846" r="10" transform="rotate(180 1685 846)" fill="white"/>
<circle cx="1685" cy="826" r="10" transform="rotate(180 1685 826)" fill="white"/>
<circle cx="1665" cy="826" r="10" transform="rotate(180 1665 826)" fill="white"/>
<circle cx="1665" cy="806" r="10" transform="rotate(180 1665 806)" fill="white"/>
<circle cx="1645" cy="806" r="10" transform="rotate(180 1645 806)" fill="white"/>
<circle cx="1647.5" cy="823.5" r="7.5" transform="rotate(180 1647.5 823.5)" fill="white"/>
<circle cx="1682.5" cy="808.5" r="7.5" transform="rotate(180 1682.5 808.5)" fill="white"/>
<circle cx="1667.5" cy="843.5" r="7.5" transform="rotate(180 1667.5 843.5)" fill="white"/>
<circle cx="1702.5" cy="828.5" r="7.5" transform="rotate(180 1702.5 828.5)" fill="white"/>
<circle cx="1687.5" cy="863.5" r="7.5" transform="rotate(180 1687.5 863.5)" fill="white"/>
<circle cx="1722.5" cy="848.5" r="7.5" transform="rotate(180 1722.5 848.5)" fill="white"/>
<circle cx="1717.5" cy="833.5" r="7.5" transform="rotate(180 1717.5 833.5)" fill="white"/>
<circle cx="1672.5" cy="858.5" r="7.5" transform="rotate(180 1672.5 858.5)" fill="white"/>
<circle cx="1697.5" cy="813.5" r="7.5" transform="rotate(180 1697.5 813.5)" fill="white"/>
<circle cx="1652.5" cy="838.5" r="7.5" transform="rotate(180 1652.5 838.5)" fill="white"/>
<circle cx="1658" cy="853" r="5" transform="rotate(180 1658 853)" fill="white"/>
<circle cx="1713" cy="818" r="5" transform="rotate(180 1713 818)" fill="white"/>
<circle cx="1717" cy="933" r="10" transform="rotate(180 1717 933)" fill="white"/>
<circle cx="1697" cy="933" r="10" transform="rotate(180 1697 933)" fill="white"/>
<circle cx="1697" cy="913" r="10" transform="rotate(180 1697 913)" fill="white"/>
<circle cx="1677" cy="913" r="10" transform="rotate(180 1677 913)" fill="white"/>
<circle cx="1677" cy="893" r="10" transform="rotate(180 1677 893)" fill="white"/>
<circle cx="1657" cy="893" r="10" transform="rotate(180 1657 893)" fill="white"/>
<circle cx="1657" cy="873" r="10" transform="rotate(180 1657 873)" fill="white"/>
<circle cx="1637" cy="873" r="10" transform="rotate(180 1637 873)" fill="white"/>
<circle cx="1639.5" cy="890.5" r="7.5" transform="rotate(180 1639.5 890.5)" fill="white"/>
<circle cx="1674.5" cy="875.5" r="7.5" transform="rotate(180 1674.5 875.5)" fill="white"/>
<circle cx="1659.5" cy="910.5" r="7.5" transform="rotate(180 1659.5 910.5)" fill="white"/>
<circle cx="1694.5" cy="895.5" r="7.5" transform="rotate(180 1694.5 895.5)" fill="white"/>
<circle cx="1679.5" cy="930.5" r="7.5" transform="rotate(180 1679.5 930.5)" fill="white"/>
<circle cx="1714.5" cy="915.5" r="7.5" transform="rotate(180 1714.5 915.5)" fill="white"/>
<circle cx="1709.5" cy="900.5" r="7.5" transform="rotate(180 1709.5 900.5)" fill="white"/>
<circle cx="1664.5" cy="925.5" r="7.5" transform="rotate(180 1664.5 925.5)" fill="white"/>
<circle cx="1689.5" cy="880.5" r="7.5" transform="rotate(180 1689.5 880.5)" fill="white"/>
<circle cx="1644.5" cy="905.5" r="7.5" transform="rotate(180 1644.5 905.5)" fill="white"/>
<circle cx="1650" cy="920" r="5" transform="rotate(180 1650 920)" fill="white"/>
<circle cx="1705" cy="885" r="5" transform="rotate(180 1705 885)" fill="white"/>
<circle cx="1707" cy="998" r="10" transform="rotate(180 1707 998)" fill="white"/>
<circle cx="1687" cy="998" r="10" transform="rotate(180 1687 998)" fill="white"/>
<circle cx="1687" cy="978" r="10" transform="rotate(180 1687 978)" fill="white"/>
<circle cx="1667" cy="978" r="10" transform="rotate(180 1667 978)" fill="white"/>
<circle cx="1667" cy="958" r="10" transform="rotate(180 1667 958)" fill="white"/>
<circle cx="1647" cy="958" r="10" transform="rotate(180 1647 958)" fill="white"/>
<circle cx="1647" cy="938" r="10" transform="rotate(180 1647 938)" fill="white"/>
<circle cx="1627" cy="938" r="10" transform="rotate(180 1627 938)" fill="white"/>
<circle cx="1629.5" cy="955.5" r="7.5" transform="rotate(180 1629.5 955.5)" fill="white"/>
<circle cx="1664.5" cy="940.5" r="7.5" transform="rotate(180 1664.5 940.5)" fill="white"/>
<circle cx="1649.5" cy="975.5" r="7.5" transform="rotate(180 1649.5 975.5)" fill="white"/>
<circle cx="1684.5" cy="960.5" r="7.5" transform="rotate(180 1684.5 960.5)" fill="white"/>
<circle cx="1669.5" cy="995.5" r="7.5" transform="rotate(180 1669.5 995.5)" fill="white"/>
<circle cx="1704.5" cy="980.5" r="7.5" transform="rotate(180 1704.5 980.5)" fill="white"/>
<circle cx="1699.5" cy="965.5" r="7.5" transform="rotate(180 1699.5 965.5)" fill="white"/>
<circle cx="1654.5" cy="990.5" r="7.5" transform="rotate(180 1654.5 990.5)" fill="white"/>
<circle cx="1679.5" cy="945.5" r="7.5" transform="rotate(180 1679.5 945.5)" fill="white"/>
<circle cx="1634.5" cy="970.5" r="7.5" transform="rotate(180 1634.5 970.5)" fill="white"/>
<circle cx="1640" cy="985" r="5" transform="rotate(180 1640 985)" fill="white"/>
<circle cx="1695" cy="950" r="5" transform="rotate(180 1695 950)" fill="white"/>
<circle cx="1797" cy="1013" r="10" transform="rotate(180 1797 1013)" fill="white"/>
<circle cx="1777" cy="1013" r="10" transform="rotate(180 1777 1013)" fill="white"/>
<circle cx="1777" cy="993" r="10" transform="rotate(180 1777 993)" fill="white"/>
<circle cx="1757" cy="993" r="10" transform="rotate(180 1757 993)" fill="white"/>
<circle cx="1757" cy="973" r="10" transform="rotate(180 1757 973)" fill="white"/>
<circle cx="1737" cy="973" r="10" transform="rotate(180 1737 973)" fill="white"/>
<circle cx="1737" cy="953" r="10" transform="rotate(180 1737 953)" fill="white"/>
<circle cx="1717" cy="953" r="10" transform="rotate(180 1717 953)" fill="white"/>
<circle cx="1719.5" cy="970.5" r="7.5" transform="rotate(180 1719.5 970.5)" fill="white"/>
<circle cx="1754.5" cy="955.5" r="7.5" transform="rotate(180 1754.5 955.5)" fill="white"/>
<circle cx="1739.5" cy="990.5" r="7.5" transform="rotate(180 1739.5 990.5)" fill="white"/>
<circle cx="1774.5" cy="975.5" r="7.5" transform="rotate(180 1774.5 975.5)" fill="white"/>
<circle cx="1759.5" cy="1010.5" r="7.5" transform="rotate(180 1759.5 1010.5)" fill="white"/>
<circle cx="1794.5" cy="995.5" r="7.5" transform="rotate(180 1794.5 995.5)" fill="white"/>
<circle cx="1789.5" cy="980.5" r="7.5" transform="rotate(180 1789.5 980.5)" fill="white"/>
<circle cx="1744.5" cy="1005.5" r="7.5" transform="rotate(180 1744.5 1005.5)" fill="white"/>
<circle cx="1769.5" cy="960.5" r="7.5" transform="rotate(180 1769.5 960.5)" fill="white"/>
<circle cx="1724.5" cy="985.5" r="7.5" transform="rotate(180 1724.5 985.5)" fill="white"/>
<circle cx="1730" cy="1000" r="5" transform="rotate(180 1730 1000)" fill="white"/>
<circle cx="1785" cy="965" r="5" transform="rotate(180 1785 965)" fill="white"/>
<circle cx="1883" cy="1026" r="10" transform="rotate(180 1883 1026)" fill="white"/>
<circle cx="1863" cy="1026" r="10" transform="rotate(180 1863 1026)" fill="white"/>
<circle cx="1863" cy="1006" r="10" transform="rotate(180 1863 1006)" fill="white"/>
<circle cx="1843" cy="1006" r="10" transform="rotate(180 1843 1006)" fill="white"/>
<circle cx="1843" cy="986" r="10" transform="rotate(180 1843 986)" fill="white"/>
<circle cx="1823" cy="986" r="10" transform="rotate(180 1823 986)" fill="white"/>
<circle cx="1823" cy="966" r="10" transform="rotate(180 1823 966)" fill="white"/>
<circle cx="1803" cy="966" r="10" transform="rotate(180 1803 966)" fill="white"/>
<circle cx="1805.5" cy="983.5" r="7.5" transform="rotate(180 1805.5 983.5)" fill="white"/>
<circle cx="1840.5" cy="968.5" r="7.5" transform="rotate(180 1840.5 968.5)" fill="white"/>
<circle cx="1825.5" cy="1003.5" r="7.5" transform="rotate(180 1825.5 1003.5)" fill="white"/>
<circle cx="1860.5" cy="988.5" r="7.5" transform="rotate(180 1860.5 988.5)" fill="white"/>
<circle cx="1845.5" cy="1023.5" r="7.5" transform="rotate(180 1845.5 1023.5)" fill="white"/>
<circle cx="1880.5" cy="1008.5" r="7.5" transform="rotate(180 1880.5 1008.5)" fill="white"/>
<circle cx="1875.5" cy="993.5" r="7.5" transform="rotate(180 1875.5 993.5)" fill="white"/>
<circle cx="1830.5" cy="1018.5" r="7.5" transform="rotate(180 1830.5 1018.5)" fill="white"/>
<circle cx="1855.5" cy="973.5" r="7.5" transform="rotate(180 1855.5 973.5)" fill="white"/>
<circle cx="1810.5" cy="998.5" r="7.5" transform="rotate(180 1810.5 998.5)" fill="white"/>
<circle cx="1816" cy="1013" r="5" transform="rotate(180 1816 1013)" fill="white"/>
<circle cx="1871" cy="978" r="5" transform="rotate(180 1871 978)" fill="white"/>
<circle cx="1892" cy="960" r="10" transform="rotate(180 1892 960)" fill="white"/>
<circle cx="1872" cy="960" r="10" transform="rotate(180 1872 960)" fill="white"/>
<circle cx="1872" cy="940" r="10" transform="rotate(180 1872 940)" fill="white"/>
<circle cx="1852" cy="940" r="10" transform="rotate(180 1852 940)" fill="white"/>
<circle cx="1852" cy="920" r="10" transform="rotate(180 1852 920)" fill="white"/>
<circle cx="1832" cy="920" r="10" transform="rotate(180 1832 920)" fill="white"/>
<circle cx="1832" cy="900" r="10" transform="rotate(180 1832 900)" fill="white"/>
<circle cx="1812" cy="900" r="10" transform="rotate(180 1812 900)" fill="white"/>
<circle cx="1814.5" cy="917.5" r="7.5" transform="rotate(180 1814.5 917.5)" fill="white"/>
<circle cx="1849.5" cy="902.5" r="7.5" transform="rotate(180 1849.5 902.5)" fill="white"/>
<circle cx="1834.5" cy="937.5" r="7.5" transform="rotate(180 1834.5 937.5)" fill="white"/>
<circle cx="1869.5" cy="922.5" r="7.5" transform="rotate(180 1869.5 922.5)" fill="white"/>
<circle cx="1854.5" cy="957.5" r="7.5" transform="rotate(180 1854.5 957.5)" fill="white"/>
<circle cx="1889.5" cy="942.5" r="7.5" transform="rotate(180 1889.5 942.5)" fill="white"/>
<circle cx="1884.5" cy="927.5" r="7.5" transform="rotate(180 1884.5 927.5)" fill="white"/>
<circle cx="1839.5" cy="952.5" r="7.5" transform="rotate(180 1839.5 952.5)" fill="white"/>
<circle cx="1864.5" cy="907.5" r="7.5" transform="rotate(180 1864.5 907.5)" fill="white"/>
<circle cx="1819.5" cy="932.5" r="7.5" transform="rotate(180 1819.5 932.5)" fill="white"/>
<circle cx="1825" cy="947" r="5" transform="rotate(180 1825 947)" fill="white"/>
<circle cx="1880" cy="912" r="5" transform="rotate(180 1880 912)" fill="white"/>
<circle cx="1897" cy="893" r="10" transform="rotate(180 1897 893)" fill="white"/>
<circle cx="1877" cy="893" r="10" transform="rotate(180 1877 893)" fill="white"/>
<circle cx="1877" cy="873" r="10" transform="rotate(180 1877 873)" fill="white"/>
<circle cx="1857" cy="873" r="10" transform="rotate(180 1857 873)" fill="white"/>
<circle cx="1857" cy="853" r="10" transform="rotate(180 1857 853)" fill="white"/>
<circle cx="1837" cy="853" r="10" transform="rotate(180 1837 853)" fill="white"/>
<circle cx="1837" cy="833" r="10" transform="rotate(180 1837 833)" fill="white"/>
<circle cx="1817" cy="833" r="10" transform="rotate(180 1817 833)" fill="white"/>
<circle cx="1819.5" cy="850.5" r="7.5" transform="rotate(180 1819.5 850.5)" fill="white"/>
<circle cx="1854.5" cy="835.5" r="7.5" transform="rotate(180 1854.5 835.5)" fill="white"/>
<circle cx="1839.5" cy="870.5" r="7.5" transform="rotate(180 1839.5 870.5)" fill="white"/>
<circle cx="1874.5" cy="855.5" r="7.5" transform="rotate(180 1874.5 855.5)" fill="white"/>
<circle cx="1859.5" cy="890.5" r="7.5" transform="rotate(180 1859.5 890.5)" fill="white"/>
<circle cx="1894.5" cy="875.5" r="7.5" transform="rotate(180 1894.5 875.5)" fill="white"/>
<circle cx="1889.5" cy="860.5" r="7.5" transform="rotate(180 1889.5 860.5)" fill="white"/>
<circle cx="1844.5" cy="885.5" r="7.5" transform="rotate(180 1844.5 885.5)" fill="white"/>
<circle cx="1869.5" cy="840.5" r="7.5" transform="rotate(180 1869.5 840.5)" fill="white"/>
<circle cx="1824.5" cy="865.5" r="7.5" transform="rotate(180 1824.5 865.5)" fill="white"/>
<circle cx="1830" cy="880" r="5" transform="rotate(180 1830 880)" fill="white"/>
<circle cx="1885" cy="845" r="5" transform="rotate(180 1885 845)" fill="white"/>
<circle cx="1897" cy="823" r="10" transform="rotate(180 1897 823)" fill="white"/>
<circle cx="1877" cy="823" r="10" transform="rotate(180 1877 823)" fill="white"/>
<circle cx="1877" cy="803" r="10" transform="rotate(180 1877 803)" fill="white"/>
<circle cx="1857" cy="803" r="10" transform="rotate(180 1857 803)" fill="white"/>
<circle cx="1857" cy="783" r="10" transform="rotate(180 1857 783)" fill="white"/>
<circle cx="1837" cy="783" r="10" transform="rotate(180 1837 783)" fill="white"/>
<circle cx="1837" cy="763" r="10" transform="rotate(180 1837 763)" fill="white"/>
<circle cx="1817" cy="763" r="10" transform="rotate(180 1817 763)" fill="white"/>
<circle cx="1819.5" cy="780.5" r="7.5" transform="rotate(180 1819.5 780.5)" fill="white"/>
<circle cx="1854.5" cy="765.5" r="7.5" transform="rotate(180 1854.5 765.5)" fill="white"/>
<circle cx="1839.5" cy="800.5" r="7.5" transform="rotate(180 1839.5 800.5)" fill="white"/>
<circle cx="1874.5" cy="785.5" r="7.5" transform="rotate(180 1874.5 785.5)" fill="white"/>
<circle cx="1859.5" cy="820.5" r="7.5" transform="rotate(180 1859.5 820.5)" fill="white"/>
<circle cx="1894.5" cy="805.5" r="7.5" transform="rotate(180 1894.5 805.5)" fill="white"/>
<circle cx="1889.5" cy="790.5" r="7.5" transform="rotate(180 1889.5 790.5)" fill="white"/>
<circle cx="1844.5" cy="815.5" r="7.5" transform="rotate(180 1844.5 815.5)" fill="white"/>
<circle cx="1869.5" cy="770.5" r="7.5" transform="rotate(180 1869.5 770.5)" fill="white"/>
<circle cx="1824.5" cy="795.5" r="7.5" transform="rotate(180 1824.5 795.5)" fill="white"/>
<circle cx="1830" cy="810" r="5" transform="rotate(180 1830 810)" fill="white"/>
<circle cx="1885" cy="775" r="5" transform="rotate(180 1885 775)" fill="white"/>
<circle cx="1812" cy="812" r="10" transform="rotate(180 1812 812)" fill="white"/>
<circle cx="1792" cy="812" r="10" transform="rotate(180 1792 812)" fill="white"/>
<circle cx="1792" cy="792" r="10" transform="rotate(180 1792 792)" fill="white"/>
<circle cx="1772" cy="792" r="10" transform="rotate(180 1772 792)" fill="white"/>
<circle cx="1772" cy="772" r="10" transform="rotate(180 1772 772)" fill="white"/>
<circle cx="1752" cy="772" r="10" transform="rotate(180 1752 772)" fill="white"/>
<circle cx="1752" cy="752" r="10" transform="rotate(180 1752 752)" fill="white"/>
<circle cx="1732" cy="752" r="10" transform="rotate(180 1732 752)" fill="white"/>
<circle cx="1734.5" cy="769.5" r="7.5" transform="rotate(180 1734.5 769.5)" fill="white"/>
<circle cx="1769.5" cy="754.5" r="7.5" transform="rotate(180 1769.5 754.5)" fill="white"/>
<circle cx="1754.5" cy="789.5" r="7.5" transform="rotate(180 1754.5 789.5)" fill="white"/>
<circle cx="1789.5" cy="774.5" r="7.5" transform="rotate(180 1789.5 774.5)" fill="white"/>
<circle cx="1774.5" cy="809.5" r="7.5" transform="rotate(180 1774.5 809.5)" fill="white"/>
<circle cx="1809.5" cy="794.5" r="7.5" transform="rotate(180 1809.5 794.5)" fill="white"/>
<circle cx="1804.5" cy="779.5" r="7.5" transform="rotate(180 1804.5 779.5)" fill="white"/>
<circle cx="1759.5" cy="804.5" r="7.5" transform="rotate(180 1759.5 804.5)" fill="white"/>
<circle cx="1784.5" cy="759.5" r="7.5" transform="rotate(180 1784.5 759.5)" fill="white"/>
<circle cx="1739.5" cy="784.5" r="7.5" transform="rotate(180 1739.5 784.5)" fill="white"/>
<circle cx="1745" cy="799" r="5" transform="rotate(180 1745 799)" fill="white"/>
<circle cx="1800" cy="764" r="5" transform="rotate(180 1800 764)" fill="white"/>
<circle cx="2079" cy="920" r="10" transform="rotate(180 2079 920)" fill="white"/>
<circle cx="2059" cy="920" r="10" transform="rotate(180 2059 920)" fill="white"/>
<circle cx="2059" cy="900" r="10" transform="rotate(180 2059 900)" fill="white"/>
<circle cx="2039" cy="900" r="10" transform="rotate(180 2039 900)" fill="white"/>
<circle cx="2039" cy="880" r="10" transform="rotate(180 2039 880)" fill="white"/>
<circle cx="2019" cy="880" r="10" transform="rotate(180 2019 880)" fill="white"/>
<circle cx="2019" cy="860" r="10" transform="rotate(180 2019 860)" fill="white"/>
<circle cx="1999" cy="860" r="10" transform="rotate(180 1999 860)" fill="white"/>
<circle cx="2001.5" cy="877.5" r="7.5" transform="rotate(180 2001.5 877.5)" fill="white"/>
<circle cx="2036.5" cy="862.5" r="7.5" transform="rotate(180 2036.5 862.5)" fill="white"/>
<circle cx="2021.5" cy="897.5" r="7.5" transform="rotate(180 2021.5 897.5)" fill="white"/>
<circle cx="2056.5" cy="882.5" r="7.5" transform="rotate(180 2056.5 882.5)" fill="white"/>
<circle cx="2041.5" cy="917.5" r="7.5" transform="rotate(180 2041.5 917.5)" fill="white"/>
<circle cx="2076.5" cy="902.5" r="7.5" transform="rotate(180 2076.5 902.5)" fill="white"/>
<circle cx="2071.5" cy="887.5" r="7.5" transform="rotate(180 2071.5 887.5)" fill="white"/>
<circle cx="2026.5" cy="912.5" r="7.5" transform="rotate(180 2026.5 912.5)" fill="white"/>
<circle cx="2051.5" cy="867.5" r="7.5" transform="rotate(180 2051.5 867.5)" fill="white"/>
<circle cx="2006.5" cy="892.5" r="7.5" transform="rotate(180 2006.5 892.5)" fill="white"/>
<circle cx="2012" cy="907" r="5" transform="rotate(180 2012 907)" fill="white"/>
<circle cx="2067" cy="872" r="5" transform="rotate(180 2067 872)" fill="white"/>
<circle cx="2086" cy="854" r="10" transform="rotate(180 2086 854)" fill="white"/>
<circle cx="2066" cy="854" r="10" transform="rotate(180 2066 854)" fill="white"/>
<circle cx="2066" cy="834" r="10" transform="rotate(180 2066 834)" fill="white"/>
<circle cx="2046" cy="834" r="10" transform="rotate(180 2046 834)" fill="white"/>
<circle cx="2046" cy="814" r="10" transform="rotate(180 2046 814)" fill="white"/>
<circle cx="2026" cy="814" r="10" transform="rotate(180 2026 814)" fill="white"/>
<circle cx="2026" cy="794" r="10" transform="rotate(180 2026 794)" fill="white"/>
<circle cx="2006" cy="794" r="10" transform="rotate(180 2006 794)" fill="white"/>
<circle cx="2008.5" cy="811.5" r="7.5" transform="rotate(180 2008.5 811.5)" fill="white"/>
<circle cx="2043.5" cy="796.5" r="7.5" transform="rotate(180 2043.5 796.5)" fill="white"/>
<circle cx="2028.5" cy="831.5" r="7.5" transform="rotate(180 2028.5 831.5)" fill="white"/>
<circle cx="2063.5" cy="816.5" r="7.5" transform="rotate(180 2063.5 816.5)" fill="white"/>
<circle cx="2048.5" cy="851.5" r="7.5" transform="rotate(180 2048.5 851.5)" fill="white"/>
<circle cx="2083.5" cy="836.5" r="7.5" transform="rotate(180 2083.5 836.5)" fill="white"/>
<circle cx="2078.5" cy="821.5" r="7.5" transform="rotate(180 2078.5 821.5)" fill="white"/>
<circle cx="2033.5" cy="846.5" r="7.5" transform="rotate(180 2033.5 846.5)" fill="white"/>
<circle cx="2058.5" cy="801.5" r="7.5" transform="rotate(180 2058.5 801.5)" fill="white"/>
<circle cx="2013.5" cy="826.5" r="7.5" transform="rotate(180 2013.5 826.5)" fill="white"/>
<circle cx="2019" cy="841" r="5" transform="rotate(180 2019 841)" fill="white"/>
<circle cx="2074" cy="806" r="5" transform="rotate(180 2074 806)" fill="white"/>
<circle cx="1999" cy="840" r="10" transform="rotate(180 1999 840)" fill="white"/>
<circle cx="1979" cy="840" r="10" transform="rotate(180 1979 840)" fill="white"/>
<circle cx="1979" cy="820" r="10" transform="rotate(180 1979 820)" fill="white"/>
<circle cx="1959" cy="820" r="10" transform="rotate(180 1959 820)" fill="white"/>
<circle cx="1959" cy="800" r="10" transform="rotate(180 1959 800)" fill="white"/>
<circle cx="1939" cy="800" r="10" transform="rotate(180 1939 800)" fill="white"/>
<circle cx="1939" cy="780" r="10" transform="rotate(180 1939 780)" fill="white"/>
<circle cx="1919" cy="780" r="10" transform="rotate(180 1919 780)" fill="white"/>
<circle cx="1921.5" cy="797.5" r="7.5" transform="rotate(180 1921.5 797.5)" fill="white"/>
<circle cx="1956.5" cy="782.5" r="7.5" transform="rotate(180 1956.5 782.5)" fill="white"/>
<circle cx="1941.5" cy="817.5" r="7.5" transform="rotate(180 1941.5 817.5)" fill="white"/>
<circle cx="1976.5" cy="802.5" r="7.5" transform="rotate(180 1976.5 802.5)" fill="white"/>
<circle cx="1961.5" cy="837.5" r="7.5" transform="rotate(180 1961.5 837.5)" fill="white"/>
<circle cx="1996.5" cy="822.5" r="7.5" transform="rotate(180 1996.5 822.5)" fill="white"/>
<circle cx="1991.5" cy="807.5" r="7.5" transform="rotate(180 1991.5 807.5)" fill="white"/>
<circle cx="1946.5" cy="832.5" r="7.5" transform="rotate(180 1946.5 832.5)" fill="white"/>
<circle cx="1971.5" cy="787.5" r="7.5" transform="rotate(180 1971.5 787.5)" fill="white"/>
<circle cx="1926.5" cy="812.5" r="7.5" transform="rotate(180 1926.5 812.5)" fill="white"/>
<circle cx="1932" cy="827" r="5" transform="rotate(180 1932 827)" fill="white"/>
<circle cx="1987" cy="792" r="5" transform="rotate(180 1987 792)" fill="white"/>
<circle cx="1991" cy="907" r="10" transform="rotate(180 1991 907)" fill="white"/>
<circle cx="1971" cy="907" r="10" transform="rotate(180 1971 907)" fill="white"/>
<circle cx="1971" cy="887" r="10" transform="rotate(180 1971 887)" fill="white"/>
<circle cx="1951" cy="887" r="10" transform="rotate(180 1951 887)" fill="white"/>
<circle cx="1951" cy="867" r="10" transform="rotate(180 1951 867)" fill="white"/>
<circle cx="1931" cy="867" r="10" transform="rotate(180 1931 867)" fill="white"/>
<circle cx="1931" cy="847" r="10" transform="rotate(180 1931 847)" fill="white"/>
<circle cx="1911" cy="847" r="10" transform="rotate(180 1911 847)" fill="white"/>
<circle cx="1913.5" cy="864.5" r="7.5" transform="rotate(180 1913.5 864.5)" fill="white"/>
<circle cx="1948.5" cy="849.5" r="7.5" transform="rotate(180 1948.5 849.5)" fill="white"/>
<circle cx="1933.5" cy="884.5" r="7.5" transform="rotate(180 1933.5 884.5)" fill="white"/>
<circle cx="1968.5" cy="869.5" r="7.5" transform="rotate(180 1968.5 869.5)" fill="white"/>
<circle cx="1953.5" cy="904.5" r="7.5" transform="rotate(180 1953.5 904.5)" fill="white"/>
<circle cx="1988.5" cy="889.5" r="7.5" transform="rotate(180 1988.5 889.5)" fill="white"/>
<circle cx="1983.5" cy="874.5" r="7.5" transform="rotate(180 1983.5 874.5)" fill="white"/>
<circle cx="1938.5" cy="899.5" r="7.5" transform="rotate(180 1938.5 899.5)" fill="white"/>
<circle cx="1963.5" cy="854.5" r="7.5" transform="rotate(180 1963.5 854.5)" fill="white"/>
<circle cx="1918.5" cy="879.5" r="7.5" transform="rotate(180 1918.5 879.5)" fill="white"/>
<circle cx="1924" cy="894" r="5" transform="rotate(180 1924 894)" fill="white"/>
<circle cx="1979" cy="859" r="5" transform="rotate(180 1979 859)" fill="white"/>
<circle cx="1981" cy="972" r="10" transform="rotate(180 1981 972)" fill="white"/>
<circle cx="1961" cy="972" r="10" transform="rotate(180 1961 972)" fill="white"/>
<circle cx="1961" cy="952" r="10" transform="rotate(180 1961 952)" fill="white"/>
<circle cx="1941" cy="952" r="10" transform="rotate(180 1941 952)" fill="white"/>
<circle cx="1941" cy="932" r="10" transform="rotate(180 1941 932)" fill="white"/>
<circle cx="1921" cy="932" r="10" transform="rotate(180 1921 932)" fill="white"/>
<circle cx="1921" cy="912" r="10" transform="rotate(180 1921 912)" fill="white"/>
<circle cx="1901" cy="912" r="10" transform="rotate(180 1901 912)" fill="white"/>
<circle cx="1903.5" cy="929.5" r="7.5" transform="rotate(180 1903.5 929.5)" fill="white"/>
<circle cx="1938.5" cy="914.5" r="7.5" transform="rotate(180 1938.5 914.5)" fill="white"/>
<circle cx="1923.5" cy="949.5" r="7.5" transform="rotate(180 1923.5 949.5)" fill="white"/>
<circle cx="1958.5" cy="934.5" r="7.5" transform="rotate(180 1958.5 934.5)" fill="white"/>
<circle cx="1943.5" cy="969.5" r="7.5" transform="rotate(180 1943.5 969.5)" fill="white"/>
<circle cx="1978.5" cy="954.5" r="7.5" transform="rotate(180 1978.5 954.5)" fill="white"/>
<circle cx="1973.5" cy="939.5" r="7.5" transform="rotate(180 1973.5 939.5)" fill="white"/>
<circle cx="1928.5" cy="964.5" r="7.5" transform="rotate(180 1928.5 964.5)" fill="white"/>
<circle cx="1953.5" cy="919.5" r="7.5" transform="rotate(180 1953.5 919.5)" fill="white"/>
<circle cx="1908.5" cy="944.5" r="7.5" transform="rotate(180 1908.5 944.5)" fill="white"/>
<circle cx="1914" cy="959" r="5" transform="rotate(180 1914 959)" fill="white"/>
<circle cx="1969" cy="924" r="5" transform="rotate(180 1969 924)" fill="white"/>
<circle cx="2071" cy="987" r="10" transform="rotate(180 2071 987)" fill="white"/>
<circle cx="2051" cy="987" r="10" transform="rotate(180 2051 987)" fill="white"/>
<circle cx="2051" cy="967" r="10" transform="rotate(180 2051 967)" fill="white"/>
<circle cx="2031" cy="967" r="10" transform="rotate(180 2031 967)" fill="white"/>
<circle cx="2031" cy="947" r="10" transform="rotate(180 2031 947)" fill="white"/>
<circle cx="2011" cy="947" r="10" transform="rotate(180 2011 947)" fill="white"/>
<circle cx="2011" cy="927" r="10" transform="rotate(180 2011 927)" fill="white"/>
<circle cx="1991" cy="927" r="10" transform="rotate(180 1991 927)" fill="white"/>
<circle cx="1993.5" cy="944.5" r="7.5" transform="rotate(180 1993.5 944.5)" fill="white"/>
<circle cx="2028.5" cy="929.5" r="7.5" transform="rotate(180 2028.5 929.5)" fill="white"/>
<circle cx="2013.5" cy="964.5" r="7.5" transform="rotate(180 2013.5 964.5)" fill="white"/>
<circle cx="2048.5" cy="949.5" r="7.5" transform="rotate(180 2048.5 949.5)" fill="white"/>
<circle cx="2033.5" cy="984.5" r="7.5" transform="rotate(180 2033.5 984.5)" fill="white"/>
<circle cx="2068.5" cy="969.5" r="7.5" transform="rotate(180 2068.5 969.5)" fill="white"/>
<circle cx="2063.5" cy="954.5" r="7.5" transform="rotate(180 2063.5 954.5)" fill="white"/>
<circle cx="2018.5" cy="979.5" r="7.5" transform="rotate(180 2018.5 979.5)" fill="white"/>
<circle cx="2043.5" cy="934.5" r="7.5" transform="rotate(180 2043.5 934.5)" fill="white"/>
<circle cx="1998.5" cy="959.5" r="7.5" transform="rotate(180 1998.5 959.5)" fill="white"/>
<circle cx="2004" cy="974" r="5" transform="rotate(180 2004 974)" fill="white"/>
<circle cx="2059" cy="939" r="5" transform="rotate(180 2059 939)" fill="white"/>
<circle cx="2157" cy="1000" r="10" transform="rotate(180 2157 1000)" fill="white"/>
<circle cx="2137" cy="1000" r="10" transform="rotate(180 2137 1000)" fill="white"/>
<circle cx="2137" cy="980" r="10" transform="rotate(180 2137 980)" fill="white"/>
<circle cx="2117" cy="980" r="10" transform="rotate(180 2117 980)" fill="white"/>
<circle cx="2117" cy="960" r="10" transform="rotate(180 2117 960)" fill="white"/>
<circle cx="2097" cy="960" r="10" transform="rotate(180 2097 960)" fill="white"/>
<circle cx="2097" cy="940" r="10" transform="rotate(180 2097 940)" fill="white"/>
<circle cx="2077" cy="940" r="10" transform="rotate(180 2077 940)" fill="white"/>
<circle cx="2079.5" cy="957.5" r="7.5" transform="rotate(180 2079.5 957.5)" fill="white"/>
<circle cx="2114.5" cy="942.5" r="7.5" transform="rotate(180 2114.5 942.5)" fill="white"/>
<circle cx="2099.5" cy="977.5" r="7.5" transform="rotate(180 2099.5 977.5)" fill="white"/>
<circle cx="2134.5" cy="962.5" r="7.5" transform="rotate(180 2134.5 962.5)" fill="white"/>
<circle cx="2119.5" cy="997.5" r="7.5" transform="rotate(180 2119.5 997.5)" fill="white"/>
<circle cx="2154.5" cy="982.5" r="7.5" transform="rotate(180 2154.5 982.5)" fill="white"/>
<circle cx="2149.5" cy="967.5" r="7.5" transform="rotate(180 2149.5 967.5)" fill="white"/>
<circle cx="2104.5" cy="992.5" r="7.5" transform="rotate(180 2104.5 992.5)" fill="white"/>
<circle cx="2129.5" cy="947.5" r="7.5" transform="rotate(180 2129.5 947.5)" fill="white"/>
<circle cx="2084.5" cy="972.5" r="7.5" transform="rotate(180 2084.5 972.5)" fill="white"/>
<circle cx="2090" cy="987" r="5" transform="rotate(180 2090 987)" fill="white"/>
<circle cx="2145" cy="952" r="5" transform="rotate(180 2145 952)" fill="white"/>
<circle cx="2166" cy="934" r="10" transform="rotate(180 2166 934)" fill="white"/>
<circle cx="2146" cy="934" r="10" transform="rotate(180 2146 934)" fill="white"/>
<circle cx="2146" cy="914" r="10" transform="rotate(180 2146 914)" fill="white"/>
<circle cx="2126" cy="914" r="10" transform="rotate(180 2126 914)" fill="white"/>
<circle cx="2126" cy="894" r="10" transform="rotate(180 2126 894)" fill="white"/>
<circle cx="2106" cy="894" r="10" transform="rotate(180 2106 894)" fill="white"/>
<circle cx="2106" cy="874" r="10" transform="rotate(180 2106 874)" fill="white"/>
<circle cx="2086" cy="874" r="10" transform="rotate(180 2086 874)" fill="white"/>
<circle cx="2088.5" cy="891.5" r="7.5" transform="rotate(180 2088.5 891.5)" fill="white"/>
<circle cx="2123.5" cy="876.5" r="7.5" transform="rotate(180 2123.5 876.5)" fill="white"/>
<circle cx="2108.5" cy="911.5" r="7.5" transform="rotate(180 2108.5 911.5)" fill="white"/>
<circle cx="2143.5" cy="896.5" r="7.5" transform="rotate(180 2143.5 896.5)" fill="white"/>
<circle cx="2128.5" cy="931.5" r="7.5" transform="rotate(180 2128.5 931.5)" fill="white"/>
<circle cx="2163.5" cy="916.5" r="7.5" transform="rotate(180 2163.5 916.5)" fill="white"/>
<circle cx="2158.5" cy="901.5" r="7.5" transform="rotate(180 2158.5 901.5)" fill="white"/>
<circle cx="2113.5" cy="926.5" r="7.5" transform="rotate(180 2113.5 926.5)" fill="white"/>
<circle cx="2138.5" cy="881.5" r="7.5" transform="rotate(180 2138.5 881.5)" fill="white"/>
<circle cx="2093.5" cy="906.5" r="7.5" transform="rotate(180 2093.5 906.5)" fill="white"/>
<circle cx="2099" cy="921" r="5" transform="rotate(180 2099 921)" fill="white"/>
<circle cx="2154" cy="886" r="5" transform="rotate(180 2154 886)" fill="white"/>
<circle cx="2171" cy="867" r="10" transform="rotate(180 2171 867)" fill="white"/>
<circle cx="2151" cy="867" r="10" transform="rotate(180 2151 867)" fill="white"/>
<circle cx="2151" cy="847" r="10" transform="rotate(180 2151 847)" fill="white"/>
<circle cx="2131" cy="847" r="10" transform="rotate(180 2131 847)" fill="white"/>
<circle cx="2131" cy="827" r="10" transform="rotate(180 2131 827)" fill="white"/>
<circle cx="2111" cy="827" r="10" transform="rotate(180 2111 827)" fill="white"/>
<circle cx="2111" cy="807" r="10" transform="rotate(180 2111 807)" fill="white"/>
<circle cx="2091" cy="807" r="10" transform="rotate(180 2091 807)" fill="white"/>
<circle cx="2093.5" cy="824.5" r="7.5" transform="rotate(180 2093.5 824.5)" fill="white"/>
<circle cx="2128.5" cy="809.5" r="7.5" transform="rotate(180 2128.5 809.5)" fill="white"/>
<circle cx="2113.5" cy="844.5" r="7.5" transform="rotate(180 2113.5 844.5)" fill="white"/>
<circle cx="2148.5" cy="829.5" r="7.5" transform="rotate(180 2148.5 829.5)" fill="white"/>
<circle cx="2133.5" cy="864.5" r="7.5" transform="rotate(180 2133.5 864.5)" fill="white"/>
<circle cx="2168.5" cy="849.5" r="7.5" transform="rotate(180 2168.5 849.5)" fill="white"/>
<circle cx="2163.5" cy="834.5" r="7.5" transform="rotate(180 2163.5 834.5)" fill="white"/>
<circle cx="2118.5" cy="859.5" r="7.5" transform="rotate(180 2118.5 859.5)" fill="white"/>
<circle cx="2143.5" cy="814.5" r="7.5" transform="rotate(180 2143.5 814.5)" fill="white"/>
<circle cx="2098.5" cy="839.5" r="7.5" transform="rotate(180 2098.5 839.5)" fill="white"/>
<circle cx="2104" cy="854" r="5" transform="rotate(180 2104 854)" fill="white"/>
<circle cx="2159" cy="819" r="5" transform="rotate(180 2159 819)" fill="white"/>
<circle cx="2171" cy="797" r="10" transform="rotate(180 2171 797)" fill="white"/>
<circle cx="2151" cy="797" r="10" transform="rotate(180 2151 797)" fill="white"/>
<circle cx="2151" cy="777" r="10" transform="rotate(180 2151 777)" fill="white"/>
<circle cx="2131" cy="777" r="10" transform="rotate(180 2131 777)" fill="white"/>
<circle cx="2131" cy="757" r="10" transform="rotate(180 2131 757)" fill="white"/>
<circle cx="2111" cy="757" r="10" transform="rotate(180 2111 757)" fill="white"/>
<circle cx="2111" cy="737" r="10" transform="rotate(180 2111 737)" fill="white"/>
<circle cx="2091" cy="737" r="10" transform="rotate(180 2091 737)" fill="white"/>
<circle cx="2093.5" cy="754.5" r="7.5" transform="rotate(180 2093.5 754.5)" fill="white"/>
<circle cx="2128.5" cy="739.5" r="7.5" transform="rotate(180 2128.5 739.5)" fill="white"/>
<circle cx="2113.5" cy="774.5" r="7.5" transform="rotate(180 2113.5 774.5)" fill="white"/>
<circle cx="2148.5" cy="759.5" r="7.5" transform="rotate(180 2148.5 759.5)" fill="white"/>
<circle cx="2133.5" cy="794.5" r="7.5" transform="rotate(180 2133.5 794.5)" fill="white"/>
<circle cx="2168.5" cy="779.5" r="7.5" transform="rotate(180 2168.5 779.5)" fill="white"/>
<circle cx="2163.5" cy="764.5" r="7.5" transform="rotate(180 2163.5 764.5)" fill="white"/>
<circle cx="2118.5" cy="789.5" r="7.5" transform="rotate(180 2118.5 789.5)" fill="white"/>
<circle cx="2143.5" cy="744.5" r="7.5" transform="rotate(180 2143.5 744.5)" fill="white"/>
<circle cx="2098.5" cy="769.5" r="7.5" transform="rotate(180 2098.5 769.5)" fill="white"/>
<circle cx="2104" cy="784" r="5" transform="rotate(180 2104 784)" fill="white"/>
<circle cx="2159" cy="749" r="5" transform="rotate(180 2159 749)" fill="white"/>
<circle cx="2086" cy="786" r="10" transform="rotate(180 2086 786)" fill="white"/>
<circle cx="2066" cy="786" r="10" transform="rotate(180 2066 786)" fill="white"/>
<circle cx="2066" cy="766" r="10" transform="rotate(180 2066 766)" fill="white"/>
<circle cx="2046" cy="766" r="10" transform="rotate(180 2046 766)" fill="white"/>
<circle cx="2046" cy="746" r="10" transform="rotate(180 2046 746)" fill="white"/>
<circle cx="2026" cy="746" r="10" transform="rotate(180 2026 746)" fill="white"/>
<circle cx="2026" cy="726" r="10" transform="rotate(180 2026 726)" fill="white"/>
<circle cx="2006" cy="726" r="10" transform="rotate(180 2006 726)" fill="white"/>
<circle cx="2008.5" cy="743.5" r="7.5" transform="rotate(180 2008.5 743.5)" fill="white"/>
<circle cx="2043.5" cy="728.5" r="7.5" transform="rotate(180 2043.5 728.5)" fill="white"/>
<circle cx="2028.5" cy="763.5" r="7.5" transform="rotate(180 2028.5 763.5)" fill="white"/>
<circle cx="2063.5" cy="748.5" r="7.5" transform="rotate(180 2063.5 748.5)" fill="white"/>
<circle cx="2048.5" cy="783.5" r="7.5" transform="rotate(180 2048.5 783.5)" fill="white"/>
<circle cx="2083.5" cy="768.5" r="7.5" transform="rotate(180 2083.5 768.5)" fill="white"/>
<circle cx="2078.5" cy="753.5" r="7.5" transform="rotate(180 2078.5 753.5)" fill="white"/>
<circle cx="2033.5" cy="778.5" r="7.5" transform="rotate(180 2033.5 778.5)" fill="white"/>
<circle cx="2058.5" cy="733.5" r="7.5" transform="rotate(180 2058.5 733.5)" fill="white"/>
<circle cx="2013.5" cy="758.5" r="7.5" transform="rotate(180 2013.5 758.5)" fill="white"/>
<circle cx="2019" cy="773" r="5" transform="rotate(180 2019 773)" fill="white"/>
<circle cx="2074" cy="738" r="5" transform="rotate(180 2074 738)" fill="white"/>
<circle cx="1693" cy="1203" r="10" transform="rotate(180 1693 1203)" fill="white"/>
<circle cx="1673" cy="1203" r="10" transform="rotate(180 1673 1203)" fill="white"/>
<circle cx="1673" cy="1183" r="10" transform="rotate(180 1673 1183)" fill="white"/>
<circle cx="1653" cy="1183" r="10" transform="rotate(180 1653 1183)" fill="white"/>
<circle cx="1653" cy="1163" r="10" transform="rotate(180 1653 1163)" fill="white"/>
<circle cx="1633" cy="1163" r="10" transform="rotate(180 1633 1163)" fill="white"/>
<circle cx="1633" cy="1143" r="10" transform="rotate(180 1633 1143)" fill="white"/>
<circle cx="1613" cy="1143" r="10" transform="rotate(180 1613 1143)" fill="white"/>
<circle cx="1615.5" cy="1160.5" r="7.5" transform="rotate(180 1615.5 1160.5)" fill="white"/>
<circle cx="1650.5" cy="1145.5" r="7.5" transform="rotate(180 1650.5 1145.5)" fill="white"/>
<circle cx="1635.5" cy="1180.5" r="7.5" transform="rotate(180 1635.5 1180.5)" fill="white"/>
<circle cx="1670.5" cy="1165.5" r="7.5" transform="rotate(180 1670.5 1165.5)" fill="white"/>
<circle cx="1655.5" cy="1200.5" r="7.5" transform="rotate(180 1655.5 1200.5)" fill="white"/>
<circle cx="1690.5" cy="1185.5" r="7.5" transform="rotate(180 1690.5 1185.5)" fill="white"/>
<circle cx="1685.5" cy="1170.5" r="7.5" transform="rotate(180 1685.5 1170.5)" fill="white"/>
<circle cx="1640.5" cy="1195.5" r="7.5" transform="rotate(180 1640.5 1195.5)" fill="white"/>
<circle cx="1665.5" cy="1150.5" r="7.5" transform="rotate(180 1665.5 1150.5)" fill="white"/>
<circle cx="1620.5" cy="1175.5" r="7.5" transform="rotate(180 1620.5 1175.5)" fill="white"/>
<circle cx="1626" cy="1190" r="5" transform="rotate(180 1626 1190)" fill="white"/>
<circle cx="1681" cy="1155" r="5" transform="rotate(180 1681 1155)" fill="white"/>
<circle cx="1700" cy="1137" r="10" transform="rotate(180 1700 1137)" fill="white"/>
<circle cx="1680" cy="1137" r="10" transform="rotate(180 1680 1137)" fill="white"/>
<circle cx="1680" cy="1117" r="10" transform="rotate(180 1680 1117)" fill="white"/>
<circle cx="1660" cy="1117" r="10" transform="rotate(180 1660 1117)" fill="white"/>
<circle cx="1660" cy="1097" r="10" transform="rotate(180 1660 1097)" fill="white"/>
<circle cx="1640" cy="1097" r="10" transform="rotate(180 1640 1097)" fill="white"/>
<circle cx="1640" cy="1077" r="10" transform="rotate(180 1640 1077)" fill="white"/>
<circle cx="1620" cy="1077" r="10" transform="rotate(180 1620 1077)" fill="white"/>
<circle cx="1622.5" cy="1094.5" r="7.5" transform="rotate(180 1622.5 1094.5)" fill="white"/>
<circle cx="1657.5" cy="1079.5" r="7.5" transform="rotate(180 1657.5 1079.5)" fill="white"/>
<circle cx="1642.5" cy="1114.5" r="7.5" transform="rotate(180 1642.5 1114.5)" fill="white"/>
<circle cx="1677.5" cy="1099.5" r="7.5" transform="rotate(180 1677.5 1099.5)" fill="white"/>
<circle cx="1662.5" cy="1134.5" r="7.5" transform="rotate(180 1662.5 1134.5)" fill="white"/>
<circle cx="1697.5" cy="1119.5" r="7.5" transform="rotate(180 1697.5 1119.5)" fill="white"/>
<circle cx="1692.5" cy="1104.5" r="7.5" transform="rotate(180 1692.5 1104.5)" fill="white"/>
<circle cx="1647.5" cy="1129.5" r="7.5" transform="rotate(180 1647.5 1129.5)" fill="white"/>
<circle cx="1672.5" cy="1084.5" r="7.5" transform="rotate(180 1672.5 1084.5)" fill="white"/>
<circle cx="1627.5" cy="1109.5" r="7.5" transform="rotate(180 1627.5 1109.5)" fill="white"/>
<circle cx="1633" cy="1124" r="5" transform="rotate(180 1633 1124)" fill="white"/>
<circle cx="1688" cy="1089" r="5" transform="rotate(180 1688 1089)" fill="white"/>
<circle cx="1613" cy="1123" r="10" transform="rotate(180 1613 1123)" fill="white"/>
<circle cx="1593" cy="1123" r="10" transform="rotate(180 1593 1123)" fill="white"/>
<circle cx="1593" cy="1103" r="10" transform="rotate(180 1593 1103)" fill="white"/>
<circle cx="1573" cy="1103" r="10" transform="rotate(180 1573 1103)" fill="white"/>
<circle cx="1573" cy="1083" r="10" transform="rotate(180 1573 1083)" fill="white"/>
<circle cx="1553" cy="1083" r="10" transform="rotate(180 1553 1083)" fill="white"/>
<circle cx="1553" cy="1063" r="10" transform="rotate(180 1553 1063)" fill="white"/>
<circle cx="1533" cy="1063" r="10" transform="rotate(180 1533 1063)" fill="white"/>
<circle cx="1535.5" cy="1080.5" r="7.5" transform="rotate(180 1535.5 1080.5)" fill="white"/>
<circle cx="1570.5" cy="1065.5" r="7.5" transform="rotate(180 1570.5 1065.5)" fill="white"/>
<circle cx="1555.5" cy="1100.5" r="7.5" transform="rotate(180 1555.5 1100.5)" fill="white"/>
<circle cx="1590.5" cy="1085.5" r="7.5" transform="rotate(180 1590.5 1085.5)" fill="white"/>
<circle cx="1575.5" cy="1120.5" r="7.5" transform="rotate(180 1575.5 1120.5)" fill="white"/>
<circle cx="1610.5" cy="1105.5" r="7.5" transform="rotate(180 1610.5 1105.5)" fill="white"/>
<circle cx="1605.5" cy="1090.5" r="7.5" transform="rotate(180 1605.5 1090.5)" fill="white"/>
<circle cx="1560.5" cy="1115.5" r="7.5" transform="rotate(180 1560.5 1115.5)" fill="white"/>
<circle cx="1585.5" cy="1070.5" r="7.5" transform="rotate(180 1585.5 1070.5)" fill="white"/>
<circle cx="1540.5" cy="1095.5" r="7.5" transform="rotate(180 1540.5 1095.5)" fill="white"/>
<circle cx="1546" cy="1110" r="5" transform="rotate(180 1546 1110)" fill="white"/>
<circle cx="1601" cy="1075" r="5" transform="rotate(180 1601 1075)" fill="white"/>
<circle cx="1605" cy="1190" r="10" transform="rotate(180 1605 1190)" fill="white"/>
<circle cx="1585" cy="1190" r="10" transform="rotate(180 1585 1190)" fill="white"/>
<circle cx="1585" cy="1170" r="10" transform="rotate(180 1585 1170)" fill="white"/>
<circle cx="1565" cy="1170" r="10" transform="rotate(180 1565 1170)" fill="white"/>
<circle cx="1565" cy="1150" r="10" transform="rotate(180 1565 1150)" fill="white"/>
<circle cx="1545" cy="1150" r="10" transform="rotate(180 1545 1150)" fill="white"/>
<circle cx="1545" cy="1130" r="10" transform="rotate(180 1545 1130)" fill="white"/>
<circle cx="1525" cy="1130" r="10" transform="rotate(180 1525 1130)" fill="white"/>
<circle cx="1527.5" cy="1147.5" r="7.5" transform="rotate(180 1527.5 1147.5)" fill="white"/>
<circle cx="1562.5" cy="1132.5" r="7.5" transform="rotate(180 1562.5 1132.5)" fill="white"/>
<circle cx="1547.5" cy="1167.5" r="7.5" transform="rotate(180 1547.5 1167.5)" fill="white"/>
<circle cx="1582.5" cy="1152.5" r="7.5" transform="rotate(180 1582.5 1152.5)" fill="white"/>
<circle cx="1567.5" cy="1187.5" r="7.5" transform="rotate(180 1567.5 1187.5)" fill="white"/>
<circle cx="1602.5" cy="1172.5" r="7.5" transform="rotate(180 1602.5 1172.5)" fill="white"/>
<circle cx="1597.5" cy="1157.5" r="7.5" transform="rotate(180 1597.5 1157.5)" fill="white"/>
<circle cx="1552.5" cy="1182.5" r="7.5" transform="rotate(180 1552.5 1182.5)" fill="white"/>
<circle cx="1577.5" cy="1137.5" r="7.5" transform="rotate(180 1577.5 1137.5)" fill="white"/>
<circle cx="1532.5" cy="1162.5" r="7.5" transform="rotate(180 1532.5 1162.5)" fill="white"/>
<circle cx="1538" cy="1177" r="5" transform="rotate(180 1538 1177)" fill="white"/>
<circle cx="1593" cy="1142" r="5" transform="rotate(180 1593 1142)" fill="white"/>
<circle cx="1595" cy="1255" r="10" transform="rotate(180 1595 1255)" fill="white"/>
<circle cx="1575" cy="1255" r="10" transform="rotate(180 1575 1255)" fill="white"/>
<circle cx="1575" cy="1235" r="10" transform="rotate(180 1575 1235)" fill="white"/>
<circle cx="1555" cy="1235" r="10" transform="rotate(180 1555 1235)" fill="white"/>
<circle cx="1555" cy="1215" r="10" transform="rotate(180 1555 1215)" fill="white"/>
<circle cx="1535" cy="1215" r="10" transform="rotate(180 1535 1215)" fill="white"/>
<circle cx="1535" cy="1195" r="10" transform="rotate(180 1535 1195)" fill="white"/>
<circle cx="1515" cy="1195" r="10" transform="rotate(180 1515 1195)" fill="white"/>
<circle cx="1517.5" cy="1212.5" r="7.5" transform="rotate(180 1517.5 1212.5)" fill="white"/>
<circle cx="1552.5" cy="1197.5" r="7.5" transform="rotate(180 1552.5 1197.5)" fill="white"/>
<circle cx="1537.5" cy="1232.5" r="7.5" transform="rotate(180 1537.5 1232.5)" fill="white"/>
<circle cx="1572.5" cy="1217.5" r="7.5" transform="rotate(180 1572.5 1217.5)" fill="white"/>
<circle cx="1557.5" cy="1252.5" r="7.5" transform="rotate(180 1557.5 1252.5)" fill="white"/>
<circle cx="1592.5" cy="1237.5" r="7.5" transform="rotate(180 1592.5 1237.5)" fill="white"/>
<circle cx="1587.5" cy="1222.5" r="7.5" transform="rotate(180 1587.5 1222.5)" fill="white"/>
<circle cx="1542.5" cy="1247.5" r="7.5" transform="rotate(180 1542.5 1247.5)" fill="white"/>
<circle cx="1567.5" cy="1202.5" r="7.5" transform="rotate(180 1567.5 1202.5)" fill="white"/>
<circle cx="1522.5" cy="1227.5" r="7.5" transform="rotate(180 1522.5 1227.5)" fill="white"/>
<circle cx="1528" cy="1242" r="5" transform="rotate(180 1528 1242)" fill="white"/>
<circle cx="1583" cy="1207" r="5" transform="rotate(180 1583 1207)" fill="white"/>
<circle cx="1685" cy="1270" r="10" transform="rotate(180 1685 1270)" fill="white"/>
<circle cx="1665" cy="1270" r="10" transform="rotate(180 1665 1270)" fill="white"/>
<circle cx="1665" cy="1250" r="10" transform="rotate(180 1665 1250)" fill="white"/>
<circle cx="1645" cy="1250" r="10" transform="rotate(180 1645 1250)" fill="white"/>
<circle cx="1645" cy="1230" r="10" transform="rotate(180 1645 1230)" fill="white"/>
<circle cx="1625" cy="1230" r="10" transform="rotate(180 1625 1230)" fill="white"/>
<circle cx="1625" cy="1210" r="10" transform="rotate(180 1625 1210)" fill="white"/>
<circle cx="1605" cy="1210" r="10" transform="rotate(180 1605 1210)" fill="white"/>
<circle cx="1607.5" cy="1227.5" r="7.5" transform="rotate(180 1607.5 1227.5)" fill="white"/>
<circle cx="1642.5" cy="1212.5" r="7.5" transform="rotate(180 1642.5 1212.5)" fill="white"/>
<circle cx="1627.5" cy="1247.5" r="7.5" transform="rotate(180 1627.5 1247.5)" fill="white"/>
<circle cx="1662.5" cy="1232.5" r="7.5" transform="rotate(180 1662.5 1232.5)" fill="white"/>
<circle cx="1647.5" cy="1267.5" r="7.5" transform="rotate(180 1647.5 1267.5)" fill="white"/>
<circle cx="1682.5" cy="1252.5" r="7.5" transform="rotate(180 1682.5 1252.5)" fill="white"/>
<circle cx="1677.5" cy="1237.5" r="7.5" transform="rotate(180 1677.5 1237.5)" fill="white"/>
<circle cx="1632.5" cy="1262.5" r="7.5" transform="rotate(180 1632.5 1262.5)" fill="white"/>
<circle cx="1657.5" cy="1217.5" r="7.5" transform="rotate(180 1657.5 1217.5)" fill="white"/>
<circle cx="1612.5" cy="1242.5" r="7.5" transform="rotate(180 1612.5 1242.5)" fill="white"/>
<circle cx="1618" cy="1257" r="5" transform="rotate(180 1618 1257)" fill="white"/>
<circle cx="1673" cy="1222" r="5" transform="rotate(180 1673 1222)" fill="white"/>
<circle cx="1771" cy="1283" r="10" transform="rotate(180 1771 1283)" fill="white"/>
<circle cx="1751" cy="1283" r="10" transform="rotate(180 1751 1283)" fill="white"/>
<circle cx="1751" cy="1263" r="10" transform="rotate(180 1751 1263)" fill="white"/>
<circle cx="1731" cy="1263" r="10" transform="rotate(180 1731 1263)" fill="white"/>
<circle cx="1731" cy="1243" r="10" transform="rotate(180 1731 1243)" fill="white"/>
<circle cx="1711" cy="1243" r="10" transform="rotate(180 1711 1243)" fill="white"/>
<circle cx="1711" cy="1223" r="10" transform="rotate(180 1711 1223)" fill="white"/>
<circle cx="1691" cy="1223" r="10" transform="rotate(180 1691 1223)" fill="white"/>
<circle cx="1693.5" cy="1240.5" r="7.5" transform="rotate(180 1693.5 1240.5)" fill="white"/>
<circle cx="1728.5" cy="1225.5" r="7.5" transform="rotate(180 1728.5 1225.5)" fill="white"/>
<circle cx="1713.5" cy="1260.5" r="7.5" transform="rotate(180 1713.5 1260.5)" fill="white"/>
<circle cx="1748.5" cy="1245.5" r="7.5" transform="rotate(180 1748.5 1245.5)" fill="white"/>
<circle cx="1733.5" cy="1280.5" r="7.5" transform="rotate(180 1733.5 1280.5)" fill="white"/>
<circle cx="1768.5" cy="1265.5" r="7.5" transform="rotate(180 1768.5 1265.5)" fill="white"/>
<circle cx="1763.5" cy="1250.5" r="7.5" transform="rotate(180 1763.5 1250.5)" fill="white"/>
<circle cx="1718.5" cy="1275.5" r="7.5" transform="rotate(180 1718.5 1275.5)" fill="white"/>
<circle cx="1743.5" cy="1230.5" r="7.5" transform="rotate(180 1743.5 1230.5)" fill="white"/>
<circle cx="1698.5" cy="1255.5" r="7.5" transform="rotate(180 1698.5 1255.5)" fill="white"/>
<circle cx="1704" cy="1270" r="5" transform="rotate(180 1704 1270)" fill="white"/>
<circle cx="1759" cy="1235" r="5" transform="rotate(180 1759 1235)" fill="white"/>
<circle cx="1780" cy="1217" r="10" transform="rotate(180 1780 1217)" fill="white"/>
<circle cx="1760" cy="1217" r="10" transform="rotate(180 1760 1217)" fill="white"/>
<circle cx="1760" cy="1197" r="10" transform="rotate(180 1760 1197)" fill="white"/>
<circle cx="1740" cy="1197" r="10" transform="rotate(180 1740 1197)" fill="white"/>
<circle cx="1740" cy="1177" r="10" transform="rotate(180 1740 1177)" fill="white"/>
<circle cx="1720" cy="1177" r="10" transform="rotate(180 1720 1177)" fill="white"/>
<circle cx="1720" cy="1157" r="10" transform="rotate(180 1720 1157)" fill="white"/>
<circle cx="1700" cy="1157" r="10" transform="rotate(180 1700 1157)" fill="white"/>
<circle cx="1702.5" cy="1174.5" r="7.5" transform="rotate(180 1702.5 1174.5)" fill="white"/>
<circle cx="1737.5" cy="1159.5" r="7.5" transform="rotate(180 1737.5 1159.5)" fill="white"/>
<circle cx="1722.5" cy="1194.5" r="7.5" transform="rotate(180 1722.5 1194.5)" fill="white"/>
<circle cx="1757.5" cy="1179.5" r="7.5" transform="rotate(180 1757.5 1179.5)" fill="white"/>
<circle cx="1742.5" cy="1214.5" r="7.5" transform="rotate(180 1742.5 1214.5)" fill="white"/>
<circle cx="1777.5" cy="1199.5" r="7.5" transform="rotate(180 1777.5 1199.5)" fill="white"/>
<circle cx="1772.5" cy="1184.5" r="7.5" transform="rotate(180 1772.5 1184.5)" fill="white"/>
<circle cx="1727.5" cy="1209.5" r="7.5" transform="rotate(180 1727.5 1209.5)" fill="white"/>
<circle cx="1752.5" cy="1164.5" r="7.5" transform="rotate(180 1752.5 1164.5)" fill="white"/>
<circle cx="1707.5" cy="1189.5" r="7.5" transform="rotate(180 1707.5 1189.5)" fill="white"/>
<circle cx="1713" cy="1204" r="5" transform="rotate(180 1713 1204)" fill="white"/>
<circle cx="1768" cy="1169" r="5" transform="rotate(180 1768 1169)" fill="white"/>
<circle cx="1785" cy="1150" r="10" transform="rotate(180 1785 1150)" fill="white"/>
<circle cx="1765" cy="1150" r="10" transform="rotate(180 1765 1150)" fill="white"/>
<circle cx="1765" cy="1130" r="10" transform="rotate(180 1765 1130)" fill="white"/>
<circle cx="1745" cy="1130" r="10" transform="rotate(180 1745 1130)" fill="white"/>
<circle cx="1745" cy="1110" r="10" transform="rotate(180 1745 1110)" fill="white"/>
<circle cx="1725" cy="1110" r="10" transform="rotate(180 1725 1110)" fill="white"/>
<circle cx="1725" cy="1090" r="10" transform="rotate(180 1725 1090)" fill="white"/>
<circle cx="1705" cy="1090" r="10" transform="rotate(180 1705 1090)" fill="white"/>
<circle cx="1707.5" cy="1107.5" r="7.5" transform="rotate(180 1707.5 1107.5)" fill="white"/>
<circle cx="1742.5" cy="1092.5" r="7.5" transform="rotate(180 1742.5 1092.5)" fill="white"/>
<circle cx="1727.5" cy="1127.5" r="7.5" transform="rotate(180 1727.5 1127.5)" fill="white"/>
<circle cx="1762.5" cy="1112.5" r="7.5" transform="rotate(180 1762.5 1112.5)" fill="white"/>
<circle cx="1747.5" cy="1147.5" r="7.5" transform="rotate(180 1747.5 1147.5)" fill="white"/>
<circle cx="1782.5" cy="1132.5" r="7.5" transform="rotate(180 1782.5 1132.5)" fill="white"/>
<circle cx="1777.5" cy="1117.5" r="7.5" transform="rotate(180 1777.5 1117.5)" fill="white"/>
<circle cx="1732.5" cy="1142.5" r="7.5" transform="rotate(180 1732.5 1142.5)" fill="white"/>
<circle cx="1757.5" cy="1097.5" r="7.5" transform="rotate(180 1757.5 1097.5)" fill="white"/>
<circle cx="1712.5" cy="1122.5" r="7.5" transform="rotate(180 1712.5 1122.5)" fill="white"/>
<circle cx="1718" cy="1137" r="5" transform="rotate(180 1718 1137)" fill="white"/>
<circle cx="1773" cy="1102" r="5" transform="rotate(180 1773 1102)" fill="white"/>
<circle cx="1785" cy="1080" r="10" transform="rotate(180 1785 1080)" fill="white"/>
<circle cx="1765" cy="1080" r="10" transform="rotate(180 1765 1080)" fill="white"/>
<circle cx="1765" cy="1060" r="10" transform="rotate(180 1765 1060)" fill="white"/>
<circle cx="1745" cy="1060" r="10" transform="rotate(180 1745 1060)" fill="white"/>
<circle cx="1745" cy="1040" r="10" transform="rotate(180 1745 1040)" fill="white"/>
<circle cx="1725" cy="1040" r="10" transform="rotate(180 1725 1040)" fill="white"/>
<circle cx="1725" cy="1020" r="10" transform="rotate(180 1725 1020)" fill="white"/>
<circle cx="1705" cy="1020" r="10" transform="rotate(180 1705 1020)" fill="white"/>
<circle cx="1707.5" cy="1037.5" r="7.5" transform="rotate(180 1707.5 1037.5)" fill="white"/>
<circle cx="1742.5" cy="1022.5" r="7.5" transform="rotate(180 1742.5 1022.5)" fill="white"/>
<circle cx="1727.5" cy="1057.5" r="7.5" transform="rotate(180 1727.5 1057.5)" fill="white"/>
<circle cx="1762.5" cy="1042.5" r="7.5" transform="rotate(180 1762.5 1042.5)" fill="white"/>
<circle cx="1747.5" cy="1077.5" r="7.5" transform="rotate(180 1747.5 1077.5)" fill="white"/>
<circle cx="1782.5" cy="1062.5" r="7.5" transform="rotate(180 1782.5 1062.5)" fill="white"/>
<circle cx="1777.5" cy="1047.5" r="7.5" transform="rotate(180 1777.5 1047.5)" fill="white"/>
<circle cx="1732.5" cy="1072.5" r="7.5" transform="rotate(180 1732.5 1072.5)" fill="white"/>
<circle cx="1757.5" cy="1027.5" r="7.5" transform="rotate(180 1757.5 1027.5)" fill="white"/>
<circle cx="1712.5" cy="1052.5" r="7.5" transform="rotate(180 1712.5 1052.5)" fill="white"/>
<circle cx="1718" cy="1067" r="5" transform="rotate(180 1718 1067)" fill="white"/>
<circle cx="1773" cy="1032" r="5" transform="rotate(180 1773 1032)" fill="white"/>
<circle cx="1700" cy="1069" r="10" transform="rotate(180 1700 1069)" fill="white"/>
<circle cx="1680" cy="1069" r="10" transform="rotate(180 1680 1069)" fill="white"/>
<circle cx="1680" cy="1049" r="10" transform="rotate(180 1680 1049)" fill="white"/>
<circle cx="1660" cy="1049" r="10" transform="rotate(180 1660 1049)" fill="white"/>
<circle cx="1660" cy="1029" r="10" transform="rotate(180 1660 1029)" fill="white"/>
<circle cx="1640" cy="1029" r="10" transform="rotate(180 1640 1029)" fill="white"/>
<circle cx="1640" cy="1009" r="10" transform="rotate(180 1640 1009)" fill="white"/>
<circle cx="1620" cy="1009" r="10" transform="rotate(180 1620 1009)" fill="white"/>
<circle cx="1622.5" cy="1026.5" r="7.5" transform="rotate(180 1622.5 1026.5)" fill="white"/>
<circle cx="1657.5" cy="1011.5" r="7.5" transform="rotate(180 1657.5 1011.5)" fill="white"/>
<circle cx="1642.5" cy="1046.5" r="7.5" transform="rotate(180 1642.5 1046.5)" fill="white"/>
<circle cx="1677.5" cy="1031.5" r="7.5" transform="rotate(180 1677.5 1031.5)" fill="white"/>
<circle cx="1662.5" cy="1066.5" r="7.5" transform="rotate(180 1662.5 1066.5)" fill="white"/>
<circle cx="1697.5" cy="1051.5" r="7.5" transform="rotate(180 1697.5 1051.5)" fill="white"/>
<circle cx="1692.5" cy="1036.5" r="7.5" transform="rotate(180 1692.5 1036.5)" fill="white"/>
<circle cx="1647.5" cy="1061.5" r="7.5" transform="rotate(180 1647.5 1061.5)" fill="white"/>
<circle cx="1672.5" cy="1016.5" r="7.5" transform="rotate(180 1672.5 1016.5)" fill="white"/>
<circle cx="1627.5" cy="1041.5" r="7.5" transform="rotate(180 1627.5 1041.5)" fill="white"/>
<circle cx="1633" cy="1056" r="5" transform="rotate(180 1633 1056)" fill="white"/>
<circle cx="1688" cy="1021" r="5" transform="rotate(180 1688 1021)" fill="white"/>
<circle cx="1534" cy="973" r="10" transform="rotate(180 1534 973)" fill="white"/>
<circle cx="1514" cy="973" r="10" transform="rotate(180 1514 973)" fill="white"/>
<circle cx="1514" cy="953" r="10" transform="rotate(180 1514 953)" fill="white"/>
<circle cx="1494" cy="953" r="10" transform="rotate(180 1494 953)" fill="white"/>
<circle cx="1494" cy="933" r="10" transform="rotate(180 1494 933)" fill="white"/>
<circle cx="1474" cy="933" r="10" transform="rotate(180 1474 933)" fill="white"/>
<circle cx="1474" cy="913" r="10" transform="rotate(180 1474 913)" fill="white"/>
<circle cx="1454" cy="913" r="10" transform="rotate(180 1454 913)" fill="white"/>
<circle cx="1456.5" cy="930.5" r="7.5" transform="rotate(180 1456.5 930.5)" fill="white"/>
<circle cx="1491.5" cy="915.5" r="7.5" transform="rotate(180 1491.5 915.5)" fill="white"/>
<circle cx="1476.5" cy="950.5" r="7.5" transform="rotate(180 1476.5 950.5)" fill="white"/>
<circle cx="1511.5" cy="935.5" r="7.5" transform="rotate(180 1511.5 935.5)" fill="white"/>
<circle cx="1496.5" cy="970.5" r="7.5" transform="rotate(180 1496.5 970.5)" fill="white"/>
<circle cx="1531.5" cy="955.5" r="7.5" transform="rotate(180 1531.5 955.5)" fill="white"/>
<circle cx="1526.5" cy="940.5" r="7.5" transform="rotate(180 1526.5 940.5)" fill="white"/>
<circle cx="1481.5" cy="965.5" r="7.5" transform="rotate(180 1481.5 965.5)" fill="white"/>
<circle cx="1506.5" cy="920.5" r="7.5" transform="rotate(180 1506.5 920.5)" fill="white"/>
<circle cx="1461.5" cy="945.5" r="7.5" transform="rotate(180 1461.5 945.5)" fill="white"/>
<circle cx="1467" cy="960" r="5" transform="rotate(180 1467 960)" fill="white"/>
<circle cx="1522" cy="925" r="5" transform="rotate(180 1522 925)" fill="white"/>
<circle cx="1541" cy="907" r="10" transform="rotate(180 1541 907)" fill="white"/>
<circle cx="1521" cy="907" r="10" transform="rotate(180 1521 907)" fill="white"/>
<circle cx="1521" cy="887" r="10" transform="rotate(180 1521 887)" fill="white"/>
<circle cx="1501" cy="887" r="10" transform="rotate(180 1501 887)" fill="white"/>
<circle cx="1501" cy="867" r="10" transform="rotate(180 1501 867)" fill="white"/>
<circle cx="1481" cy="867" r="10" transform="rotate(180 1481 867)" fill="white"/>
<circle cx="1481" cy="847" r="10" transform="rotate(180 1481 847)" fill="white"/>
<circle cx="1461" cy="847" r="10" transform="rotate(180 1461 847)" fill="white"/>
<circle cx="1463.5" cy="864.5" r="7.5" transform="rotate(180 1463.5 864.5)" fill="white"/>
<circle cx="1498.5" cy="849.5" r="7.5" transform="rotate(180 1498.5 849.5)" fill="white"/>
<circle cx="1483.5" cy="884.5" r="7.5" transform="rotate(180 1483.5 884.5)" fill="white"/>
<circle cx="1518.5" cy="869.5" r="7.5" transform="rotate(180 1518.5 869.5)" fill="white"/>
<circle cx="1503.5" cy="904.5" r="7.5" transform="rotate(180 1503.5 904.5)" fill="white"/>
<circle cx="1538.5" cy="889.5" r="7.5" transform="rotate(180 1538.5 889.5)" fill="white"/>
<circle cx="1533.5" cy="874.5" r="7.5" transform="rotate(180 1533.5 874.5)" fill="white"/>
<circle cx="1488.5" cy="899.5" r="7.5" transform="rotate(180 1488.5 899.5)" fill="white"/>
<circle cx="1513.5" cy="854.5" r="7.5" transform="rotate(180 1513.5 854.5)" fill="white"/>
<circle cx="1468.5" cy="879.5" r="7.5" transform="rotate(180 1468.5 879.5)" fill="white"/>
<circle cx="1474" cy="894" r="5" transform="rotate(180 1474 894)" fill="white"/>
<circle cx="1529" cy="859" r="5" transform="rotate(180 1529 859)" fill="white"/>
<circle cx="1454" cy="893" r="10" transform="rotate(180 1454 893)" fill="white"/>
<circle cx="1434" cy="893" r="10" transform="rotate(180 1434 893)" fill="white"/>
<circle cx="1434" cy="873" r="10" transform="rotate(180 1434 873)" fill="white"/>
<circle cx="1414" cy="873" r="10" transform="rotate(180 1414 873)" fill="white"/>
<circle cx="1414" cy="853" r="10" transform="rotate(180 1414 853)" fill="white"/>
<circle cx="1394" cy="853" r="10" transform="rotate(180 1394 853)" fill="white"/>
<circle cx="1394" cy="833" r="10" transform="rotate(180 1394 833)" fill="white"/>
<circle cx="1374" cy="833" r="10" transform="rotate(180 1374 833)" fill="white"/>
<circle cx="1376.5" cy="850.5" r="7.5" transform="rotate(180 1376.5 850.5)" fill="white"/>
<circle cx="1411.5" cy="835.5" r="7.5" transform="rotate(180 1411.5 835.5)" fill="white"/>
<circle cx="1396.5" cy="870.5" r="7.5" transform="rotate(180 1396.5 870.5)" fill="white"/>
<circle cx="1431.5" cy="855.5" r="7.5" transform="rotate(180 1431.5 855.5)" fill="white"/>
<circle cx="1416.5" cy="890.5" r="7.5" transform="rotate(180 1416.5 890.5)" fill="white"/>
<circle cx="1451.5" cy="875.5" r="7.5" transform="rotate(180 1451.5 875.5)" fill="white"/>
<circle cx="1446.5" cy="860.5" r="7.5" transform="rotate(180 1446.5 860.5)" fill="white"/>
<circle cx="1401.5" cy="885.5" r="7.5" transform="rotate(180 1401.5 885.5)" fill="white"/>
<circle cx="1426.5" cy="840.5" r="7.5" transform="rotate(180 1426.5 840.5)" fill="white"/>
<circle cx="1381.5" cy="865.5" r="7.5" transform="rotate(180 1381.5 865.5)" fill="white"/>
<circle cx="1387" cy="880" r="5" transform="rotate(180 1387 880)" fill="white"/>
<circle cx="1442" cy="845" r="5" transform="rotate(180 1442 845)" fill="white"/>
<circle cx="1446" cy="960" r="10" transform="rotate(180 1446 960)" fill="white"/>
<circle cx="1426" cy="960" r="10" transform="rotate(180 1426 960)" fill="white"/>
<circle cx="1426" cy="940" r="10" transform="rotate(180 1426 940)" fill="white"/>
<circle cx="1406" cy="940" r="10" transform="rotate(180 1406 940)" fill="white"/>
<circle cx="1406" cy="920" r="10" transform="rotate(180 1406 920)" fill="white"/>
<circle cx="1386" cy="920" r="10" transform="rotate(180 1386 920)" fill="white"/>
<circle cx="1386" cy="900" r="10" transform="rotate(180 1386 900)" fill="white"/>
<circle cx="1366" cy="900" r="10" transform="rotate(180 1366 900)" fill="white"/>
<circle cx="1368.5" cy="917.5" r="7.5" transform="rotate(180 1368.5 917.5)" fill="white"/>
<circle cx="1403.5" cy="902.5" r="7.5" transform="rotate(180 1403.5 902.5)" fill="white"/>
<circle cx="1388.5" cy="937.5" r="7.5" transform="rotate(180 1388.5 937.5)" fill="white"/>
<circle cx="1423.5" cy="922.5" r="7.5" transform="rotate(180 1423.5 922.5)" fill="white"/>
<circle cx="1408.5" cy="957.5" r="7.5" transform="rotate(180 1408.5 957.5)" fill="white"/>
<circle cx="1443.5" cy="942.5" r="7.5" transform="rotate(180 1443.5 942.5)" fill="white"/>
<circle cx="1438.5" cy="927.5" r="7.5" transform="rotate(180 1438.5 927.5)" fill="white"/>
<circle cx="1393.5" cy="952.5" r="7.5" transform="rotate(180 1393.5 952.5)" fill="white"/>
<circle cx="1418.5" cy="907.5" r="7.5" transform="rotate(180 1418.5 907.5)" fill="white"/>
<circle cx="1373.5" cy="932.5" r="7.5" transform="rotate(180 1373.5 932.5)" fill="white"/>
<circle cx="1379" cy="947" r="5" transform="rotate(180 1379 947)" fill="white"/>
<circle cx="1434" cy="912" r="5" transform="rotate(180 1434 912)" fill="white"/>
<circle cx="1436" cy="1025" r="10" transform="rotate(180 1436 1025)" fill="white"/>
<circle cx="1416" cy="1025" r="10" transform="rotate(180 1416 1025)" fill="white"/>
<circle cx="1416" cy="1005" r="10" transform="rotate(180 1416 1005)" fill="white"/>
<circle cx="1396" cy="1005" r="10" transform="rotate(180 1396 1005)" fill="white"/>
<circle cx="1396" cy="985" r="10" transform="rotate(180 1396 985)" fill="white"/>
<circle cx="1376" cy="985" r="10" transform="rotate(180 1376 985)" fill="white"/>
<circle cx="1376" cy="965" r="10" transform="rotate(180 1376 965)" fill="white"/>
<circle cx="1356" cy="965" r="10" transform="rotate(180 1356 965)" fill="white"/>
<circle cx="1358.5" cy="982.5" r="7.5" transform="rotate(180 1358.5 982.5)" fill="white"/>
<circle cx="1393.5" cy="967.5" r="7.5" transform="rotate(180 1393.5 967.5)" fill="white"/>
<circle cx="1378.5" cy="1002.5" r="7.5" transform="rotate(180 1378.5 1002.5)" fill="white"/>
<circle cx="1413.5" cy="987.5" r="7.5" transform="rotate(180 1413.5 987.5)" fill="white"/>
<circle cx="1398.5" cy="1022.5" r="7.5" transform="rotate(180 1398.5 1022.5)" fill="white"/>
<circle cx="1433.5" cy="1007.5" r="7.5" transform="rotate(180 1433.5 1007.5)" fill="white"/>
<circle cx="1428.5" cy="992.5" r="7.5" transform="rotate(180 1428.5 992.5)" fill="white"/>
<circle cx="1383.5" cy="1017.5" r="7.5" transform="rotate(180 1383.5 1017.5)" fill="white"/>
<circle cx="1408.5" cy="972.5" r="7.5" transform="rotate(180 1408.5 972.5)" fill="white"/>
<circle cx="1363.5" cy="997.5" r="7.5" transform="rotate(180 1363.5 997.5)" fill="white"/>
<circle cx="1369" cy="1012" r="5" transform="rotate(180 1369 1012)" fill="white"/>
<circle cx="1424" cy="977" r="5" transform="rotate(180 1424 977)" fill="white"/>
<circle cx="1526" cy="1040" r="10" transform="rotate(180 1526 1040)" fill="white"/>
<circle cx="1506" cy="1040" r="10" transform="rotate(180 1506 1040)" fill="white"/>
<circle cx="1506" cy="1020" r="10" transform="rotate(180 1506 1020)" fill="white"/>
<circle cx="1486" cy="1020" r="10" transform="rotate(180 1486 1020)" fill="white"/>
<circle cx="1486" cy="1000" r="10" transform="rotate(180 1486 1000)" fill="white"/>
<circle cx="1466" cy="1000" r="10" transform="rotate(180 1466 1000)" fill="white"/>
<circle cx="1466" cy="980" r="10" transform="rotate(180 1466 980)" fill="white"/>
<circle cx="1446" cy="980" r="10" transform="rotate(180 1446 980)" fill="white"/>
<circle cx="1448.5" cy="997.5" r="7.5" transform="rotate(180 1448.5 997.5)" fill="white"/>
<circle cx="1483.5" cy="982.5" r="7.5" transform="rotate(180 1483.5 982.5)" fill="white"/>
<circle cx="1468.5" cy="1017.5" r="7.5" transform="rotate(180 1468.5 1017.5)" fill="white"/>
<circle cx="1503.5" cy="1002.5" r="7.5" transform="rotate(180 1503.5 1002.5)" fill="white"/>
<circle cx="1488.5" cy="1037.5" r="7.5" transform="rotate(180 1488.5 1037.5)" fill="white"/>
<circle cx="1523.5" cy="1022.5" r="7.5" transform="rotate(180 1523.5 1022.5)" fill="white"/>
<circle cx="1518.5" cy="1007.5" r="7.5" transform="rotate(180 1518.5 1007.5)" fill="white"/>
<circle cx="1473.5" cy="1032.5" r="7.5" transform="rotate(180 1473.5 1032.5)" fill="white"/>
<circle cx="1498.5" cy="987.5" r="7.5" transform="rotate(180 1498.5 987.5)" fill="white"/>
<circle cx="1453.5" cy="1012.5" r="7.5" transform="rotate(180 1453.5 1012.5)" fill="white"/>
<circle cx="1459" cy="1027" r="5" transform="rotate(180 1459 1027)" fill="white"/>
<circle cx="1514" cy="992" r="5" transform="rotate(180 1514 992)" fill="white"/>
<circle cx="1612" cy="1053" r="10" transform="rotate(180 1612 1053)" fill="white"/>
<circle cx="1592" cy="1053" r="10" transform="rotate(180 1592 1053)" fill="white"/>
<circle cx="1592" cy="1033" r="10" transform="rotate(180 1592 1033)" fill="white"/>
<circle cx="1572" cy="1033" r="10" transform="rotate(180 1572 1033)" fill="white"/>
<circle cx="1572" cy="1013" r="10" transform="rotate(180 1572 1013)" fill="white"/>
<circle cx="1552" cy="1013" r="10" transform="rotate(180 1552 1013)" fill="white"/>
<circle cx="1552" cy="993" r="10" transform="rotate(180 1552 993)" fill="white"/>
<circle cx="1532" cy="993" r="10" transform="rotate(180 1532 993)" fill="white"/>
<circle cx="1534.5" cy="1010.5" r="7.5" transform="rotate(180 1534.5 1010.5)" fill="white"/>
<circle cx="1569.5" cy="995.5" r="7.5" transform="rotate(180 1569.5 995.5)" fill="white"/>
<circle cx="1554.5" cy="1030.5" r="7.5" transform="rotate(180 1554.5 1030.5)" fill="white"/>
<circle cx="1589.5" cy="1015.5" r="7.5" transform="rotate(180 1589.5 1015.5)" fill="white"/>
<circle cx="1574.5" cy="1050.5" r="7.5" transform="rotate(180 1574.5 1050.5)" fill="white"/>
<circle cx="1609.5" cy="1035.5" r="7.5" transform="rotate(180 1609.5 1035.5)" fill="white"/>
<circle cx="1604.5" cy="1020.5" r="7.5" transform="rotate(180 1604.5 1020.5)" fill="white"/>
<circle cx="1559.5" cy="1045.5" r="7.5" transform="rotate(180 1559.5 1045.5)" fill="white"/>
<circle cx="1584.5" cy="1000.5" r="7.5" transform="rotate(180 1584.5 1000.5)" fill="white"/>
<circle cx="1539.5" cy="1025.5" r="7.5" transform="rotate(180 1539.5 1025.5)" fill="white"/>
<circle cx="1545" cy="1040" r="5" transform="rotate(180 1545 1040)" fill="white"/>
<circle cx="1600" cy="1005" r="5" transform="rotate(180 1600 1005)" fill="white"/>
<circle cx="1621" cy="987" r="10" transform="rotate(180 1621 987)" fill="white"/>
<circle cx="1601" cy="987" r="10" transform="rotate(180 1601 987)" fill="white"/>
<circle cx="1601" cy="967" r="10" transform="rotate(180 1601 967)" fill="white"/>
<circle cx="1581" cy="967" r="10" transform="rotate(180 1581 967)" fill="white"/>
<circle cx="1581" cy="947" r="10" transform="rotate(180 1581 947)" fill="white"/>
<circle cx="1561" cy="947" r="10" transform="rotate(180 1561 947)" fill="white"/>
<circle cx="1561" cy="927" r="10" transform="rotate(180 1561 927)" fill="white"/>
<circle cx="1541" cy="927" r="10" transform="rotate(180 1541 927)" fill="white"/>
<circle cx="1543.5" cy="944.5" r="7.5" transform="rotate(180 1543.5 944.5)" fill="white"/>
<circle cx="1578.5" cy="929.5" r="7.5" transform="rotate(180 1578.5 929.5)" fill="white"/>
<circle cx="1563.5" cy="964.5" r="7.5" transform="rotate(180 1563.5 964.5)" fill="white"/>
<circle cx="1598.5" cy="949.5" r="7.5" transform="rotate(180 1598.5 949.5)" fill="white"/>
<circle cx="1583.5" cy="984.5" r="7.5" transform="rotate(180 1583.5 984.5)" fill="white"/>
<circle cx="1618.5" cy="969.5" r="7.5" transform="rotate(180 1618.5 969.5)" fill="white"/>
<circle cx="1613.5" cy="954.5" r="7.5" transform="rotate(180 1613.5 954.5)" fill="white"/>
<circle cx="1568.5" cy="979.5" r="7.5" transform="rotate(180 1568.5 979.5)" fill="white"/>
<circle cx="1593.5" cy="934.5" r="7.5" transform="rotate(180 1593.5 934.5)" fill="white"/>
<circle cx="1548.5" cy="959.5" r="7.5" transform="rotate(180 1548.5 959.5)" fill="white"/>
<circle cx="1554" cy="974" r="5" transform="rotate(180 1554 974)" fill="white"/>
<circle cx="1609" cy="939" r="5" transform="rotate(180 1609 939)" fill="white"/>
<circle cx="1626" cy="920" r="10" transform="rotate(180 1626 920)" fill="white"/>
<circle cx="1606" cy="920" r="10" transform="rotate(180 1606 920)" fill="white"/>
<circle cx="1606" cy="900" r="10" transform="rotate(180 1606 900)" fill="white"/>
<circle cx="1586" cy="900" r="10" transform="rotate(180 1586 900)" fill="white"/>
<circle cx="1586" cy="880" r="10" transform="rotate(180 1586 880)" fill="white"/>
<circle cx="1566" cy="880" r="10" transform="rotate(180 1566 880)" fill="white"/>
<circle cx="1566" cy="860" r="10" transform="rotate(180 1566 860)" fill="white"/>
<circle cx="1546" cy="860" r="10" transform="rotate(180 1546 860)" fill="white"/>
<circle cx="1548.5" cy="877.5" r="7.5" transform="rotate(180 1548.5 877.5)" fill="white"/>
<circle cx="1583.5" cy="862.5" r="7.5" transform="rotate(180 1583.5 862.5)" fill="white"/>
<circle cx="1568.5" cy="897.5" r="7.5" transform="rotate(180 1568.5 897.5)" fill="white"/>
<circle cx="1603.5" cy="882.5" r="7.5" transform="rotate(180 1603.5 882.5)" fill="white"/>
<circle cx="1588.5" cy="917.5" r="7.5" transform="rotate(180 1588.5 917.5)" fill="white"/>
<circle cx="1623.5" cy="902.5" r="7.5" transform="rotate(180 1623.5 902.5)" fill="white"/>
<circle cx="1618.5" cy="887.5" r="7.5" transform="rotate(180 1618.5 887.5)" fill="white"/>
<circle cx="1573.5" cy="912.5" r="7.5" transform="rotate(180 1573.5 912.5)" fill="white"/>
<circle cx="1598.5" cy="867.5" r="7.5" transform="rotate(180 1598.5 867.5)" fill="white"/>
<circle cx="1553.5" cy="892.5" r="7.5" transform="rotate(180 1553.5 892.5)" fill="white"/>
<circle cx="1559" cy="907" r="5" transform="rotate(180 1559 907)" fill="white"/>
<circle cx="1614" cy="872" r="5" transform="rotate(180 1614 872)" fill="white"/>
<circle cx="1626" cy="850" r="10" transform="rotate(180 1626 850)" fill="white"/>
<circle cx="1606" cy="850" r="10" transform="rotate(180 1606 850)" fill="white"/>
<circle cx="1606" cy="830" r="10" transform="rotate(180 1606 830)" fill="white"/>
<circle cx="1586" cy="830" r="10" transform="rotate(180 1586 830)" fill="white"/>
<circle cx="1586" cy="810" r="10" transform="rotate(180 1586 810)" fill="white"/>
<circle cx="1566" cy="810" r="10" transform="rotate(180 1566 810)" fill="white"/>
<circle cx="1566" cy="790" r="10" transform="rotate(180 1566 790)" fill="white"/>
<circle cx="1546" cy="790" r="10" transform="rotate(180 1546 790)" fill="white"/>
<circle cx="1548.5" cy="807.5" r="7.5" transform="rotate(180 1548.5 807.5)" fill="white"/>
<circle cx="1583.5" cy="792.5" r="7.5" transform="rotate(180 1583.5 792.5)" fill="white"/>
<circle cx="1568.5" cy="827.5" r="7.5" transform="rotate(180 1568.5 827.5)" fill="white"/>
<circle cx="1603.5" cy="812.5" r="7.5" transform="rotate(180 1603.5 812.5)" fill="white"/>
<circle cx="1588.5" cy="847.5" r="7.5" transform="rotate(180 1588.5 847.5)" fill="white"/>
<circle cx="1623.5" cy="832.5" r="7.5" transform="rotate(180 1623.5 832.5)" fill="white"/>
<circle cx="1618.5" cy="817.5" r="7.5" transform="rotate(180 1618.5 817.5)" fill="white"/>
<circle cx="1573.5" cy="842.5" r="7.5" transform="rotate(180 1573.5 842.5)" fill="white"/>
<circle cx="1598.5" cy="797.5" r="7.5" transform="rotate(180 1598.5 797.5)" fill="white"/>
<circle cx="1553.5" cy="822.5" r="7.5" transform="rotate(180 1553.5 822.5)" fill="white"/>
<circle cx="1559" cy="837" r="5" transform="rotate(180 1559 837)" fill="white"/>
<circle cx="1614" cy="802" r="5" transform="rotate(180 1614 802)" fill="white"/>
<circle cx="1541" cy="839" r="10" transform="rotate(180 1541 839)" fill="white"/>
<circle cx="1521" cy="839" r="10" transform="rotate(180 1521 839)" fill="white"/>
<circle cx="1521" cy="819" r="10" transform="rotate(180 1521 819)" fill="white"/>
<circle cx="1501" cy="819" r="10" transform="rotate(180 1501 819)" fill="white"/>
<circle cx="1501" cy="799" r="10" transform="rotate(180 1501 799)" fill="white"/>
<circle cx="1481" cy="799" r="10" transform="rotate(180 1481 799)" fill="white"/>
<circle cx="1481" cy="779" r="10" transform="rotate(180 1481 779)" fill="white"/>
<circle cx="1461" cy="779" r="10" transform="rotate(180 1461 779)" fill="white"/>
<circle cx="1463.5" cy="796.5" r="7.5" transform="rotate(180 1463.5 796.5)" fill="white"/>
<circle cx="1498.5" cy="781.5" r="7.5" transform="rotate(180 1498.5 781.5)" fill="white"/>
<circle cx="1483.5" cy="816.5" r="7.5" transform="rotate(180 1483.5 816.5)" fill="white"/>
<circle cx="1518.5" cy="801.5" r="7.5" transform="rotate(180 1518.5 801.5)" fill="white"/>
<circle cx="1503.5" cy="836.5" r="7.5" transform="rotate(180 1503.5 836.5)" fill="white"/>
<circle cx="1538.5" cy="821.5" r="7.5" transform="rotate(180 1538.5 821.5)" fill="white"/>
<circle cx="1533.5" cy="806.5" r="7.5" transform="rotate(180 1533.5 806.5)" fill="white"/>
<circle cx="1488.5" cy="831.5" r="7.5" transform="rotate(180 1488.5 831.5)" fill="white"/>
<circle cx="1513.5" cy="786.5" r="7.5" transform="rotate(180 1513.5 786.5)" fill="white"/>
<circle cx="1468.5" cy="811.5" r="7.5" transform="rotate(180 1468.5 811.5)" fill="white"/>
<circle cx="1474" cy="826" r="5" transform="rotate(180 1474 826)" fill="white"/>
<circle cx="1529" cy="791" r="5" transform="rotate(180 1529 791)" fill="white"/>
<circle cx="1859" cy="1436" r="10" transform="rotate(180 1859 1436)" fill="white"/>
<circle cx="1839" cy="1436" r="10" transform="rotate(180 1839 1436)" fill="white"/>
<circle cx="1839" cy="1416" r="10" transform="rotate(180 1839 1416)" fill="white"/>
<circle cx="1819" cy="1416" r="10" transform="rotate(180 1819 1416)" fill="white"/>
<circle cx="1819" cy="1396" r="10" transform="rotate(180 1819 1396)" fill="white"/>
<circle cx="1799" cy="1396" r="10" transform="rotate(180 1799 1396)" fill="white"/>
<circle cx="1799" cy="1376" r="10" transform="rotate(180 1799 1376)" fill="white"/>
<circle cx="1779" cy="1376" r="10" transform="rotate(180 1779 1376)" fill="white"/>
<circle cx="1781.5" cy="1393.5" r="7.5" transform="rotate(180 1781.5 1393.5)" fill="white"/>
<circle cx="1816.5" cy="1378.5" r="7.5" transform="rotate(180 1816.5 1378.5)" fill="white"/>
<circle cx="1801.5" cy="1413.5" r="7.5" transform="rotate(180 1801.5 1413.5)" fill="white"/>
<circle cx="1836.5" cy="1398.5" r="7.5" transform="rotate(180 1836.5 1398.5)" fill="white"/>
<circle cx="1821.5" cy="1433.5" r="7.5" transform="rotate(180 1821.5 1433.5)" fill="white"/>
<circle cx="1856.5" cy="1418.5" r="7.5" transform="rotate(180 1856.5 1418.5)" fill="white"/>
<circle cx="1851.5" cy="1403.5" r="7.5" transform="rotate(180 1851.5 1403.5)" fill="white"/>
<circle cx="1806.5" cy="1428.5" r="7.5" transform="rotate(180 1806.5 1428.5)" fill="white"/>
<circle cx="1831.5" cy="1383.5" r="7.5" transform="rotate(180 1831.5 1383.5)" fill="white"/>
<circle cx="1786.5" cy="1408.5" r="7.5" transform="rotate(180 1786.5 1408.5)" fill="white"/>
<circle cx="1792" cy="1423" r="5" transform="rotate(180 1792 1423)" fill="white"/>
<circle cx="1847" cy="1388" r="5" transform="rotate(180 1847 1388)" fill="white"/>
<circle cx="1866" cy="1370" r="10" transform="rotate(180 1866 1370)" fill="white"/>
<circle cx="1846" cy="1370" r="10" transform="rotate(180 1846 1370)" fill="white"/>
<circle cx="1846" cy="1350" r="10" transform="rotate(180 1846 1350)" fill="white"/>
<circle cx="1826" cy="1350" r="10" transform="rotate(180 1826 1350)" fill="white"/>
<circle cx="1826" cy="1330" r="10" transform="rotate(180 1826 1330)" fill="white"/>
<circle cx="1806" cy="1330" r="10" transform="rotate(180 1806 1330)" fill="white"/>
<circle cx="1806" cy="1310" r="10" transform="rotate(180 1806 1310)" fill="white"/>
<circle cx="1786" cy="1310" r="10" transform="rotate(180 1786 1310)" fill="white"/>
<circle cx="1788.5" cy="1327.5" r="7.5" transform="rotate(180 1788.5 1327.5)" fill="white"/>
<circle cx="1823.5" cy="1312.5" r="7.5" transform="rotate(180 1823.5 1312.5)" fill="white"/>
<circle cx="1808.5" cy="1347.5" r="7.5" transform="rotate(180 1808.5 1347.5)" fill="white"/>
<circle cx="1843.5" cy="1332.5" r="7.5" transform="rotate(180 1843.5 1332.5)" fill="white"/>
<circle cx="1828.5" cy="1367.5" r="7.5" transform="rotate(180 1828.5 1367.5)" fill="white"/>
<circle cx="1863.5" cy="1352.5" r="7.5" transform="rotate(180 1863.5 1352.5)" fill="white"/>
<circle cx="1858.5" cy="1337.5" r="7.5" transform="rotate(180 1858.5 1337.5)" fill="white"/>
<circle cx="1813.5" cy="1362.5" r="7.5" transform="rotate(180 1813.5 1362.5)" fill="white"/>
<circle cx="1838.5" cy="1317.5" r="7.5" transform="rotate(180 1838.5 1317.5)" fill="white"/>
<circle cx="1793.5" cy="1342.5" r="7.5" transform="rotate(180 1793.5 1342.5)" fill="white"/>
<circle cx="1799" cy="1357" r="5" transform="rotate(180 1799 1357)" fill="white"/>
<circle cx="1854" cy="1322" r="5" transform="rotate(180 1854 1322)" fill="white"/>
<circle cx="1779" cy="1356" r="10" transform="rotate(180 1779 1356)" fill="white"/>
<circle cx="1759" cy="1356" r="10" transform="rotate(180 1759 1356)" fill="white"/>
<circle cx="1759" cy="1336" r="10" transform="rotate(180 1759 1336)" fill="white"/>
<circle cx="1739" cy="1336" r="10" transform="rotate(180 1739 1336)" fill="white"/>
<circle cx="1739" cy="1316" r="10" transform="rotate(180 1739 1316)" fill="white"/>
<circle cx="1719" cy="1316" r="10" transform="rotate(180 1719 1316)" fill="white"/>
<circle cx="1719" cy="1296" r="10" transform="rotate(180 1719 1296)" fill="white"/>
<circle cx="1699" cy="1296" r="10" transform="rotate(180 1699 1296)" fill="white"/>
<circle cx="1701.5" cy="1313.5" r="7.5" transform="rotate(180 1701.5 1313.5)" fill="white"/>
<circle cx="1736.5" cy="1298.5" r="7.5" transform="rotate(180 1736.5 1298.5)" fill="white"/>
<circle cx="1721.5" cy="1333.5" r="7.5" transform="rotate(180 1721.5 1333.5)" fill="white"/>
<circle cx="1756.5" cy="1318.5" r="7.5" transform="rotate(180 1756.5 1318.5)" fill="white"/>
<circle cx="1741.5" cy="1353.5" r="7.5" transform="rotate(180 1741.5 1353.5)" fill="white"/>
<circle cx="1776.5" cy="1338.5" r="7.5" transform="rotate(180 1776.5 1338.5)" fill="white"/>
<circle cx="1771.5" cy="1323.5" r="7.5" transform="rotate(180 1771.5 1323.5)" fill="white"/>
<circle cx="1726.5" cy="1348.5" r="7.5" transform="rotate(180 1726.5 1348.5)" fill="white"/>
<circle cx="1751.5" cy="1303.5" r="7.5" transform="rotate(180 1751.5 1303.5)" fill="white"/>
<circle cx="1706.5" cy="1328.5" r="7.5" transform="rotate(180 1706.5 1328.5)" fill="white"/>
<circle cx="1712" cy="1343" r="5" transform="rotate(180 1712 1343)" fill="white"/>
<circle cx="1767" cy="1308" r="5" transform="rotate(180 1767 1308)" fill="white"/>
<circle cx="1771" cy="1423" r="10" transform="rotate(180 1771 1423)" fill="white"/>
<circle cx="1751" cy="1423" r="10" transform="rotate(180 1751 1423)" fill="white"/>
<circle cx="1751" cy="1403" r="10" transform="rotate(180 1751 1403)" fill="white"/>
<circle cx="1731" cy="1403" r="10" transform="rotate(180 1731 1403)" fill="white"/>
<circle cx="1731" cy="1383" r="10" transform="rotate(180 1731 1383)" fill="white"/>
<circle cx="1711" cy="1383" r="10" transform="rotate(180 1711 1383)" fill="white"/>
<circle cx="1711" cy="1363" r="10" transform="rotate(180 1711 1363)" fill="white"/>
<circle cx="1691" cy="1363" r="10" transform="rotate(180 1691 1363)" fill="white"/>
<circle cx="1693.5" cy="1380.5" r="7.5" transform="rotate(180 1693.5 1380.5)" fill="white"/>
<circle cx="1728.5" cy="1365.5" r="7.5" transform="rotate(180 1728.5 1365.5)" fill="white"/>
<circle cx="1713.5" cy="1400.5" r="7.5" transform="rotate(180 1713.5 1400.5)" fill="white"/>
<circle cx="1748.5" cy="1385.5" r="7.5" transform="rotate(180 1748.5 1385.5)" fill="white"/>
<circle cx="1733.5" cy="1420.5" r="7.5" transform="rotate(180 1733.5 1420.5)" fill="white"/>
<circle cx="1768.5" cy="1405.5" r="7.5" transform="rotate(180 1768.5 1405.5)" fill="white"/>
<circle cx="1763.5" cy="1390.5" r="7.5" transform="rotate(180 1763.5 1390.5)" fill="white"/>
<circle cx="1718.5" cy="1415.5" r="7.5" transform="rotate(180 1718.5 1415.5)" fill="white"/>
<circle cx="1743.5" cy="1370.5" r="7.5" transform="rotate(180 1743.5 1370.5)" fill="white"/>
<circle cx="1698.5" cy="1395.5" r="7.5" transform="rotate(180 1698.5 1395.5)" fill="white"/>
<circle cx="1704" cy="1410" r="5" transform="rotate(180 1704 1410)" fill="white"/>
<circle cx="1759" cy="1375" r="5" transform="rotate(180 1759 1375)" fill="white"/>
<circle cx="1761" cy="1488" r="10" transform="rotate(180 1761 1488)" fill="white"/>
<circle cx="1741" cy="1488" r="10" transform="rotate(180 1741 1488)" fill="white"/>
<circle cx="1741" cy="1468" r="10" transform="rotate(180 1741 1468)" fill="white"/>
<circle cx="1721" cy="1468" r="10" transform="rotate(180 1721 1468)" fill="white"/>
<circle cx="1721" cy="1448" r="10" transform="rotate(180 1721 1448)" fill="white"/>
<circle cx="1701" cy="1448" r="10" transform="rotate(180 1701 1448)" fill="white"/>
<circle cx="1701" cy="1428" r="10" transform="rotate(180 1701 1428)" fill="white"/>
<circle cx="1681" cy="1428" r="10" transform="rotate(180 1681 1428)" fill="white"/>
<circle cx="1683.5" cy="1445.5" r="7.5" transform="rotate(180 1683.5 1445.5)" fill="white"/>
<circle cx="1718.5" cy="1430.5" r="7.5" transform="rotate(180 1718.5 1430.5)" fill="white"/>
<circle cx="1703.5" cy="1465.5" r="7.5" transform="rotate(180 1703.5 1465.5)" fill="white"/>
<circle cx="1738.5" cy="1450.5" r="7.5" transform="rotate(180 1738.5 1450.5)" fill="white"/>
<circle cx="1723.5" cy="1485.5" r="7.5" transform="rotate(180 1723.5 1485.5)" fill="white"/>
<circle cx="1758.5" cy="1470.5" r="7.5" transform="rotate(180 1758.5 1470.5)" fill="white"/>
<circle cx="1753.5" cy="1455.5" r="7.5" transform="rotate(180 1753.5 1455.5)" fill="white"/>
<circle cx="1708.5" cy="1480.5" r="7.5" transform="rotate(180 1708.5 1480.5)" fill="white"/>
<circle cx="1733.5" cy="1435.5" r="7.5" transform="rotate(180 1733.5 1435.5)" fill="white"/>
<circle cx="1688.5" cy="1460.5" r="7.5" transform="rotate(180 1688.5 1460.5)" fill="white"/>
<circle cx="1694" cy="1475" r="5" transform="rotate(180 1694 1475)" fill="white"/>
<circle cx="1749" cy="1440" r="5" transform="rotate(180 1749 1440)" fill="white"/>
<circle cx="1851" cy="1503" r="10" transform="rotate(180 1851 1503)" fill="white"/>
<circle cx="1831" cy="1503" r="10" transform="rotate(180 1831 1503)" fill="white"/>
<circle cx="1831" cy="1483" r="10" transform="rotate(180 1831 1483)" fill="white"/>
<circle cx="1811" cy="1483" r="10" transform="rotate(180 1811 1483)" fill="white"/>
<circle cx="1811" cy="1463" r="10" transform="rotate(180 1811 1463)" fill="white"/>
<circle cx="1791" cy="1463" r="10" transform="rotate(180 1791 1463)" fill="white"/>
<circle cx="1791" cy="1443" r="10" transform="rotate(180 1791 1443)" fill="white"/>
<circle cx="1771" cy="1443" r="10" transform="rotate(180 1771 1443)" fill="white"/>
<circle cx="1773.5" cy="1460.5" r="7.5" transform="rotate(180 1773.5 1460.5)" fill="white"/>
<circle cx="1808.5" cy="1445.5" r="7.5" transform="rotate(180 1808.5 1445.5)" fill="white"/>
<circle cx="1793.5" cy="1480.5" r="7.5" transform="rotate(180 1793.5 1480.5)" fill="white"/>
<circle cx="1828.5" cy="1465.5" r="7.5" transform="rotate(180 1828.5 1465.5)" fill="white"/>
<circle cx="1813.5" cy="1500.5" r="7.5" transform="rotate(180 1813.5 1500.5)" fill="white"/>
<circle cx="1848.5" cy="1485.5" r="7.5" transform="rotate(180 1848.5 1485.5)" fill="white"/>
<circle cx="1843.5" cy="1470.5" r="7.5" transform="rotate(180 1843.5 1470.5)" fill="white"/>
<circle cx="1798.5" cy="1495.5" r="7.5" transform="rotate(180 1798.5 1495.5)" fill="white"/>
<circle cx="1823.5" cy="1450.5" r="7.5" transform="rotate(180 1823.5 1450.5)" fill="white"/>
<circle cx="1778.5" cy="1475.5" r="7.5" transform="rotate(180 1778.5 1475.5)" fill="white"/>
<circle cx="1784" cy="1490" r="5" transform="rotate(180 1784 1490)" fill="white"/>
<circle cx="1839" cy="1455" r="5" transform="rotate(180 1839 1455)" fill="white"/>
<circle cx="1937" cy="1516" r="10" transform="rotate(180 1937 1516)" fill="white"/>
<circle cx="1917" cy="1516" r="10" transform="rotate(180 1917 1516)" fill="white"/>
<circle cx="1917" cy="1496" r="10" transform="rotate(180 1917 1496)" fill="white"/>
<circle cx="1897" cy="1496" r="10" transform="rotate(180 1897 1496)" fill="white"/>
<circle cx="1897" cy="1476" r="10" transform="rotate(180 1897 1476)" fill="white"/>
<circle cx="1877" cy="1476" r="10" transform="rotate(180 1877 1476)" fill="white"/>
<circle cx="1877" cy="1456" r="10" transform="rotate(180 1877 1456)" fill="white"/>
<circle cx="1857" cy="1456" r="10" transform="rotate(180 1857 1456)" fill="white"/>
<circle cx="1859.5" cy="1473.5" r="7.5" transform="rotate(180 1859.5 1473.5)" fill="white"/>
<circle cx="1894.5" cy="1458.5" r="7.5" transform="rotate(180 1894.5 1458.5)" fill="white"/>
<circle cx="1879.5" cy="1493.5" r="7.5" transform="rotate(180 1879.5 1493.5)" fill="white"/>
<circle cx="1914.5" cy="1478.5" r="7.5" transform="rotate(180 1914.5 1478.5)" fill="white"/>
<circle cx="1899.5" cy="1513.5" r="7.5" transform="rotate(180 1899.5 1513.5)" fill="white"/>
<circle cx="1934.5" cy="1498.5" r="7.5" transform="rotate(180 1934.5 1498.5)" fill="white"/>
<circle cx="1929.5" cy="1483.5" r="7.5" transform="rotate(180 1929.5 1483.5)" fill="white"/>
<circle cx="1884.5" cy="1508.5" r="7.5" transform="rotate(180 1884.5 1508.5)" fill="white"/>
<circle cx="1909.5" cy="1463.5" r="7.5" transform="rotate(180 1909.5 1463.5)" fill="white"/>
<circle cx="1864.5" cy="1488.5" r="7.5" transform="rotate(180 1864.5 1488.5)" fill="white"/>
<circle cx="1870" cy="1503" r="5" transform="rotate(180 1870 1503)" fill="white"/>
<circle cx="1925" cy="1468" r="5" transform="rotate(180 1925 1468)" fill="white"/>
<circle cx="1946" cy="1450" r="10" transform="rotate(180 1946 1450)" fill="white"/>
<circle cx="1926" cy="1450" r="10" transform="rotate(180 1926 1450)" fill="white"/>
<circle cx="1926" cy="1430" r="10" transform="rotate(180 1926 1430)" fill="white"/>
<circle cx="1906" cy="1430" r="10" transform="rotate(180 1906 1430)" fill="white"/>
<circle cx="1906" cy="1410" r="10" transform="rotate(180 1906 1410)" fill="white"/>
<circle cx="1886" cy="1410" r="10" transform="rotate(180 1886 1410)" fill="white"/>
<circle cx="1886" cy="1390" r="10" transform="rotate(180 1886 1390)" fill="white"/>
<circle cx="1866" cy="1390" r="10" transform="rotate(180 1866 1390)" fill="white"/>
<circle cx="1868.5" cy="1407.5" r="7.5" transform="rotate(180 1868.5 1407.5)" fill="white"/>
<circle cx="1903.5" cy="1392.5" r="7.5" transform="rotate(180 1903.5 1392.5)" fill="white"/>
<circle cx="1888.5" cy="1427.5" r="7.5" transform="rotate(180 1888.5 1427.5)" fill="white"/>
<circle cx="1923.5" cy="1412.5" r="7.5" transform="rotate(180 1923.5 1412.5)" fill="white"/>
<circle cx="1908.5" cy="1447.5" r="7.5" transform="rotate(180 1908.5 1447.5)" fill="white"/>
<circle cx="1943.5" cy="1432.5" r="7.5" transform="rotate(180 1943.5 1432.5)" fill="white"/>
<circle cx="1938.5" cy="1417.5" r="7.5" transform="rotate(180 1938.5 1417.5)" fill="white"/>
<circle cx="1893.5" cy="1442.5" r="7.5" transform="rotate(180 1893.5 1442.5)" fill="white"/>
<circle cx="1918.5" cy="1397.5" r="7.5" transform="rotate(180 1918.5 1397.5)" fill="white"/>
<circle cx="1873.5" cy="1422.5" r="7.5" transform="rotate(180 1873.5 1422.5)" fill="white"/>
<circle cx="1879" cy="1437" r="5" transform="rotate(180 1879 1437)" fill="white"/>
<circle cx="1934" cy="1402" r="5" transform="rotate(180 1934 1402)" fill="white"/>
<circle cx="1951" cy="1383" r="10" transform="rotate(180 1951 1383)" fill="white"/>
<circle cx="1931" cy="1383" r="10" transform="rotate(180 1931 1383)" fill="white"/>
<circle cx="1931" cy="1363" r="10" transform="rotate(180 1931 1363)" fill="white"/>
<circle cx="1911" cy="1363" r="10" transform="rotate(180 1911 1363)" fill="white"/>
<circle cx="1911" cy="1343" r="10" transform="rotate(180 1911 1343)" fill="white"/>
<circle cx="1891" cy="1343" r="10" transform="rotate(180 1891 1343)" fill="white"/>
<circle cx="1891" cy="1323" r="10" transform="rotate(180 1891 1323)" fill="white"/>
<circle cx="1871" cy="1323" r="10" transform="rotate(180 1871 1323)" fill="white"/>
<circle cx="1873.5" cy="1340.5" r="7.5" transform="rotate(180 1873.5 1340.5)" fill="white"/>
<circle cx="1908.5" cy="1325.5" r="7.5" transform="rotate(180 1908.5 1325.5)" fill="white"/>
<circle cx="1893.5" cy="1360.5" r="7.5" transform="rotate(180 1893.5 1360.5)" fill="white"/>
<circle cx="1928.5" cy="1345.5" r="7.5" transform="rotate(180 1928.5 1345.5)" fill="white"/>
<circle cx="1913.5" cy="1380.5" r="7.5" transform="rotate(180 1913.5 1380.5)" fill="white"/>
<circle cx="1948.5" cy="1365.5" r="7.5" transform="rotate(180 1948.5 1365.5)" fill="white"/>
<circle cx="1943.5" cy="1350.5" r="7.5" transform="rotate(180 1943.5 1350.5)" fill="white"/>
<circle cx="1898.5" cy="1375.5" r="7.5" transform="rotate(180 1898.5 1375.5)" fill="white"/>
<circle cx="1923.5" cy="1330.5" r="7.5" transform="rotate(180 1923.5 1330.5)" fill="white"/>
<circle cx="1878.5" cy="1355.5" r="7.5" transform="rotate(180 1878.5 1355.5)" fill="white"/>
<circle cx="1884" cy="1370" r="5" transform="rotate(180 1884 1370)" fill="white"/>
<circle cx="1939" cy="1335" r="5" transform="rotate(180 1939 1335)" fill="white"/>
<circle cx="1951" cy="1313" r="10" transform="rotate(180 1951 1313)" fill="white"/>
<circle cx="1931" cy="1313" r="10" transform="rotate(180 1931 1313)" fill="white"/>
<circle cx="1931" cy="1293" r="10" transform="rotate(180 1931 1293)" fill="white"/>
<circle cx="1911" cy="1293" r="10" transform="rotate(180 1911 1293)" fill="white"/>
<circle cx="1911" cy="1273" r="10" transform="rotate(180 1911 1273)" fill="white"/>
<circle cx="1891" cy="1273" r="10" transform="rotate(180 1891 1273)" fill="white"/>
<circle cx="1891" cy="1253" r="10" transform="rotate(180 1891 1253)" fill="white"/>
<circle cx="1871" cy="1253" r="10" transform="rotate(180 1871 1253)" fill="white"/>
<circle cx="1873.5" cy="1270.5" r="7.5" transform="rotate(180 1873.5 1270.5)" fill="white"/>
<circle cx="1908.5" cy="1255.5" r="7.5" transform="rotate(180 1908.5 1255.5)" fill="white"/>
<circle cx="1893.5" cy="1290.5" r="7.5" transform="rotate(180 1893.5 1290.5)" fill="white"/>
<circle cx="1928.5" cy="1275.5" r="7.5" transform="rotate(180 1928.5 1275.5)" fill="white"/>
<circle cx="1913.5" cy="1310.5" r="7.5" transform="rotate(180 1913.5 1310.5)" fill="white"/>
<circle cx="1948.5" cy="1295.5" r="7.5" transform="rotate(180 1948.5 1295.5)" fill="white"/>
<circle cx="1943.5" cy="1280.5" r="7.5" transform="rotate(180 1943.5 1280.5)" fill="white"/>
<circle cx="1898.5" cy="1305.5" r="7.5" transform="rotate(180 1898.5 1305.5)" fill="white"/>
<circle cx="1923.5" cy="1260.5" r="7.5" transform="rotate(180 1923.5 1260.5)" fill="white"/>
<circle cx="1878.5" cy="1285.5" r="7.5" transform="rotate(180 1878.5 1285.5)" fill="white"/>
<circle cx="1884" cy="1300" r="5" transform="rotate(180 1884 1300)" fill="white"/>
<circle cx="1939" cy="1265" r="5" transform="rotate(180 1939 1265)" fill="white"/>
<circle cx="1866" cy="1302" r="10" transform="rotate(180 1866 1302)" fill="white"/>
<circle cx="1846" cy="1302" r="10" transform="rotate(180 1846 1302)" fill="white"/>
<circle cx="1846" cy="1282" r="10" transform="rotate(180 1846 1282)" fill="white"/>
<circle cx="1826" cy="1282" r="10" transform="rotate(180 1826 1282)" fill="white"/>
<circle cx="1826" cy="1262" r="10" transform="rotate(180 1826 1262)" fill="white"/>
<circle cx="1806" cy="1262" r="10" transform="rotate(180 1806 1262)" fill="white"/>
<circle cx="1806" cy="1242" r="10" transform="rotate(180 1806 1242)" fill="white"/>
<circle cx="1786" cy="1242" r="10" transform="rotate(180 1786 1242)" fill="white"/>
<circle cx="1788.5" cy="1259.5" r="7.5" transform="rotate(180 1788.5 1259.5)" fill="white"/>
<circle cx="1823.5" cy="1244.5" r="7.5" transform="rotate(180 1823.5 1244.5)" fill="white"/>
<circle cx="1808.5" cy="1279.5" r="7.5" transform="rotate(180 1808.5 1279.5)" fill="white"/>
<circle cx="1843.5" cy="1264.5" r="7.5" transform="rotate(180 1843.5 1264.5)" fill="white"/>
<circle cx="1828.5" cy="1299.5" r="7.5" transform="rotate(180 1828.5 1299.5)" fill="white"/>
<circle cx="1863.5" cy="1284.5" r="7.5" transform="rotate(180 1863.5 1284.5)" fill="white"/>
<circle cx="1858.5" cy="1269.5" r="7.5" transform="rotate(180 1858.5 1269.5)" fill="white"/>
<circle cx="1813.5" cy="1294.5" r="7.5" transform="rotate(180 1813.5 1294.5)" fill="white"/>
<circle cx="1838.5" cy="1249.5" r="7.5" transform="rotate(180 1838.5 1249.5)" fill="white"/>
<circle cx="1793.5" cy="1274.5" r="7.5" transform="rotate(180 1793.5 1274.5)" fill="white"/>
<circle cx="1799" cy="1289" r="5" transform="rotate(180 1799 1289)" fill="white"/>
<circle cx="1854" cy="1254" r="5" transform="rotate(180 1854 1254)" fill="white"/>
<circle cx="1756" cy="461" r="10" transform="rotate(180 1756 461)" fill="white"/>
<circle cx="1736" cy="461" r="10" transform="rotate(180 1736 461)" fill="white"/>
<circle cx="1736" cy="441" r="10" transform="rotate(180 1736 441)" fill="white"/>
<circle cx="1716" cy="441" r="10" transform="rotate(180 1716 441)" fill="white"/>
<circle cx="1716" cy="421" r="10" transform="rotate(180 1716 421)" fill="white"/>
<circle cx="1696" cy="421" r="10" transform="rotate(180 1696 421)" fill="white"/>
<circle cx="1696" cy="401" r="10" transform="rotate(180 1696 401)" fill="white"/>
<circle cx="1676" cy="401" r="10" transform="rotate(180 1676 401)" fill="white"/>
<circle cx="1678.5" cy="418.5" r="7.5" transform="rotate(180 1678.5 418.5)" fill="white"/>
<circle cx="1713.5" cy="403.5" r="7.5" transform="rotate(180 1713.5 403.5)" fill="white"/>
<circle cx="1698.5" cy="438.5" r="7.5" transform="rotate(180 1698.5 438.5)" fill="white"/>
<circle cx="1733.5" cy="423.5" r="7.5" transform="rotate(180 1733.5 423.5)" fill="white"/>
<circle cx="1718.5" cy="458.5" r="7.5" transform="rotate(180 1718.5 458.5)" fill="white"/>
<circle cx="1753.5" cy="443.5" r="7.5" transform="rotate(180 1753.5 443.5)" fill="white"/>
<circle cx="1748.5" cy="428.5" r="7.5" transform="rotate(180 1748.5 428.5)" fill="white"/>
<circle cx="1703.5" cy="453.5" r="7.5" transform="rotate(180 1703.5 453.5)" fill="white"/>
<circle cx="1728.5" cy="408.5" r="7.5" transform="rotate(180 1728.5 408.5)" fill="white"/>
<circle cx="1683.5" cy="433.5" r="7.5" transform="rotate(180 1683.5 433.5)" fill="white"/>
<circle cx="1689" cy="448" r="5" transform="rotate(180 1689 448)" fill="white"/>
<circle cx="1744" cy="413" r="5" transform="rotate(180 1744 413)" fill="white"/>
<circle cx="1763" cy="395" r="10" transform="rotate(180 1763 395)" fill="white"/>
<circle cx="1743" cy="395" r="10" transform="rotate(180 1743 395)" fill="white"/>
<circle cx="1743" cy="375" r="10" transform="rotate(180 1743 375)" fill="white"/>
<circle cx="1723" cy="375" r="10" transform="rotate(180 1723 375)" fill="white"/>
<circle cx="1723" cy="355" r="10" transform="rotate(180 1723 355)" fill="white"/>
<circle cx="1703" cy="355" r="10" transform="rotate(180 1703 355)" fill="white"/>
<circle cx="1703" cy="335" r="10" transform="rotate(180 1703 335)" fill="white"/>
<circle cx="1683" cy="335" r="10" transform="rotate(180 1683 335)" fill="white"/>
<circle cx="1685.5" cy="352.5" r="7.5" transform="rotate(180 1685.5 352.5)" fill="white"/>
<circle cx="1720.5" cy="337.5" r="7.5" transform="rotate(180 1720.5 337.5)" fill="white"/>
<circle cx="1705.5" cy="372.5" r="7.5" transform="rotate(180 1705.5 372.5)" fill="white"/>
<circle cx="1740.5" cy="357.5" r="7.5" transform="rotate(180 1740.5 357.5)" fill="white"/>
<circle cx="1725.5" cy="392.5" r="7.5" transform="rotate(180 1725.5 392.5)" fill="white"/>
<circle cx="1760.5" cy="377.5" r="7.5" transform="rotate(180 1760.5 377.5)" fill="white"/>
<circle cx="1755.5" cy="362.5" r="7.5" transform="rotate(180 1755.5 362.5)" fill="white"/>
<circle cx="1710.5" cy="387.5" r="7.5" transform="rotate(180 1710.5 387.5)" fill="white"/>
<circle cx="1735.5" cy="342.5" r="7.5" transform="rotate(180 1735.5 342.5)" fill="white"/>
<circle cx="1690.5" cy="367.5" r="7.5" transform="rotate(180 1690.5 367.5)" fill="white"/>
<circle cx="1696" cy="382" r="5" transform="rotate(180 1696 382)" fill="white"/>
<circle cx="1751" cy="347" r="5" transform="rotate(180 1751 347)" fill="white"/>
<circle cx="1676" cy="381" r="10" transform="rotate(180 1676 381)" fill="white"/>
<circle cx="1656" cy="381" r="10" transform="rotate(180 1656 381)" fill="white"/>
<circle cx="1656" cy="361" r="10" transform="rotate(180 1656 361)" fill="white"/>
<circle cx="1636" cy="361" r="10" transform="rotate(180 1636 361)" fill="white"/>
<circle cx="1636" cy="341" r="10" transform="rotate(180 1636 341)" fill="white"/>
<circle cx="1616" cy="341" r="10" transform="rotate(180 1616 341)" fill="white"/>
<circle cx="1616" cy="321" r="10" transform="rotate(180 1616 321)" fill="white"/>
<circle cx="1596" cy="321" r="10" transform="rotate(180 1596 321)" fill="white"/>
<circle cx="1598.5" cy="338.5" r="7.5" transform="rotate(180 1598.5 338.5)" fill="white"/>
<circle cx="1633.5" cy="323.5" r="7.5" transform="rotate(180 1633.5 323.5)" fill="white"/>
<circle cx="1618.5" cy="358.5" r="7.5" transform="rotate(180 1618.5 358.5)" fill="white"/>
<circle cx="1653.5" cy="343.5" r="7.5" transform="rotate(180 1653.5 343.5)" fill="white"/>
<circle cx="1638.5" cy="378.5" r="7.5" transform="rotate(180 1638.5 378.5)" fill="white"/>
<circle cx="1673.5" cy="363.5" r="7.5" transform="rotate(180 1673.5 363.5)" fill="white"/>
<circle cx="1668.5" cy="348.5" r="7.5" transform="rotate(180 1668.5 348.5)" fill="white"/>
<circle cx="1623.5" cy="373.5" r="7.5" transform="rotate(180 1623.5 373.5)" fill="white"/>
<circle cx="1648.5" cy="328.5" r="7.5" transform="rotate(180 1648.5 328.5)" fill="white"/>
<circle cx="1603.5" cy="353.5" r="7.5" transform="rotate(180 1603.5 353.5)" fill="white"/>
<circle cx="1609" cy="368" r="5" transform="rotate(180 1609 368)" fill="white"/>
<circle cx="1664" cy="333" r="5" transform="rotate(180 1664 333)" fill="white"/>
<circle cx="1668" cy="448" r="10" transform="rotate(180 1668 448)" fill="white"/>
<circle cx="1648" cy="448" r="10" transform="rotate(180 1648 448)" fill="white"/>
<circle cx="1648" cy="428" r="10" transform="rotate(180 1648 428)" fill="white"/>
<circle cx="1628" cy="428" r="10" transform="rotate(180 1628 428)" fill="white"/>
<circle cx="1628" cy="408" r="10" transform="rotate(180 1628 408)" fill="white"/>
<circle cx="1608" cy="408" r="10" transform="rotate(180 1608 408)" fill="white"/>
<circle cx="1608" cy="388" r="10" transform="rotate(180 1608 388)" fill="white"/>
<circle cx="1588" cy="388" r="10" transform="rotate(180 1588 388)" fill="white"/>
<circle cx="1590.5" cy="405.5" r="7.5" transform="rotate(180 1590.5 405.5)" fill="white"/>
<circle cx="1625.5" cy="390.5" r="7.5" transform="rotate(180 1625.5 390.5)" fill="white"/>
<circle cx="1610.5" cy="425.5" r="7.5" transform="rotate(180 1610.5 425.5)" fill="white"/>
<circle cx="1645.5" cy="410.5" r="7.5" transform="rotate(180 1645.5 410.5)" fill="white"/>
<circle cx="1630.5" cy="445.5" r="7.5" transform="rotate(180 1630.5 445.5)" fill="white"/>
<circle cx="1665.5" cy="430.5" r="7.5" transform="rotate(180 1665.5 430.5)" fill="white"/>
<circle cx="1660.5" cy="415.5" r="7.5" transform="rotate(180 1660.5 415.5)" fill="white"/>
<circle cx="1615.5" cy="440.5" r="7.5" transform="rotate(180 1615.5 440.5)" fill="white"/>
<circle cx="1640.5" cy="395.5" r="7.5" transform="rotate(180 1640.5 395.5)" fill="white"/>
<circle cx="1595.5" cy="420.5" r="7.5" transform="rotate(180 1595.5 420.5)" fill="white"/>
<circle cx="1601" cy="435" r="5" transform="rotate(180 1601 435)" fill="white"/>
<circle cx="1656" cy="400" r="5" transform="rotate(180 1656 400)" fill="white"/>
<circle cx="1658" cy="513" r="10" transform="rotate(180 1658 513)" fill="white"/>
<circle cx="1638" cy="513" r="10" transform="rotate(180 1638 513)" fill="white"/>
<circle cx="1638" cy="493" r="10" transform="rotate(180 1638 493)" fill="white"/>
<circle cx="1618" cy="493" r="10" transform="rotate(180 1618 493)" fill="white"/>
<circle cx="1618" cy="473" r="10" transform="rotate(180 1618 473)" fill="white"/>
<circle cx="1598" cy="473" r="10" transform="rotate(180 1598 473)" fill="white"/>
<circle cx="1598" cy="453" r="10" transform="rotate(180 1598 453)" fill="white"/>
<circle cx="1578" cy="453" r="10" transform="rotate(180 1578 453)" fill="white"/>
<circle cx="1580.5" cy="470.5" r="7.5" transform="rotate(180 1580.5 470.5)" fill="white"/>
<circle cx="1615.5" cy="455.5" r="7.5" transform="rotate(180 1615.5 455.5)" fill="white"/>
<circle cx="1600.5" cy="490.5" r="7.5" transform="rotate(180 1600.5 490.5)" fill="white"/>
<circle cx="1635.5" cy="475.5" r="7.5" transform="rotate(180 1635.5 475.5)" fill="white"/>
<circle cx="1620.5" cy="510.5" r="7.5" transform="rotate(180 1620.5 510.5)" fill="white"/>
<circle cx="1655.5" cy="495.5" r="7.5" transform="rotate(180 1655.5 495.5)" fill="white"/>
<circle cx="1650.5" cy="480.5" r="7.5" transform="rotate(180 1650.5 480.5)" fill="white"/>
<circle cx="1605.5" cy="505.5" r="7.5" transform="rotate(180 1605.5 505.5)" fill="white"/>
<circle cx="1630.5" cy="460.5" r="7.5" transform="rotate(180 1630.5 460.5)" fill="white"/>
<circle cx="1585.5" cy="485.5" r="7.5" transform="rotate(180 1585.5 485.5)" fill="white"/>
<circle cx="1591" cy="500" r="5" transform="rotate(180 1591 500)" fill="white"/>
<circle cx="1646" cy="465" r="5" transform="rotate(180 1646 465)" fill="white"/>
<circle cx="1748" cy="528" r="10" transform="rotate(180 1748 528)" fill="white"/>
<circle cx="1728" cy="528" r="10" transform="rotate(180 1728 528)" fill="white"/>
<circle cx="1728" cy="508" r="10" transform="rotate(180 1728 508)" fill="white"/>
<circle cx="1708" cy="508" r="10" transform="rotate(180 1708 508)" fill="white"/>
<circle cx="1708" cy="488" r="10" transform="rotate(180 1708 488)" fill="white"/>
<circle cx="1688" cy="488" r="10" transform="rotate(180 1688 488)" fill="white"/>
<circle cx="1688" cy="468" r="10" transform="rotate(180 1688 468)" fill="white"/>
<circle cx="1668" cy="468" r="10" transform="rotate(180 1668 468)" fill="white"/>
<circle cx="1670.5" cy="485.5" r="7.5" transform="rotate(180 1670.5 485.5)" fill="white"/>
<circle cx="1705.5" cy="470.5" r="7.5" transform="rotate(180 1705.5 470.5)" fill="white"/>
<circle cx="1690.5" cy="505.5" r="7.5" transform="rotate(180 1690.5 505.5)" fill="white"/>
<circle cx="1725.5" cy="490.5" r="7.5" transform="rotate(180 1725.5 490.5)" fill="white"/>
<circle cx="1710.5" cy="525.5" r="7.5" transform="rotate(180 1710.5 525.5)" fill="white"/>
<circle cx="1745.5" cy="510.5" r="7.5" transform="rotate(180 1745.5 510.5)" fill="white"/>
<circle cx="1740.5" cy="495.5" r="7.5" transform="rotate(180 1740.5 495.5)" fill="white"/>
<circle cx="1695.5" cy="520.5" r="7.5" transform="rotate(180 1695.5 520.5)" fill="white"/>
<circle cx="1720.5" cy="475.5" r="7.5" transform="rotate(180 1720.5 475.5)" fill="white"/>
<circle cx="1675.5" cy="500.5" r="7.5" transform="rotate(180 1675.5 500.5)" fill="white"/>
<circle cx="1681" cy="515" r="5" transform="rotate(180 1681 515)" fill="white"/>
<circle cx="1736" cy="480" r="5" transform="rotate(180 1736 480)" fill="white"/>
<circle cx="1834" cy="541" r="10" transform="rotate(180 1834 541)" fill="white"/>
<circle cx="1814" cy="541" r="10" transform="rotate(180 1814 541)" fill="white"/>
<circle cx="1814" cy="521" r="10" transform="rotate(180 1814 521)" fill="white"/>
<circle cx="1794" cy="521" r="10" transform="rotate(180 1794 521)" fill="white"/>
<circle cx="1794" cy="501" r="10" transform="rotate(180 1794 501)" fill="white"/>
<circle cx="1774" cy="501" r="10" transform="rotate(180 1774 501)" fill="white"/>
<circle cx="1774" cy="481" r="10" transform="rotate(180 1774 481)" fill="white"/>
<circle cx="1754" cy="481" r="10" transform="rotate(180 1754 481)" fill="white"/>
<circle cx="1756.5" cy="498.5" r="7.5" transform="rotate(180 1756.5 498.5)" fill="white"/>
<circle cx="1791.5" cy="483.5" r="7.5" transform="rotate(180 1791.5 483.5)" fill="white"/>
<circle cx="1776.5" cy="518.5" r="7.5" transform="rotate(180 1776.5 518.5)" fill="white"/>
<circle cx="1811.5" cy="503.5" r="7.5" transform="rotate(180 1811.5 503.5)" fill="white"/>
<circle cx="1796.5" cy="538.5" r="7.5" transform="rotate(180 1796.5 538.5)" fill="white"/>
<circle cx="1831.5" cy="523.5" r="7.5" transform="rotate(180 1831.5 523.5)" fill="white"/>
<circle cx="1826.5" cy="508.5" r="7.5" transform="rotate(180 1826.5 508.5)" fill="white"/>
<circle cx="1781.5" cy="533.5" r="7.5" transform="rotate(180 1781.5 533.5)" fill="white"/>
<circle cx="1806.5" cy="488.5" r="7.5" transform="rotate(180 1806.5 488.5)" fill="white"/>
<circle cx="1761.5" cy="513.5" r="7.5" transform="rotate(180 1761.5 513.5)" fill="white"/>
<circle cx="1767" cy="528" r="5" transform="rotate(180 1767 528)" fill="white"/>
<circle cx="1822" cy="493" r="5" transform="rotate(180 1822 493)" fill="white"/>
<circle cx="1843" cy="475" r="10" transform="rotate(180 1843 475)" fill="white"/>
<circle cx="1823" cy="475" r="10" transform="rotate(180 1823 475)" fill="white"/>
<circle cx="1823" cy="455" r="10" transform="rotate(180 1823 455)" fill="white"/>
<circle cx="1803" cy="455" r="10" transform="rotate(180 1803 455)" fill="white"/>
<circle cx="1803" cy="435" r="10" transform="rotate(180 1803 435)" fill="white"/>
<circle cx="1783" cy="435" r="10" transform="rotate(180 1783 435)" fill="white"/>
<circle cx="1783" cy="415" r="10" transform="rotate(180 1783 415)" fill="white"/>
<circle cx="1763" cy="415" r="10" transform="rotate(180 1763 415)" fill="white"/>
<circle cx="1765.5" cy="432.5" r="7.5" transform="rotate(180 1765.5 432.5)" fill="white"/>
<circle cx="1800.5" cy="417.5" r="7.5" transform="rotate(180 1800.5 417.5)" fill="white"/>
<circle cx="1785.5" cy="452.5" r="7.5" transform="rotate(180 1785.5 452.5)" fill="white"/>
<circle cx="1820.5" cy="437.5" r="7.5" transform="rotate(180 1820.5 437.5)" fill="white"/>
<circle cx="1805.5" cy="472.5" r="7.5" transform="rotate(180 1805.5 472.5)" fill="white"/>
<circle cx="1840.5" cy="457.5" r="7.5" transform="rotate(180 1840.5 457.5)" fill="white"/>
<circle cx="1835.5" cy="442.5" r="7.5" transform="rotate(180 1835.5 442.5)" fill="white"/>
<circle cx="1790.5" cy="467.5" r="7.5" transform="rotate(180 1790.5 467.5)" fill="white"/>
<circle cx="1815.5" cy="422.5" r="7.5" transform="rotate(180 1815.5 422.5)" fill="white"/>
<circle cx="1770.5" cy="447.5" r="7.5" transform="rotate(180 1770.5 447.5)" fill="white"/>
<circle cx="1776" cy="462" r="5" transform="rotate(180 1776 462)" fill="white"/>
<circle cx="1831" cy="427" r="5" transform="rotate(180 1831 427)" fill="white"/>
<circle cx="1848" cy="408" r="10" transform="rotate(180 1848 408)" fill="white"/>
<circle cx="1828" cy="408" r="10" transform="rotate(180 1828 408)" fill="white"/>
<circle cx="1828" cy="388" r="10" transform="rotate(180 1828 388)" fill="white"/>
<circle cx="1808" cy="388" r="10" transform="rotate(180 1808 388)" fill="white"/>
<circle cx="1808" cy="368" r="10" transform="rotate(180 1808 368)" fill="white"/>
<circle cx="1788" cy="368" r="10" transform="rotate(180 1788 368)" fill="white"/>
<circle cx="1788" cy="348" r="10" transform="rotate(180 1788 348)" fill="white"/>
<circle cx="1768" cy="348" r="10" transform="rotate(180 1768 348)" fill="white"/>
<circle cx="1770.5" cy="365.5" r="7.5" transform="rotate(180 1770.5 365.5)" fill="white"/>
<circle cx="1805.5" cy="350.5" r="7.5" transform="rotate(180 1805.5 350.5)" fill="white"/>
<circle cx="1790.5" cy="385.5" r="7.5" transform="rotate(180 1790.5 385.5)" fill="white"/>
<circle cx="1825.5" cy="370.5" r="7.5" transform="rotate(180 1825.5 370.5)" fill="white"/>
<circle cx="1810.5" cy="405.5" r="7.5" transform="rotate(180 1810.5 405.5)" fill="white"/>
<circle cx="1845.5" cy="390.5" r="7.5" transform="rotate(180 1845.5 390.5)" fill="white"/>
<circle cx="1840.5" cy="375.5" r="7.5" transform="rotate(180 1840.5 375.5)" fill="white"/>
<circle cx="1795.5" cy="400.5" r="7.5" transform="rotate(180 1795.5 400.5)" fill="white"/>
<circle cx="1820.5" cy="355.5" r="7.5" transform="rotate(180 1820.5 355.5)" fill="white"/>
<circle cx="1775.5" cy="380.5" r="7.5" transform="rotate(180 1775.5 380.5)" fill="white"/>
<circle cx="1781" cy="395" r="5" transform="rotate(180 1781 395)" fill="white"/>
<circle cx="1836" cy="360" r="5" transform="rotate(180 1836 360)" fill="white"/>
<circle cx="1848" cy="338" r="10" transform="rotate(180 1848 338)" fill="white"/>
<circle cx="1828" cy="338" r="10" transform="rotate(180 1828 338)" fill="white"/>
<circle cx="1828" cy="318" r="10" transform="rotate(180 1828 318)" fill="white"/>
<circle cx="1808" cy="318" r="10" transform="rotate(180 1808 318)" fill="white"/>
<circle cx="1808" cy="298" r="10" transform="rotate(180 1808 298)" fill="white"/>
<circle cx="1788" cy="298" r="10" transform="rotate(180 1788 298)" fill="white"/>
<circle cx="1788" cy="278" r="10" transform="rotate(180 1788 278)" fill="white"/>
<circle cx="1768" cy="278" r="10" transform="rotate(180 1768 278)" fill="white"/>
<circle cx="1770.5" cy="295.5" r="7.5" transform="rotate(180 1770.5 295.5)" fill="white"/>
<circle cx="1805.5" cy="280.5" r="7.5" transform="rotate(180 1805.5 280.5)" fill="white"/>
<circle cx="1790.5" cy="315.5" r="7.5" transform="rotate(180 1790.5 315.5)" fill="white"/>
<circle cx="1825.5" cy="300.5" r="7.5" transform="rotate(180 1825.5 300.5)" fill="white"/>
<circle cx="1810.5" cy="335.5" r="7.5" transform="rotate(180 1810.5 335.5)" fill="white"/>
<circle cx="1845.5" cy="320.5" r="7.5" transform="rotate(180 1845.5 320.5)" fill="white"/>
<circle cx="1840.5" cy="305.5" r="7.5" transform="rotate(180 1840.5 305.5)" fill="white"/>
<circle cx="1795.5" cy="330.5" r="7.5" transform="rotate(180 1795.5 330.5)" fill="white"/>
<circle cx="1820.5" cy="285.5" r="7.5" transform="rotate(180 1820.5 285.5)" fill="white"/>
<circle cx="1775.5" cy="310.5" r="7.5" transform="rotate(180 1775.5 310.5)" fill="white"/>
<circle cx="1781" cy="325" r="5" transform="rotate(180 1781 325)" fill="white"/>
<circle cx="1836" cy="290" r="5" transform="rotate(180 1836 290)" fill="white"/>
<circle cx="1763" cy="327" r="10" transform="rotate(180 1763 327)" fill="white"/>
<circle cx="1743" cy="327" r="10" transform="rotate(180 1743 327)" fill="white"/>
<circle cx="1743" cy="307" r="10" transform="rotate(180 1743 307)" fill="white"/>
<circle cx="1723" cy="307" r="10" transform="rotate(180 1723 307)" fill="white"/>
<circle cx="1723" cy="287" r="10" transform="rotate(180 1723 287)" fill="white"/>
<circle cx="1703" cy="287" r="10" transform="rotate(180 1703 287)" fill="white"/>
<circle cx="1703" cy="267" r="10" transform="rotate(180 1703 267)" fill="white"/>
<circle cx="1683" cy="267" r="10" transform="rotate(180 1683 267)" fill="white"/>
<circle cx="1685.5" cy="284.5" r="7.5" transform="rotate(180 1685.5 284.5)" fill="white"/>
<circle cx="1720.5" cy="269.5" r="7.5" transform="rotate(180 1720.5 269.5)" fill="white"/>
<circle cx="1705.5" cy="304.5" r="7.5" transform="rotate(180 1705.5 304.5)" fill="white"/>
<circle cx="1740.5" cy="289.5" r="7.5" transform="rotate(180 1740.5 289.5)" fill="white"/>
<circle cx="1725.5" cy="324.5" r="7.5" transform="rotate(180 1725.5 324.5)" fill="white"/>
<circle cx="1760.5" cy="309.5" r="7.5" transform="rotate(180 1760.5 309.5)" fill="white"/>
<circle cx="1755.5" cy="294.5" r="7.5" transform="rotate(180 1755.5 294.5)" fill="white"/>
<circle cx="1710.5" cy="319.5" r="7.5" transform="rotate(180 1710.5 319.5)" fill="white"/>
<circle cx="1735.5" cy="274.5" r="7.5" transform="rotate(180 1735.5 274.5)" fill="white"/>
<circle cx="1690.5" cy="299.5" r="7.5" transform="rotate(180 1690.5 299.5)" fill="white"/>
<circle cx="1696" cy="314" r="5" transform="rotate(180 1696 314)" fill="white"/>
<circle cx="1751" cy="279" r="5" transform="rotate(180 1751 279)" fill="white"/>
<circle cx="1596" cy="230" r="10" transform="rotate(180 1596 230)" fill="white"/>
<circle cx="1576" cy="230" r="10" transform="rotate(180 1576 230)" fill="white"/>
<circle cx="1576" cy="210" r="10" transform="rotate(180 1576 210)" fill="white"/>
<circle cx="1556" cy="210" r="10" transform="rotate(180 1556 210)" fill="white"/>
<circle cx="1556" cy="190" r="10" transform="rotate(180 1556 190)" fill="white"/>
<circle cx="1536" cy="190" r="10" transform="rotate(180 1536 190)" fill="white"/>
<circle cx="1536" cy="170" r="10" transform="rotate(180 1536 170)" fill="white"/>
<circle cx="1516" cy="170" r="10" transform="rotate(180 1516 170)" fill="white"/>
<circle cx="1518.5" cy="187.5" r="7.5" transform="rotate(180 1518.5 187.5)" fill="white"/>
<circle cx="1553.5" cy="172.5" r="7.5" transform="rotate(180 1553.5 172.5)" fill="white"/>
<circle cx="1538.5" cy="207.5" r="7.5" transform="rotate(180 1538.5 207.5)" fill="white"/>
<circle cx="1573.5" cy="192.5" r="7.5" transform="rotate(180 1573.5 192.5)" fill="white"/>
<circle cx="1558.5" cy="227.5" r="7.5" transform="rotate(180 1558.5 227.5)" fill="white"/>
<circle cx="1593.5" cy="212.5" r="7.5" transform="rotate(180 1593.5 212.5)" fill="white"/>
<circle cx="1588.5" cy="197.5" r="7.5" transform="rotate(180 1588.5 197.5)" fill="white"/>
<circle cx="1543.5" cy="222.5" r="7.5" transform="rotate(180 1543.5 222.5)" fill="white"/>
<circle cx="1568.5" cy="177.5" r="7.5" transform="rotate(180 1568.5 177.5)" fill="white"/>
<circle cx="1523.5" cy="202.5" r="7.5" transform="rotate(180 1523.5 202.5)" fill="white"/>
<circle cx="1529" cy="217" r="5" transform="rotate(180 1529 217)" fill="white"/>
<circle cx="1584" cy="182" r="5" transform="rotate(180 1584 182)" fill="white"/>
<circle cx="1603" cy="164" r="10" transform="rotate(180 1603 164)" fill="white"/>
<circle cx="1583" cy="164" r="10" transform="rotate(180 1583 164)" fill="white"/>
<circle cx="1583" cy="144" r="10" transform="rotate(180 1583 144)" fill="white"/>
<circle cx="1563" cy="144" r="10" transform="rotate(180 1563 144)" fill="white"/>
<circle cx="1563" cy="124" r="10" transform="rotate(180 1563 124)" fill="white"/>
<circle cx="1543" cy="124" r="10" transform="rotate(180 1543 124)" fill="white"/>
<circle cx="1543" cy="104" r="10" transform="rotate(180 1543 104)" fill="white"/>
<circle cx="1523" cy="104" r="10" transform="rotate(180 1523 104)" fill="white"/>
<circle cx="1525.5" cy="121.5" r="7.5" transform="rotate(180 1525.5 121.5)" fill="white"/>
<circle cx="1560.5" cy="106.5" r="7.5" transform="rotate(180 1560.5 106.5)" fill="white"/>
<circle cx="1545.5" cy="141.5" r="7.5" transform="rotate(180 1545.5 141.5)" fill="white"/>
<circle cx="1580.5" cy="126.5" r="7.5" transform="rotate(180 1580.5 126.5)" fill="white"/>
<circle cx="1565.5" cy="161.5" r="7.5" transform="rotate(180 1565.5 161.5)" fill="white"/>
<circle cx="1600.5" cy="146.5" r="7.5" transform="rotate(180 1600.5 146.5)" fill="white"/>
<circle cx="1595.5" cy="131.5" r="7.5" transform="rotate(180 1595.5 131.5)" fill="white"/>
<circle cx="1550.5" cy="156.5" r="7.5" transform="rotate(180 1550.5 156.5)" fill="white"/>
<circle cx="1575.5" cy="111.5" r="7.5" transform="rotate(180 1575.5 111.5)" fill="white"/>
<circle cx="1530.5" cy="136.5" r="7.5" transform="rotate(180 1530.5 136.5)" fill="white"/>
<circle cx="1536" cy="151" r="5" transform="rotate(180 1536 151)" fill="white"/>
<circle cx="1591" cy="116" r="5" transform="rotate(180 1591 116)" fill="white"/>
<circle cx="1516" cy="150" r="10" transform="rotate(180 1516 150)" fill="white"/>
<circle cx="1496" cy="150" r="10" transform="rotate(180 1496 150)" fill="white"/>
<circle cx="1496" cy="130" r="10" transform="rotate(180 1496 130)" fill="white"/>
<circle cx="1476" cy="130" r="10" transform="rotate(180 1476 130)" fill="white"/>
<circle cx="1476" cy="110" r="10" transform="rotate(180 1476 110)" fill="white"/>
<circle cx="1456" cy="110" r="10" transform="rotate(180 1456 110)" fill="white"/>
<circle cx="1456" cy="90" r="10" transform="rotate(180 1456 90)" fill="white"/>
<circle cx="1436" cy="90" r="10" transform="rotate(180 1436 90)" fill="white"/>
<circle cx="1438.5" cy="107.5" r="7.5" transform="rotate(180 1438.5 107.5)" fill="white"/>
<circle cx="1473.5" cy="92.5" r="7.5" transform="rotate(180 1473.5 92.5)" fill="white"/>
<circle cx="1458.5" cy="127.5" r="7.5" transform="rotate(180 1458.5 127.5)" fill="white"/>
<circle cx="1493.5" cy="112.5" r="7.5" transform="rotate(180 1493.5 112.5)" fill="white"/>
<circle cx="1478.5" cy="147.5" r="7.5" transform="rotate(180 1478.5 147.5)" fill="white"/>
<circle cx="1513.5" cy="132.5" r="7.5" transform="rotate(180 1513.5 132.5)" fill="white"/>
<circle cx="1508.5" cy="117.5" r="7.5" transform="rotate(180 1508.5 117.5)" fill="white"/>
<circle cx="1463.5" cy="142.5" r="7.5" transform="rotate(180 1463.5 142.5)" fill="white"/>
<circle cx="1488.5" cy="97.5" r="7.5" transform="rotate(180 1488.5 97.5)" fill="white"/>
<circle cx="1443.5" cy="122.5" r="7.5" transform="rotate(180 1443.5 122.5)" fill="white"/>
<circle cx="1449" cy="137" r="5" transform="rotate(180 1449 137)" fill="white"/>
<circle cx="1504" cy="102" r="5" transform="rotate(180 1504 102)" fill="white"/>
<circle cx="1508" cy="217" r="10" transform="rotate(180 1508 217)" fill="white"/>
<circle cx="1488" cy="217" r="10" transform="rotate(180 1488 217)" fill="white"/>
<circle cx="1488" cy="197" r="10" transform="rotate(180 1488 197)" fill="white"/>
<circle cx="1468" cy="197" r="10" transform="rotate(180 1468 197)" fill="white"/>
<circle cx="1468" cy="177" r="10" transform="rotate(180 1468 177)" fill="white"/>
<circle cx="1448" cy="177" r="10" transform="rotate(180 1448 177)" fill="white"/>
<circle cx="1448" cy="157" r="10" transform="rotate(180 1448 157)" fill="white"/>
<circle cx="1428" cy="157" r="10" transform="rotate(180 1428 157)" fill="white"/>
<circle cx="1430.5" cy="174.5" r="7.5" transform="rotate(180 1430.5 174.5)" fill="white"/>
<circle cx="1465.5" cy="159.5" r="7.5" transform="rotate(180 1465.5 159.5)" fill="white"/>
<circle cx="1450.5" cy="194.5" r="7.5" transform="rotate(180 1450.5 194.5)" fill="white"/>
<circle cx="1485.5" cy="179.5" r="7.5" transform="rotate(180 1485.5 179.5)" fill="white"/>
<circle cx="1470.5" cy="214.5" r="7.5" transform="rotate(180 1470.5 214.5)" fill="white"/>
<circle cx="1505.5" cy="199.5" r="7.5" transform="rotate(180 1505.5 199.5)" fill="white"/>
<circle cx="1500.5" cy="184.5" r="7.5" transform="rotate(180 1500.5 184.5)" fill="white"/>
<circle cx="1455.5" cy="209.5" r="7.5" transform="rotate(180 1455.5 209.5)" fill="white"/>
<circle cx="1480.5" cy="164.5" r="7.5" transform="rotate(180 1480.5 164.5)" fill="white"/>
<circle cx="1435.5" cy="189.5" r="7.5" transform="rotate(180 1435.5 189.5)" fill="white"/>
<circle cx="1441" cy="204" r="5" transform="rotate(180 1441 204)" fill="white"/>
<circle cx="1496" cy="169" r="5" transform="rotate(180 1496 169)" fill="white"/>
<circle cx="1498" cy="282" r="10" transform="rotate(180 1498 282)" fill="white"/>
<circle cx="1478" cy="282" r="10" transform="rotate(180 1478 282)" fill="white"/>
<circle cx="1478" cy="262" r="10" transform="rotate(180 1478 262)" fill="white"/>
<circle cx="1458" cy="262" r="10" transform="rotate(180 1458 262)" fill="white"/>
<circle cx="1458" cy="242" r="10" transform="rotate(180 1458 242)" fill="white"/>
<circle cx="1438" cy="242" r="10" transform="rotate(180 1438 242)" fill="white"/>
<circle cx="1438" cy="222" r="10" transform="rotate(180 1438 222)" fill="white"/>
<circle cx="1418" cy="222" r="10" transform="rotate(180 1418 222)" fill="white"/>
<circle cx="1420.5" cy="239.5" r="7.5" transform="rotate(180 1420.5 239.5)" fill="white"/>
<circle cx="1455.5" cy="224.5" r="7.5" transform="rotate(180 1455.5 224.5)" fill="white"/>
<circle cx="1440.5" cy="259.5" r="7.5" transform="rotate(180 1440.5 259.5)" fill="white"/>
<circle cx="1475.5" cy="244.5" r="7.5" transform="rotate(180 1475.5 244.5)" fill="white"/>
<circle cx="1460.5" cy="279.5" r="7.5" transform="rotate(180 1460.5 279.5)" fill="white"/>
<circle cx="1495.5" cy="264.5" r="7.5" transform="rotate(180 1495.5 264.5)" fill="white"/>
<circle cx="1490.5" cy="249.5" r="7.5" transform="rotate(180 1490.5 249.5)" fill="white"/>
<circle cx="1445.5" cy="274.5" r="7.5" transform="rotate(180 1445.5 274.5)" fill="white"/>
<circle cx="1470.5" cy="229.5" r="7.5" transform="rotate(180 1470.5 229.5)" fill="white"/>
<circle cx="1425.5" cy="254.5" r="7.5" transform="rotate(180 1425.5 254.5)" fill="white"/>
<circle cx="1431" cy="269" r="5" transform="rotate(180 1431 269)" fill="white"/>
<circle cx="1486" cy="234" r="5" transform="rotate(180 1486 234)" fill="white"/>
<circle cx="1588" cy="297" r="10" transform="rotate(180 1588 297)" fill="white"/>
<circle cx="1568" cy="297" r="10" transform="rotate(180 1568 297)" fill="white"/>
<circle cx="1568" cy="277" r="10" transform="rotate(180 1568 277)" fill="white"/>
<circle cx="1548" cy="277" r="10" transform="rotate(180 1548 277)" fill="white"/>
<circle cx="1548" cy="257" r="10" transform="rotate(180 1548 257)" fill="white"/>
<circle cx="1528" cy="257" r="10" transform="rotate(180 1528 257)" fill="white"/>
<circle cx="1528" cy="237" r="10" transform="rotate(180 1528 237)" fill="white"/>
<circle cx="1508" cy="237" r="10" transform="rotate(180 1508 237)" fill="white"/>
<circle cx="1510.5" cy="254.5" r="7.5" transform="rotate(180 1510.5 254.5)" fill="white"/>
<circle cx="1545.5" cy="239.5" r="7.5" transform="rotate(180 1545.5 239.5)" fill="white"/>
<circle cx="1530.5" cy="274.5" r="7.5" transform="rotate(180 1530.5 274.5)" fill="white"/>
<circle cx="1565.5" cy="259.5" r="7.5" transform="rotate(180 1565.5 259.5)" fill="white"/>
<circle cx="1550.5" cy="294.5" r="7.5" transform="rotate(180 1550.5 294.5)" fill="white"/>
<circle cx="1585.5" cy="279.5" r="7.5" transform="rotate(180 1585.5 279.5)" fill="white"/>
<circle cx="1580.5" cy="264.5" r="7.5" transform="rotate(180 1580.5 264.5)" fill="white"/>
<circle cx="1535.5" cy="289.5" r="7.5" transform="rotate(180 1535.5 289.5)" fill="white"/>
<circle cx="1560.5" cy="244.5" r="7.5" transform="rotate(180 1560.5 244.5)" fill="white"/>
<circle cx="1515.5" cy="269.5" r="7.5" transform="rotate(180 1515.5 269.5)" fill="white"/>
<circle cx="1521" cy="284" r="5" transform="rotate(180 1521 284)" fill="white"/>
<circle cx="1576" cy="249" r="5" transform="rotate(180 1576 249)" fill="white"/>
<circle cx="1674" cy="310" r="10" transform="rotate(180 1674 310)" fill="white"/>
<circle cx="1654" cy="310" r="10" transform="rotate(180 1654 310)" fill="white"/>
<circle cx="1654" cy="290" r="10" transform="rotate(180 1654 290)" fill="white"/>
<circle cx="1634" cy="290" r="10" transform="rotate(180 1634 290)" fill="white"/>
<circle cx="1634" cy="270" r="10" transform="rotate(180 1634 270)" fill="white"/>
<circle cx="1614" cy="270" r="10" transform="rotate(180 1614 270)" fill="white"/>
<circle cx="1614" cy="250" r="10" transform="rotate(180 1614 250)" fill="white"/>
<circle cx="1594" cy="250" r="10" transform="rotate(180 1594 250)" fill="white"/>
<circle cx="1596.5" cy="267.5" r="7.5" transform="rotate(180 1596.5 267.5)" fill="white"/>
<circle cx="1631.5" cy="252.5" r="7.5" transform="rotate(180 1631.5 252.5)" fill="white"/>
<circle cx="1616.5" cy="287.5" r="7.5" transform="rotate(180 1616.5 287.5)" fill="white"/>
<circle cx="1651.5" cy="272.5" r="7.5" transform="rotate(180 1651.5 272.5)" fill="white"/>
<circle cx="1636.5" cy="307.5" r="7.5" transform="rotate(180 1636.5 307.5)" fill="white"/>
<circle cx="1671.5" cy="292.5" r="7.5" transform="rotate(180 1671.5 292.5)" fill="white"/>
<circle cx="1666.5" cy="277.5" r="7.5" transform="rotate(180 1666.5 277.5)" fill="white"/>
<circle cx="1621.5" cy="302.5" r="7.5" transform="rotate(180 1621.5 302.5)" fill="white"/>
<circle cx="1646.5" cy="257.5" r="7.5" transform="rotate(180 1646.5 257.5)" fill="white"/>
<circle cx="1601.5" cy="282.5" r="7.5" transform="rotate(180 1601.5 282.5)" fill="white"/>
<circle cx="1607" cy="297" r="5" transform="rotate(180 1607 297)" fill="white"/>
<circle cx="1662" cy="262" r="5" transform="rotate(180 1662 262)" fill="white"/>
<circle cx="1683" cy="244" r="10" transform="rotate(180 1683 244)" fill="white"/>
<circle cx="1663" cy="244" r="10" transform="rotate(180 1663 244)" fill="white"/>
<circle cx="1663" cy="224" r="10" transform="rotate(180 1663 224)" fill="white"/>
<circle cx="1643" cy="224" r="10" transform="rotate(180 1643 224)" fill="white"/>
<circle cx="1643" cy="204" r="10" transform="rotate(180 1643 204)" fill="white"/>
<circle cx="1623" cy="204" r="10" transform="rotate(180 1623 204)" fill="white"/>
<circle cx="1623" cy="184" r="10" transform="rotate(180 1623 184)" fill="white"/>
<circle cx="1603" cy="184" r="10" transform="rotate(180 1603 184)" fill="white"/>
<circle cx="1605.5" cy="201.5" r="7.5" transform="rotate(180 1605.5 201.5)" fill="white"/>
<circle cx="1640.5" cy="186.5" r="7.5" transform="rotate(180 1640.5 186.5)" fill="white"/>
<circle cx="1625.5" cy="221.5" r="7.5" transform="rotate(180 1625.5 221.5)" fill="white"/>
<circle cx="1660.5" cy="206.5" r="7.5" transform="rotate(180 1660.5 206.5)" fill="white"/>
<circle cx="1645.5" cy="241.5" r="7.5" transform="rotate(180 1645.5 241.5)" fill="white"/>
<circle cx="1680.5" cy="226.5" r="7.5" transform="rotate(180 1680.5 226.5)" fill="white"/>
<circle cx="1675.5" cy="211.5" r="7.5" transform="rotate(180 1675.5 211.5)" fill="white"/>
<circle cx="1630.5" cy="236.5" r="7.5" transform="rotate(180 1630.5 236.5)" fill="white"/>
<circle cx="1655.5" cy="191.5" r="7.5" transform="rotate(180 1655.5 191.5)" fill="white"/>
<circle cx="1610.5" cy="216.5" r="7.5" transform="rotate(180 1610.5 216.5)" fill="white"/>
<circle cx="1616" cy="231" r="5" transform="rotate(180 1616 231)" fill="white"/>
<circle cx="1671" cy="196" r="5" transform="rotate(180 1671 196)" fill="white"/>
<circle cx="1688" cy="177" r="10" transform="rotate(180 1688 177)" fill="white"/>
<circle cx="1668" cy="177" r="10" transform="rotate(180 1668 177)" fill="white"/>
<circle cx="1668" cy="157" r="10" transform="rotate(180 1668 157)" fill="white"/>
<circle cx="1648" cy="157" r="10" transform="rotate(180 1648 157)" fill="white"/>
<circle cx="1648" cy="137" r="10" transform="rotate(180 1648 137)" fill="white"/>
<circle cx="1628" cy="137" r="10" transform="rotate(180 1628 137)" fill="white"/>
<circle cx="1628" cy="117" r="10" transform="rotate(180 1628 117)" fill="white"/>
<circle cx="1608" cy="117" r="10" transform="rotate(180 1608 117)" fill="white"/>
<circle cx="1610.5" cy="134.5" r="7.5" transform="rotate(180 1610.5 134.5)" fill="white"/>
<circle cx="1645.5" cy="119.5" r="7.5" transform="rotate(180 1645.5 119.5)" fill="white"/>
<circle cx="1630.5" cy="154.5" r="7.5" transform="rotate(180 1630.5 154.5)" fill="white"/>
<circle cx="1665.5" cy="139.5" r="7.5" transform="rotate(180 1665.5 139.5)" fill="white"/>
<circle cx="1650.5" cy="174.5" r="7.5" transform="rotate(180 1650.5 174.5)" fill="white"/>
<circle cx="1685.5" cy="159.5" r="7.5" transform="rotate(180 1685.5 159.5)" fill="white"/>
<circle cx="1680.5" cy="144.5" r="7.5" transform="rotate(180 1680.5 144.5)" fill="white"/>
<circle cx="1635.5" cy="169.5" r="7.5" transform="rotate(180 1635.5 169.5)" fill="white"/>
<circle cx="1660.5" cy="124.5" r="7.5" transform="rotate(180 1660.5 124.5)" fill="white"/>
<circle cx="1615.5" cy="149.5" r="7.5" transform="rotate(180 1615.5 149.5)" fill="white"/>
<circle cx="1621" cy="164" r="5" transform="rotate(180 1621 164)" fill="white"/>
<circle cx="1676" cy="129" r="5" transform="rotate(180 1676 129)" fill="white"/>
<circle cx="1688" cy="107" r="10" transform="rotate(180 1688 107)" fill="white"/>
<circle cx="1668" cy="107" r="10" transform="rotate(180 1668 107)" fill="white"/>
<circle cx="1668" cy="87" r="10" transform="rotate(180 1668 87)" fill="white"/>
<circle cx="1648" cy="87" r="10" transform="rotate(180 1648 87)" fill="white"/>
<circle cx="1648" cy="67" r="10" transform="rotate(180 1648 67)" fill="white"/>
<circle cx="1628" cy="67" r="10" transform="rotate(180 1628 67)" fill="white"/>
<circle cx="1628" cy="47" r="10" transform="rotate(180 1628 47)" fill="white"/>
<circle cx="1608" cy="47" r="10" transform="rotate(180 1608 47)" fill="white"/>
<circle cx="1610.5" cy="64.5" r="7.5" transform="rotate(180 1610.5 64.5)" fill="white"/>
<circle cx="1645.5" cy="49.5" r="7.5" transform="rotate(180 1645.5 49.5)" fill="white"/>
<circle cx="1630.5" cy="84.5" r="7.5" transform="rotate(180 1630.5 84.5)" fill="white"/>
<circle cx="1665.5" cy="69.5" r="7.5" transform="rotate(180 1665.5 69.5)" fill="white"/>
<circle cx="1650.5" cy="104.5" r="7.5" transform="rotate(180 1650.5 104.5)" fill="white"/>
<circle cx="1685.5" cy="89.5" r="7.5" transform="rotate(180 1685.5 89.5)" fill="white"/>
<circle cx="1680.5" cy="74.5" r="7.5" transform="rotate(180 1680.5 74.5)" fill="white"/>
<circle cx="1635.5" cy="99.5" r="7.5" transform="rotate(180 1635.5 99.5)" fill="white"/>
<circle cx="1660.5" cy="54.5" r="7.5" transform="rotate(180 1660.5 54.5)" fill="white"/>
<circle cx="1615.5" cy="79.5" r="7.5" transform="rotate(180 1615.5 79.5)" fill="white"/>
<circle cx="1621" cy="94" r="5" transform="rotate(180 1621 94)" fill="white"/>
<circle cx="1676" cy="59" r="5" transform="rotate(180 1676 59)" fill="white"/>
<circle cx="1603" cy="96" r="10" transform="rotate(180 1603 96)" fill="white"/>
<circle cx="1583" cy="96" r="10" transform="rotate(180 1583 96)" fill="white"/>
<circle cx="1583" cy="76" r="10" transform="rotate(180 1583 76)" fill="white"/>
<circle cx="1563" cy="76" r="10" transform="rotate(180 1563 76)" fill="white"/>
<circle cx="1563" cy="56" r="10" transform="rotate(180 1563 56)" fill="white"/>
<circle cx="1543" cy="56" r="10" transform="rotate(180 1543 56)" fill="white"/>
<circle cx="1543" cy="36" r="10" transform="rotate(180 1543 36)" fill="white"/>
<circle cx="1523" cy="36" r="10" transform="rotate(180 1523 36)" fill="white"/>
<circle cx="1525.5" cy="53.5" r="7.5" transform="rotate(180 1525.5 53.5)" fill="white"/>
<circle cx="1560.5" cy="38.5" r="7.5" transform="rotate(180 1560.5 38.5)" fill="white"/>
<circle cx="1545.5" cy="73.5" r="7.5" transform="rotate(180 1545.5 73.5)" fill="white"/>
<circle cx="1580.5" cy="58.5" r="7.5" transform="rotate(180 1580.5 58.5)" fill="white"/>
<circle cx="1565.5" cy="93.5" r="7.5" transform="rotate(180 1565.5 93.5)" fill="white"/>
<circle cx="1600.5" cy="78.5" r="7.5" transform="rotate(180 1600.5 78.5)" fill="white"/>
<circle cx="1595.5" cy="63.5" r="7.5" transform="rotate(180 1595.5 63.5)" fill="white"/>
<circle cx="1550.5" cy="88.5" r="7.5" transform="rotate(180 1550.5 88.5)" fill="white"/>
<circle cx="1575.5" cy="43.5" r="7.5" transform="rotate(180 1575.5 43.5)" fill="white"/>
<circle cx="1530.5" cy="68.5" r="7.5" transform="rotate(180 1530.5 68.5)" fill="white"/>
<circle cx="1536" cy="83" r="5" transform="rotate(180 1536 83)" fill="white"/>
<circle cx="1591" cy="48" r="5" transform="rotate(180 1591 48)" fill="white"/>
<circle cx="1870" cy="204" r="10" transform="rotate(180 1870 204)" fill="white"/>
<circle cx="1850" cy="204" r="10" transform="rotate(180 1850 204)" fill="white"/>
<circle cx="1850" cy="184" r="10" transform="rotate(180 1850 184)" fill="white"/>
<circle cx="1830" cy="184" r="10" transform="rotate(180 1830 184)" fill="white"/>
<circle cx="1830" cy="164" r="10" transform="rotate(180 1830 164)" fill="white"/>
<circle cx="1810" cy="164" r="10" transform="rotate(180 1810 164)" fill="white"/>
<circle cx="1810" cy="144" r="10" transform="rotate(180 1810 144)" fill="white"/>
<circle cx="1790" cy="144" r="10" transform="rotate(180 1790 144)" fill="white"/>
<circle cx="1792.5" cy="161.5" r="7.5" transform="rotate(180 1792.5 161.5)" fill="white"/>
<circle cx="1827.5" cy="146.5" r="7.5" transform="rotate(180 1827.5 146.5)" fill="white"/>
<circle cx="1812.5" cy="181.5" r="7.5" transform="rotate(180 1812.5 181.5)" fill="white"/>
<circle cx="1847.5" cy="166.5" r="7.5" transform="rotate(180 1847.5 166.5)" fill="white"/>
<circle cx="1832.5" cy="201.5" r="7.5" transform="rotate(180 1832.5 201.5)" fill="white"/>
<circle cx="1867.5" cy="186.5" r="7.5" transform="rotate(180 1867.5 186.5)" fill="white"/>
<circle cx="1862.5" cy="171.5" r="7.5" transform="rotate(180 1862.5 171.5)" fill="white"/>
<circle cx="1817.5" cy="196.5" r="7.5" transform="rotate(180 1817.5 196.5)" fill="white"/>
<circle cx="1842.5" cy="151.5" r="7.5" transform="rotate(180 1842.5 151.5)" fill="white"/>
<circle cx="1797.5" cy="176.5" r="7.5" transform="rotate(180 1797.5 176.5)" fill="white"/>
<circle cx="1803" cy="191" r="5" transform="rotate(180 1803 191)" fill="white"/>
<circle cx="1858" cy="156" r="5" transform="rotate(180 1858 156)" fill="white"/>
<circle cx="1877" cy="138" r="10" transform="rotate(180 1877 138)" fill="white"/>
<circle cx="1857" cy="138" r="10" transform="rotate(180 1857 138)" fill="white"/>
<circle cx="1857" cy="118" r="10" transform="rotate(180 1857 118)" fill="white"/>
<circle cx="1837" cy="118" r="10" transform="rotate(180 1837 118)" fill="white"/>
<circle cx="1837" cy="98" r="10" transform="rotate(180 1837 98)" fill="white"/>
<circle cx="1817" cy="98" r="10" transform="rotate(180 1817 98)" fill="white"/>
<circle cx="1817" cy="78" r="10" transform="rotate(180 1817 78)" fill="white"/>
<circle cx="1797" cy="78" r="10" transform="rotate(180 1797 78)" fill="white"/>
<circle cx="1799.5" cy="95.5" r="7.5" transform="rotate(180 1799.5 95.5)" fill="white"/>
<circle cx="1834.5" cy="80.5" r="7.5" transform="rotate(180 1834.5 80.5)" fill="white"/>
<circle cx="1819.5" cy="115.5" r="7.5" transform="rotate(180 1819.5 115.5)" fill="white"/>
<circle cx="1854.5" cy="100.5" r="7.5" transform="rotate(180 1854.5 100.5)" fill="white"/>
<circle cx="1839.5" cy="135.5" r="7.5" transform="rotate(180 1839.5 135.5)" fill="white"/>
<circle cx="1874.5" cy="120.5" r="7.5" transform="rotate(180 1874.5 120.5)" fill="white"/>
<circle cx="1869.5" cy="105.5" r="7.5" transform="rotate(180 1869.5 105.5)" fill="white"/>
<circle cx="1824.5" cy="130.5" r="7.5" transform="rotate(180 1824.5 130.5)" fill="white"/>
<circle cx="1849.5" cy="85.5" r="7.5" transform="rotate(180 1849.5 85.5)" fill="white"/>
<circle cx="1804.5" cy="110.5" r="7.5" transform="rotate(180 1804.5 110.5)" fill="white"/>
<circle cx="1810" cy="125" r="5" transform="rotate(180 1810 125)" fill="white"/>
<circle cx="1865" cy="90" r="5" transform="rotate(180 1865 90)" fill="white"/>
<circle cx="1790" cy="124" r="10" transform="rotate(180 1790 124)" fill="white"/>
<circle cx="1770" cy="124" r="10" transform="rotate(180 1770 124)" fill="white"/>
<circle cx="1770" cy="104" r="10" transform="rotate(180 1770 104)" fill="white"/>
<circle cx="1750" cy="104" r="10" transform="rotate(180 1750 104)" fill="white"/>
<circle cx="1750" cy="84" r="10" transform="rotate(180 1750 84)" fill="white"/>
<circle cx="1730" cy="84" r="10" transform="rotate(180 1730 84)" fill="white"/>
<circle cx="1730" cy="64" r="10" transform="rotate(180 1730 64)" fill="white"/>
<circle cx="1710" cy="64" r="10" transform="rotate(180 1710 64)" fill="white"/>
<circle cx="1712.5" cy="81.5" r="7.5" transform="rotate(180 1712.5 81.5)" fill="white"/>
<circle cx="1747.5" cy="66.5" r="7.5" transform="rotate(180 1747.5 66.5)" fill="white"/>
<circle cx="1732.5" cy="101.5" r="7.5" transform="rotate(180 1732.5 101.5)" fill="white"/>
<circle cx="1767.5" cy="86.5" r="7.5" transform="rotate(180 1767.5 86.5)" fill="white"/>
<circle cx="1752.5" cy="121.5" r="7.5" transform="rotate(180 1752.5 121.5)" fill="white"/>
<circle cx="1787.5" cy="106.5" r="7.5" transform="rotate(180 1787.5 106.5)" fill="white"/>
<circle cx="1782.5" cy="91.5" r="7.5" transform="rotate(180 1782.5 91.5)" fill="white"/>
<circle cx="1737.5" cy="116.5" r="7.5" transform="rotate(180 1737.5 116.5)" fill="white"/>
<circle cx="1762.5" cy="71.5" r="7.5" transform="rotate(180 1762.5 71.5)" fill="white"/>
<circle cx="1717.5" cy="96.5" r="7.5" transform="rotate(180 1717.5 96.5)" fill="white"/>
<circle cx="1723" cy="111" r="5" transform="rotate(180 1723 111)" fill="white"/>
<circle cx="1778" cy="76" r="5" transform="rotate(180 1778 76)" fill="white"/>
<circle cx="1782" cy="191" r="10" transform="rotate(180 1782 191)" fill="white"/>
<circle cx="1762" cy="191" r="10" transform="rotate(180 1762 191)" fill="white"/>
<circle cx="1762" cy="171" r="10" transform="rotate(180 1762 171)" fill="white"/>
<circle cx="1742" cy="171" r="10" transform="rotate(180 1742 171)" fill="white"/>
<circle cx="1742" cy="151" r="10" transform="rotate(180 1742 151)" fill="white"/>
<circle cx="1722" cy="151" r="10" transform="rotate(180 1722 151)" fill="white"/>
<circle cx="1722" cy="131" r="10" transform="rotate(180 1722 131)" fill="white"/>
<circle cx="1702" cy="131" r="10" transform="rotate(180 1702 131)" fill="white"/>
<circle cx="1704.5" cy="148.5" r="7.5" transform="rotate(180 1704.5 148.5)" fill="white"/>
<circle cx="1739.5" cy="133.5" r="7.5" transform="rotate(180 1739.5 133.5)" fill="white"/>
<circle cx="1724.5" cy="168.5" r="7.5" transform="rotate(180 1724.5 168.5)" fill="white"/>
<circle cx="1759.5" cy="153.5" r="7.5" transform="rotate(180 1759.5 153.5)" fill="white"/>
<circle cx="1744.5" cy="188.5" r="7.5" transform="rotate(180 1744.5 188.5)" fill="white"/>
<circle cx="1779.5" cy="173.5" r="7.5" transform="rotate(180 1779.5 173.5)" fill="white"/>
<circle cx="1774.5" cy="158.5" r="7.5" transform="rotate(180 1774.5 158.5)" fill="white"/>
<circle cx="1729.5" cy="183.5" r="7.5" transform="rotate(180 1729.5 183.5)" fill="white"/>
<circle cx="1754.5" cy="138.5" r="7.5" transform="rotate(180 1754.5 138.5)" fill="white"/>
<circle cx="1709.5" cy="163.5" r="7.5" transform="rotate(180 1709.5 163.5)" fill="white"/>
<circle cx="1715" cy="178" r="5" transform="rotate(180 1715 178)" fill="white"/>
<circle cx="1770" cy="143" r="5" transform="rotate(180 1770 143)" fill="white"/>
<circle cx="1772" cy="256" r="10" transform="rotate(180 1772 256)" fill="white"/>
<circle cx="1752" cy="256" r="10" transform="rotate(180 1752 256)" fill="white"/>
<circle cx="1752" cy="236" r="10" transform="rotate(180 1752 236)" fill="white"/>
<circle cx="1732" cy="236" r="10" transform="rotate(180 1732 236)" fill="white"/>
<circle cx="1732" cy="216" r="10" transform="rotate(180 1732 216)" fill="white"/>
<circle cx="1712" cy="216" r="10" transform="rotate(180 1712 216)" fill="white"/>
<circle cx="1712" cy="196" r="10" transform="rotate(180 1712 196)" fill="white"/>
<circle cx="1692" cy="196" r="10" transform="rotate(180 1692 196)" fill="white"/>
<circle cx="1694.5" cy="213.5" r="7.5" transform="rotate(180 1694.5 213.5)" fill="white"/>
<circle cx="1729.5" cy="198.5" r="7.5" transform="rotate(180 1729.5 198.5)" fill="white"/>
<circle cx="1714.5" cy="233.5" r="7.5" transform="rotate(180 1714.5 233.5)" fill="white"/>
<circle cx="1749.5" cy="218.5" r="7.5" transform="rotate(180 1749.5 218.5)" fill="white"/>
<circle cx="1734.5" cy="253.5" r="7.5" transform="rotate(180 1734.5 253.5)" fill="white"/>
<circle cx="1769.5" cy="238.5" r="7.5" transform="rotate(180 1769.5 238.5)" fill="white"/>
<circle cx="1764.5" cy="223.5" r="7.5" transform="rotate(180 1764.5 223.5)" fill="white"/>
<circle cx="1719.5" cy="248.5" r="7.5" transform="rotate(180 1719.5 248.5)" fill="white"/>
<circle cx="1744.5" cy="203.5" r="7.5" transform="rotate(180 1744.5 203.5)" fill="white"/>
<circle cx="1699.5" cy="228.5" r="7.5" transform="rotate(180 1699.5 228.5)" fill="white"/>
<circle cx="1705" cy="243" r="5" transform="rotate(180 1705 243)" fill="white"/>
<circle cx="1760" cy="208" r="5" transform="rotate(180 1760 208)" fill="white"/>
<circle cx="1862" cy="271" r="10" transform="rotate(180 1862 271)" fill="white"/>
<circle cx="1842" cy="271" r="10" transform="rotate(180 1842 271)" fill="white"/>
<circle cx="1842" cy="251" r="10" transform="rotate(180 1842 251)" fill="white"/>
<circle cx="1822" cy="251" r="10" transform="rotate(180 1822 251)" fill="white"/>
<circle cx="1822" cy="231" r="10" transform="rotate(180 1822 231)" fill="white"/>
<circle cx="1802" cy="231" r="10" transform="rotate(180 1802 231)" fill="white"/>
<circle cx="1802" cy="211" r="10" transform="rotate(180 1802 211)" fill="white"/>
<circle cx="1782" cy="211" r="10" transform="rotate(180 1782 211)" fill="white"/>
<circle cx="1784.5" cy="228.5" r="7.5" transform="rotate(180 1784.5 228.5)" fill="white"/>
<circle cx="1819.5" cy="213.5" r="7.5" transform="rotate(180 1819.5 213.5)" fill="white"/>
<circle cx="1804.5" cy="248.5" r="7.5" transform="rotate(180 1804.5 248.5)" fill="white"/>
<circle cx="1839.5" cy="233.5" r="7.5" transform="rotate(180 1839.5 233.5)" fill="white"/>
<circle cx="1824.5" cy="268.5" r="7.5" transform="rotate(180 1824.5 268.5)" fill="white"/>
<circle cx="1859.5" cy="253.5" r="7.5" transform="rotate(180 1859.5 253.5)" fill="white"/>
<circle cx="1854.5" cy="238.5" r="7.5" transform="rotate(180 1854.5 238.5)" fill="white"/>
<circle cx="1809.5" cy="263.5" r="7.5" transform="rotate(180 1809.5 263.5)" fill="white"/>
<circle cx="1834.5" cy="218.5" r="7.5" transform="rotate(180 1834.5 218.5)" fill="white"/>
<circle cx="1789.5" cy="243.5" r="7.5" transform="rotate(180 1789.5 243.5)" fill="white"/>
<circle cx="1795" cy="258" r="5" transform="rotate(180 1795 258)" fill="white"/>
<circle cx="1850" cy="223" r="5" transform="rotate(180 1850 223)" fill="white"/>
<circle cx="1948" cy="284" r="10" transform="rotate(180 1948 284)" fill="white"/>
<circle cx="1928" cy="284" r="10" transform="rotate(180 1928 284)" fill="white"/>
<circle cx="1928" cy="264" r="10" transform="rotate(180 1928 264)" fill="white"/>
<circle cx="1908" cy="264" r="10" transform="rotate(180 1908 264)" fill="white"/>
<circle cx="1908" cy="244" r="10" transform="rotate(180 1908 244)" fill="white"/>
<circle cx="1888" cy="244" r="10" transform="rotate(180 1888 244)" fill="white"/>
<circle cx="1888" cy="224" r="10" transform="rotate(180 1888 224)" fill="white"/>
<circle cx="1868" cy="224" r="10" transform="rotate(180 1868 224)" fill="white"/>
<circle cx="1870.5" cy="241.5" r="7.5" transform="rotate(180 1870.5 241.5)" fill="white"/>
<circle cx="1905.5" cy="226.5" r="7.5" transform="rotate(180 1905.5 226.5)" fill="white"/>
<circle cx="1890.5" cy="261.5" r="7.5" transform="rotate(180 1890.5 261.5)" fill="white"/>
<circle cx="1925.5" cy="246.5" r="7.5" transform="rotate(180 1925.5 246.5)" fill="white"/>
<circle cx="1910.5" cy="281.5" r="7.5" transform="rotate(180 1910.5 281.5)" fill="white"/>
<circle cx="1945.5" cy="266.5" r="7.5" transform="rotate(180 1945.5 266.5)" fill="white"/>
<circle cx="1940.5" cy="251.5" r="7.5" transform="rotate(180 1940.5 251.5)" fill="white"/>
<circle cx="1895.5" cy="276.5" r="7.5" transform="rotate(180 1895.5 276.5)" fill="white"/>
<circle cx="1920.5" cy="231.5" r="7.5" transform="rotate(180 1920.5 231.5)" fill="white"/>
<circle cx="1875.5" cy="256.5" r="7.5" transform="rotate(180 1875.5 256.5)" fill="white"/>
<circle cx="1881" cy="271" r="5" transform="rotate(180 1881 271)" fill="white"/>
<circle cx="1936" cy="236" r="5" transform="rotate(180 1936 236)" fill="white"/>
<circle cx="1957" cy="218" r="10" transform="rotate(180 1957 218)" fill="white"/>
<circle cx="1937" cy="218" r="10" transform="rotate(180 1937 218)" fill="white"/>
<circle cx="1937" cy="198" r="10" transform="rotate(180 1937 198)" fill="white"/>
<circle cx="1917" cy="198" r="10" transform="rotate(180 1917 198)" fill="white"/>
<circle cx="1917" cy="178" r="10" transform="rotate(180 1917 178)" fill="white"/>
<circle cx="1897" cy="178" r="10" transform="rotate(180 1897 178)" fill="white"/>
<circle cx="1897" cy="158" r="10" transform="rotate(180 1897 158)" fill="white"/>
<circle cx="1877" cy="158" r="10" transform="rotate(180 1877 158)" fill="white"/>
<circle cx="1879.5" cy="175.5" r="7.5" transform="rotate(180 1879.5 175.5)" fill="white"/>
<circle cx="1914.5" cy="160.5" r="7.5" transform="rotate(180 1914.5 160.5)" fill="white"/>
<circle cx="1899.5" cy="195.5" r="7.5" transform="rotate(180 1899.5 195.5)" fill="white"/>
<circle cx="1934.5" cy="180.5" r="7.5" transform="rotate(180 1934.5 180.5)" fill="white"/>
<circle cx="1919.5" cy="215.5" r="7.5" transform="rotate(180 1919.5 215.5)" fill="white"/>
<circle cx="1954.5" cy="200.5" r="7.5" transform="rotate(180 1954.5 200.5)" fill="white"/>
<circle cx="1949.5" cy="185.5" r="7.5" transform="rotate(180 1949.5 185.5)" fill="white"/>
<circle cx="1904.5" cy="210.5" r="7.5" transform="rotate(180 1904.5 210.5)" fill="white"/>
<circle cx="1929.5" cy="165.5" r="7.5" transform="rotate(180 1929.5 165.5)" fill="white"/>
<circle cx="1884.5" cy="190.5" r="7.5" transform="rotate(180 1884.5 190.5)" fill="white"/>
<circle cx="1890" cy="205" r="5" transform="rotate(180 1890 205)" fill="white"/>
<circle cx="1945" cy="170" r="5" transform="rotate(180 1945 170)" fill="white"/>
<circle cx="1962" cy="151" r="10" transform="rotate(180 1962 151)" fill="white"/>
<circle cx="1942" cy="151" r="10" transform="rotate(180 1942 151)" fill="white"/>
<circle cx="1942" cy="131" r="10" transform="rotate(180 1942 131)" fill="white"/>
<circle cx="1922" cy="131" r="10" transform="rotate(180 1922 131)" fill="white"/>
<circle cx="1922" cy="111" r="10" transform="rotate(180 1922 111)" fill="white"/>
<circle cx="1902" cy="111" r="10" transform="rotate(180 1902 111)" fill="white"/>
<circle cx="1902" cy="91" r="10" transform="rotate(180 1902 91)" fill="white"/>
<circle cx="1882" cy="91" r="10" transform="rotate(180 1882 91)" fill="white"/>
<circle cx="1884.5" cy="108.5" r="7.5" transform="rotate(180 1884.5 108.5)" fill="white"/>
<circle cx="1919.5" cy="93.5" r="7.5" transform="rotate(180 1919.5 93.5)" fill="white"/>
<circle cx="1904.5" cy="128.5" r="7.5" transform="rotate(180 1904.5 128.5)" fill="white"/>
<circle cx="1939.5" cy="113.5" r="7.5" transform="rotate(180 1939.5 113.5)" fill="white"/>
<circle cx="1924.5" cy="148.5" r="7.5" transform="rotate(180 1924.5 148.5)" fill="white"/>
<circle cx="1959.5" cy="133.5" r="7.5" transform="rotate(180 1959.5 133.5)" fill="white"/>
<circle cx="1954.5" cy="118.5" r="7.5" transform="rotate(180 1954.5 118.5)" fill="white"/>
<circle cx="1909.5" cy="143.5" r="7.5" transform="rotate(180 1909.5 143.5)" fill="white"/>
<circle cx="1934.5" cy="98.5" r="7.5" transform="rotate(180 1934.5 98.5)" fill="white"/>
<circle cx="1889.5" cy="123.5" r="7.5" transform="rotate(180 1889.5 123.5)" fill="white"/>
<circle cx="1895" cy="138" r="5" transform="rotate(180 1895 138)" fill="white"/>
<circle cx="1950" cy="103" r="5" transform="rotate(180 1950 103)" fill="white"/>
<circle cx="1962" cy="81" r="10" transform="rotate(180 1962 81)" fill="white"/>
<circle cx="1942" cy="81" r="10" transform="rotate(180 1942 81)" fill="white"/>
<circle cx="1942" cy="61" r="10" transform="rotate(180 1942 61)" fill="white"/>
<circle cx="1922" cy="61" r="10" transform="rotate(180 1922 61)" fill="white"/>
<circle cx="1922" cy="41" r="10" transform="rotate(180 1922 41)" fill="white"/>
<circle cx="1902" cy="41" r="10" transform="rotate(180 1902 41)" fill="white"/>
<circle cx="1902" cy="21" r="10" transform="rotate(180 1902 21)" fill="white"/>
<circle cx="1882" cy="21" r="10" transform="rotate(180 1882 21)" fill="white"/>
<circle cx="1884.5" cy="38.5" r="7.5" transform="rotate(180 1884.5 38.5)" fill="white"/>
<circle cx="1919.5" cy="23.5" r="7.5" transform="rotate(180 1919.5 23.5)" fill="white"/>
<circle cx="1904.5" cy="58.5" r="7.5" transform="rotate(180 1904.5 58.5)" fill="white"/>
<circle cx="1939.5" cy="43.5" r="7.5" transform="rotate(180 1939.5 43.5)" fill="white"/>
<circle cx="1924.5" cy="78.5" r="7.5" transform="rotate(180 1924.5 78.5)" fill="white"/>
<circle cx="1959.5" cy="63.5" r="7.5" transform="rotate(180 1959.5 63.5)" fill="white"/>
<circle cx="1954.5" cy="48.5" r="7.5" transform="rotate(180 1954.5 48.5)" fill="white"/>
<circle cx="1909.5" cy="73.5" r="7.5" transform="rotate(180 1909.5 73.5)" fill="white"/>
<circle cx="1934.5" cy="28.5" r="7.5" transform="rotate(180 1934.5 28.5)" fill="white"/>
<circle cx="1889.5" cy="53.5" r="7.5" transform="rotate(180 1889.5 53.5)" fill="white"/>
<circle cx="1895" cy="68" r="5" transform="rotate(180 1895 68)" fill="white"/>
<circle cx="1950" cy="33" r="5" transform="rotate(180 1950 33)" fill="white"/>
<circle cx="1877" cy="70" r="10" transform="rotate(180 1877 70)" fill="white"/>
<circle cx="1857" cy="70" r="10" transform="rotate(180 1857 70)" fill="white"/>
<circle cx="1857" cy="50" r="10" transform="rotate(180 1857 50)" fill="white"/>
<circle cx="1837" cy="50" r="10" transform="rotate(180 1837 50)" fill="white"/>
<circle cx="1837" cy="30" r="10" transform="rotate(180 1837 30)" fill="white"/>
<circle cx="1817" cy="30" r="10" transform="rotate(180 1817 30)" fill="white"/>
<circle cx="1817" cy="10" r="10" transform="rotate(180 1817 10)" fill="white"/>
<circle cx="1797" cy="10" r="10" transform="rotate(180 1797 10)" fill="white"/>
<circle cx="1799.5" cy="27.5" r="7.5" transform="rotate(180 1799.5 27.5)" fill="white"/>
<circle cx="1834.5" cy="12.5" r="7.5" transform="rotate(180 1834.5 12.5)" fill="white"/>
<circle cx="1819.5" cy="47.5" r="7.5" transform="rotate(180 1819.5 47.5)" fill="white"/>
<circle cx="1854.5" cy="32.5" r="7.5" transform="rotate(180 1854.5 32.5)" fill="white"/>
<circle cx="1839.5" cy="67.5" r="7.5" transform="rotate(180 1839.5 67.5)" fill="white"/>
<circle cx="1874.5" cy="52.5" r="7.5" transform="rotate(180 1874.5 52.5)" fill="white"/>
<circle cx="1869.5" cy="37.5" r="7.5" transform="rotate(180 1869.5 37.5)" fill="white"/>
<circle cx="1824.5" cy="62.5" r="7.5" transform="rotate(180 1824.5 62.5)" fill="white"/>
<circle cx="1849.5" cy="17.5" r="7.5" transform="rotate(180 1849.5 17.5)" fill="white"/>
<circle cx="1804.5" cy="42.5" r="7.5" transform="rotate(180 1804.5 42.5)" fill="white"/>
<circle cx="1810" cy="57" r="5" transform="rotate(180 1810 57)" fill="white"/>
<circle cx="1865" cy="22" r="5" transform="rotate(180 1865 22)" fill="white"/>
<circle cx="1484" cy="487" r="10" transform="rotate(180 1484 487)" fill="white"/>
<circle cx="1464" cy="487" r="10" transform="rotate(180 1464 487)" fill="white"/>
<circle cx="1464" cy="467" r="10" transform="rotate(180 1464 467)" fill="white"/>
<circle cx="1444" cy="467" r="10" transform="rotate(180 1444 467)" fill="white"/>
<circle cx="1444" cy="447" r="10" transform="rotate(180 1444 447)" fill="white"/>
<circle cx="1424" cy="447" r="10" transform="rotate(180 1424 447)" fill="white"/>
<circle cx="1424" cy="427" r="10" transform="rotate(180 1424 427)" fill="white"/>
<circle cx="1404" cy="427" r="10" transform="rotate(180 1404 427)" fill="white"/>
<circle cx="1406.5" cy="444.5" r="7.5" transform="rotate(180 1406.5 444.5)" fill="white"/>
<circle cx="1441.5" cy="429.5" r="7.5" transform="rotate(180 1441.5 429.5)" fill="white"/>
<circle cx="1426.5" cy="464.5" r="7.5" transform="rotate(180 1426.5 464.5)" fill="white"/>
<circle cx="1461.5" cy="449.5" r="7.5" transform="rotate(180 1461.5 449.5)" fill="white"/>
<circle cx="1446.5" cy="484.5" r="7.5" transform="rotate(180 1446.5 484.5)" fill="white"/>
<circle cx="1481.5" cy="469.5" r="7.5" transform="rotate(180 1481.5 469.5)" fill="white"/>
<circle cx="1476.5" cy="454.5" r="7.5" transform="rotate(180 1476.5 454.5)" fill="white"/>
<circle cx="1431.5" cy="479.5" r="7.5" transform="rotate(180 1431.5 479.5)" fill="white"/>
<circle cx="1456.5" cy="434.5" r="7.5" transform="rotate(180 1456.5 434.5)" fill="white"/>
<circle cx="1411.5" cy="459.5" r="7.5" transform="rotate(180 1411.5 459.5)" fill="white"/>
<circle cx="1417" cy="474" r="5" transform="rotate(180 1417 474)" fill="white"/>
<circle cx="1472" cy="439" r="5" transform="rotate(180 1472 439)" fill="white"/>
<circle cx="1491" cy="421" r="10" transform="rotate(180 1491 421)" fill="white"/>
<circle cx="1471" cy="421" r="10" transform="rotate(180 1471 421)" fill="white"/>
<circle cx="1471" cy="401" r="10" transform="rotate(180 1471 401)" fill="white"/>
<circle cx="1451" cy="401" r="10" transform="rotate(180 1451 401)" fill="white"/>
<circle cx="1451" cy="381" r="10" transform="rotate(180 1451 381)" fill="white"/>
<circle cx="1431" cy="381" r="10" transform="rotate(180 1431 381)" fill="white"/>
<circle cx="1431" cy="361" r="10" transform="rotate(180 1431 361)" fill="white"/>
<circle cx="1411" cy="361" r="10" transform="rotate(180 1411 361)" fill="white"/>
<circle cx="1413.5" cy="378.5" r="7.5" transform="rotate(180 1413.5 378.5)" fill="white"/>
<circle cx="1448.5" cy="363.5" r="7.5" transform="rotate(180 1448.5 363.5)" fill="white"/>
<circle cx="1433.5" cy="398.5" r="7.5" transform="rotate(180 1433.5 398.5)" fill="white"/>
<circle cx="1468.5" cy="383.5" r="7.5" transform="rotate(180 1468.5 383.5)" fill="white"/>
<circle cx="1453.5" cy="418.5" r="7.5" transform="rotate(180 1453.5 418.5)" fill="white"/>
<circle cx="1488.5" cy="403.5" r="7.5" transform="rotate(180 1488.5 403.5)" fill="white"/>
<circle cx="1483.5" cy="388.5" r="7.5" transform="rotate(180 1483.5 388.5)" fill="white"/>
<circle cx="1438.5" cy="413.5" r="7.5" transform="rotate(180 1438.5 413.5)" fill="white"/>
<circle cx="1463.5" cy="368.5" r="7.5" transform="rotate(180 1463.5 368.5)" fill="white"/>
<circle cx="1418.5" cy="393.5" r="7.5" transform="rotate(180 1418.5 393.5)" fill="white"/>
<circle cx="1424" cy="408" r="5" transform="rotate(180 1424 408)" fill="white"/>
<circle cx="1479" cy="373" r="5" transform="rotate(180 1479 373)" fill="white"/>
<circle cx="1404" cy="407" r="10" transform="rotate(180 1404 407)" fill="white"/>
<circle cx="1384" cy="407" r="10" transform="rotate(180 1384 407)" fill="white"/>
<circle cx="1384" cy="387" r="10" transform="rotate(180 1384 387)" fill="white"/>
<circle cx="1364" cy="387" r="10" transform="rotate(180 1364 387)" fill="white"/>
<circle cx="1364" cy="367" r="10" transform="rotate(180 1364 367)" fill="white"/>
<circle cx="1344" cy="367" r="10" transform="rotate(180 1344 367)" fill="white"/>
<circle cx="1344" cy="347" r="10" transform="rotate(180 1344 347)" fill="white"/>
<circle cx="1324" cy="347" r="10" transform="rotate(180 1324 347)" fill="white"/>
<circle cx="1326.5" cy="364.5" r="7.5" transform="rotate(180 1326.5 364.5)" fill="white"/>
<circle cx="1361.5" cy="349.5" r="7.5" transform="rotate(180 1361.5 349.5)" fill="white"/>
<circle cx="1346.5" cy="384.5" r="7.5" transform="rotate(180 1346.5 384.5)" fill="white"/>
<circle cx="1381.5" cy="369.5" r="7.5" transform="rotate(180 1381.5 369.5)" fill="white"/>
<circle cx="1366.5" cy="404.5" r="7.5" transform="rotate(180 1366.5 404.5)" fill="white"/>
<circle cx="1401.5" cy="389.5" r="7.5" transform="rotate(180 1401.5 389.5)" fill="white"/>
<circle cx="1396.5" cy="374.5" r="7.5" transform="rotate(180 1396.5 374.5)" fill="white"/>
<circle cx="1351.5" cy="399.5" r="7.5" transform="rotate(180 1351.5 399.5)" fill="white"/>
<circle cx="1376.5" cy="354.5" r="7.5" transform="rotate(180 1376.5 354.5)" fill="white"/>
<circle cx="1331.5" cy="379.5" r="7.5" transform="rotate(180 1331.5 379.5)" fill="white"/>
<circle cx="1337" cy="394" r="5" transform="rotate(180 1337 394)" fill="white"/>
<circle cx="1392" cy="359" r="5" transform="rotate(180 1392 359)" fill="white"/>
<circle cx="1396" cy="474" r="10" transform="rotate(180 1396 474)" fill="white"/>
<circle cx="1376" cy="474" r="10" transform="rotate(180 1376 474)" fill="white"/>
<circle cx="1376" cy="454" r="10" transform="rotate(180 1376 454)" fill="white"/>
<circle cx="1356" cy="454" r="10" transform="rotate(180 1356 454)" fill="white"/>
<circle cx="1356" cy="434" r="10" transform="rotate(180 1356 434)" fill="white"/>
<circle cx="1336" cy="434" r="10" transform="rotate(180 1336 434)" fill="white"/>
<circle cx="1336" cy="414" r="10" transform="rotate(180 1336 414)" fill="white"/>
<circle cx="1316" cy="414" r="10" transform="rotate(180 1316 414)" fill="white"/>
<circle cx="1318.5" cy="431.5" r="7.5" transform="rotate(180 1318.5 431.5)" fill="white"/>
<circle cx="1353.5" cy="416.5" r="7.5" transform="rotate(180 1353.5 416.5)" fill="white"/>
<circle cx="1338.5" cy="451.5" r="7.5" transform="rotate(180 1338.5 451.5)" fill="white"/>
<circle cx="1373.5" cy="436.5" r="7.5" transform="rotate(180 1373.5 436.5)" fill="white"/>
<circle cx="1358.5" cy="471.5" r="7.5" transform="rotate(180 1358.5 471.5)" fill="white"/>
<circle cx="1393.5" cy="456.5" r="7.5" transform="rotate(180 1393.5 456.5)" fill="white"/>
<circle cx="1388.5" cy="441.5" r="7.5" transform="rotate(180 1388.5 441.5)" fill="white"/>
<circle cx="1343.5" cy="466.5" r="7.5" transform="rotate(180 1343.5 466.5)" fill="white"/>
<circle cx="1368.5" cy="421.5" r="7.5" transform="rotate(180 1368.5 421.5)" fill="white"/>
<circle cx="1323.5" cy="446.5" r="7.5" transform="rotate(180 1323.5 446.5)" fill="white"/>
<circle cx="1329" cy="461" r="5" transform="rotate(180 1329 461)" fill="white"/>
<circle cx="1384" cy="426" r="5" transform="rotate(180 1384 426)" fill="white"/>
<circle cx="1386" cy="539" r="10" transform="rotate(180 1386 539)" fill="white"/>
<circle cx="1366" cy="539" r="10" transform="rotate(180 1366 539)" fill="white"/>
<circle cx="1366" cy="519" r="10" transform="rotate(180 1366 519)" fill="white"/>
<circle cx="1346" cy="519" r="10" transform="rotate(180 1346 519)" fill="white"/>
<circle cx="1346" cy="499" r="10" transform="rotate(180 1346 499)" fill="white"/>
<circle cx="1326" cy="499" r="10" transform="rotate(180 1326 499)" fill="white"/>
<circle cx="1326" cy="479" r="10" transform="rotate(180 1326 479)" fill="white"/>
<circle cx="1306" cy="479" r="10" transform="rotate(180 1306 479)" fill="white"/>
<circle cx="1308.5" cy="496.5" r="7.5" transform="rotate(180 1308.5 496.5)" fill="white"/>
<circle cx="1343.5" cy="481.5" r="7.5" transform="rotate(180 1343.5 481.5)" fill="white"/>
<circle cx="1328.5" cy="516.5" r="7.5" transform="rotate(180 1328.5 516.5)" fill="white"/>
<circle cx="1363.5" cy="501.5" r="7.5" transform="rotate(180 1363.5 501.5)" fill="white"/>
<circle cx="1348.5" cy="536.5" r="7.5" transform="rotate(180 1348.5 536.5)" fill="white"/>
<circle cx="1383.5" cy="521.5" r="7.5" transform="rotate(180 1383.5 521.5)" fill="white"/>
<circle cx="1378.5" cy="506.5" r="7.5" transform="rotate(180 1378.5 506.5)" fill="white"/>
<circle cx="1333.5" cy="531.5" r="7.5" transform="rotate(180 1333.5 531.5)" fill="white"/>
<circle cx="1358.5" cy="486.5" r="7.5" transform="rotate(180 1358.5 486.5)" fill="white"/>
<circle cx="1313.5" cy="511.5" r="7.5" transform="rotate(180 1313.5 511.5)" fill="white"/>
<circle cx="1319" cy="526" r="5" transform="rotate(180 1319 526)" fill="white"/>
<circle cx="1374" cy="491" r="5" transform="rotate(180 1374 491)" fill="white"/>
<circle cx="1476" cy="554" r="10" transform="rotate(180 1476 554)" fill="white"/>
<circle cx="1456" cy="554" r="10" transform="rotate(180 1456 554)" fill="white"/>
<circle cx="1456" cy="534" r="10" transform="rotate(180 1456 534)" fill="white"/>
<circle cx="1436" cy="534" r="10" transform="rotate(180 1436 534)" fill="white"/>
<circle cx="1436" cy="514" r="10" transform="rotate(180 1436 514)" fill="white"/>
<circle cx="1416" cy="514" r="10" transform="rotate(180 1416 514)" fill="white"/>
<circle cx="1416" cy="494" r="10" transform="rotate(180 1416 494)" fill="white"/>
<circle cx="1396" cy="494" r="10" transform="rotate(180 1396 494)" fill="white"/>
<circle cx="1398.5" cy="511.5" r="7.5" transform="rotate(180 1398.5 511.5)" fill="white"/>
<circle cx="1433.5" cy="496.5" r="7.5" transform="rotate(180 1433.5 496.5)" fill="white"/>
<circle cx="1418.5" cy="531.5" r="7.5" transform="rotate(180 1418.5 531.5)" fill="white"/>
<circle cx="1453.5" cy="516.5" r="7.5" transform="rotate(180 1453.5 516.5)" fill="white"/>
<circle cx="1438.5" cy="551.5" r="7.5" transform="rotate(180 1438.5 551.5)" fill="white"/>
<circle cx="1473.5" cy="536.5" r="7.5" transform="rotate(180 1473.5 536.5)" fill="white"/>
<circle cx="1468.5" cy="521.5" r="7.5" transform="rotate(180 1468.5 521.5)" fill="white"/>
<circle cx="1423.5" cy="546.5" r="7.5" transform="rotate(180 1423.5 546.5)" fill="white"/>
<circle cx="1448.5" cy="501.5" r="7.5" transform="rotate(180 1448.5 501.5)" fill="white"/>
<circle cx="1403.5" cy="526.5" r="7.5" transform="rotate(180 1403.5 526.5)" fill="white"/>
<circle cx="1409" cy="541" r="5" transform="rotate(180 1409 541)" fill="white"/>
<circle cx="1464" cy="506" r="5" transform="rotate(180 1464 506)" fill="white"/>
<circle cx="1562" cy="567" r="10" transform="rotate(180 1562 567)" fill="white"/>
<circle cx="1542" cy="567" r="10" transform="rotate(180 1542 567)" fill="white"/>
<circle cx="1542" cy="547" r="10" transform="rotate(180 1542 547)" fill="white"/>
<circle cx="1522" cy="547" r="10" transform="rotate(180 1522 547)" fill="white"/>
<circle cx="1522" cy="527" r="10" transform="rotate(180 1522 527)" fill="white"/>
<circle cx="1502" cy="527" r="10" transform="rotate(180 1502 527)" fill="white"/>
<circle cx="1502" cy="507" r="10" transform="rotate(180 1502 507)" fill="white"/>
<circle cx="1482" cy="507" r="10" transform="rotate(180 1482 507)" fill="white"/>
<circle cx="1484.5" cy="524.5" r="7.5" transform="rotate(180 1484.5 524.5)" fill="white"/>
<circle cx="1519.5" cy="509.5" r="7.5" transform="rotate(180 1519.5 509.5)" fill="white"/>
<circle cx="1504.5" cy="544.5" r="7.5" transform="rotate(180 1504.5 544.5)" fill="white"/>
<circle cx="1539.5" cy="529.5" r="7.5" transform="rotate(180 1539.5 529.5)" fill="white"/>
<circle cx="1524.5" cy="564.5" r="7.5" transform="rotate(180 1524.5 564.5)" fill="white"/>
<circle cx="1559.5" cy="549.5" r="7.5" transform="rotate(180 1559.5 549.5)" fill="white"/>
<circle cx="1554.5" cy="534.5" r="7.5" transform="rotate(180 1554.5 534.5)" fill="white"/>
<circle cx="1509.5" cy="559.5" r="7.5" transform="rotate(180 1509.5 559.5)" fill="white"/>
<circle cx="1534.5" cy="514.5" r="7.5" transform="rotate(180 1534.5 514.5)" fill="white"/>
<circle cx="1489.5" cy="539.5" r="7.5" transform="rotate(180 1489.5 539.5)" fill="white"/>
<circle cx="1495" cy="554" r="5" transform="rotate(180 1495 554)" fill="white"/>
<circle cx="1550" cy="519" r="5" transform="rotate(180 1550 519)" fill="white"/>
<circle cx="1571" cy="501" r="10" transform="rotate(180 1571 501)" fill="white"/>
<circle cx="1551" cy="501" r="10" transform="rotate(180 1551 501)" fill="white"/>
<circle cx="1551" cy="481" r="10" transform="rotate(180 1551 481)" fill="white"/>
<circle cx="1531" cy="481" r="10" transform="rotate(180 1531 481)" fill="white"/>
<circle cx="1531" cy="461" r="10" transform="rotate(180 1531 461)" fill="white"/>
<circle cx="1511" cy="461" r="10" transform="rotate(180 1511 461)" fill="white"/>
<circle cx="1511" cy="441" r="10" transform="rotate(180 1511 441)" fill="white"/>
<circle cx="1491" cy="441" r="10" transform="rotate(180 1491 441)" fill="white"/>
<circle cx="1493.5" cy="458.5" r="7.5" transform="rotate(180 1493.5 458.5)" fill="white"/>
<circle cx="1528.5" cy="443.5" r="7.5" transform="rotate(180 1528.5 443.5)" fill="white"/>
<circle cx="1513.5" cy="478.5" r="7.5" transform="rotate(180 1513.5 478.5)" fill="white"/>
<circle cx="1548.5" cy="463.5" r="7.5" transform="rotate(180 1548.5 463.5)" fill="white"/>
<circle cx="1533.5" cy="498.5" r="7.5" transform="rotate(180 1533.5 498.5)" fill="white"/>
<circle cx="1568.5" cy="483.5" r="7.5" transform="rotate(180 1568.5 483.5)" fill="white"/>
<circle cx="1563.5" cy="468.5" r="7.5" transform="rotate(180 1563.5 468.5)" fill="white"/>
<circle cx="1518.5" cy="493.5" r="7.5" transform="rotate(180 1518.5 493.5)" fill="white"/>
<circle cx="1543.5" cy="448.5" r="7.5" transform="rotate(180 1543.5 448.5)" fill="white"/>
<circle cx="1498.5" cy="473.5" r="7.5" transform="rotate(180 1498.5 473.5)" fill="white"/>
<circle cx="1504" cy="488" r="5" transform="rotate(180 1504 488)" fill="white"/>
<circle cx="1559" cy="453" r="5" transform="rotate(180 1559 453)" fill="white"/>
<circle cx="1576" cy="434" r="10" transform="rotate(180 1576 434)" fill="white"/>
<circle cx="1556" cy="434" r="10" transform="rotate(180 1556 434)" fill="white"/>
<circle cx="1556" cy="414" r="10" transform="rotate(180 1556 414)" fill="white"/>
<circle cx="1536" cy="414" r="10" transform="rotate(180 1536 414)" fill="white"/>
<circle cx="1536" cy="394" r="10" transform="rotate(180 1536 394)" fill="white"/>
<circle cx="1516" cy="394" r="10" transform="rotate(180 1516 394)" fill="white"/>
<circle cx="1516" cy="374" r="10" transform="rotate(180 1516 374)" fill="white"/>
<circle cx="1496" cy="374" r="10" transform="rotate(180 1496 374)" fill="white"/>
<circle cx="1498.5" cy="391.5" r="7.5" transform="rotate(180 1498.5 391.5)" fill="white"/>
<circle cx="1533.5" cy="376.5" r="7.5" transform="rotate(180 1533.5 376.5)" fill="white"/>
<circle cx="1518.5" cy="411.5" r="7.5" transform="rotate(180 1518.5 411.5)" fill="white"/>
<circle cx="1553.5" cy="396.5" r="7.5" transform="rotate(180 1553.5 396.5)" fill="white"/>
<circle cx="1538.5" cy="431.5" r="7.5" transform="rotate(180 1538.5 431.5)" fill="white"/>
<circle cx="1573.5" cy="416.5" r="7.5" transform="rotate(180 1573.5 416.5)" fill="white"/>
<circle cx="1568.5" cy="401.5" r="7.5" transform="rotate(180 1568.5 401.5)" fill="white"/>
<circle cx="1523.5" cy="426.5" r="7.5" transform="rotate(180 1523.5 426.5)" fill="white"/>
<circle cx="1548.5" cy="381.5" r="7.5" transform="rotate(180 1548.5 381.5)" fill="white"/>
<circle cx="1503.5" cy="406.5" r="7.5" transform="rotate(180 1503.5 406.5)" fill="white"/>
<circle cx="1509" cy="421" r="5" transform="rotate(180 1509 421)" fill="white"/>
<circle cx="1564" cy="386" r="5" transform="rotate(180 1564 386)" fill="white"/>
<circle cx="1576" cy="364" r="10" transform="rotate(180 1576 364)" fill="white"/>
<circle cx="1556" cy="364" r="10" transform="rotate(180 1556 364)" fill="white"/>
<circle cx="1556" cy="344" r="10" transform="rotate(180 1556 344)" fill="white"/>
<circle cx="1536" cy="344" r="10" transform="rotate(180 1536 344)" fill="white"/>
<circle cx="1536" cy="324" r="10" transform="rotate(180 1536 324)" fill="white"/>
<circle cx="1516" cy="324" r="10" transform="rotate(180 1516 324)" fill="white"/>
<circle cx="1516" cy="304" r="10" transform="rotate(180 1516 304)" fill="white"/>
<circle cx="1496" cy="304" r="10" transform="rotate(180 1496 304)" fill="white"/>
<circle cx="1498.5" cy="321.5" r="7.5" transform="rotate(180 1498.5 321.5)" fill="white"/>
<circle cx="1533.5" cy="306.5" r="7.5" transform="rotate(180 1533.5 306.5)" fill="white"/>
<circle cx="1518.5" cy="341.5" r="7.5" transform="rotate(180 1518.5 341.5)" fill="white"/>
<circle cx="1553.5" cy="326.5" r="7.5" transform="rotate(180 1553.5 326.5)" fill="white"/>
<circle cx="1538.5" cy="361.5" r="7.5" transform="rotate(180 1538.5 361.5)" fill="white"/>
<circle cx="1573.5" cy="346.5" r="7.5" transform="rotate(180 1573.5 346.5)" fill="white"/>
<circle cx="1568.5" cy="331.5" r="7.5" transform="rotate(180 1568.5 331.5)" fill="white"/>
<circle cx="1523.5" cy="356.5" r="7.5" transform="rotate(180 1523.5 356.5)" fill="white"/>
<circle cx="1548.5" cy="311.5" r="7.5" transform="rotate(180 1548.5 311.5)" fill="white"/>
<circle cx="1503.5" cy="336.5" r="7.5" transform="rotate(180 1503.5 336.5)" fill="white"/>
<circle cx="1509" cy="351" r="5" transform="rotate(180 1509 351)" fill="white"/>
<circle cx="1564" cy="316" r="5" transform="rotate(180 1564 316)" fill="white"/>
<circle cx="1491" cy="353" r="10" transform="rotate(180 1491 353)" fill="white"/>
<circle cx="1471" cy="353" r="10" transform="rotate(180 1471 353)" fill="white"/>
<circle cx="1471" cy="333" r="10" transform="rotate(180 1471 333)" fill="white"/>
<circle cx="1451" cy="333" r="10" transform="rotate(180 1451 333)" fill="white"/>
<circle cx="1451" cy="313" r="10" transform="rotate(180 1451 313)" fill="white"/>
<circle cx="1431" cy="313" r="10" transform="rotate(180 1431 313)" fill="white"/>
<circle cx="1431" cy="293" r="10" transform="rotate(180 1431 293)" fill="white"/>
<circle cx="1411" cy="293" r="10" transform="rotate(180 1411 293)" fill="white"/>
<circle cx="1413.5" cy="310.5" r="7.5" transform="rotate(180 1413.5 310.5)" fill="white"/>
<circle cx="1448.5" cy="295.5" r="7.5" transform="rotate(180 1448.5 295.5)" fill="white"/>
<circle cx="1433.5" cy="330.5" r="7.5" transform="rotate(180 1433.5 330.5)" fill="white"/>
<circle cx="1468.5" cy="315.5" r="7.5" transform="rotate(180 1468.5 315.5)" fill="white"/>
<circle cx="1453.5" cy="350.5" r="7.5" transform="rotate(180 1453.5 350.5)" fill="white"/>
<circle cx="1488.5" cy="335.5" r="7.5" transform="rotate(180 1488.5 335.5)" fill="white"/>
<circle cx="1483.5" cy="320.5" r="7.5" transform="rotate(180 1483.5 320.5)" fill="white"/>
<circle cx="1438.5" cy="345.5" r="7.5" transform="rotate(180 1438.5 345.5)" fill="white"/>
<circle cx="1463.5" cy="300.5" r="7.5" transform="rotate(180 1463.5 300.5)" fill="white"/>
<circle cx="1418.5" cy="325.5" r="7.5" transform="rotate(180 1418.5 325.5)" fill="white"/>
<circle cx="1424" cy="340" r="5" transform="rotate(180 1424 340)" fill="white"/>
<circle cx="1479" cy="305" r="5" transform="rotate(180 1479 305)" fill="white"/>
<circle cx="1325" cy="257" r="10" transform="rotate(180 1325 257)" fill="white"/>
<circle cx="1305" cy="257" r="10" transform="rotate(180 1305 257)" fill="white"/>
<circle cx="1305" cy="237" r="10" transform="rotate(180 1305 237)" fill="white"/>
<circle cx="1285" cy="237" r="10" transform="rotate(180 1285 237)" fill="white"/>
<circle cx="1285" cy="217" r="10" transform="rotate(180 1285 217)" fill="white"/>
<circle cx="1265" cy="217" r="10" transform="rotate(180 1265 217)" fill="white"/>
<circle cx="1265" cy="197" r="10" transform="rotate(180 1265 197)" fill="white"/>
<circle cx="1245" cy="197" r="10" transform="rotate(180 1245 197)" fill="white"/>
<circle cx="1247.5" cy="214.5" r="7.5" transform="rotate(180 1247.5 214.5)" fill="white"/>
<circle cx="1282.5" cy="199.5" r="7.5" transform="rotate(180 1282.5 199.5)" fill="white"/>
<circle cx="1267.5" cy="234.5" r="7.5" transform="rotate(180 1267.5 234.5)" fill="white"/>
<circle cx="1302.5" cy="219.5" r="7.5" transform="rotate(180 1302.5 219.5)" fill="white"/>
<circle cx="1287.5" cy="254.5" r="7.5" transform="rotate(180 1287.5 254.5)" fill="white"/>
<circle cx="1322.5" cy="239.5" r="7.5" transform="rotate(180 1322.5 239.5)" fill="white"/>
<circle cx="1317.5" cy="224.5" r="7.5" transform="rotate(180 1317.5 224.5)" fill="white"/>
<circle cx="1272.5" cy="249.5" r="7.5" transform="rotate(180 1272.5 249.5)" fill="white"/>
<circle cx="1297.5" cy="204.5" r="7.5" transform="rotate(180 1297.5 204.5)" fill="white"/>
<circle cx="1252.5" cy="229.5" r="7.5" transform="rotate(180 1252.5 229.5)" fill="white"/>
<circle cx="1258" cy="244" r="5" transform="rotate(180 1258 244)" fill="white"/>
<circle cx="1313" cy="209" r="5" transform="rotate(180 1313 209)" fill="white"/>
<circle cx="1332" cy="191" r="10" transform="rotate(180 1332 191)" fill="white"/>
<circle cx="1312" cy="191" r="10" transform="rotate(180 1312 191)" fill="white"/>
<circle cx="1312" cy="171" r="10" transform="rotate(180 1312 171)" fill="white"/>
<circle cx="1292" cy="171" r="10" transform="rotate(180 1292 171)" fill="white"/>
<circle cx="1292" cy="151" r="10" transform="rotate(180 1292 151)" fill="white"/>
<circle cx="1272" cy="151" r="10" transform="rotate(180 1272 151)" fill="white"/>
<circle cx="1272" cy="131" r="10" transform="rotate(180 1272 131)" fill="white"/>
<circle cx="1252" cy="131" r="10" transform="rotate(180 1252 131)" fill="white"/>
<circle cx="1254.5" cy="148.5" r="7.5" transform="rotate(180 1254.5 148.5)" fill="white"/>
<circle cx="1289.5" cy="133.5" r="7.5" transform="rotate(180 1289.5 133.5)" fill="white"/>
<circle cx="1274.5" cy="168.5" r="7.5" transform="rotate(180 1274.5 168.5)" fill="white"/>
<circle cx="1309.5" cy="153.5" r="7.5" transform="rotate(180 1309.5 153.5)" fill="white"/>
<circle cx="1294.5" cy="188.5" r="7.5" transform="rotate(180 1294.5 188.5)" fill="white"/>
<circle cx="1329.5" cy="173.5" r="7.5" transform="rotate(180 1329.5 173.5)" fill="white"/>
<circle cx="1324.5" cy="158.5" r="7.5" transform="rotate(180 1324.5 158.5)" fill="white"/>
<circle cx="1279.5" cy="183.5" r="7.5" transform="rotate(180 1279.5 183.5)" fill="white"/>
<circle cx="1304.5" cy="138.5" r="7.5" transform="rotate(180 1304.5 138.5)" fill="white"/>
<circle cx="1259.5" cy="163.5" r="7.5" transform="rotate(180 1259.5 163.5)" fill="white"/>
<circle cx="1265" cy="178" r="5" transform="rotate(180 1265 178)" fill="white"/>
<circle cx="1320" cy="143" r="5" transform="rotate(180 1320 143)" fill="white"/>
<circle cx="1245" cy="177" r="10" transform="rotate(180 1245 177)" fill="white"/>
<circle cx="1225" cy="177" r="10" transform="rotate(180 1225 177)" fill="white"/>
<circle cx="1225" cy="157" r="10" transform="rotate(180 1225 157)" fill="white"/>
<circle cx="1205" cy="157" r="10" transform="rotate(180 1205 157)" fill="white"/>
<circle cx="1205" cy="137" r="10" transform="rotate(180 1205 137)" fill="white"/>
<circle cx="1185" cy="137" r="10" transform="rotate(180 1185 137)" fill="white"/>
<circle cx="1185" cy="117" r="10" transform="rotate(180 1185 117)" fill="white"/>
<circle cx="1165" cy="117" r="10" transform="rotate(180 1165 117)" fill="white"/>
<circle cx="1167.5" cy="134.5" r="7.5" transform="rotate(180 1167.5 134.5)" fill="white"/>
<circle cx="1202.5" cy="119.5" r="7.5" transform="rotate(180 1202.5 119.5)" fill="white"/>
<circle cx="1187.5" cy="154.5" r="7.5" transform="rotate(180 1187.5 154.5)" fill="white"/>
<circle cx="1222.5" cy="139.5" r="7.5" transform="rotate(180 1222.5 139.5)" fill="white"/>
<circle cx="1207.5" cy="174.5" r="7.5" transform="rotate(180 1207.5 174.5)" fill="white"/>
<circle cx="1242.5" cy="159.5" r="7.5" transform="rotate(180 1242.5 159.5)" fill="white"/>
<circle cx="1237.5" cy="144.5" r="7.5" transform="rotate(180 1237.5 144.5)" fill="white"/>
<circle cx="1192.5" cy="169.5" r="7.5" transform="rotate(180 1192.5 169.5)" fill="white"/>
<circle cx="1217.5" cy="124.5" r="7.5" transform="rotate(180 1217.5 124.5)" fill="white"/>
<circle cx="1172.5" cy="149.5" r="7.5" transform="rotate(180 1172.5 149.5)" fill="white"/>
<circle cx="1178" cy="164" r="5" transform="rotate(180 1178 164)" fill="white"/>
<circle cx="1233" cy="129" r="5" transform="rotate(180 1233 129)" fill="white"/>
<circle cx="1237" cy="244" r="10" transform="rotate(180 1237 244)" fill="white"/>
<circle cx="1217" cy="244" r="10" transform="rotate(180 1217 244)" fill="white"/>
<circle cx="1217" cy="224" r="10" transform="rotate(180 1217 224)" fill="white"/>
<circle cx="1197" cy="224" r="10" transform="rotate(180 1197 224)" fill="white"/>
<circle cx="1197" cy="204" r="10" transform="rotate(180 1197 204)" fill="white"/>
<circle cx="1177" cy="204" r="10" transform="rotate(180 1177 204)" fill="white"/>
<circle cx="1177" cy="184" r="10" transform="rotate(180 1177 184)" fill="white"/>
<circle cx="1157" cy="184" r="10" transform="rotate(180 1157 184)" fill="white"/>
<circle cx="1159.5" cy="201.5" r="7.5" transform="rotate(180 1159.5 201.5)" fill="white"/>
<circle cx="1194.5" cy="186.5" r="7.5" transform="rotate(180 1194.5 186.5)" fill="white"/>
<circle cx="1179.5" cy="221.5" r="7.5" transform="rotate(180 1179.5 221.5)" fill="white"/>
<circle cx="1214.5" cy="206.5" r="7.5" transform="rotate(180 1214.5 206.5)" fill="white"/>
<circle cx="1199.5" cy="241.5" r="7.5" transform="rotate(180 1199.5 241.5)" fill="white"/>
<circle cx="1234.5" cy="226.5" r="7.5" transform="rotate(180 1234.5 226.5)" fill="white"/>
<circle cx="1229.5" cy="211.5" r="7.5" transform="rotate(180 1229.5 211.5)" fill="white"/>
<circle cx="1184.5" cy="236.5" r="7.5" transform="rotate(180 1184.5 236.5)" fill="white"/>
<circle cx="1209.5" cy="191.5" r="7.5" transform="rotate(180 1209.5 191.5)" fill="white"/>
<circle cx="1164.5" cy="216.5" r="7.5" transform="rotate(180 1164.5 216.5)" fill="white"/>
<circle cx="1170" cy="231" r="5" transform="rotate(180 1170 231)" fill="white"/>
<circle cx="1225" cy="196" r="5" transform="rotate(180 1225 196)" fill="white"/>
<circle cx="1227" cy="309" r="10" transform="rotate(180 1227 309)" fill="white"/>
<circle cx="1207" cy="309" r="10" transform="rotate(180 1207 309)" fill="white"/>
<circle cx="1207" cy="289" r="10" transform="rotate(180 1207 289)" fill="white"/>
<circle cx="1187" cy="289" r="10" transform="rotate(180 1187 289)" fill="white"/>
<circle cx="1187" cy="269" r="10" transform="rotate(180 1187 269)" fill="white"/>
<circle cx="1167" cy="269" r="10" transform="rotate(180 1167 269)" fill="white"/>
<circle cx="1167" cy="249" r="10" transform="rotate(180 1167 249)" fill="white"/>
<circle cx="1147" cy="249" r="10" transform="rotate(180 1147 249)" fill="white"/>
<circle cx="1149.5" cy="266.5" r="7.5" transform="rotate(180 1149.5 266.5)" fill="white"/>
<circle cx="1184.5" cy="251.5" r="7.5" transform="rotate(180 1184.5 251.5)" fill="white"/>
<circle cx="1169.5" cy="286.5" r="7.5" transform="rotate(180 1169.5 286.5)" fill="white"/>
<circle cx="1204.5" cy="271.5" r="7.5" transform="rotate(180 1204.5 271.5)" fill="white"/>
<circle cx="1189.5" cy="306.5" r="7.5" transform="rotate(180 1189.5 306.5)" fill="white"/>
<circle cx="1224.5" cy="291.5" r="7.5" transform="rotate(180 1224.5 291.5)" fill="white"/>
<circle cx="1219.5" cy="276.5" r="7.5" transform="rotate(180 1219.5 276.5)" fill="white"/>
<circle cx="1174.5" cy="301.5" r="7.5" transform="rotate(180 1174.5 301.5)" fill="white"/>
<circle cx="1199.5" cy="256.5" r="7.5" transform="rotate(180 1199.5 256.5)" fill="white"/>
<circle cx="1154.5" cy="281.5" r="7.5" transform="rotate(180 1154.5 281.5)" fill="white"/>
<circle cx="1160" cy="296" r="5" transform="rotate(180 1160 296)" fill="white"/>
<circle cx="1215" cy="261" r="5" transform="rotate(180 1215 261)" fill="white"/>
<circle cx="1317" cy="324" r="10" transform="rotate(180 1317 324)" fill="white"/>
<circle cx="1297" cy="324" r="10" transform="rotate(180 1297 324)" fill="white"/>
<circle cx="1297" cy="304" r="10" transform="rotate(180 1297 304)" fill="white"/>
<circle cx="1277" cy="304" r="10" transform="rotate(180 1277 304)" fill="white"/>
<circle cx="1277" cy="284" r="10" transform="rotate(180 1277 284)" fill="white"/>
<circle cx="1257" cy="284" r="10" transform="rotate(180 1257 284)" fill="white"/>
<circle cx="1257" cy="264" r="10" transform="rotate(180 1257 264)" fill="white"/>
<circle cx="1237" cy="264" r="10" transform="rotate(180 1237 264)" fill="white"/>
<circle cx="1239.5" cy="281.5" r="7.5" transform="rotate(180 1239.5 281.5)" fill="white"/>
<circle cx="1274.5" cy="266.5" r="7.5" transform="rotate(180 1274.5 266.5)" fill="white"/>
<circle cx="1259.5" cy="301.5" r="7.5" transform="rotate(180 1259.5 301.5)" fill="white"/>
<circle cx="1294.5" cy="286.5" r="7.5" transform="rotate(180 1294.5 286.5)" fill="white"/>
<circle cx="1279.5" cy="321.5" r="7.5" transform="rotate(180 1279.5 321.5)" fill="white"/>
<circle cx="1314.5" cy="306.5" r="7.5" transform="rotate(180 1314.5 306.5)" fill="white"/>
<circle cx="1309.5" cy="291.5" r="7.5" transform="rotate(180 1309.5 291.5)" fill="white"/>
<circle cx="1264.5" cy="316.5" r="7.5" transform="rotate(180 1264.5 316.5)" fill="white"/>
<circle cx="1289.5" cy="271.5" r="7.5" transform="rotate(180 1289.5 271.5)" fill="white"/>
<circle cx="1244.5" cy="296.5" r="7.5" transform="rotate(180 1244.5 296.5)" fill="white"/>
<circle cx="1250" cy="311" r="5" transform="rotate(180 1250 311)" fill="white"/>
<circle cx="1305" cy="276" r="5" transform="rotate(180 1305 276)" fill="white"/>
<circle cx="1403" cy="337" r="10" transform="rotate(180 1403 337)" fill="white"/>
<circle cx="1383" cy="337" r="10" transform="rotate(180 1383 337)" fill="white"/>
<circle cx="1383" cy="317" r="10" transform="rotate(180 1383 317)" fill="white"/>
<circle cx="1363" cy="317" r="10" transform="rotate(180 1363 317)" fill="white"/>
<circle cx="1363" cy="297" r="10" transform="rotate(180 1363 297)" fill="white"/>
<circle cx="1343" cy="297" r="10" transform="rotate(180 1343 297)" fill="white"/>
<circle cx="1343" cy="277" r="10" transform="rotate(180 1343 277)" fill="white"/>
<circle cx="1323" cy="277" r="10" transform="rotate(180 1323 277)" fill="white"/>
<circle cx="1325.5" cy="294.5" r="7.5" transform="rotate(180 1325.5 294.5)" fill="white"/>
<circle cx="1360.5" cy="279.5" r="7.5" transform="rotate(180 1360.5 279.5)" fill="white"/>
<circle cx="1345.5" cy="314.5" r="7.5" transform="rotate(180 1345.5 314.5)" fill="white"/>
<circle cx="1380.5" cy="299.5" r="7.5" transform="rotate(180 1380.5 299.5)" fill="white"/>
<circle cx="1365.5" cy="334.5" r="7.5" transform="rotate(180 1365.5 334.5)" fill="white"/>
<circle cx="1400.5" cy="319.5" r="7.5" transform="rotate(180 1400.5 319.5)" fill="white"/>
<circle cx="1395.5" cy="304.5" r="7.5" transform="rotate(180 1395.5 304.5)" fill="white"/>
<circle cx="1350.5" cy="329.5" r="7.5" transform="rotate(180 1350.5 329.5)" fill="white"/>
<circle cx="1375.5" cy="284.5" r="7.5" transform="rotate(180 1375.5 284.5)" fill="white"/>
<circle cx="1330.5" cy="309.5" r="7.5" transform="rotate(180 1330.5 309.5)" fill="white"/>
<circle cx="1336" cy="324" r="5" transform="rotate(180 1336 324)" fill="white"/>
<circle cx="1391" cy="289" r="5" transform="rotate(180 1391 289)" fill="white"/>
<circle cx="1412" cy="271" r="10" transform="rotate(180 1412 271)" fill="white"/>
<circle cx="1392" cy="271" r="10" transform="rotate(180 1392 271)" fill="white"/>
<circle cx="1392" cy="251" r="10" transform="rotate(180 1392 251)" fill="white"/>
<circle cx="1372" cy="251" r="10" transform="rotate(180 1372 251)" fill="white"/>
<circle cx="1372" cy="231" r="10" transform="rotate(180 1372 231)" fill="white"/>
<circle cx="1352" cy="231" r="10" transform="rotate(180 1352 231)" fill="white"/>
<circle cx="1352" cy="211" r="10" transform="rotate(180 1352 211)" fill="white"/>
<circle cx="1332" cy="211" r="10" transform="rotate(180 1332 211)" fill="white"/>
<circle cx="1334.5" cy="228.5" r="7.5" transform="rotate(180 1334.5 228.5)" fill="white"/>
<circle cx="1369.5" cy="213.5" r="7.5" transform="rotate(180 1369.5 213.5)" fill="white"/>
<circle cx="1354.5" cy="248.5" r="7.5" transform="rotate(180 1354.5 248.5)" fill="white"/>
<circle cx="1389.5" cy="233.5" r="7.5" transform="rotate(180 1389.5 233.5)" fill="white"/>
<circle cx="1374.5" cy="268.5" r="7.5" transform="rotate(180 1374.5 268.5)" fill="white"/>
<circle cx="1409.5" cy="253.5" r="7.5" transform="rotate(180 1409.5 253.5)" fill="white"/>
<circle cx="1404.5" cy="238.5" r="7.5" transform="rotate(180 1404.5 238.5)" fill="white"/>
<circle cx="1359.5" cy="263.5" r="7.5" transform="rotate(180 1359.5 263.5)" fill="white"/>
<circle cx="1384.5" cy="218.5" r="7.5" transform="rotate(180 1384.5 218.5)" fill="white"/>
<circle cx="1339.5" cy="243.5" r="7.5" transform="rotate(180 1339.5 243.5)" fill="white"/>
<circle cx="1345" cy="258" r="5" transform="rotate(180 1345 258)" fill="white"/>
<circle cx="1400" cy="223" r="5" transform="rotate(180 1400 223)" fill="white"/>
<circle cx="1417" cy="204" r="10" transform="rotate(180 1417 204)" fill="white"/>
<circle cx="1397" cy="204" r="10" transform="rotate(180 1397 204)" fill="white"/>
<circle cx="1397" cy="184" r="10" transform="rotate(180 1397 184)" fill="white"/>
<circle cx="1377" cy="184" r="10" transform="rotate(180 1377 184)" fill="white"/>
<circle cx="1377" cy="164" r="10" transform="rotate(180 1377 164)" fill="white"/>
<circle cx="1357" cy="164" r="10" transform="rotate(180 1357 164)" fill="white"/>
<circle cx="1357" cy="144" r="10" transform="rotate(180 1357 144)" fill="white"/>
<circle cx="1337" cy="144" r="10" transform="rotate(180 1337 144)" fill="white"/>
<circle cx="1339.5" cy="161.5" r="7.5" transform="rotate(180 1339.5 161.5)" fill="white"/>
<circle cx="1374.5" cy="146.5" r="7.5" transform="rotate(180 1374.5 146.5)" fill="white"/>
<circle cx="1359.5" cy="181.5" r="7.5" transform="rotate(180 1359.5 181.5)" fill="white"/>
<circle cx="1394.5" cy="166.5" r="7.5" transform="rotate(180 1394.5 166.5)" fill="white"/>
<circle cx="1379.5" cy="201.5" r="7.5" transform="rotate(180 1379.5 201.5)" fill="white"/>
<circle cx="1414.5" cy="186.5" r="7.5" transform="rotate(180 1414.5 186.5)" fill="white"/>
<circle cx="1409.5" cy="171.5" r="7.5" transform="rotate(180 1409.5 171.5)" fill="white"/>
<circle cx="1364.5" cy="196.5" r="7.5" transform="rotate(180 1364.5 196.5)" fill="white"/>
<circle cx="1389.5" cy="151.5" r="7.5" transform="rotate(180 1389.5 151.5)" fill="white"/>
<circle cx="1344.5" cy="176.5" r="7.5" transform="rotate(180 1344.5 176.5)" fill="white"/>
<circle cx="1350" cy="191" r="5" transform="rotate(180 1350 191)" fill="white"/>
<circle cx="1405" cy="156" r="5" transform="rotate(180 1405 156)" fill="white"/>
<circle cx="1417" cy="134" r="10" transform="rotate(180 1417 134)" fill="white"/>
<circle cx="1397" cy="134" r="10" transform="rotate(180 1397 134)" fill="white"/>
<circle cx="1397" cy="114" r="10" transform="rotate(180 1397 114)" fill="white"/>
<circle cx="1377" cy="114" r="10" transform="rotate(180 1377 114)" fill="white"/>
<circle cx="1377" cy="94" r="10" transform="rotate(180 1377 94)" fill="white"/>
<circle cx="1357" cy="94" r="10" transform="rotate(180 1357 94)" fill="white"/>
<circle cx="1357" cy="74" r="10" transform="rotate(180 1357 74)" fill="white"/>
<circle cx="1337" cy="74" r="10" transform="rotate(180 1337 74)" fill="white"/>
<circle cx="1339.5" cy="91.5" r="7.5" transform="rotate(180 1339.5 91.5)" fill="white"/>
<circle cx="1374.5" cy="76.5" r="7.5" transform="rotate(180 1374.5 76.5)" fill="white"/>
<circle cx="1359.5" cy="111.5" r="7.5" transform="rotate(180 1359.5 111.5)" fill="white"/>
<circle cx="1394.5" cy="96.5" r="7.5" transform="rotate(180 1394.5 96.5)" fill="white"/>
<circle cx="1379.5" cy="131.5" r="7.5" transform="rotate(180 1379.5 131.5)" fill="white"/>
<circle cx="1414.5" cy="116.5" r="7.5" transform="rotate(180 1414.5 116.5)" fill="white"/>
<circle cx="1409.5" cy="101.5" r="7.5" transform="rotate(180 1409.5 101.5)" fill="white"/>
<circle cx="1364.5" cy="126.5" r="7.5" transform="rotate(180 1364.5 126.5)" fill="white"/>
<circle cx="1389.5" cy="81.5" r="7.5" transform="rotate(180 1389.5 81.5)" fill="white"/>
<circle cx="1344.5" cy="106.5" r="7.5" transform="rotate(180 1344.5 106.5)" fill="white"/>
<circle cx="1350" cy="121" r="5" transform="rotate(180 1350 121)" fill="white"/>
<circle cx="1405" cy="86" r="5" transform="rotate(180 1405 86)" fill="white"/>
<circle cx="1332" cy="123" r="10" transform="rotate(180 1332 123)" fill="white"/>
<circle cx="1312" cy="123" r="10" transform="rotate(180 1312 123)" fill="white"/>
<circle cx="1312" cy="103" r="10" transform="rotate(180 1312 103)" fill="white"/>
<circle cx="1292" cy="103" r="10" transform="rotate(180 1292 103)" fill="white"/>
<circle cx="1292" cy="83" r="10" transform="rotate(180 1292 83)" fill="white"/>
<circle cx="1272" cy="83" r="10" transform="rotate(180 1272 83)" fill="white"/>
<circle cx="1272" cy="63" r="10" transform="rotate(180 1272 63)" fill="white"/>
<circle cx="1252" cy="63" r="10" transform="rotate(180 1252 63)" fill="white"/>
<circle cx="1254.5" cy="80.5" r="7.5" transform="rotate(180 1254.5 80.5)" fill="white"/>
<circle cx="1289.5" cy="65.5" r="7.5" transform="rotate(180 1289.5 65.5)" fill="white"/>
<circle cx="1274.5" cy="100.5" r="7.5" transform="rotate(180 1274.5 100.5)" fill="white"/>
<circle cx="1309.5" cy="85.5" r="7.5" transform="rotate(180 1309.5 85.5)" fill="white"/>
<circle cx="1294.5" cy="120.5" r="7.5" transform="rotate(180 1294.5 120.5)" fill="white"/>
<circle cx="1329.5" cy="105.5" r="7.5" transform="rotate(180 1329.5 105.5)" fill="white"/>
<circle cx="1324.5" cy="90.5" r="7.5" transform="rotate(180 1324.5 90.5)" fill="white"/>
<circle cx="1279.5" cy="115.5" r="7.5" transform="rotate(180 1279.5 115.5)" fill="white"/>
<circle cx="1304.5" cy="70.5" r="7.5" transform="rotate(180 1304.5 70.5)" fill="white"/>
<circle cx="1259.5" cy="95.5" r="7.5" transform="rotate(180 1259.5 95.5)" fill="white"/>
<circle cx="1265" cy="110" r="5" transform="rotate(180 1265 110)" fill="white"/>
<circle cx="1320" cy="75" r="5" transform="rotate(180 1320 75)" fill="white"/>
<circle cx="1650" cy="720" r="10" transform="rotate(180 1650 720)" fill="white"/>
<circle cx="1630" cy="720" r="10" transform="rotate(180 1630 720)" fill="white"/>
<circle cx="1630" cy="700" r="10" transform="rotate(180 1630 700)" fill="white"/>
<circle cx="1610" cy="700" r="10" transform="rotate(180 1610 700)" fill="white"/>
<circle cx="1610" cy="680" r="10" transform="rotate(180 1610 680)" fill="white"/>
<circle cx="1590" cy="680" r="10" transform="rotate(180 1590 680)" fill="white"/>
<circle cx="1590" cy="660" r="10" transform="rotate(180 1590 660)" fill="white"/>
<circle cx="1570" cy="660" r="10" transform="rotate(180 1570 660)" fill="white"/>
<circle cx="1572.5" cy="677.5" r="7.5" transform="rotate(180 1572.5 677.5)" fill="white"/>
<circle cx="1607.5" cy="662.5" r="7.5" transform="rotate(180 1607.5 662.5)" fill="white"/>
<circle cx="1592.5" cy="697.5" r="7.5" transform="rotate(180 1592.5 697.5)" fill="white"/>
<circle cx="1627.5" cy="682.5" r="7.5" transform="rotate(180 1627.5 682.5)" fill="white"/>
<circle cx="1612.5" cy="717.5" r="7.5" transform="rotate(180 1612.5 717.5)" fill="white"/>
<circle cx="1647.5" cy="702.5" r="7.5" transform="rotate(180 1647.5 702.5)" fill="white"/>
<circle cx="1642.5" cy="687.5" r="7.5" transform="rotate(180 1642.5 687.5)" fill="white"/>
<circle cx="1597.5" cy="712.5" r="7.5" transform="rotate(180 1597.5 712.5)" fill="white"/>
<circle cx="1622.5" cy="667.5" r="7.5" transform="rotate(180 1622.5 667.5)" fill="white"/>
<circle cx="1577.5" cy="692.5" r="7.5" transform="rotate(180 1577.5 692.5)" fill="white"/>
<circle cx="1583" cy="707" r="5" transform="rotate(180 1583 707)" fill="white"/>
<circle cx="1638" cy="672" r="5" transform="rotate(180 1638 672)" fill="white"/>
<circle cx="1657" cy="654" r="10" transform="rotate(180 1657 654)" fill="white"/>
<circle cx="1637" cy="654" r="10" transform="rotate(180 1637 654)" fill="white"/>
<circle cx="1637" cy="634" r="10" transform="rotate(180 1637 634)" fill="white"/>
<circle cx="1617" cy="634" r="10" transform="rotate(180 1617 634)" fill="white"/>
<circle cx="1617" cy="614" r="10" transform="rotate(180 1617 614)" fill="white"/>
<circle cx="1597" cy="614" r="10" transform="rotate(180 1597 614)" fill="white"/>
<circle cx="1597" cy="594" r="10" transform="rotate(180 1597 594)" fill="white"/>
<circle cx="1577" cy="594" r="10" transform="rotate(180 1577 594)" fill="white"/>
<circle cx="1579.5" cy="611.5" r="7.5" transform="rotate(180 1579.5 611.5)" fill="white"/>
<circle cx="1614.5" cy="596.5" r="7.5" transform="rotate(180 1614.5 596.5)" fill="white"/>
<circle cx="1599.5" cy="631.5" r="7.5" transform="rotate(180 1599.5 631.5)" fill="white"/>
<circle cx="1634.5" cy="616.5" r="7.5" transform="rotate(180 1634.5 616.5)" fill="white"/>
<circle cx="1619.5" cy="651.5" r="7.5" transform="rotate(180 1619.5 651.5)" fill="white"/>
<circle cx="1654.5" cy="636.5" r="7.5" transform="rotate(180 1654.5 636.5)" fill="white"/>
<circle cx="1649.5" cy="621.5" r="7.5" transform="rotate(180 1649.5 621.5)" fill="white"/>
<circle cx="1604.5" cy="646.5" r="7.5" transform="rotate(180 1604.5 646.5)" fill="white"/>
<circle cx="1629.5" cy="601.5" r="7.5" transform="rotate(180 1629.5 601.5)" fill="white"/>
<circle cx="1584.5" cy="626.5" r="7.5" transform="rotate(180 1584.5 626.5)" fill="white"/>
<circle cx="1590" cy="641" r="5" transform="rotate(180 1590 641)" fill="white"/>
<circle cx="1645" cy="606" r="5" transform="rotate(180 1645 606)" fill="white"/>
<circle cx="1570" cy="640" r="10" transform="rotate(180 1570 640)" fill="white"/>
<circle cx="1550" cy="640" r="10" transform="rotate(180 1550 640)" fill="white"/>
<circle cx="1550" cy="620" r="10" transform="rotate(180 1550 620)" fill="white"/>
<circle cx="1530" cy="620" r="10" transform="rotate(180 1530 620)" fill="white"/>
<circle cx="1530" cy="600" r="10" transform="rotate(180 1530 600)" fill="white"/>
<circle cx="1510" cy="600" r="10" transform="rotate(180 1510 600)" fill="white"/>
<circle cx="1510" cy="580" r="10" transform="rotate(180 1510 580)" fill="white"/>
<circle cx="1490" cy="580" r="10" transform="rotate(180 1490 580)" fill="white"/>
<circle cx="1492.5" cy="597.5" r="7.5" transform="rotate(180 1492.5 597.5)" fill="white"/>
<circle cx="1527.5" cy="582.5" r="7.5" transform="rotate(180 1527.5 582.5)" fill="white"/>
<circle cx="1512.5" cy="617.5" r="7.5" transform="rotate(180 1512.5 617.5)" fill="white"/>
<circle cx="1547.5" cy="602.5" r="7.5" transform="rotate(180 1547.5 602.5)" fill="white"/>
<circle cx="1532.5" cy="637.5" r="7.5" transform="rotate(180 1532.5 637.5)" fill="white"/>
<circle cx="1567.5" cy="622.5" r="7.5" transform="rotate(180 1567.5 622.5)" fill="white"/>
<circle cx="1562.5" cy="607.5" r="7.5" transform="rotate(180 1562.5 607.5)" fill="white"/>
<circle cx="1517.5" cy="632.5" r="7.5" transform="rotate(180 1517.5 632.5)" fill="white"/>
<circle cx="1542.5" cy="587.5" r="7.5" transform="rotate(180 1542.5 587.5)" fill="white"/>
<circle cx="1497.5" cy="612.5" r="7.5" transform="rotate(180 1497.5 612.5)" fill="white"/>
<circle cx="1503" cy="627" r="5" transform="rotate(180 1503 627)" fill="white"/>
<circle cx="1558" cy="592" r="5" transform="rotate(180 1558 592)" fill="white"/>
<circle cx="1562" cy="707" r="10" transform="rotate(180 1562 707)" fill="white"/>
<circle cx="1542" cy="707" r="10" transform="rotate(180 1542 707)" fill="white"/>
<circle cx="1542" cy="687" r="10" transform="rotate(180 1542 687)" fill="white"/>
<circle cx="1522" cy="687" r="10" transform="rotate(180 1522 687)" fill="white"/>
<circle cx="1522" cy="667" r="10" transform="rotate(180 1522 667)" fill="white"/>
<circle cx="1502" cy="667" r="10" transform="rotate(180 1502 667)" fill="white"/>
<circle cx="1502" cy="647" r="10" transform="rotate(180 1502 647)" fill="white"/>
<circle cx="1482" cy="647" r="10" transform="rotate(180 1482 647)" fill="white"/>
<circle cx="1484.5" cy="664.5" r="7.5" transform="rotate(180 1484.5 664.5)" fill="white"/>
<circle cx="1519.5" cy="649.5" r="7.5" transform="rotate(180 1519.5 649.5)" fill="white"/>
<circle cx="1504.5" cy="684.5" r="7.5" transform="rotate(180 1504.5 684.5)" fill="white"/>
<circle cx="1539.5" cy="669.5" r="7.5" transform="rotate(180 1539.5 669.5)" fill="white"/>
<circle cx="1524.5" cy="704.5" r="7.5" transform="rotate(180 1524.5 704.5)" fill="white"/>
<circle cx="1559.5" cy="689.5" r="7.5" transform="rotate(180 1559.5 689.5)" fill="white"/>
<circle cx="1554.5" cy="674.5" r="7.5" transform="rotate(180 1554.5 674.5)" fill="white"/>
<circle cx="1509.5" cy="699.5" r="7.5" transform="rotate(180 1509.5 699.5)" fill="white"/>
<circle cx="1534.5" cy="654.5" r="7.5" transform="rotate(180 1534.5 654.5)" fill="white"/>
<circle cx="1489.5" cy="679.5" r="7.5" transform="rotate(180 1489.5 679.5)" fill="white"/>
<circle cx="1495" cy="694" r="5" transform="rotate(180 1495 694)" fill="white"/>
<circle cx="1550" cy="659" r="5" transform="rotate(180 1550 659)" fill="white"/>
<circle cx="1552" cy="772" r="10" transform="rotate(180 1552 772)" fill="white"/>
<circle cx="1532" cy="772" r="10" transform="rotate(180 1532 772)" fill="white"/>
<circle cx="1532" cy="752" r="10" transform="rotate(180 1532 752)" fill="white"/>
<circle cx="1512" cy="752" r="10" transform="rotate(180 1512 752)" fill="white"/>
<circle cx="1512" cy="732" r="10" transform="rotate(180 1512 732)" fill="white"/>
<circle cx="1492" cy="732" r="10" transform="rotate(180 1492 732)" fill="white"/>
<circle cx="1492" cy="712" r="10" transform="rotate(180 1492 712)" fill="white"/>
<circle cx="1472" cy="712" r="10" transform="rotate(180 1472 712)" fill="white"/>
<circle cx="1474.5" cy="729.5" r="7.5" transform="rotate(180 1474.5 729.5)" fill="white"/>
<circle cx="1509.5" cy="714.5" r="7.5" transform="rotate(180 1509.5 714.5)" fill="white"/>
<circle cx="1494.5" cy="749.5" r="7.5" transform="rotate(180 1494.5 749.5)" fill="white"/>
<circle cx="1529.5" cy="734.5" r="7.5" transform="rotate(180 1529.5 734.5)" fill="white"/>
<circle cx="1514.5" cy="769.5" r="7.5" transform="rotate(180 1514.5 769.5)" fill="white"/>
<circle cx="1549.5" cy="754.5" r="7.5" transform="rotate(180 1549.5 754.5)" fill="white"/>
<circle cx="1544.5" cy="739.5" r="7.5" transform="rotate(180 1544.5 739.5)" fill="white"/>
<circle cx="1499.5" cy="764.5" r="7.5" transform="rotate(180 1499.5 764.5)" fill="white"/>
<circle cx="1524.5" cy="719.5" r="7.5" transform="rotate(180 1524.5 719.5)" fill="white"/>
<circle cx="1479.5" cy="744.5" r="7.5" transform="rotate(180 1479.5 744.5)" fill="white"/>
<circle cx="1485" cy="759" r="5" transform="rotate(180 1485 759)" fill="white"/>
<circle cx="1540" cy="724" r="5" transform="rotate(180 1540 724)" fill="white"/>
<circle cx="1642" cy="787" r="10" transform="rotate(180 1642 787)" fill="white"/>
<circle cx="1622" cy="787" r="10" transform="rotate(180 1622 787)" fill="white"/>
<circle cx="1622" cy="767" r="10" transform="rotate(180 1622 767)" fill="white"/>
<circle cx="1602" cy="767" r="10" transform="rotate(180 1602 767)" fill="white"/>
<circle cx="1602" cy="747" r="10" transform="rotate(180 1602 747)" fill="white"/>
<circle cx="1582" cy="747" r="10" transform="rotate(180 1582 747)" fill="white"/>
<circle cx="1582" cy="727" r="10" transform="rotate(180 1582 727)" fill="white"/>
<circle cx="1562" cy="727" r="10" transform="rotate(180 1562 727)" fill="white"/>
<circle cx="1564.5" cy="744.5" r="7.5" transform="rotate(180 1564.5 744.5)" fill="white"/>
<circle cx="1599.5" cy="729.5" r="7.5" transform="rotate(180 1599.5 729.5)" fill="white"/>
<circle cx="1584.5" cy="764.5" r="7.5" transform="rotate(180 1584.5 764.5)" fill="white"/>
<circle cx="1619.5" cy="749.5" r="7.5" transform="rotate(180 1619.5 749.5)" fill="white"/>
<circle cx="1604.5" cy="784.5" r="7.5" transform="rotate(180 1604.5 784.5)" fill="white"/>
<circle cx="1639.5" cy="769.5" r="7.5" transform="rotate(180 1639.5 769.5)" fill="white"/>
<circle cx="1634.5" cy="754.5" r="7.5" transform="rotate(180 1634.5 754.5)" fill="white"/>
<circle cx="1589.5" cy="779.5" r="7.5" transform="rotate(180 1589.5 779.5)" fill="white"/>
<circle cx="1614.5" cy="734.5" r="7.5" transform="rotate(180 1614.5 734.5)" fill="white"/>
<circle cx="1569.5" cy="759.5" r="7.5" transform="rotate(180 1569.5 759.5)" fill="white"/>
<circle cx="1575" cy="774" r="5" transform="rotate(180 1575 774)" fill="white"/>
<circle cx="1630" cy="739" r="5" transform="rotate(180 1630 739)" fill="white"/>
<circle cx="1728" cy="800" r="10" transform="rotate(180 1728 800)" fill="white"/>
<circle cx="1708" cy="800" r="10" transform="rotate(180 1708 800)" fill="white"/>
<circle cx="1708" cy="780" r="10" transform="rotate(180 1708 780)" fill="white"/>
<circle cx="1688" cy="780" r="10" transform="rotate(180 1688 780)" fill="white"/>
<circle cx="1688" cy="760" r="10" transform="rotate(180 1688 760)" fill="white"/>
<circle cx="1668" cy="760" r="10" transform="rotate(180 1668 760)" fill="white"/>
<circle cx="1668" cy="740" r="10" transform="rotate(180 1668 740)" fill="white"/>
<circle cx="1648" cy="740" r="10" transform="rotate(180 1648 740)" fill="white"/>
<circle cx="1650.5" cy="757.5" r="7.5" transform="rotate(180 1650.5 757.5)" fill="white"/>
<circle cx="1685.5" cy="742.5" r="7.5" transform="rotate(180 1685.5 742.5)" fill="white"/>
<circle cx="1670.5" cy="777.5" r="7.5" transform="rotate(180 1670.5 777.5)" fill="white"/>
<circle cx="1705.5" cy="762.5" r="7.5" transform="rotate(180 1705.5 762.5)" fill="white"/>
<circle cx="1690.5" cy="797.5" r="7.5" transform="rotate(180 1690.5 797.5)" fill="white"/>
<circle cx="1725.5" cy="782.5" r="7.5" transform="rotate(180 1725.5 782.5)" fill="white"/>
<circle cx="1720.5" cy="767.5" r="7.5" transform="rotate(180 1720.5 767.5)" fill="white"/>
<circle cx="1675.5" cy="792.5" r="7.5" transform="rotate(180 1675.5 792.5)" fill="white"/>
<circle cx="1700.5" cy="747.5" r="7.5" transform="rotate(180 1700.5 747.5)" fill="white"/>
<circle cx="1655.5" cy="772.5" r="7.5" transform="rotate(180 1655.5 772.5)" fill="white"/>
<circle cx="1661" cy="787" r="5" transform="rotate(180 1661 787)" fill="white"/>
<circle cx="1716" cy="752" r="5" transform="rotate(180 1716 752)" fill="white"/>
<circle cx="1737" cy="734" r="10" transform="rotate(180 1737 734)" fill="white"/>
<circle cx="1717" cy="734" r="10" transform="rotate(180 1717 734)" fill="white"/>
<circle cx="1717" cy="714" r="10" transform="rotate(180 1717 714)" fill="white"/>
<circle cx="1697" cy="714" r="10" transform="rotate(180 1697 714)" fill="white"/>
<circle cx="1697" cy="694" r="10" transform="rotate(180 1697 694)" fill="white"/>
<circle cx="1677" cy="694" r="10" transform="rotate(180 1677 694)" fill="white"/>
<circle cx="1677" cy="674" r="10" transform="rotate(180 1677 674)" fill="white"/>
<circle cx="1657" cy="674" r="10" transform="rotate(180 1657 674)" fill="white"/>
<circle cx="1659.5" cy="691.5" r="7.5" transform="rotate(180 1659.5 691.5)" fill="white"/>
<circle cx="1694.5" cy="676.5" r="7.5" transform="rotate(180 1694.5 676.5)" fill="white"/>
<circle cx="1679.5" cy="711.5" r="7.5" transform="rotate(180 1679.5 711.5)" fill="white"/>
<circle cx="1714.5" cy="696.5" r="7.5" transform="rotate(180 1714.5 696.5)" fill="white"/>
<circle cx="1699.5" cy="731.5" r="7.5" transform="rotate(180 1699.5 731.5)" fill="white"/>
<circle cx="1734.5" cy="716.5" r="7.5" transform="rotate(180 1734.5 716.5)" fill="white"/>
<circle cx="1729.5" cy="701.5" r="7.5" transform="rotate(180 1729.5 701.5)" fill="white"/>
<circle cx="1684.5" cy="726.5" r="7.5" transform="rotate(180 1684.5 726.5)" fill="white"/>
<circle cx="1709.5" cy="681.5" r="7.5" transform="rotate(180 1709.5 681.5)" fill="white"/>
<circle cx="1664.5" cy="706.5" r="7.5" transform="rotate(180 1664.5 706.5)" fill="white"/>
<circle cx="1670" cy="721" r="5" transform="rotate(180 1670 721)" fill="white"/>
<circle cx="1725" cy="686" r="5" transform="rotate(180 1725 686)" fill="white"/>
<circle cx="1742" cy="667" r="10" transform="rotate(180 1742 667)" fill="white"/>
<circle cx="1722" cy="667" r="10" transform="rotate(180 1722 667)" fill="white"/>
<circle cx="1722" cy="647" r="10" transform="rotate(180 1722 647)" fill="white"/>
<circle cx="1702" cy="647" r="10" transform="rotate(180 1702 647)" fill="white"/>
<circle cx="1702" cy="627" r="10" transform="rotate(180 1702 627)" fill="white"/>
<circle cx="1682" cy="627" r="10" transform="rotate(180 1682 627)" fill="white"/>
<circle cx="1682" cy="607" r="10" transform="rotate(180 1682 607)" fill="white"/>
<circle cx="1662" cy="607" r="10" transform="rotate(180 1662 607)" fill="white"/>
<circle cx="1664.5" cy="624.5" r="7.5" transform="rotate(180 1664.5 624.5)" fill="white"/>
<circle cx="1699.5" cy="609.5" r="7.5" transform="rotate(180 1699.5 609.5)" fill="white"/>
<circle cx="1684.5" cy="644.5" r="7.5" transform="rotate(180 1684.5 644.5)" fill="white"/>
<circle cx="1719.5" cy="629.5" r="7.5" transform="rotate(180 1719.5 629.5)" fill="white"/>
<circle cx="1704.5" cy="664.5" r="7.5" transform="rotate(180 1704.5 664.5)" fill="white"/>
<circle cx="1739.5" cy="649.5" r="7.5" transform="rotate(180 1739.5 649.5)" fill="white"/>
<circle cx="1734.5" cy="634.5" r="7.5" transform="rotate(180 1734.5 634.5)" fill="white"/>
<circle cx="1689.5" cy="659.5" r="7.5" transform="rotate(180 1689.5 659.5)" fill="white"/>
<circle cx="1714.5" cy="614.5" r="7.5" transform="rotate(180 1714.5 614.5)" fill="white"/>
<circle cx="1669.5" cy="639.5" r="7.5" transform="rotate(180 1669.5 639.5)" fill="white"/>
<circle cx="1675" cy="654" r="5" transform="rotate(180 1675 654)" fill="white"/>
<circle cx="1730" cy="619" r="5" transform="rotate(180 1730 619)" fill="white"/>
<circle cx="1742" cy="597" r="10" transform="rotate(180 1742 597)" fill="white"/>
<circle cx="1722" cy="597" r="10" transform="rotate(180 1722 597)" fill="white"/>
<circle cx="1722" cy="577" r="10" transform="rotate(180 1722 577)" fill="white"/>
<circle cx="1702" cy="577" r="10" transform="rotate(180 1702 577)" fill="white"/>
<circle cx="1702" cy="557" r="10" transform="rotate(180 1702 557)" fill="white"/>
<circle cx="1682" cy="557" r="10" transform="rotate(180 1682 557)" fill="white"/>
<circle cx="1682" cy="537" r="10" transform="rotate(180 1682 537)" fill="white"/>
<circle cx="1662" cy="537" r="10" transform="rotate(180 1662 537)" fill="white"/>
<circle cx="1664.5" cy="554.5" r="7.5" transform="rotate(180 1664.5 554.5)" fill="white"/>
<circle cx="1699.5" cy="539.5" r="7.5" transform="rotate(180 1699.5 539.5)" fill="white"/>
<circle cx="1684.5" cy="574.5" r="7.5" transform="rotate(180 1684.5 574.5)" fill="white"/>
<circle cx="1719.5" cy="559.5" r="7.5" transform="rotate(180 1719.5 559.5)" fill="white"/>
<circle cx="1704.5" cy="594.5" r="7.5" transform="rotate(180 1704.5 594.5)" fill="white"/>
<circle cx="1739.5" cy="579.5" r="7.5" transform="rotate(180 1739.5 579.5)" fill="white"/>
<circle cx="1734.5" cy="564.5" r="7.5" transform="rotate(180 1734.5 564.5)" fill="white"/>
<circle cx="1689.5" cy="589.5" r="7.5" transform="rotate(180 1689.5 589.5)" fill="white"/>
<circle cx="1714.5" cy="544.5" r="7.5" transform="rotate(180 1714.5 544.5)" fill="white"/>
<circle cx="1669.5" cy="569.5" r="7.5" transform="rotate(180 1669.5 569.5)" fill="white"/>
<circle cx="1675" cy="584" r="5" transform="rotate(180 1675 584)" fill="white"/>
<circle cx="1730" cy="549" r="5" transform="rotate(180 1730 549)" fill="white"/>
<circle cx="1657" cy="586" r="10" transform="rotate(180 1657 586)" fill="white"/>
<circle cx="1637" cy="586" r="10" transform="rotate(180 1637 586)" fill="white"/>
<circle cx="1637" cy="566" r="10" transform="rotate(180 1637 566)" fill="white"/>
<circle cx="1617" cy="566" r="10" transform="rotate(180 1617 566)" fill="white"/>
<circle cx="1617" cy="546" r="10" transform="rotate(180 1617 546)" fill="white"/>
<circle cx="1597" cy="546" r="10" transform="rotate(180 1597 546)" fill="white"/>
<circle cx="1597" cy="526" r="10" transform="rotate(180 1597 526)" fill="white"/>
<circle cx="1577" cy="526" r="10" transform="rotate(180 1577 526)" fill="white"/>
<circle cx="1579.5" cy="543.5" r="7.5" transform="rotate(180 1579.5 543.5)" fill="white"/>
<circle cx="1614.5" cy="528.5" r="7.5" transform="rotate(180 1614.5 528.5)" fill="white"/>
<circle cx="1599.5" cy="563.5" r="7.5" transform="rotate(180 1599.5 563.5)" fill="white"/>
<circle cx="1634.5" cy="548.5" r="7.5" transform="rotate(180 1634.5 548.5)" fill="white"/>
<circle cx="1619.5" cy="583.5" r="7.5" transform="rotate(180 1619.5 583.5)" fill="white"/>
<circle cx="1654.5" cy="568.5" r="7.5" transform="rotate(180 1654.5 568.5)" fill="white"/>
<circle cx="1649.5" cy="553.5" r="7.5" transform="rotate(180 1649.5 553.5)" fill="white"/>
<circle cx="1604.5" cy="578.5" r="7.5" transform="rotate(180 1604.5 578.5)" fill="white"/>
<circle cx="1629.5" cy="533.5" r="7.5" transform="rotate(180 1629.5 533.5)" fill="white"/>
<circle cx="1584.5" cy="558.5" r="7.5" transform="rotate(180 1584.5 558.5)" fill="white"/>
<circle cx="1590" cy="573" r="5" transform="rotate(180 1590 573)" fill="white"/>
<circle cx="1645" cy="538" r="5" transform="rotate(180 1645 538)" fill="white"/>
</mask>
<g mask="url(#mask0_12_7235)">
<rect x="190" y="635" width="1400" height="400" fill="#D9D9D9"/>
</g>
</svg>

*/}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true
                        }}
                        className='swiper-container'
                    >
                        {customers.map((customer, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className='flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.img
                                        src={customer.img}
                                        alt={customer.text}
                                        className='w-auto h-20 md:w-auto md:h-24 object-cover object-center mx-auto mb-4'
                                        whileHover={{ rotate: 10 }}
                                    />
                                    <p className='text-center text-lg md:text-md font-medium text-slate-400'>{customer.text}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;
