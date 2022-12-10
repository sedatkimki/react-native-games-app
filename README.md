# react-native-games-app
Bu proje React-Native(expo) ve redux toolkit kullanılarak geliştirilmiştir. React-Native cross platform geliştirmeye uygun olsa da bu uygulama sadece ios üzerinde test edildi. Bu sebeple android ve web platformunda düzgün çalışmayabilir.

## Ekran görüntüleri

![WhatsApp Image 2022-12-10 at 17.13.53.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd726b87-826f-4d16-8873-e17d04c66780/WhatsApp_Image_2022-12-10_at_17.13.53.jpeg)

![WhatsApp Image 2022-12-10 at 17.13.55.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe0cd410-465c-4dda-8dfd-c874575c7a6a/WhatsApp_Image_2022-12-10_at_17.13.55.jpeg)

![WhatsApp Image 2022-12-10 at 17.13.53 (1).jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a70e371d-d6b9-4249-965a-fc5e1c218ee9/WhatsApp_Image_2022-12-10_at_17.13.53_(1).jpeg)

![WhatsApp Image 2022-12-10 at 17.13.54 (1).jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2cb0cd7-87ee-4c01-bae9-51a4a900df01/WhatsApp_Image_2022-12-10_at_17.13.54_(1).jpeg)

![WhatsApp Image 2022-12-10 at 17.13.54.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7444da7a-424e-4ed9-8e3e-e1512668e1cc/WhatsApp_Image_2022-12-10_at_17.13.54.jpeg)

![WhatsApp Image 2022-12-10 at 17.13.55 (1).jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/66fe1029-be71-4843-8ee3-98b893240d23/WhatsApp_Image_2022-12-10_at_17.13.55_(1).jpeg)

## Kurulum

Bu uygulamaya çalıştırmak için android veya ios cihazınıza *Expo Go* uygulamasını indirip kurmalısınız. Veya simulator de çalıştırabilirsiniz fakat bu uygulama geliştirilirken sadece ios yüklü bir cihazda test edildi herhangi bir simulatorde test yapılmadı. Bu sebeple sorunlar oluşulabilir.

Uygulamanın API bağlantılarını yapmak için root klasöre `.env` dosyasını oluşturup `API_ENDPOINT` ve `API_KEY` değişkenlerini oluşturun.

Uygulama sadece `/games` endpointini kullandığı için endpoint değişkenine [`https://api.rawg.io/api/games`](https://api.rawg.io/api/games) linkini girmeniz yeterlidir.

Projede yararlanılan node packageleri yüklemek için `yarn install` komutunu kullanın. Ardından expo uygulamasını çalıştırmak için `yarn start` komutunu kullanmanız yeterli olacaktır.

Terminalde verilen karekodu telefonunuzdan okutarak expo go uygulaması ile uygulamayı kendi cihazınızda çalıştırabilirsiniz.

Ayrıca simulatorde çalıştırmak için terminalde verilen expo’nun diğer komutlarından yararlanabilirsiniz.

## Klasör yapısı

- `src:` Bu klasör projenin tüm ana bileşenlerini içerir
    - `components:` Proje içinde kullanılan komponentler burada tanımlanır
        - `common:` Projedeki tüm ekranlar tarafından ortak kullanılan komponentler burada
            - `DeleteButton:` Swipe-to-delete için kullanılan button
            - `EmptyComponent:` Listelerde eleman olmadığında kullanılan komponent
            - `GameListItem:` Oyunların gösterildiği liste elemanı komponenti
            - `Loading:` Yükleme ekranlarında kullanılan komponent
    - `navigations:` Uygulama içindeki navigasyon burada tutulur
        - `index.js:` Root navigasyon dosyası
        - `GamesNavigator.js:` Games sekmesindeki navigasyonlar
        - `FavouritesNavigator.js:` Favourites sekmesindeki navigasyonlar
    - `redux:` Uygulama içindeki verilerin tutulduğu store yapısı burada oluşturulur
        - `store.js:` Redux storage burada tanımlanır
        - `slices:` Uygulamanın bölümlerine göre oluşturulan sliceslar burada tanımlanır
    - `screens:` Uygulama içindeki her ekran burada oluşturulur
        - `favourites:` Favoriler ekranı
        - `gameDetails:` Oyun detaylarının gösterildiği ekran
        - `games:` Tüm oyunların listelendiği ana ekran
- `assets:` Tüm assetler burada tutulur
- `App.js:` Projenin ana javascript dosyası tüm projeyi kapsayan komponent

## Redux

Bu uygulama offline-first mimari ile geliştirilmiştir. Bu mimarinin kurulması için redux-toolkit ve redux-persist  frameworklerinden yararlanılmıştır.

Redux persist ile tüm store react native yardımı ile cihazın kendi local storage’ında tutuluyor. İnternet bağlantısı koptuğunda local storageta bulunan veri ile uygulama çalışmaya devam edebiliyor.
