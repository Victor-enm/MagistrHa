<template>

    <div id="app" class="flex items-center justify-center min-h-screen text-gray-900 dark:text-gray-100 p-4">
        <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-200 dark:border-gray-700">
            <!-- Icone d'horloge ou de lancement -->
            <svg class="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <!-- Titre et message -->
            <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                Bientôt en ligne !
            </h1>
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                La webapp sera bientôt disponible.
                <br class="hidden sm:block">
                Revenez nous voir dans les prochaines semaines.
            </p>

            <!-- Barre de progression animée -->
            <div class="relative w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div class="absolute inset-0 bg-blue-500 rounded-full animate-progress-bar"></div>
            </div>
        </div>
    </div>

</template>
<style>
        @keyframes progress-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-progress-bar {
            animation: progress-bar 2s linear infinite;
        }
    </style>