import Image from "next/image";
import ContactForm from "./component/contact/ContactForm";
import Navbar from "./component/navbar/Navbar";

export default function Home() {
  const data = null;
  return (
    <>
      <Navbar data={data} />
      <div className="w-full pt-[65px] sm:pt-[55px] h-[100vh] bg-[#E2ECFF] overflow-hidden">
        <div className="w-full h-full relative">
          <svg
            viewBox="0 0 1920 1006"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // className="absolute w-[200%] h-[100%] top-[-90px] left-[-150px] sm:w-[130%] sm:h-[400%] sm:top-[-1050px] sm:left-[-100px] md:w-[calc(120%)] lg:w-[calc(150%)] md:top-[-130px] md:h-[calc(125%)] md:left-[-90px] lg:left-[-300px] xl:w-[140%] xl:left-[-200px] xl:top-[-100px]"
            className="absolute invisible sm:visible sm:w-[145%] sm:right-[-30%] sm:h-[110dvh] sm:bottom-[-50px] "
          >
            <rect
              x="1256.46"
              y="-504.707"
              width="1084.17"
              height="2149.83"
              transform="rotate(35.9664 1256.46 -504.707)"
              fill="url(#paint0_linear_0_1)"
              fillOpacity="0.5"
            />
            <path
              d="M1581.41 350.759C1582.36 350.759 1583.13 349.99 1583.13 349.04C1583.13 348.091 1582.36 347.321 1581.41 347.321C1580.46 347.321 1579.69 348.091 1579.69 349.04C1579.69 349.99 1580.46 350.759 1581.41 350.759Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1505.97 135.446C1495.39 150.098 1481.73 174.655 1480.7 194.166M1594.31 304.357C1588.61 304.693 1583.3 304.601 1578.35 304.138M1480.78 199.846C1480.98 201.994 1481.36 204.053 1481.97 205.998M1483.2 209.144C1484.22 211.289 1485.57 213.255 1487.29 215.003M1489 216.57C1491.59 218.707 1494.86 220.437 1498.9 221.669C1535.09 232.694 1561.8 196.108 1570.64 176.437C1576.85 161.258 1576.64 137.991 1551.2 152.408C1525.76 166.826 1517.51 214.248 1516.57 236.157C1516.49 252.675 1523.6 280.012 1547.85 294.624M1552.83 297.319C1553.99 297.882 1555.19 298.418 1556.42 298.924M1559.16 299.98C1561.28 300.746 1563.51 301.428 1565.83 302.016M1568.62 302.666C1570.92 303.156 1573.31 303.557 1575.8 303.862"
              stroke="#FECB4B"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M956.521 557.188C952.925 562.167 948.281 570.513 947.932 577.143M986.545 614.595C984.607 614.708 982.801 614.675 981.121 614.517M947.961 579.072C948.027 579.804 948.159 580.504 948.365 581.165M948.783 582.232C949.129 582.961 949.588 583.632 950.172 584.225M950.753 584.758C951.634 585.483 952.745 586.073 954.119 586.489C966.417 590.237 975.496 577.805 978.499 571.119C980.61 565.959 980.54 558.052 971.893 562.95C963.246 567.852 960.444 583.967 960.124 591.414C960.096 597.028 962.511 606.32 970.753 611.286M972.445 612.202C972.84 612.392 973.247 612.576 973.666 612.747M974.597 613.105C975.319 613.366 976.075 613.598 976.865 613.798M977.814 614.017C978.595 614.185 979.407 614.321 980.253 614.424"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1566.56 578.279C1567.51 578.279 1568.28 577.509 1568.28 576.56C1568.28 575.61 1567.51 574.841 1566.56 574.841C1565.61 574.841 1564.84 575.61 1564.84 576.56C1564.84 577.509 1565.61 578.279 1566.56 578.279Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1350.74 430.805C1351.69 430.805 1352.46 430.036 1352.46 429.086C1352.46 428.137 1351.69 427.367 1350.74 427.367C1349.79 427.367 1349.02 428.137 1349.02 429.086C1349.02 430.036 1349.79 430.805 1350.74 430.805Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M869.709 390.99C870.659 390.99 871.429 390.221 871.429 389.271C871.429 388.322 870.659 387.552 869.709 387.552C868.76 387.552 867.99 388.322 867.99 389.271C867.99 390.221 868.76 390.99 869.709 390.99Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M883.149 778.267C884.098 778.267 884.868 777.498 884.868 776.548C884.868 775.599 884.098 774.829 883.149 774.829C882.199 774.829 881.43 775.599 881.43 776.548C881.43 777.498 882.199 778.267 883.149 778.267Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1365.66 114.431C1366.61 114.431 1367.38 113.662 1367.38 112.712C1367.38 111.763 1366.61 110.993 1365.66 110.993C1364.71 110.993 1363.94 111.763 1363.94 112.712C1363.94 113.662 1364.71 114.431 1365.66 114.431Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1039.78 654.726C1040.73 654.726 1041.5 653.957 1041.5 653.007C1041.5 652.058 1040.73 651.288 1039.78 651.288C1038.83 651.288 1038.06 652.058 1038.06 653.007C1038.06 653.957 1038.83 654.726 1039.78 654.726Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1013.75 169.67C1014.7 169.67 1015.47 168.9 1015.47 167.951C1015.47 167.001 1014.7 166.232 1013.75 166.232C1012.8 166.232 1012.03 167.001 1012.03 167.951C1012.03 168.9 1012.8 169.67 1013.75 169.67Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1063.84 511.177L1073.3 518.066"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1148.06 77.2644L1157.53 84.1509"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1332.93 739.681L1323.33 746.372"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1589.22 868.191L1579.61 874.883"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1437.44 486.577L1427.83 493.269"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1010.74 777.89L1001.13 784.581"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M850.347 205.334L840.74 212.026"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1480.7 260.388L1491.59 256.107"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1566.38 84.1511L1572.75 93.9749"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M843.979 616.439L850.347 626.262"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1455.98 439.78C1461.85 427.658 1483.66 410.688 1524.01 439.78C1564.36 468.869 1590.87 451.899 1599.08 439.78"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1535.91 500.977C1538.26 496.133 1546.97 489.354 1563.09 500.977C1579.21 512.596 1589.8 505.817 1593.08 500.977"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M786.961 917.233H1599.08"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1282.82 916.143C1292.01 916.143 1299.45 908.7 1299.45 899.519C1299.45 890.337 1292.01 882.894 1282.82 882.894C1273.64 882.894 1266.2 890.337 1266.2 899.519C1266.2 908.7 1273.64 916.143 1282.82 916.143Z"
              fill="black"
            />
            <path
              d="M1043.33 916.143C1052.51 916.143 1059.96 908.7 1059.96 899.519C1059.96 890.337 1052.51 882.894 1043.33 882.894C1034.15 882.894 1026.71 890.337 1026.71 899.519C1026.71 908.7 1034.15 916.143 1043.33 916.143Z"
              fill="black"
            />
            <path
              d="M1268.72 337.552L1269.94 341.552M1269.94 341.552L1274.73 357.18M1269.94 341.552L1210.54 354.635M1290.99 398.372L1335.53 551.686L1485.84 588.518L1456.29 697.721L1317.54 654.468C1293.84 646.331 1241.57 618.41 1222.04 571.816C1215.87 559.139 1201.77 506.008 1195.49 481.024"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1204.49 515.75L1146.08 765.422"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1282.83 403.435L1309.13 563.099L1482.23 600.099"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1222.66 574.222L1219.42 774.004L1110.28 761.055L1126.44 442.66"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1208.32 139.072C1221.52 150.176 1219.77 173.398 1217.25 183.621C1212.9 183.621 1210.64 184.979 1210.06 185.659C1213.07 176.051 1215.89 162.463 1207.05 163.53C1187.95 165.704 1177.84 161.784 1175.74 159.585C1176.87 155.329 1191.82 125.194 1208.32 139.072Z"
              fill="black"
            />
            <path
              d="M1215.97 162.863C1213.78 161.941 1171.35 156.716 1150.42 154.218"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1177.16 159.454C1173.96 167.962 1170 189.172 1179.78 205.943C1180.84 207.578 1182.05 208.862 1183.36 209.853C1190.67 215.615 1199.35 212.254 1202.78 209.853C1205.11 208.291 1207.53 205.8 1209.19 203.517C1210.32 201.913 1212.9 197.865 1214.16 194.498"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1209.94 202.614L1214.48 223.233M1185.23 211.951L1186.98 225.567"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1196.43 212.713C1192.18 214.347 1187.53 212.795 1185.73 211.815L1186.8 219.084C1199.47 223.005 1206.61 212.468 1208.27 206.261C1206.12 208.031 1200.68 211.08 1196.43 212.713Z"
              fill="black"
            />
            <path
              d="M1210.06 194.566C1212.91 195.059 1218.85 194.341 1220.22 189.827C1221.93 184.185 1217.76 180.794 1213 182.783"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1174.51 171.92C1176.78 171.92 1182.45 173.125 1184.15 177.222C1185.84 181.319 1183.85 191.92 1180.6 197.448C1182.31 196.961 1184.83 196.717 1188.57 191.92"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1193.73 175.251C1195.61 173.61 1200.48 171.405 1204.88 175.71"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1198.36 196.824C1197.42 199.134 1194.05 203.283 1188.18 201.408"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1210.36 189.413C1211.1 188.223 1213.42 185.943 1216.79 186.348"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1193.93 181.483C1195.54 179.427 1199.86 176.549 1204.17 181.483"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1173.99 181.111C1175.61 179.055 1179.92 176.177 1184.23 181.111"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1274.74 308.752L1295.49 343.344L1228.54 388.313C1218.62 388.313 1174.45 390.213 1170.24 390.535C1161.25 390.61 1163.48 398.233 1167.23 400.02L1187.43 407.711L1146.14 417.735C1140.11 419.963 1143.15 425.894 1146.74 425.616L1158.35 424.717C1156.37 425.752 1152.09 428.067 1150.75 429.051C1149.42 430.034 1148.73 431.337 1148.55 431.863C1146.82 436.946 1151.53 439.058 1154.73 437.774C1152 445.15 1159.42 446.901 1162.75 444.643C1160.18 448.442 1163.76 450.564 1167.61 450.013L1236.3 434.662L1308.94 385.24C1324.19 374.22 1355.9 354.706 1343.54 329.123C1331.17 303.541 1318.17 281.464 1318.17 281.464"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1199.05 183.315C1200.2 183.315 1201.14 182.378 1201.14 181.223C1201.14 180.068 1200.2 179.132 1199.05 179.132C1197.89 179.132 1196.96 180.068 1196.96 181.223C1196.96 182.378 1197.89 183.315 1199.05 183.315Z"
              fill="black"
            />
            <path
              d="M1179.11 182.942C1180.26 182.942 1181.2 182.005 1181.2 180.85C1181.2 179.695 1180.26 178.759 1179.11 178.759C1177.95 178.759 1177.02 179.695 1177.02 180.85C1177.02 182.005 1177.95 182.942 1179.11 182.942Z"
              fill="black"
            />
            <path
              d="M1213.58 187.12C1214.49 187.418 1215.91 188.665 1214.34 191.275"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1153.54 225.236L1185.25 221.417C1187.51 224.443 1194.12 230.174 1201.62 228.508C1209.12 226.841 1214.21 220.414 1214.65 217.613C1220.1 217.099 1231.67 216.055 1243.74 214.354C1268.54 210.986 1286.48 227.241 1292.35 235.789L1325.65 285.166L1278.96 319.231L1262.88 295.117L1270.92 340.283L1209.29 354.445L1190.15 238.733L1115.06 252.384C1129.09 232.776 1146.56 226.115 1153.54 225.236Z"
              fill="#FECB4B"
            />
            <path
              d="M1259.67 287.448L1256.34 269.599"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1161.7 445.221L1190.14 430.889M1155.16 437.652L1185.1 424.397M1157.01 425.091L1178.88 419.502"
              stroke="black"
              strokeWidth="3.09"
              strokeLinecap="round"
            />
            <path
              d="M1215.64 388.623L1189.78 239.084L958.93 279.584L984.165 458.098L1153.95 439.406"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M958.93 279.896L1163.61 396.102M1189.47 239.084L984.788 457.785"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1124.64 474.913L1126.87 443.727L1153.59 440.074C1154.53 445.282 1159.44 446.324 1161.78 446.191C1161.84 447.223 1164.33 449.294 1164.81 449.639C1165.15 449.894 1204.65 441.66 1225.09 437.374L1223.15 441.331L1124.64 474.913Z"
              fill="black"
            />
            <path
              d="M1051.2 855.127H1205.73V786.658H1155.28L1156.96 802.748C1148.73 803.886 1131.03 806.402 1126.05 807.366C1076.45 814.428 1055.48 842.15 1051.2 855.127Z"
              fill="black"
            />
            <path
              d="M1205.73 772.043V786.658M1205.73 786.658V855.127H1051.2C1055.48 842.15 1076.45 814.428 1126.05 807.366C1131.03 806.401 1148.73 803.886 1156.96 802.748L1155.28 786.658M1205.73 786.658H1155.28M1153.15 766.225L1155.28 786.658"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              d="M1258.53 819.001L1206.82 856.527V817.208L1258.53 819.001Z"
              fill="black"
            />
            <path
              d="M1533.09 782.059L1562.01 630.261L1494.75 617.449L1485.32 667.003L1501.43 668.364C1501.01 676.659 1500.17 694.518 1500.18 699.588C1497.84 749.642 1521.15 775.423 1533.09 782.059Z"
              fill="black"
            />
            <path
              d="M1479.18 614.311L1494.76 617.449M1494.76 617.449L1562.01 630.261L1533.09 782.059C1521.15 775.422 1497.84 749.642 1500.18 699.588C1500.17 694.518 1501.01 676.659 1501.43 668.364L1485.32 667.003M1494.76 617.449L1485.32 667.003M1464.84 665.275L1485.32 667.003"
              stroke="black"
              strokeWidth="3.09"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1414.91 852.347C1414.91 854.279 1413.59 856.443 1410.37 858.778C1407.19 861.087 1402.42 863.367 1396.15 865.566C1383.62 869.965 1365.43 873.945 1342.87 877.299C1297.75 883.997 1235.39 888.147 1166.47 888.147C1097.56 888.147 1035.19 883.997 990.077 877.299C967.511 873.945 949.319 869.965 936.796 865.566C930.527 863.367 925.755 861.087 922.575 858.778C919.358 856.443 918.034 854.279 918.034 852.347C918.034 850.415 919.358 848.252 922.575 845.917C925.755 843.608 930.527 841.328 936.796 839.128C949.319 834.729 967.511 830.747 990.077 827.396C1035.19 820.698 1097.56 816.547 1166.47 816.547C1235.39 816.547 1297.75 820.698 1342.87 827.396C1365.43 830.747 1383.62 834.729 1396.15 839.128C1402.42 841.328 1407.19 843.608 1410.37 845.917C1413.59 848.252 1414.91 850.415 1414.91 852.347Z"
              stroke="black"
              strokeWidth="3.09"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="1798.54"
                y1="-504.707"
                x2="1798.54"
                y2="1645.12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5691E7" />
                <stop offset="1" stopColor="#3366CC" />
              </linearGradient>
            </defs>
          </svg>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
