---
title: "Penipuan e-mel perniagaan dan pancingan data di Malaysia: cara PKS diserang dan cara menghentikannya"
description: "Penipuan e-mel perniagaan menyebabkan kerugian nyata kepada PKS Malaysia. Ketahui cara serangan BEC dan pancingan data berfungsi, saluran pelaporan tempatan, dan kawalan yang paling berkesan."
publishedAt: 2026-06-09
locale: ms
author: Cyber Secure SME editorial team
tags: ["pancingan data", "penipuan e-mel perniagaan", "BEC Malaysia", "MyCERT", "keselamatan e-mel"]
categories: ["cloud-security", "security-awareness"]
readingTime: 6
altLocaleSlug: phishing-business-email-scams-malaysia
draft: false
---

**Penipuan e-mel perniagaan adalah antara ancaman siber yang paling biasa dan paling mahal untuk PKS Malaysia.** Berita baiknya ialah kombinasi kesedaran kakitangan dan beberapa kawalan teknikal boleh menghentikan kebanyakan serangan sebelum ia menyebabkan kerosakan. Artikel ini menjelaskan cara serangan ini berfungsi, apa yang perlu anda lakukan jika perniagaan anda terkena, dan langkah yang paling mengurangkan pendedahan anda.

## Bagaimana serangan pancingan data dan BEC sebenarnya berfungsi

### Pancingan data (phishing)

Pancingan data adalah amalan menghantar e-mel, mesej SMS, atau mesej WhatsApp yang menyamar sebagai pihak yang dipercayai untuk menipu penerima supaya mengklik pautan, memuat turun fail, atau memasukkan kelayakan log masuk. Entiti yang disamar mungkin bank, agensi kerajaan seperti LHDN atau MDEC, syarikat logistik, atau bahkan rakan sekerja.

Pautan tersebut biasanya membawa kepada halaman log masuk palsu yang merakam nama pengguna dan kata laluan anda. Setelah penyerang mendapat kelayakan tersebut, mereka boleh mengakses e-mel, perisian perakaunan, atau storan awan anda.

### Kompromi e-mel perniagaan (BEC)

BEC adalah bentuk penipuan yang lebih disasarkan. Daripada menghantar e-mel generik secara besar-besaran, penyerang mengkaji perniagaan anda terlebih dahulu. Mereka mungkin memantau akaun e-mel yang telah dikompromi selama berminggu-minggu, mempelajari pembekal, terma pembayaran, dan gaya komunikasi anda. Kemudian mereka menghantar e-mel yang direka dengan teliti yang:

- Mengarahkan pasukan kewangan anda untuk menukar nombor akaun bank pembekal kepada akaun yang dikawal oleh penyerang
- Menyamar sebagai pengarah urusan anda untuk membenarkan pembayaran segera kepada akaun yang tidak biasa
- Berpura-pura menjadi pembekal yang meminta anda mengemas kini rekod sebelum kitaran invois seterusnya

E-mel ini sering meyakinkan kerana ia merujuk kepada hubungan nyata, jumlah invois nyata, dan masa yang tepat. Apabila penipuan ditemui, wang telah berpindah melalui pelbagai akaun dan sukar untuk dipulihkan.

## Mengapa PKS Malaysia menjadi sasaran

Beberapa faktor menjadikan perniagaan kecil Malaysia sebagai sasaran yang menarik. Perniagaan yang beroperasi merentasi pelbagai mata wang atau dengan hubungan pembekal rentas sempadan adalah sasaran BEC yang biasa kerana pemindahan antarabangsa lebih sukar untuk ditarik balik dengan cepat. Perniagaan yang menggunakan pelan e-mel percuma atau asas tanpa penapisan keselamatan tambahan menerima lebih sedikit amaran automatik tentang mesej yang mencurigakan.

MyCERT, pasukan tindak balas kecemasan komputer di bawah CyberSecurity Malaysia, menjejak insiden siber merentas organisasi Malaysia. Penipuan berkaitan e-mel secara konsisten muncul antara kategori yang paling kerap dilaporkan. Jika perniagaan anda mengalami insiden, pelaporan kepada MyCERT di mycert.org.my menyediakan rekod dan boleh membantu mereka mengenal pasti kempen yang lebih luas yang menjejaskan perniagaan Malaysia lain.

## Kawalan teknikal yang paling membantu

### Dayakan rekod pengesahan e-mel

SPF, DKIM, dan DMARC adalah tiga piawaian pengesahan e-mel yang membantu pelayan mel mengesahkan sama ada mesej benar-benar datang dari domain yang dikatakannya. Penyediaannya memerlukan akses kepada rekod DNS domain anda dan biasanya mengambil masa kurang daripada satu jam untuk seseorang yang mempunyai kemahiran teknikal. Tanpanya, penyerang boleh menghantar e-mel yang kelihatan datang dari domain anda, menjadikannya lebih mudah untuk menyamar sebagai anda kepada pelanggan atau pembekal anda sendiri.

Jika perniagaan anda menggunakan Microsoft 365 atau Google Workspace, kedua-dua platform menyediakan panduan untuk mendayakan rekod ini. Ramai [pembekal keselamatan awan](/ms/direktori/cloud-security) akan mengkonfigurasinya untuk anda sebagai sebahagian daripada penglibatan keselamatan e-mel.

### Gunakan penapis anti-pancingan data pada platform e-mel anda

Microsoft 365 dan Google Workspace kedua-duanya menyertakan kawalan anti-pancingan data yang tidak selalu didayakan secara lalai. Safe Links (Microsoft) menulis semula URL dalam e-mel masuk dan menyemaknya pada waktu klik. Safe Attachments membuka lampiran e-mel dalam persekitaran kotak pasir sebelum menghantarnya. Google Workspace mempunyai ciri yang setara dalam konsol pentadbir di bawah tetapan "Keselamatan".

### Gunakan pengesahan pelbagai faktor (MFA) pada semua akaun e-mel

Walaupun penyerang mendapat kata laluan ahli kakitangan melalui pancingan data, MFA menghalang mereka daripada log masuk tanpa faktor kedua. Dayakan MFA untuk semua akaun, mengutamakan mereka yang mempunyai akses kepada sistem kewangan atau rekod hubungan pembekal.

## Kawalan manusia yang paling membantu

### Peraturan pengesahan telefon untuk perubahan pembayaran

Tetapkan dasar yang tegas: sebarang permintaan untuk menukar nombor akaun bank, meningkatkan jumlah pembayaran, atau membuat pemindahan segera mesti disahkan melalui telefon kepada nombor yang sudah ada dalam rekod, bukan kepada nombor yang diberikan dalam e-mel yang membuat permintaan tersebut. Kawalan prosedur tunggal ini menghentikan kebanyakan serangan BEC, kerana penyerang tidak boleh menjawab telefon.

Jadikan peraturan tersebut jelas secara bertulis dan latih setiap ahli kakitangan yang mengendalikan pembayaran. Pengecualian mereput dasar, jadi terapkan secara konsisten walaupun e-mel kelihatan datang dari pengurusan kanan.

### Latihan kesedaran pancingan data, dilakukan secara berkala

Sesi latihan kesedaran pancingan data sekali gus pudar dengan cepat. Peringatan bulanan ringkas, ujian simulasi pancingan data setiap suku tahun, atau ulasan ringkas contoh pancingan data nyata yang beredar dalam industri anda mengekalkan topik tersebut terus relevan. Beberapa [pembekal latihan kesedaran keselamatan](/ms/direktori/security-awareness) dalam direktori ini menjalankan program yang direka khusus untuk pasukan PKS, termasuk versi Bahasa Malaysia.

Gunakan [semakan risiko pancingan data](/ms/alat/semakan-risiko-pancingan) untuk menilai pendedahan semasa anda dan mengenal pasti jurang yang perlu ditangani terlebih dahulu.

## Apa yang perlu dilakukan jika anda menerima e-mel yang mencurigakan atau mengesyaki penipuan sedang berlaku

1. Jangan klik sebarang pautan atau buka sebarang lampiran dalam e-mel yang mencurigakan.
2. Hubungi penghantar yang didakwa melalui saluran berasingan untuk mengesahkan sama ada mereka menghantar e-mel tersebut.
3. Jika anda percaya anda telah mengklik pautan atau memasukkan kelayakan, tukar kata laluan anda dengan segera dan dayakan MFA jika ia belum aktif.
4. Jika wang telah dipindahkan secara penipuan, hubungi bank anda dengan segera. Kelajuan penting; sesetengah pemindahan boleh ditarik balik jika bank diberitahu dengan cepat.
5. Laporkan insiden kepada MyCERT di mycert.org.my. Anda boleh menyerahkan laporan dalam talian. Untuk insiden yang melibatkan data peribadi, pertimbangkan sama ada kewajipan anda di bawah Akta Perlindungan Data Peribadi 2010 (Akta 709) memerlukan anda memberitahu Pesuruhjaya Perlindungan Data Peribadi.

## Gambaran risiko yang jujur

Serangan pancingan data dan BEC berjaya terutamanya kerana ia direka untuk kelihatan normal. Tiada kawalan teknikal yang menyekat setiap serangan, dan tiada latihan yang menjadikan setiap ahli kakitangan kebal terhadap penipuan yang dibuat dengan baik. Matlamatnya adalah untuk menjadikan serangan lebih sukar, mengesannya lebih cepat apabila ia berjaya, dan pulih dengan cepat. Kawalan di atas mencapai perkara tersebut untuk kebanyakan PKS Malaysia pada kos yang munasabah.

Jika anda mahukan pandangan sistematik tentang postur keselamatan e-mel anda, [pembekal keselamatan awan](/ms/direktori/cloud-security) dalam direktori ini boleh menyemak konfigurasi Microsoft 365 atau Google Workspace anda dan mengenal pasti jurang.
