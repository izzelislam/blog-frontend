<script setup>
  import { useHomeStore } from '~/store/home';

  const homeStore = useHomeStore();

  const articlePaged  = computed(() => homeStore.articlePaged);
  const articles      = computed(() => homeStore.articles);
  const isLoading = computed(() => homeStore.loading);

  onMounted(() => {
    homeStore.getArticle()
    homeStore.getArticlePaged()
  });

  const items = [
    {
      id : 1,
      date: "03 Maret 2022",
      title : 'Tidak Benar Video Ormas Pimpinan Hercules Jaga Istana dan KPU',
      image :  'https://mmc.tirto.id/image/otf/700x0/2024/03/01/header-periksa-fakta---tidak-benar-video-ormas-pimpinan-hercules-jaga-istana-dan-kpu--fuad-01_ratio-16x9.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 2,
      date: "03 Maret 2022",
      title : 'Polemik Perolehan Suara PSI yang Melonjak Dibanding Hitung Cepat',
      image :  'https://mmc.tirto.id/image/otf/700x0/2023/09/26/antarafoto-kaesang-jadi-ketua-umum-psi-250923-app-5_ratio-16x9.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 3,
      date: "03 Maret 2022",
      title : 'Indonesia Ingatkan PBB soal Penembakan Israel ke Warga Palestina',
      image :  'https://mmc.tirto.id/image/otf/700x0/2024/01/16/ap24012672852791_01_ratio-16x9.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 3,
      date: "03 Maret 2022",
      title : 'Sudirman Said Sebut Ada Skenario Ambil Semua Partai di Parlemen',
      image :  'https://mmc.tirto.id/image/otf/700x0/2024/03/02/1709370036445_ratio-16x9.jpg' ,
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 4,
      date: "03 Maret 2022",
      title : 'Kementan: Potensi Panen Raya Maret-April Capai 8,46 Juta Ton',
      image :  'https://mmc.tirto.id/image/otf/700x0/2018/02/13/panen-raya-banten-antarafoto_ratio-16x9.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 1,
      date: "03 Maret 2022",
      title : 'Tidak Benar Video Ormas Pimpinan Hercules Jaga Istana dan KPU',
      image :  'https://mmc.tirto.id/image/otf/700x0/2024/03/01/header-periksa-fakta---tidak-benar-video-ormas-pimpinan-hercules-jaga-istana-dan-kpu--fuad-01_ratio-16x9.jpg',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 2,
      date: "03 Maret 2022",
      title : 'Polemik Perolehan Suara PSI yang Melonjak Dibanding Hitung Cepat',
      image :  'https://mmc.tirto.id/image/otf/700x0/2023/09/26/antarafoto-kaesang-jadi-ketua-umum-psi-250923-app-5_ratio-16x9.jpg',
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id : 3,
      date: "03 Maret 2022",
      title : 'Indonesia Ingatkan PBB soal Penembakan Israel ke Warga Palestina',
      image :  'https://mmc.tirto.id/image/otf/700x0/2024/01/16/ap24012672852791_01_ratio-16x9.jpg',
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
  ];

  const wawancara = [
    {
      id: 1,
      date: "03 Maret 2022",
      title: "Prof Zullies: Jika Sebar Info, Pastikan Data Valid & Terpercaya",
      image: "https://mmc.tirto.id/image/otf/700x0/2024/02/26/header-wansus-zullies-01_ratio-16x9.jpg"
    },
    {
      id: 2,
      date: "03 Maret 2022",
      title: "Jeremias Nyangoen: 'Saya Menjalani Proses dengan Baik'",
      image: "https://mmc.tirto.id/image/otf/700x0/2023/11/15/antarafoto-sutradara-terbaik-ffi-2023-141123-bay-1_ratio-16x9.jpg"
    },
    {
      id: 3,
      date: "03 Maret 2022",
      title: "Timnas AMIN Ungkap Upaya Intimidasi, Netralitas Pemilu & Koalisi",
      image: "https://mmc.tirto.id/image/otf/700x0/2024/02/07/header-wansus-sudirman-said--ivan-ahda--tirto-01_ratio-16x9.jpg"
    },
    {
      id: 4,
      date: "03 Maret 2022",
      title: "Def Tri Hardianto: UU Masyarakat Adat itu Perintah Konstitusi",
      image: "https://mmc.tirto.id/image/otf/700x0/2024/02/07/def-tri-hardianto_ratio-16x9.jpg"
    },
  ];

</script>

<template>
  <NuxtLayout>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      <div v-for="(item, index) in articlePaged" :key="index" class="w-full min-h-[250px] rounded-xl bg-cover bg-center relative" :style="{ 'background-image': 'url(' + item.image_url + ')' }">
        <div class="absolute top-0 right-0 bottom-0 left-0 rounded-xl bg-gradient-to-tl from-black/90 to-black/40 hover:from-black/70 hover:to-black/10  flex flex-col-reverse">
          <p class="text-white p-4">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>

    <div class="pt-[45px]">
      <div class="flex items-center mb-4">
        <span class="font-semibold text-xl text-gray-800 min-w-[150px]">FLASH NEWS</span>
        <div class="w-full h-1 bg-gray-500 rounded-full"></div>
        <NuxtLink to="/news" class="bg-gray-500 rounded-full px-3 py-2 text-xs min-w-[100px] text-center text-white cursor-pointer">
          Lihat Semua
        </NuxtLink>
      </div>
      <div class="p-4 bg-white rounded-md">
        <NuxtLink :to="{name: 'news-id', params: {id: item.id}}" class="md:flex md:gap-6 mb-8 mouse-pointer" v-for="(item, index) in articles" :key="index">
          <img class="md:w-[260px] rounded-xl" :src="item.image_url" alt="">
          <div class="pt-2 md:mb-0 mb-12">
            <div class="font-bold text-[16px] text-sky-600 mb-2">{{ item.title }}</div>
            <div class="text-xs text-gray-700 mb-2">{{ item.content.substring(0, 200) }}</div>
            <div class="text-sm text-gray-500 font-semibold">{{ dateParser(item.created_at) }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="pt-[45px] mb-8">
      <div class="flex items-center mb-4">
        <span class="font-semibold text-xl text-gray-800 min-w-[150px]">WAWANCARA</span>
        <div class="w-full h-1 bg-gray-500 rounded-full"></div>
        <NuxtLink to="/news" class="bg-gray-500 rounded-full px-3 py-2 text-xs min-w-[100px] text-center text-white cursor-pointer">
          Lihat Semua
        </NuxtLink>
      </div>
      <div class="p-2">
        <div class="grid lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-6">
          <div
            v-for="(itemWawancara, index) in wawancara" :key="index"
            class=" min-h-[373px] rounded-md bg-cover bg-center relative"
            :style="{ 'background-image': 'url(' + itemWawancara.image + ')' }"
          >
          <!-- <img class="w-[300px]" :src="itemWawancara.image" alt=""> -->
            <div class="absolute top-0 right-0 bottom-0 left-0 rounded-md bg-gradient-to-tl from-black/90 to-black/40 hover:from-black/70 hover:to-black/10 flex flex-col justify-end transition-all duration-300">
                <p class="p-4 text-white font-semibold">
                  {{ itemWawancara.title }}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </NuxtLayout>
</template>
