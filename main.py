def harf_sayisi(kelime, harf):
  # Kelime içinde harfin geçtiği sayıyı tutan sayaç
  sayac = 0

  # Kelimeyi harf harfinden arama
  for h in kelime:
    if h == harf:
      sayac += 1

  # Sayacı döndür
  return sayac

# Kullanıcıdan kelime ve harf alın
kelime = input("Lütfen bir kelime girin: ")
harf = input("Lütfen aranacak harfi girin: ")

# Kelimedeki harf sayısını hesaplayın ve ekrana yazdırın
sonuc = harf_sayisi(kelime, harf)
print(f"'{kelime}' kelimesinde '{harf}' harfi {sonuc} kez geçiyor.")
