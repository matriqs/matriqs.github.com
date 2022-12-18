<pre><code>
def faktoriyel(n):
  # 1! = 1
  if n == 1:
    return 1
  # n! = n * (n-1)!
  else:
    return n * faktoriyel(n-1)

# Kullanıcıdan bir sayı alın
sayi = int(input("Lütfen bir sayı girin: "))

# Sayının faktöriyelini hesaplayın ve ekrana yazdırın
sonuc = faktoriyel(sayi)
print(f"{sayi}! = {sonuc}")
</code></pre>
