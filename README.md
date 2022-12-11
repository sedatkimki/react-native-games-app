# react-native-games-app
Bu proje React-Native(expo) ve redux toolkit kullanılarak geliştirilmiştir. React-Native cross platform geliştirmeye uygun olsa da bu uygulama sadece ios üzerinde test edildi. Bu sebeple android ve web platformunda düzgün çalışmayabilir.


## Özellikler

1. Oyunlar infinite scroll ile listelenir. 
2. Search bar kullanılarak oyunlar içinde arama yapılabilir. Arama sonuçları da paginateli ve infinite scroll şeklinde listelenir
3. Listelenen oyunlara tıklandığında oyun detayları sayfası açılır. 
4. Oyun detay sayfasında oyunun resmi, ismi, açıklaması, reddit sayfası ve websitesi bulunur.
5. Ayrıca oyun detay sayfasında oyun favoriler listesine eklenebilir veya çıkarılabilir.
6. Favoriler sayfasında favorilere eklenen oyunlar listelenir. 
7. Favoriler sayfasında favoriye eklenen oyunların sayısı gösterilir.
8. Favoriler sayfasında listelenen oyunlara tıklandığında aynı oyunlar sayfasındaki gibi oyunun detay sayfasına gidilebilir
9. Listelenen oyunları kullanıcı dilerse favori listesinden, sola sürükleyerek çıkarabilir.

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
