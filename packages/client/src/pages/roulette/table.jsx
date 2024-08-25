import React, { memo } from 'react';

const Table = memo(({ onClick }) => (
  <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="160" rx="10" fill="forestgreen" />
    <g>
      <rect x='20' y='40' height='30' width='20' fill='forestgreen' onClick={ () => onClick("00") }/>
      <text x='30' y='60'>00</text>

      <rect x='20' y='70' height='30' width='20' fill='forestgreen' onClick={ () => onClick("0") }/>
      <text x='30' y='90'>0</text>

      <rect x='40' y='40' width='20' height='20' fill="red" onClick={ () => onClick("3") }/>
      <text x='50' y='55'>3</text>
      <rect x='40' y='60' width='20' height='20' fill="black" onClick={ () => onClick("2") }/>
      <text x='50' y='75'>2</text>
      <rect x='40' y='80' width='20' height='20' fill="red" onClick={ () => onClick("1") }/>
      <text x='50' y='95'>1</text>

      <rect x='60' y='40' width='20' height='20' fill="black" onClick={ () => onClick("6") }/>
      <text x='70' y='55'>6</text>
      <rect x='60' y='60' width='20' height='20' fill="red" onClick={ () => onClick("5") }/>
      <text x='70' y='75'>5</text>
      <rect x='60' y='80' width='20' height='20' fill="black" onClick={ () => onClick("4") }/>
      <text x='70' y='95'>4</text>

      <rect x='80' y='40' width='20' height='20' fill="red" onClick={ () => onClick("9") }/>
      <text x='90' y='55'>9</text>
      <rect x='80' y='60' width='20' height='20' fill="black" onClick={ () => onClick("8") } />
      <text x='90' y='75'>8</text>
      <rect x='80' y='80' width='20' height='20' fill="red" onClick={ () => onClick("7") }/>
      <text x='90' y='95'>7</text>

      <rect x='100' y='40' width='20' height='20' fill="red" onClick={ () => onClick("12") }/>
      <text x='110' y='55'>12</text>
      <rect x='100' y='60' width='20' height='20' fill="black" onClick={ () => onClick("11") } />
      <text x='110' y='75'>11</text>
      <rect x='100' y='80' width='20' height='20' fill="black" onClick={ () => onClick("10") } />
      <text x='110' y='95'>10</text>

      <rect x='120' y='40' width='20' height='20' fill="black" onClick={ () => onClick("15") } />
      <text x='130' y='55'>15</text>
      <rect x='120' y='60' width='20' height='20' fill="red" onClick={ () => onClick("14") }/>
      <text x='130' y='75'>14</text>
      <rect x='120' y='80' width='20' height='20' fill="black" onClick={ () => onClick("13") } />
      <text x='130' y='95'>13</text>

      <rect x='140' y='40' width='20' height='20' fill="red" onClick={ () => onClick("18") }/>
      <text x='150' y='55'>18</text>
      <rect x='140' y='60' width='20' height='20' fill="black" onClick={ () => onClick("17") } />
      <text x='150' y='75'>17</text>
      <rect x='140' y='80' width='20' height='20' fill="red" onClick={ () => onClick("16") }/>
      <text x='150' y='95'>16</text>

      <rect x='160' y='40' width='20' height='20' fill="red" onClick={ () => onClick("21") }/>
      <text x='170' y='55'>21</text>
      <rect x='160' y='60' width='20' height='20' fill="black" onClick={ () => onClick("20") } />
      <text x='170' y='75'>20</text>
      <rect x='160' y='80' width='20' height='20' fill="red" onClick={ () => onClick("19") }/>
      <text x='170' y='95'>19</text>

      <rect x='180' y='40' width='20' height='20' fill="black" onClick={ () => onClick("24") } />
      <text x='190' y='55'>24</text>
      <rect x='180' y='60' width='20' height='20' fill="red" onClick={ () => onClick("23") }/>
      <text x='190' y='75'>23</text>
      <rect x='180' y='80' width='20' height='20' fill="black" onClick={ () => onClick("22") } />
      <text x='190' y='95'>22</text>

      <rect x='200' y='40' width='20' height='20' fill="red" onClick={ () => onClick("27") }/>
      <text x='210' y='55'>27</text>
      <rect x='200' y='60' width='20' height='20' fill="black" onClick={ () => onClick("26") } />
      <text x='210' y='75'>26</text>
      <rect x='200' y='80' width='20' height='20' fill="red" onClick={ () => onClick("25") }/>
      <text x='210' y='95'>25</text>

      <rect x='220' y='40' width='20' height='20' fill="red" onClick={ () => onClick("30") }/>
      <text x='230' y='55'>30</text>
      <rect x='220' y='60' width='20' height='20' fill="black" onClick={ () => onClick("29") } />
      <text x='230' y='75'>29</text>
      <rect x='220' y='80' width='20' height='20' fill="black" onClick={ () => onClick("28") } />
      <text x='230' y='95'>28</text>

      <rect x='240' y='40' width='20' height='20' fill="black" onClick={ () => onClick("33") } />
      <text x='250' y='55'>33</text>
      <rect x='240' y='60' width='20' height='20' fill="red" onClick={ () => onClick("32") }/>
      <text x='250' y='75'>32</text>
      <rect x='240' y='80' width='20' height='20' fill="black" onClick={ () => onClick("31") } />
      <text x='250' y='95'>31</text>

      <rect x='260' y='40' width='20' height='20' fill="red" onClick={ () => onClick("36") }/>
      <text x='270' y='55'>36</text>
      <rect x='260' y='60' width='20' height='20' fill="black" onClick={ () => onClick("35") } />
      <text x='270' y='75'>35</text>
      <rect x='260' y='80' width='20' height='20' fill="red" onClick={ () => onClick("34") }/>
      <text x='270' y='95'>34</text>
    </g>

    <g>
      <rect x='40' y='20' width='120' height='20' fill="forestgreen" onClick={ () => onClick("1 to 18") } />
      <text x='100' y='33'>1 to 18</text>

      <rect x='160' y='20' width='120' height='20' fill="forestgreen" onClick={ () => onClick("19 to 36") } />
      <text x='220' y='33'>19 to 36</text>

      <rect x='40' y='100' width='80' height='20' fill="forestgreen" onClick={ () => onClick("1 to 12") } />
      <text x='80' y='113'>1 to 12</text>

      <rect x='120' y='100' width='80' height='20' fill="forestgreen" onClick={ () => onClick("13 to 24") } />
      <text x='160' y='113'>13 to 24</text>
      
      <rect x='200' y='100' width='80' height='20' fill="forestgreen" onClick={ () => onClick("25 to 36") } />
      <text x='240' y='113'>25 to 36</text>
    </g>

    <g>
      <rect x='40' y='120' width='60' height='20' fill='forestgreen' onClick={ () => onClick("EVEN") }/>
      <text x='70' y='135'>EVEN</text>

      <rect x='100' y='120' width='60' height='20' fill='red' onClick={ () => onClick("RED") }/>
      <text x='130' y='135'>RED</text>

      <rect x='160' y='120' width='60' height='20' fill='black' onClick={ () => onClick("BLACK") }/>
      <text x='190' y='135'>BLACK</text>

      <rect x='220' y='120' width='60' height='20' fill='forestgreen' onClick={ () => onClick("ODD") }/>
      <text x='250' y='135'>ODD</text>
    </g>

    <g>
      <rect x='280' y='40' height='20' width='20' fill='forestgreen' onClick={ () => onClick("Col3") }/>
      <text x='290' y='55'>2in1</text>
      <rect x='280' y='60' height='20' width='20' fill='forestgreen' onClick={ () => onClick("Col2") }/>
      <text x='290' y='75'>2in1</text>
      <rect x='280' y='80' height='20' width='20' fill='forestgreen' onClick={ () => onClick("Col1") }/>
      <text x='290' y='95'>2in1</text>
    </g>
  </svg>
));

export default Table;
