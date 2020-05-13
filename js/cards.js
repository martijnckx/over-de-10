const cards = [[`
  <div class="card ace">
    <div class="corner top">
      <span class="number">1</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit middle_center">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">1</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card two">
    <div class="front">
      <div class="corner top">
        <span class="number">2</span>
        <span>&#9827;</span>
      </div>

      <span class="suit top_center">&#9827;</span>
      <span class="suit bottom_center">&#9827;</span>

      <div class="corner bottom">
        <span class="number">2</span>
        <span>&#9827;</span>
      </div>
    </div>
  </div>
  `,`
  <div class="card three">
    <div class="corner top">
      <span class="number">3</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_center">&#9827;</span>
    <span class="suit middle_center">&#9827;</span>
    <span class="suit bottom_center">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">3</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card four">
    <div class="corner top">
      <span class="number">4</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">4</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card five">
    <div class="corner top">
      <span class="number">5</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    <span class="suit middle_center">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">5</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card six">
    <div class="corner top">
      <span class="number">6</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    <span class="suit middle_left">&#9827;</span>
    <span class="suit middle_right">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">6</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card seven">
    <div class="corner top">
      <span class="number">7</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    <span class="suit middle_left">&#9827;</span>
    <span class="suit middle_top">&#9827;</span>
    <span class="suit middle_right">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">7</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card eight">
    <div class="corner top">
      <span class="number">8</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    <span class="suit middle_left">&#9827;</span>
    <span class="suit middle_top">&#9827;</span>
    <span class="suit middle_right">&#9827;</span>
    <span class="suit middle_bottom">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">8</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card nine">
    <div class="corner top">
      <span class="number">9</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    
    <span class="suit middle_top_left">&#9827;</span>
    <span class="suit middle_center">&#9827;</span>
    <span class="suit middle_top_right">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    <span class="suit middle_bottom_left">&#9827;</span>
    <span class="suit middle_bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">9</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card ten">
    <div class="corner top">
      <span class="number">10</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit top_left">&#9827;</span>
    <span class="suit top_right">&#9827;</span>
    
    <span class="suit middle_top_left">&#9827;</span>
    <span class="suit middle_top_center">&#9827;</span>
    <span class="suit middle_top_right">&#9827;</span>
    <span class="suit bottom_left">&#9827;</span>
    <span class="suit bottom_right">&#9827;</span>
    <span class="suit middle_bottom_center">&#9827;</span>
    <span class="suit middle_bottom_left">&#9827;</span>
    <span class="suit middle_bottom_right">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">10</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card jack">
    <div class="corner top">
      <span class="number">J</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit middle_center">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">J</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card queen">
    <div class="corner top">
      <span class="number">Q</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit middle_center">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">Q</span>
      <span>&#9827;</span>
    </div>
  </div>
  `,`
  <div class="card king">
    <div class="corner top">
      <span class="number">K</span>
      <span>&#9827;</span>
    </div>
    
    <span class="suit middle_center">&#9827;</span>
    
    <div class="corner bottom">
      <span class="number">K</span>
      <span>&#9827;</span>
    </div>
  </div>
  `],[`
  <div class="card diamond ace">
    <div class="corner top">
      <span class="number">1</span>
      <span>&#9830;</span>
    </div>

    <span class="suit middle_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">1</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond two">
    <div class="corner top">
      <span class="number">2</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_center">&#9830;</span>
    <span class="suit bottom_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">2</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond three">
    <div class="corner top">
      <span class="number">3</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_center">&#9830;</span>
    <span class="suit middle_center">&#9830;</span>
    <span class="suit bottom_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">3</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond four">
    <div class="corner top">
      <span class="number">4</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">4</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond five">
    <div class="corner top">
      <span class="number">5</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>
    <span class="suit middle_center">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">5</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond six">
    <div class="corner top">
      <span class="number">6</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>
    <span class="suit middle_left">&#9830;</span>
    <span class="suit middle_right">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">6</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond seven">
    <div class="corner top">
      <span class="number">7</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>
    <span class="suit middle_left">&#9830;</span>
    <span class="suit middle_top">&#9830;</span>
    <span class="suit middle_right">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">7</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond eight">
    <div class="corner top">
      <span class="number">8</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>
    <span class="suit middle_left">&#9830;</span>
    <span class="suit middle_top">&#9830;</span>
    <span class="suit middle_right">&#9830;</span>
    <span class="suit middle_bottom">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">8</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond nine">
    <div class="corner top">
      <span class="number">9</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>

    <span class="suit middle_top_left">&#9830;</span>
    <span class="suit middle_center">&#9830;</span>
    <span class="suit middle_top_right">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>
    <span class="suit middle_bottom_left">&#9830;</span>
    <span class="suit middle_bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">9</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond ten">
    <div class="corner top">
      <span class="number">10</span>
      <span>&#9830;</span>
    </div>

    <span class="suit top_left">&#9830;</span>
    <span class="suit top_right">&#9830;</span>

    <span class="suit middle_top_left">&#9830;</span>
    <span class="suit middle_top_center">&#9830;</span>
    <span class="suit middle_top_right">&#9830;</span>
    <span class="suit bottom_left">&#9830;</span>
    <span class="suit bottom_right">&#9830;</span>
    <span class="suit middle_bottom_center">&#9830;</span>
    <span class="suit middle_bottom_left">&#9830;</span>
    <span class="suit middle_bottom_right">&#9830;</span>

    <div class="corner bottom">
      <span class="number">10</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond jack">
    <div class="corner top">
      <span class="number">J</span>
      <span>&#9830;</span>
    </div>

    <span class="suit middle_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">J</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond queen">
    <div class="corner top">
      <span class="number">Q</span>
      <span>&#9830;</span>
    </div>

    <span class="suit middle_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">Q</span>
      <span>&#9830;</span>
    </div>
  </div>
  `,`
  <div class="card diamond king">
    <div class="corner top">
      <span class="number">K</span>
      <span>&#9830;</span>
    </div>

    <span class="suit middle_center">&#9830;</span>

    <div class="corner bottom">
      <span class="number">K</span>
      <span>&#9830;</span>
    </div>
  </div>
  `],[`
  <div class="card ace">
    <div class="corner top">
      <span class="number">1</span>
      <span>&#9824;</span>
    </div>

    <span class="suit middle_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">1</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card two">
    <div class="corner top">
      <span class="number">2</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_center">&#9824;</span>
    <span class="suit bottom_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">2</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card three">
    <div class="corner top">
      <span class="number">3</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_center">&#9824;</span>
    <span class="suit middle_center">&#9824;</span>
    <span class="suit bottom_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">3</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card four">
    <div class="corner top">
      <span class="number">4</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">4</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card five">
    <div class="corner top">
      <span class="number">5</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>
    <span class="suit middle_center">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">5</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card six">
    <div class="corner top">
      <span class="number">6</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>
    <span class="suit middle_left">&#9824;</span>
    <span class="suit middle_right">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">6</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card seven">
    <div class="corner top">
      <span class="number">7</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>
    <span class="suit middle_left">&#9824;</span>
    <span class="suit middle_top">&#9824;</span>
    <span class="suit middle_right">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">7</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card eight">
    <div class="corner top">
      <span class="number">8</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>
    <span class="suit middle_left">&#9824;</span>
    <span class="suit middle_top">&#9824;</span>
    <span class="suit middle_right">&#9824;</span>
    <span class="suit middle_bottom">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">8</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card nine">
    <div class="corner top">
      <span class="number">9</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>

    <span class="suit middle_top_left">&#9824;</span>
    <span class="suit middle_center">&#9824;</span>
    <span class="suit middle_top_right">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>
    <span class="suit middle_bottom_left">&#9824;</span>
    <span class="suit middle_bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">9</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card ten">
    <div class="corner top">
      <span class="number">10</span>
      <span>&#9824;</span>
    </div>

    <span class="suit top_left">&#9824;</span>
    <span class="suit top_right">&#9824;</span>

    <span class="suit middle_top_left">&#9824;</span>
    <span class="suit middle_top_center">&#9824;</span>
    <span class="suit middle_top_right">&#9824;</span>
    <span class="suit bottom_left">&#9824;</span>
    <span class="suit bottom_right">&#9824;</span>
    <span class="suit middle_bottom_center">&#9824;</span>
    <span class="suit middle_bottom_left">&#9824;</span>
    <span class="suit middle_bottom_right">&#9824;</span>

    <div class="corner bottom">
      <span class="number">10</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card jack">
    <div class="corner top">
      <span class="number">J</span>
      <span>&#9824;</span>
    </div>

    <span class="suit middle_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">J</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card queen">
    <div class="corner top">
      <span class="number">Q</span>
      <span>&#9824;</span>
    </div>

    <span class="suit middle_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">Q</span>
      <span>&#9824;</span>
    </div>
  </div>
  `,`
  <div class="card king">
    <div class="corner top">
      <span class="number">K</span>
      <span>&#9824;</span>
    </div>

    <span class="suit middle_center">&#9824;</span>

    <div class="corner bottom">
      <span class="number">K</span>
      <span>&#9824;</span>
    </div>
  </div>
  `],[`
  <div class="card heart ace">
    <div class="corner top">
      <span class="number">1</span>
      <span>&#9829;</span>
    </div>

    <span class="suit middle_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">1</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart two">
    <div class="corner top">
      <span class="number">2</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_center">&#9829;</span>
    <span class="suit bottom_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">2</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart three">
    <div class="corner top">
      <span class="number">3</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_center">&#9829;</span>
    <span class="suit middle_center">&#9829;</span>
    <span class="suit bottom_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">3</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart four">
    <div class="corner top">
      <span class="number">4</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">4</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart five">
    <div class="corner top">
      <span class="number">5</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>
    <span class="suit middle_center">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">5</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart six">
    <div class="corner top">
      <span class="number">6</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>
    <span class="suit middle_left">&#9829;</span>
    <span class="suit middle_right">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">6</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart seven">
    <div class="corner top">
      <span class="number">7</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>
    <span class="suit middle_left">&#9829;</span>
    <span class="suit middle_top">&#9829;</span>
    <span class="suit middle_right">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">7</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart eight">
    <div class="corner top">
      <span class="number">8</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>
    <span class="suit middle_left">&#9829;</span>
    <span class="suit middle_top">&#9829;</span>
    <span class="suit middle_right">&#9829;</span>
    <span class="suit middle_bottom">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">8</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart nine">
    <div class="corner top">
      <span class="number">9</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>

    <span class="suit middle_top_left">&#9829;</span>
    <span class="suit middle_center">&#9829;</span>
    <span class="suit middle_top_right">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>
    <span class="suit middle_bottom_left">&#9829;</span>
    <span class="suit middle_bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">9</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart ten">
    <div class="corner top">
      <span class="number">10</span>
      <span>&#9829;</span>
    </div>

    <span class="suit top_left">&#9829;</span>
    <span class="suit top_right">&#9829;</span>

    <span class="suit middle_top_left">&#9829;</span>
    <span class="suit middle_top_center">&#9829;</span>
    <span class="suit middle_top_right">&#9829;</span>
    <span class="suit bottom_left">&#9829;</span>
    <span class="suit bottom_right">&#9829;</span>
    <span class="suit middle_bottom_center">&#9829;</span>
    <span class="suit middle_bottom_left">&#9829;</span>
    <span class="suit middle_bottom_right">&#9829;</span>

    <div class="corner bottom">
      <span class="number">10</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart jack">
    <div class="corner top">
      <span class="number">J</span>
      <span>&#9829;</span>
    </div>

    <span class="suit middle_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">J</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart queen">
    <div class="corner top">
      <span class="number">Q</span>
      <span>&#9829;</span>
    </div>

    <span class="suit middle_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">Q</span>
      <span>&#9829;</span>
    </div>
  </div>
  `,`
  <div class="card heart king">
    <div class="corner top">
      <span class="number">K</span>
      <span>&#9829;</span>
    </div>

    <span class="suit middle_center">&#9829;</span>

    <div class="corner bottom">
      <span class="number">K</span>
      <span>&#9829;</span>
    </div>
  </div>
  `],
  [
    `<div class="sbcard c1">1</div>`,
    `<div class="sbcard c2">2</div>`,
    `<div class="sbcard c3">3</div>`,
    `<div class="sbcard c4">4</div>`,
    `<div class="sbcard c5">5</div>`,
    `<div class="sbcard c6">6</div>`,
    `<div class="sbcard c7">7</div>`,
    `<div class="sbcard c8">8</div>`,
    `<div class="sbcard c9">9</div>`,
    `<div class="sbcard c10">10</div>`,
    `<div class="sbcard c11">11</div>`,
    `<div class="sbcard c12">12</div>`,
    `<div class="sbcard c13">13</div>`,
    `<div class="sbcard c14">14</div>`,
    `<div class="sbcard c15">15</div>`,
    `<div class="sbcard c16">16</div>`,
    `<div class="sbcard c17">17</div>`,
    `<div class="sbcard c18">18</div>`,
    `<div class="sbcard c19">19</div>`,
    `<div class="sbcard c20">20</div>`,
  ]
];