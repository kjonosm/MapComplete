export class Img {

    /**
     * If the source is an svg element, it is returned as is.
     * If not, the source is wrapped into a 'img'-tag
     * @param source
     * @constructor
     */
    static AsImageElement(source: string): string{
        if(source.startsWith("<svg")){
            return `<img src="data:image/svg+xml;base64,${(btoa(source))}">`;
        }else{
            return `<img src="${source}">`
        }
    }
    
    static readonly checkmark = `<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7.28571L10.8261 15L23 3" stroke="black" stroke-width="4" stroke-linejoin="round"/></svg>`;
    static readonly no_checkmark = `<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;

    static osmAbstractLogo: string =
        "<svg class='osm-logo' xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" width=\"24px\" version=\"1.1\" viewBox=\"0 0 66 64\">" +
        "    <g transform=\"translate(-0.849, -61)\">\n" +
        "    <path d=\"M0.849,61 L6.414,75.609 L0.849,90.217 L6.414,104.826 L0.849,119.435 L4.266,120.739 L22.831,102.183 L26.162,102.696 L30.205,98.652 C27.819,95.888 26.033,92.59 25.057,88.948 L26.953,87.391 C26.627,85.879 26.449,84.313 26.449,82.704 C26.449,74.67 30.734,67.611 37.136,63.696 L30.066,61 L15.457,66.565 L0.849,61 z\"></path>" +
        "        <path d=\"M48.71,64.617 C48.406,64.617 48.105,64.629 47.805,64.643 C47.52,64.657 47.234,64.677 46.953,64.704 C46.726,64.726 46.499,64.753 46.275,64.783 C46.039,64.814 45.811,64.847 45.579,64.887 C45.506,64.9 45.434,64.917 45.362,64.93 C45.216,64.958 45.072,64.987 44.927,65.017 C44.812,65.042 44.694,65.06 44.579,65.087 C44.442,65.119 44.307,65.156 44.17,65.191 C43.943,65.25 43.716,65.315 43.492,65.383 C43.323,65.433 43.155,65.484 42.988,65.539 C42.819,65.595 42.65,65.652 42.483,65.713 C42.475,65.716 42.466,65.719 42.457,65.722 C35.819,68.158 31.022,74.369 30.649,81.774 C30.633,82.083 30.622,82.391 30.622,82.704 C30.622,83.014 30.631,83.321 30.649,83.626 C30.649,83.629 30.648,83.632 30.649,83.635 C30.662,83.862 30.681,84.088 30.701,84.313 C31.466,93.037 38.377,99.948 47.101,100.713 C47.326,100.733 47.552,100.754 47.779,100.765 C47.782,100.765 47.785,100.765 47.788,100.765 C48.093,100.783 48.399,100.791 48.709,100.791 C53.639,100.791 58.096,98.833 61.353,95.652 C61.532,95.477 61.712,95.304 61.883,95.122 C61.913,95.09 61.941,95.058 61.97,95.026 C61.98,95.015 61.987,95.002 61.996,94.991 C62.132,94.845 62.266,94.698 62.396,94.548 C62.449,94.487 62.501,94.426 62.553,94.365 C62.594,94.316 62.634,94.267 62.675,94.217 C62.821,94.04 62.961,93.861 63.101,93.678 C63.279,93.444 63.456,93.199 63.622,92.956 C63.956,92.471 64.267,91.97 64.553,91.452 C64.661,91.257 64.757,91.06 64.857,90.861 C64.89,90.796 64.93,90.735 64.962,90.67 C64.98,90.633 64.996,90.594 65.014,90.556 C65.125,90.324 65.234,90.09 65.336,89.852 C65.349,89.82 65.365,89.789 65.379,89.756 C65.48,89.517 65.575,89.271 65.666,89.026 C65.678,88.994 65.689,88.962 65.701,88.93 C65.792,88.679 65.881,88.43 65.962,88.174 C65.97,88.148 65.98,88.122 65.988,88.096 C66.069,87.832 66.144,87.564 66.214,87.296 C66.219,87.275 66.226,87.255 66.231,87.235 C66.301,86.962 66.365,86.686 66.423,86.409 C66.426,86.391 66.428,86.374 66.431,86.356 C66.445,86.291 66.453,86.223 66.466,86.156 C66.511,85.925 66.552,85.695 66.588,85.461 C66.632,85.169 66.671,84.878 66.701,84.583 C66.701,84.574 66.701,84.565 66.701,84.556 C66.731,84.258 66.755,83.955 66.77,83.652 C66.77,83.646 66.77,83.641 66.77,83.635 C66.786,83.326 66.797,83.017 66.797,82.704 C66.797,72.69 58.723,64.617 48.71,64.617 z\"></path>" +
        "        <path d=\"M62.936,99.809 C59.074,103.028 54.115,104.965 48.71,104.965 C47.101,104.965 45.535,104.787 44.023,104.461 L42.466,106.357 C39.007,105.43 35.855,103.781 33.179,101.574 L28.996,105.765 L29.51,108.861 L13.953,124.426 L15.457,125 L30.066,119.435 L44.675,125 L59.283,119.435 L64.849,104.826 L62.936,99.809 z\"></path>" +
        "        </g>" +
        "</svg>";


    static closedFilterButton: string = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.5353 8.13481C26.4422 8.35428 26.2683 8.47598 26.0632 8.58537C21.9977 10.7452 17.935 12.9085 13.8758 15.0799C13.6475 15.2016 13.4831 15.1962 13.2568 15.0751C9.19822 12.903 5.13484 10.7404 1.07215 8.5758C0.490599 8.26608 0.448478 7.52562 0.991303 7.13796C1.0803 7.07438 1.17813 7.0231 1.2746 6.97045C5.15862 4.86462 9.04536 2.7629 12.9246 0.648187C13.3805 0.399316 13.7779 0.406837 14.2311 0.65434C18.0954 2.76153 21.9658 4.85779 25.8383 6.94926C26.1569 7.12155 26.411 7.32872 26.5353 7.67604C26.5353 7.82919 26.5353 7.98166 26.5353 8.13481Z" fill="#003B8B"/>
        <path d="M13.318 26.535C12.1576 25.9046 10.9972 25.2736 9.83614 24.6439C6.96644 23.0877 4.09674 21.533 1.22704 19.9762C0.694401 19.6876 0.466129 19.2343 0.669943 18.7722C0.759621 18.5691 0.931505 18.3653 1.11969 18.2512C1.66659 17.9182 2.23727 17.6228 2.80863 17.3329C2.89423 17.2892 3.04981 17.3206 3.14493 17.3712C6.40799 19.1031 9.66969 20.837 12.9239 22.5845C13.3703 22.8238 13.7609 22.83 14.208 22.59C17.4554 20.8472 20.7117 19.1202 23.9605 17.3801C24.1493 17.2789 24.2838 17.283 24.4632 17.3876C24.8926 17.6386 25.3301 17.8772 25.7751 18.1001C26.11 18.2683 26.3838 18.4857 26.5346 18.8385C26.5346 18.9916 26.5346 19.1441 26.5346 19.2972C26.4049 19.6528 26.1399 19.8613 25.8152 20.0363C22.9964 21.5549 20.1831 23.0829 17.3684 24.609C16.1863 25.2496 15.0055 25.893 13.8248 26.535C13.6556 26.535 13.4865 26.535 13.318 26.535Z" fill="#003B8B"/>
        <path d="M26.3988 13.7412C26.2956 13.9661 26.1026 14.081 25.8927 14.1924C21.8198 16.3577 17.749 18.5258 13.6815 20.7013C13.492 20.8025 13.3602 20.7902 13.1795 20.6938C9.09638 18.5114 5.01059 16.3359 0.924798 14.1582C0.399637 13.8786 0.307921 13.2646 0.735251 12.838C0.829005 12.7443 0.947217 12.6705 1.06407 12.6055C1.56545 12.3279 2.07635 12.0654 2.57297 11.7789C2.74214 11.6812 2.86579 11.6921 3.03291 11.7817C6.27492 13.5155 9.52303 15.2378 12.761 16.9792C13.2352 17.2343 13.6394 17.2322 14.1129 16.9772C17.3509 15.2358 20.5996 13.5142 23.8416 11.7796C24.0095 11.69 24.1338 11.6818 24.3016 11.7789C24.7384 12.0339 25.1821 12.2794 25.6352 12.5037C25.9701 12.6691 26.2426 12.8831 26.3995 13.2304C26.3988 13.4014 26.3988 13.5716 26.3988 13.7412Z" fill="#003B8B"/>
        </svg>  `

    
    static openFilterButton: string = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2L2 20M20 20L2 2" stroke="#003B8B" stroke-width="4"/>
</svg>  `

    
    static ornament = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
        "<svg\n" +
        "   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n" +
        "   xmlns:cc=\"http://creativecommons.org/ns#\"\n" +
        "   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n" +
        "   xmlns:svg=\"http://www.w3.org/2000/svg\"\n" +
        "   xmlns=\"http://www.w3.org/2000/svg\"\n" +
        "   id=\"svg10\"\n" +
        "   version=\"1.1\"\n" +
        "   viewBox=\"0 0 205 205\"\n" +
        "   style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\n" +
        "   height=\"205mm\"\n" +
        "   width=\"205mm\"\n" +
        "   xml:space=\"preserve\"><metadata\n" +
        "   id=\"metadata14\"><rdf:RDF><cc:Work\n" +
        "       rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\n" +
        "         rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata>\n" +
        " <g\n" +
        "   id=\"Layer_x0020_1\">\n" +
        "  <metadata\n" +
        "   id=\"CorelCorpID_0Corel-Layer\" />\n" +
        "  <path\n" +
        "   id=\"path7\"\n" +
        "   d=\"M17.9291 17.9451c0.4499,5.336 1.7681,10.4146 3.9215,15.2043 2.1537,4.7894 4.8538,7.2002 8.0684,7.2002 2.5714,0 4.918,-1.1895 7.1037,-3.6322 2.1537,-2.4108 3.2464,-4.6933 3.2464,-6.8148 0,-3.15 -2.3463,-5.7859 -7.0714,-7.9074 -4.6933,-2.1534 -9.8042,-3.5034 -15.2686,-4.0501zm-15.4291 -15.461l0 200.032 10.8327 0 32.0154 -19.2218c-5.0145,-10.3505 -7.5217,-21.9224 -7.5217,-34.7478 0,-8.5825 2.0251,-16.972 6.0429,-25.1365 4.0179,-8.1648 9.4504,-15.0434 16.297,-20.6364 6.8467,-5.5931 14.4971,-9.2256 22.9831,-10.9291l0 1.1249c0.0642,3.986 0.2571,6.9112 0.5464,8.8717 0.3215,1.9287 0.8356,4.1789 1.5106,6.6861 0.675,2.5072 1.2217,4.9822 1.6075,7.393 0.3534,2.4108 0.5463,5.5612 0.5463,9.4503 0,4.404 -0.7715,8.2932 -2.3467,11.7006 -1.5748,3.3751 -3.6321,5.9788 -6.1393,7.811 -2.5073,1.8322 -4.9503,2.7323 -7.3611,2.7323 -2.5073,0 -4.8535,-1.0288 -7.0396,-3.0539 -2.2179,-2.057 -3.3106,-4.7571 -3.3106,-8.1644 0,-3.568 1.4465,-7.5217 4.3072,-11.797 2.8607,-4.3072 5.9465,-7.65 9.2252,-10.0608 -4.4678,0.1928 -8.5824,1.4464 -12.3433,3.7927 -3.7286,2.3144 -6.7502,5.336 -9.0001,9.0327 -2.2824,3.6963 -3.4073,7.5217 -3.4073,11.4754 0,5.7214 1.9609,10.8004 5.8823,15.204 3.9214,4.4359 8.7753,6.6538 14.5612,6.6538 4.5965,0 8.6467,-1.3178 12.1505,-3.9214 3.5357,-2.6037 6.2039,-6.0752 8.068,-10.4792 1.8645,-4.4036 2.7646,-9.1611 2.7646,-14.3038 3.9537,7.3929 8.8072,12.2468 14.5613,14.5931 5.7536,2.3143 11.0896,3.4715 16.0718,3.4715 4.5001,0 9.5791,-1.1572 15.2363,-3.4715 -13.3718,-2.5714 -23.6258,-6.975 -30.7941,-13.1467 -7.136,-6.1716 -11.8289,-12.5684 -14.0791,-19.158 -2.2179,-6.5893 -3.407,-12.8574 -3.5357,-18.7398l0 -4.6287c31.0834,0 49.6625,16.1361 55.77,48.4089 2.3144,-6.0111 3.4716,-11.122 3.4716,-15.2685 0,-5.4967 -1.2859,-11.0575 -3.9219,-16.6186 -2.6036,-5.5608 -7.3607,-10.2537 -14.2719,-14.0791 6.4932,0 11.8934,-1.1891 16.2006,-3.6321 4.3394,-2.4108 7.5539,-5.368 9.6113,-8.8395 2.0892,-3.4716 3.1177,-6.879 3.1177,-10.2218 0,-5.2073 -2.057,-9.9648 -6.2035,-14.2401 -4.1466,-4.3071 -9.2256,-6.4609 -15.1721,-6.4609 -6.5251,0 -12.2469,2.5395 -17.1972,7.5862 -4.918,5.0464 -7.4894,10.7681 -7.6823,17.1968 2.6037,-3.4715 5.9788,-6.5892 10.1254,-9.3858 4.1788,-2.7965 8.068,-4.1788 11.636,-4.1788 3.3432,0 6.0433,1.1249 8.1003,3.3428 2.0896,2.218 3.1181,4.661 3.1181,7.297 0,2.5714 -0.9002,5.0463 -2.6679,7.4571 -1.8003,2.4431 -4.2753,4.404 -7.3933,5.8824 -3.15,1.511 -6.718,2.2825 -10.7359,2.2825 -3.4074,0 -6.3003,-0.1929 -8.7111,-0.5145 -2.4431,-0.3534 -5.368,-0.9001 -8.8718,-1.6716 -3.4715,-0.7392 -6.3322,-1.2855 -8.5502,-1.5748 -2.2502,-0.3216 -5.1754,-0.4821 -8.8076,-0.4821 1.6717,-8.5506 5.3361,-16.2652 10.961,-23.176 5.6254,-6.8789 12.5043,-12.311 20.6687,-16.2647 8.1645,-3.9538 16.4899,-5.9469 25.0401,-5.9469 6.7825,0 12.9542,0.6431 18.5472,1.9286 5.5931,1.2859 10.9933,3.2145 16.2006,5.7859l19.2864 -32.2083 0 -10.8322 -200 0zm10.8327 10.8322l175.603 0 -11.7648 22.0511c-2.5072,-0.9325 -5.4647,-1.8322 -8.8398,-2.636 -3.3751,-0.8037 -6.8144,-1.4464 -10.3182,-1.9286 -3.4716,-0.4822 -6.7822,-0.7073 -9.9325,-0.7073 -5.8178,0 -12.6326,1.093 -20.4113,3.2787 -2.4108,0.7714 -4.7894,1.6716 -7.1683,2.7001 -2.3785,1.0288 -4.082,1.7358 -5.1428,2.0573 -1.0288,0.3535 -2.186,0.5145 -3.5038,0.5145 -3.7931,0 -7.4253,-1.7358 -10.9932,-5.2074 -3.5358,-3.5038 -6.043,-7.811 -7.4895,-12.9541 -2.2502,1.3177 -3.986,3.0858 -5.2396,5.2715 -1.2536,2.186 -1.8963,4.3075 -1.8963,6.3003 0,2.7001 1.4464,5.4966 4.3394,8.3896 2.893,2.893 6.8786,4.5965 12.054,5.0786 -4.8539,2.4754 -8.5506,4.404 -11.1542,5.8182 -2.6037,1.4142 -4.6606,2.5072 -6.1071,3.3429 -1.4788,0.8037 -3.054,1.6074 -4.7252,2.3789 -1.6393,0.8033 -4.1466,1.9286 -7.4575,3.3751 2.4108,-5.4325 3.6002,-11.6683 3.6002,-18.7724 0,-4.6929 -0.8679,-8.8717 -2.6359,-12.4716 -1.7681,-3.6002 -4.1143,-6.3645 -7.0395,-8.2612 -2.9253,-1.8641 -5.9466,-2.7966 -9.0324,-2.7966 -3.4396,0 -6.3645,1.1895 -8.7753,3.568 -2.3789,2.3789 -3.6003,5.1109 -3.6003,8.1967 0,4.0183 1.4143,7.6182 4.2431,10.8327l3.8572 -4.0502c-1.4464,-2.5072 -2.1537,-4.7893 -2.1537,-6.7825 0,-1.2536 0.3857,-2.1856 1.1571,-2.7642 0.8038,-0.6109 1.5752,-0.9002 2.3144,-0.9002 2.4108,0 4.8862,1.8322 7.4898,5.4966 2.6037,3.6645 3.9215,8.5183 3.9215,14.5613 0,4.8216 -0.9002,10.7039 -2.7324,17.6151 -7.0395,1.7677 -12.8574,2.6356 -17.5184,2.6356 -4.3394,0 -8.0038,-0.6105 -11.0574,-1.8322 -3.0539,-1.2214 -5.3037,-2.732 -6.7825,-4.4678 -1.4787,-1.768 -2.2179,-3.4396 -2.2179,-5.0144 0,-0.8679 0.2893,-1.6716 0.8356,-2.4108 0.5786,-0.7073 1.511,-1.0608 2.8288,-1.0608 2.2821,0 4.5,0.675 6.718,2.057l3.8572 -3.8573c-3.2786,-2.8284 -6.975,-4.243 -11.1215,-4.243 -3.0217,0 -5.6254,1.2859 -7.8756,3.8254 -2.2179,2.5391 -3.3428,5.593 -3.3428,9.161 0,5.1751 2.4431,9.4504 7.2966,12.9219 4.8861,3.4393 10.9932,5.1751 18.322,5.1751 5.7218,0 11.2507,-1.2214 16.5863,-3.6644 -3.7285,8.3895 -8.7107,18.2256 -14.9788,29.444 -0.4503,-4.9503 -2.1215,-8.904 -4.9826,-11.8934 -2.8929,-2.9894 -5.6895,-4.4682 -8.3896,-4.4682 -2.0892,0 -4.1784,0.6432 -6.2999,1.9287 -2.1538,1.2859 -3.9219,3.0216 -5.2719,5.2073 5.1432,1.5752 9.4503,4.2111 12.9541,7.8755 3.4716,3.6645 5.2074,7.1679 5.2074,10.5111 0,3.6963 -0.3216,6.5251 -1.0285,8.4538 -0.675,1.9609 -1.7358,4.2753 -3.1181,6.9754 -1.3823,2.7 -2.4431,5.593 -3.2145,8.7107 -0.7392,3.1181 -1.1249,7.2005 -1.1249,12.2792 0,4.4681 0.4821,9.3216 1.4787,14.5289 0.9643,5.2074 2.2179,10.0612 3.7286,14.5935l-21.9542 11.7647 0 -175.731zm56.1553 56.1557c11.0255,-4.8538 22.5332,-10.9291 34.4585,-18.2898 -11.122,9.0324 -17.7758,19.9614 -20.0579,32.7546 -12.6967,2.1538 -23.6258,8.8395 -32.8191,20.0579 3.4715,-5.5289 6.7183,-11.0897 9.7396,-16.6827 2.9894,-5.6254 5.8824,-11.5719 8.6789,-17.84zm35.3905 35.487c0.7396,7.7787 3.568,14.0149 8.4542,18.7401 4.918,4.6929 10.8322,7.2001 17.8076,7.5217 -0.3216,-7.1682 -2.8288,-13.1793 -7.5217,-18.0328 -4.7252,-4.8539 -10.961,-7.6181 -18.7401,-8.229z\"\n" +
        "   style=\"fill:#1F1A17;stroke:#1F1A17;stroke-width:0.0762\" />\n" +
        " </g>\n" +
        "</svg>"
    
}

