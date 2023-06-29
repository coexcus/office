<script>

</script>


<div class="my-24">
    <h1 class="text-3xl font-semibold">
        Welcome to Coexcus Office
    </h1>
    <p class="text-base text-gray-600 font-light">
        From here you can manage everything related to <b>Cooperative</b>
    </p>
</div>

<!-- APPS -->
<h2 class="text-2xl font-medium mb-4">Apps</h2>
<div class="apps">

    <div class="app">
        <img src="/logo.svg" alt="" />
        <h4>Coop Software</h4>
    </div>

    <div class="app">
        <img src="/logo.svg" alt="" />
        <h4>Loan Applications</h4>
    </div>

    <div class="app">
        <img src="/logo.svg" alt="" />
        <h4>Payroll</h4>
    </div>

</div>

<style>
    .apps {
        @apply grid grid-cols-5 gap-8;
    }

    .app {
        @apply flex flex-col items-center justify-center gap-4;
        @apply rounded-lg drop-shadow-md px-4 py-6;
        @apply cursor-pointer border;
        transition-timing-function: cubic-bezier(0.5, 0, 0.23, 0.99), linear;
        transition-duration: 0.2s;
        transition-property: all;
        background: rgba(255,255,255,0.8);
    }
    .app:hover {
        @apply ring-2 ring-indigo-500;
        background: rgba(255,255,255,1);
    }

    .app img {
        @apply w-24 h-24;
    }

    .app h4 {
        @apply text-center;
        @apply text-[1.2rem] font-medium;
    }
</style>