<template>
  <!-- attend_area -->
  <div class="attending_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
          <div class="main_attending_area">
            <div class="flower_1 d-none d-lg-block">
              <img src="img/appointment/flower-top.png" alt="" />
            </div>
            <div class="flower_2 d-none d-lg-block">
              <img src="img/appointment/flower-bottom.png" alt="" />
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="popup_box ">
                  <div class="popup_inner">
                    <div class="form_heading text-center">
                      <h3>Você confirma sua presença?</h3>
                      <p>Favor responder antes de 30 de Setembro</p>
                    </div>
                    <form action="#">
                      <div class="row">
                        <div class="col-xl-12">
                          <input type="text" placeholder="Seu Nome" />
                        </div>
                        <div class="col-xl-12">
                          <input type="text" placeholder="E-mail" />
                        </div>
                        <div class="col-xl-12">
                          <select class="form-select wide" id="default-select">
                            <option data-display="1 Guest">1 convidado</option>
                            <option value="1">2 convidado</option>
                            <option value="2">3 convidado</option>
                            <option value="3">4 convidado</option>
                          </select>
                        </div>
                        <div class="col-xl-12">
                          <textarea placeholder="Deixe um recado"></textarea>
                        </div>
                        <div class="col-xl-12">
                          <button type="submit" class="boxed_btn3">
                            Confirmar Presença
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / attend_area -->
</template>
