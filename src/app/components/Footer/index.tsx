/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  StyledFooterMain,
  StyledFooterPolicy,
  StyledFooterPolicyContainer,
  StyledFooterPolicyMain,
  StyledInput,
  StyledLanguage,
  StyledNav,
  StyledPaymentNetwork,
  StyledSection,
  StyledSocialBox,
  StyledSocialMain,
  StyledSocialMedia,
  StyledSubscribe,
} from "./styles";

type Props = {};

function Footer({}: Props) {
  return (
    <StyledFooterMain>
      <StyledSection>
        <StyledSubscribe>
          <div>
            <div>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1001 426"
                  xmlSpace="preserve"
                  width="56.39"
                  height="24"
                >
                  <path d="M191.1 292c-19.7 21.7-44.6 32.4-75 32.4-11.8 0-24.9-3.2-38.7-9.5s-24.1-15-30.8-26v32.4H.9V0h47v141.6c6.7-11.1 16.6-19.7 30.4-25.7 13.8-6.3 26.8-9.5 39.1-9.5 30.8 0 55.6 11.1 74.6 33.1 19.3 22.1 28.8 47.4 28.8 75.4-.1 29.7-9.9 55.4-29.7 77.1zm-144-76.6c0 18.5 5.9 34.3 17.4 47.4 11.8 12.6 27.2 18.9 45.8 18.9 18.5 0 33.9-6.3 45.4-18.9 11.8-13 17.8-28.8 17.8-47.4s-5.9-34.3-17.8-47.4c-11.4-13-26.8-19.3-45.4-19.3-18.6 0-33.9 6.3-45.8 19.3-11.5 13.1-17.4 28.9-17.4 47.4zM295.7 229.6c.4 15.8 6.7 28.8 18.9 39.5 12.2 10.3 26.4 15.4 42.6 15.4 26.4 0 45.4-11 56.8-32.8l33.9 22.5c-17.8 32.8-52.1 50.9-90 50.9-31.2 0-57.6-10.3-78.9-31.2-20.9-20.9-31.6-47.4-31.6-78.5 0-30.4 10.3-56 30.4-77.3s45.4-32 75.8-32c32 0 57.2 9.9 75.4 30 18.1 20.1 27.2 46.2 27.2 78.9 0 6.3-.4 11.1-.8 14.6H295.7zm2.3-35.5h110.5c-1.6-29.6-24.9-47.7-54.8-47.7-28.8 0-51.3 18.9-55.7 47.7zM498.1 20.5c12.2-12.6 31.2-12.6 43.4 0 12.2 12.2 12.2 31.2 0 43.4s-31.2 12.2-43.4 0c-12.3-12.2-12.3-31.1 0-43.4zm45.3 300.7h-47V110.5h47v210.7zM648.4 110.5V346c0 53.3-25.7 79.7-76.5 79.7-7.5 0-14.6-1.2-21.3-3.2v-41c3.5 1.2 7.5 1.6 11.8 1.6 28 0 38.7-10.7 38.7-42.2V110.5h47.3zm7.5-68.3c0 17-14.2 30.8-31.6 30.8-17 0-30.8-13.8-30.8-30.8S607.3 11 624.3 11c17.4.1 31.6 14.2 31.6 31.2zM737.2 229.6c.4 15.8 6.7 28.8 18.9 39.5 12.2 10.3 26.4 15.4 42.6 15.4 26.4 0 45.4-11 56.8-32.8l33.9 22.5c-17.8 32.8-52.1 50.9-90 50.9-31.2 0-57.6-10.3-78.9-31.2-20.8-20.9-31.5-47.3-31.5-78.5 0-30.4 10.3-56 30.4-77.3s45.4-32 75.8-32c32 0 57.2 9.9 75.4 30 18.2 20.1 27.2 46.2 27.2 78.9 0 6.3-.4 11.1-.8 14.6H737.2zm2.3-35.5H850c-1.6-29.6-24.9-47.7-54.8-47.7-28.9 0-51.3 18.9-55.7 47.7z"></path>
                  <path d="M1001 291.4c0 9-6.9 15.7-12.8 21.6-5.9 5.9-12.6 10.8-21.7 10.8s-15.1-5.5-21-11.5c-5.9-5.9-10-12-10-21s-.7-19.8 5.3-25.7c5.9-5.9 16.7-9.1 25.7-9.1s17.2 5.8 23.1 11.8c5.9 5.9 11.4 14 11.4 23.1z"></path>
                </svg>
              </a>
            </div>
            <div>
              <p>Arayı açmayalım!</p>
              <p>
                Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
              </p>
            </div>
            <div>
              <form action="">
                <div inputMode="email">
                  <StyledInput type="email" placeholder="e-mail adresin" />
                </div>
                <button style={{ borderRadius: "20px" }}>Gönder</button>
              </form>
              <p>
                Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul
                ediyor ve beije&apos;den haber almayı onaylıyorum.
              </p>
            </div>
          </div>
        </StyledSubscribe>
        <StyledSocialMain>
          <StyledNav>
            <div>
              <a href="">
                <p>Paketler</p>
              </a>
            </div>
            <div>
              <a href="">
                <p>Blog</p>
              </a>
            </div>
            <div>
              <a href="">
                <p>Deneme Paketi</p>
              </a>
            </div>
            <div>
              <a href="">
                <p>Sıkça Sorulan Sorular</p>
              </a>
            </div>
            <div>
              <a href="">
                <p>Ekibimize Katıl</p>
              </a>
            </div>
            <div>
              <a href="">
                <p>Biz kimiz?</p>
              </a>
            </div>
          </StyledNav>
          <div>
            <StyledSocialMedia>
              <a href="">
                <StyledSocialBox>
                  <p>Facebook</p>
                </StyledSocialBox>
              </a>
              <a href="">
                <StyledSocialBox>
                  <p>Instagram</p>
                </StyledSocialBox>
              </a>
              <a href="">
                <StyledSocialBox>
                  <p>Twitter</p>
                </StyledSocialBox>
              </a>
              <a href="">
                <StyledSocialBox>
                  <p>Linkedin</p>
                </StyledSocialBox>
              </a>
              <a href="">
                <StyledSocialBox>
                  <p>Spotify</p>
                </StyledSocialBox>
              </a>
            </StyledSocialMedia>
          </div>
        </StyledSocialMain>
      </StyledSection>
      <StyledFooterPolicyContainer>
        <div>
          <StyledFooterPolicyMain>
            <h6>2023 beije. Tüm hakları saklıdır.</h6>
            <StyledFooterPolicy>
              <div>
                <a href="">
                  <p>KVKK Aydınlatma Metni</p>
                </a>
              </div>
              <div>
                <a href="">
                  <p>Üyelik Sözleşmesi</p>
                </a>
              </div>
              <div>
                <a href="">
                  <p>Gizlilik Politikası</p>
                </a>
              </div>
              <div>
                <a href="">
                  <p>Çerez Politikası</p>
                </a>
              </div>
              <div>
                <a href="">
                  <p>Test Sonuçları</p>
                </a>
              </div>
            </StyledFooterPolicy>
            <div>
              <a href="">
                <StyledLanguage>EN</StyledLanguage>|
                <StyledLanguage>TR</StyledLanguage>
              </a>
              <a href=""></a>
            </div>
          </StyledFooterPolicyMain>
          <StyledPaymentNetwork>
            <img
              alt="MasterCard"
              src="https://beije.co/_next/static/media/Master.2bedc059.svg"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              loading="lazy"
            />
            <img
              alt="VISA"
              src="https://beije.co/_next/static/media/Visa.9f651691.svg"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              loading="lazy"
            ></img>
          </StyledPaymentNetwork>
        </div>
      </StyledFooterPolicyContainer>
    </StyledFooterMain>
  );
}

export default Footer;
