<script setup>

  import { useHomeStore } from '~/store/home';
  import { MdPreview, MdCatalog } from 'md-editor-v3';
  import 'md-editor-v3/lib/preview.css';

  const id = 'preview-only';

  const homeStore = useHomeStore();
  const route     = useRoute();

  const articlePaged  = computed(() => homeStore.articlePaged);
  const articles      = computed(() => homeStore.articles);
  const categories    = computed(() => homeStore.categories);
  const article       = computed(() => homeStore.article);

  const isLoading = computed(() => homeStore.loading);
  const initState = {
    name: "",
    email: "",
    content: "",
  }
  const data   = reactive({...initState});
  const errors = computed(() => homeStore.errors);

  onMounted(() => {
    homeStore.getArticle()
    homeStore.getArticlePaged()
    homeStore.getCategories()
    homeStore.getArticleById(route.params.id)
  });

  async function handleStoreComment() {
    await homeStore.storeComment({...data, article_id: route.params.id})
    Object.assign(data, initState)
  }

  async function handleArticleByCategory(id){
    await homeStore.articleByCategory(id)
  }


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
</script>

<template>
  <NuxtLayout>
    <div>
      <div class="container text-lg mb-8">
        <b class="mr-1 text-sky-400">Home / flash-news /</b> {{ article.slug }}
      </div>
      <div class="mb-16">

        <div class="relative flex lg:flex-row md:flex-col flex-col gap-5">
          <div class="mb-6 md:min-w-[768px]">
            <h2 class="text-4xl mb-6">{{ article.title }}</h2>
            <div>
              <img class="w-full rounded-md" :src="article.image_url" :alt="article.slug">
            </div>
            <!-- <div class="text-lg mt-8" v-html="article.content">
            </div> -->
            <MdPreview style="text-align: justify;" language="en-US" :editorId="id" :modelValue="article.content" />
            <!-- <MdCatalog  :editorId="id" :scrollElement="scrollElement" /> -->

            <!-- comment -->
            <h3 class="text-2xl mt-8 text-gray-700 mb-4">komentar</h3>
            <!-- <div class="my-4 bg-white p-4 rounded"> -->
              <!-- <div class="flex gap-6">
                <custom-input class="w-full" title="name" v-model="data.name"/>
                <custom-input class="w-full" title="email" v-model="data.email"/>
              </div>
              <div>
                <label for="" class="text-sm text-gray-500 ">komentar</label>
                <textarea v-model="data.content" class="w-full h-32 border-sky-400 border-2 rounded-lg mt-2 p-4" placeholder="Tulis komentar">
                </textarea>
              </div>
              <div class="mt-4">
                <UIButton @click="handleStoreComment" title="post" icon="mdi:send" />
              </div> -->
            <!-- </div> -->
            <div class="bg-white p-4 rounded-lg">
              <DisqusComments :identifier="article.id" />
            </div>
            <!-- <DisqusCount :identifier="article.slug" /> -->

            <!-- <div class="bg-white p-4 rounded mb-4" v-for="item in article.comments" :key="item.id">
              <div class="divide-y divide-gray-2">
                <div class="flex justify-between align-middle mb-4">
                  <div>
                    <div class="text-gray-600 text-lg">{{ item.name }}</div>
                    <div class="text-gray-500 text-xs">{{ item.email }}</div>
                  </div>
                  <div class="text-gray-500">
                    <i>{{ dateParser(item.created_at) }}</i>
                  </div>
                </div>
                <div class="pt-3 text-gray-700">
                  {{ item.content }}
                </div>
              </div>
            </div> -->
          </div>

          <div class="relative  min-w-[300px]">
            <div class="mb-6">
              <p class="font-semibold text-md text-gray-600 mb-6">Category</p>
              <div class="bg-white rounded-md divide-y divide-gray-300">
                
                <div v-for="item in categories" :key="item.id" class="py-3 px-6 text-sm text-gray-500 hover:bg-sky-300 hover:text-white hover:rounded-md transition-all duration-20">
                  <button @click="handleArticleByCategory(item.id)">{{ item.name }}</button>
                </div>
            
              </div>
            </div>

            <div class="sticky top-10">
              <p class="font-semibold text-md text-gray-600 mb-6">Berita Terbaru</p>
              
              <sidebar-card v-for="item in articles" :key="item.id" :item="item"/>

            </div>
          </div>

        </div>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </NuxtLayout>
</template>