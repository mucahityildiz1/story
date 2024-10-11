// Açıklama : Hikayeniz kademe kademe ilerlemelidir.Her kademede kullanıcıya soru sorulacak. 
// Sorularınıza göre belirlediğiniz cevap seçenekleri olacak.
// Örn: yürüyüş yapacağım, acaba bugün nereye gitsem? 
// —- a= ormana, b= deniz kenarınaKullanıcının verdiği cevaplara göre hikaye ilerleyecek
//  ve her seçimde hikaye farklı bir yoldan giderek sizin belirlediğiniz farklı sonlara ulaşacak.
//  Hikaye ve konu için chatgpt'den yardım alabilirsiniz.
//  Her bir cevaptan sonra en az 5 soru olması gerekiyor.

// let story = prompt("Bir gün, karanlık bir ormanda yürüyüş yapıyorsun. Karşına iki yol çıkıyor. \n Nereye gitmek istersin? \na) Soldaki dar patikaya sap.\nb) Sağdaki geniş yola devam et.");

// if (story === "a") {
//   story = prompt('Dar patikaya sapıyorsun ve parlayan bir taş buluyorsun.\n Ne yapacaksın?\na) Taşı al.\nb) Taşı incele. ');
// } else if (story === "b") {
//   story = prompt('Geniş yolda yürürken bir çukur gördün.\na) Çukura bakmaya karar ver. \nb) Çukuru atla ve yoluna devam et.');

// } if (story === "a") {
//   story = prompt('Taşı alıyorsun ve aniden bir kapı açılıyor. İçeride renkli ışıklarla dolu bir odaya adım atıyorsun. \nİçeride ne yapacaksın?\na) Odayı keşfet.\nb) Kapıyı kapatıp geri dön.')
// } else if (story === "b") {
//   story = prompt('Semboller dikkatini çekiyor ve bir harita buluyorsun.\nHaritayı kullanacak mısın?\na) Haritayı takip et.\nb) Haritayı cebine koyup devam et.')
// }if (story === "a") {
//   story = prompt('Geniş yolda ilerliyorsun ve eski bir köprüye varıyorsun.\nNe yapacaksın?\na) Köprüyü geç.\nb) Köprüyü incelemek için dur.')
// } else if (story === "b") {
//   story = prompt('Köprüyü geçince, büyüleyici bir göl ile karşılaşıyorsun.\nGölde ne yapacaksın?\na) Yüz.\nb) Gölün etrafında yürüyüş yap.')
// }if (story === "a") {
//   story = prompt('Işığın kaynağına yaklaşınca, bir peri belirmeye başlıyor.\nPeriye ne diyeceksin?\na) "Bana yardım eder misin?"\nb) "Kimsin sen?"')
// } else if (story === "b") {
//   story = prompt('Eğer "Ben cesurum, bana sırlarını anlat!" dersen: \nPeri seni büyülü bitkilere götürüyor.\nNe yapacaksın?\na) Bitkileri incele.\nb) Bir tanesini al.')
// }if (story === "a") {
//   story = prompt('Eğer "Sadece merak ettim, başka bir şeyle ilgileniyorum." dersen:\nPeri üzgün bir şekilde başını sallıyor.\nNereye gitmek istersin?\na) Geri köprüye dön.\nb) Dar patikaya geri dön.')
// } else if (story === "b") {
//   story = prompt('Eğer "Evet, ama bir görevin var." dersen:\nPeri sana üç nadir çiçek bulmanı söylüyor.\nNe yapacaksın?\na) Hemen yola çık.\nb) Önce periyle daha fazla konuş.')
// }if (story === "a") {
//   story = toString('Öldün')
// } else if (story === "b") {
//   story = prompt('yaşıyorsun.')
// }

let story = prompt("Bir gün, karanlık bir ormanda yürüyüş yapıyorsun. Karşına iki yol çıkıyor. \n Nereye gitmek istersin? \na) Soldaki dar patikaya sap.\nb) Sağdaki geniş yola devam et.");

if (story === "a") {
  story = prompt('Dar patikaya sapıyorsun ve parlayan bir taş buluyorsun.\n Ne yapacaksın?\na) Taşı al.\nb) Taşı incele.');
  
  if (story === "a") {
    story = prompt('Taşı alıyorsun ve aniden bir kapı açılıyor. İçeride renkli ışıklarla dolu bir odaya adım atıyorsun. \nİçeride ne yapacaksın?\na) Odayı keşfet.\nb) Kapıyı kapatıp geri dön.');
    
    if (story === "a") {
      story = prompt('Odayı keşfediyorsun ve çeşitli nesneler buluyorsun.\nNe yapacaksın?\na) Bir nesneyi al.\nb) Odayı terk et.');
      
      if (story === "a") {
        alert('Bir nesne alıyorsun ve aniden odanın kapısı kapanıyor. İçinde kaybolmuş hissediyorsun. Ancak, cesaretini toplayarak kapıyı itiyorsun ve dışarı çıkıyorsun. Başka bir yol buluyorsun.');
      } else if (story === "b") {
        alert('Odayı terk ediyorsun ve geri dönmek için yola çıkıyorsun. Ancak ormanda kayboluyorsun ve yeni maceralar seni bekliyor.');
      }

    } else if (story === "b") {
      story = prompt('Kapıyı kapatıyorsun ve geri dönüyorsun.\nNereye gitmek istersin?\na) Geri köprüye dön.\nb) Geniş yola geri dön.');
      
      if (story === "a") {
        alert('Köprüye dönüyorsun ve nehirin sesini dinliyorsun. Nehirin huzur veren sesi seni rahatlatıyor ve yeni bir başlangıç yapıyorsun.');
      } else if (story === "b") {
        alert('Geniş yola geri dönüyorsun. Bu sefer cesaretle yürümeye karar veriyorsun ve yeni maceralara açılmak için yola çıkıyorsun.');
      }
    }
  } else if (story === "b") {
    story = prompt('Geniş yolda yürürken bir çukur gördün.\na) Çukura bakmaya karar ver. \nb) Çukuru atla ve yoluna devam et.');
    
    if (story === "a") {
      story = prompt('Çukura bakınca içinden bir ses geliyor.\nNe yapacaksın?\na) Sesi dinle.\nb) Çukurdan uzaklaş.');
      
      if (story === "a") {
        alert('İçeriden gelen ses, seni bir hazineye çağırıyor. Derin bir nefes alarak çukura atlıyorsun ve büyük bir hazine buluyorsun!');
      } else if (story === "b") {
        alert('Çukurdan uzaklaşıp yoluna devam ediyorsun. Ancak, nehir kıyısında yürüyüş yaparak huzur buluyorsun.');
      }

    } else if (story === "b") {
      story = prompt('Yola devam ediyorsun ve eski bir köprüye varıyorsun.\nNe yapacaksın?\na) Köprüyü geç.\nb) Köprüyü incelemek için dur.');
      
      if (story === "a") {
        story = prompt('Köprüyü geçince, büyüleyici bir göl ile karşılaşıyorsun.\nGölde ne yapacaksın?\na) Yüz.\nb) Gölün etrafında yürüyüş yap.');
        
        if (story === "a") {
          alert('Gölde yüzmeye başlıyorsun ve suyun altında birçok renkli balıkla karşılaşıyorsun. Bu, unutulmaz bir deneyim oluyor.');
        } else if (story === "b") {
          alert('Gölün etrafında yürüyüş yaparken, bir peri belirmeye başlıyor. Peri, sana birçok gizemi anlatıyor ve yeni maceralara atılmak için cesaretlendiriyor.');
        }
      } else if (story === "b") {
        alert('Köprüyü inceledikten sonra, bir peri belirmeye başlıyor. Sadece merak ettim dediğinde, peri seni büyülü bir dünyaya götürüyor. Yeni maceralara atılmak için hazır ol!');
      }
    }
  }
} else {
  alert("Geçersiz seçim. Lütfen 'a' veya 'b' seçin.");
}
