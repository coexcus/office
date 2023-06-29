<script>
    import '../app.css';
    import { ONLINE } from "$lib/stores/network.js";
</script>


<header class="w-full h-20 drop-shadow-sm">
    <div class="wrapper h-full flex items-center justify-between gap-4">

        <div class="logo flex items-center gap-2 w-[15rem] mt-0.5">
            <img src="/logo.svg" alt="" class="h-7 w-7">
            <h1 class="font-semibold text-xl text-indigo-800">
                Coexcus Office
            </h1>
        </div>

        <div class="search w-[30rem]">
            <div class="relative rounded-md drop-shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-700">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 rotate-[90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input type="search" placeholder="Search"
                       class="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1.5 pl-10 border-gray-300 rounded-md" />
            </div>
        </div>

        <div class="w-[15rem]">
            <div class="network-status" class:offline={!$ONLINE}>
                <svg class="-ml-1 mr-1.5 h-2.5 w-2.5 opacity-[0.8]" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                </svg>
                <span>{$ONLINE ? 'Online' : 'Offline'}</span>
            </div>
        </div>

    </div>
</header>

<div class="wrapper">
    <div class="page-background"></div>
    <div class="page-container mt-10">
        <slot />
    </div>
</div>
