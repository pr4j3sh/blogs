<script setup></script>
<template>
  <section class="flex flex-col gap-1">
    <h2 class="font-bold text-xl">Experience</h2>
    <hr />
    <div>
      <div class="flex items-center justify-between">
        <span class="flex gap-2">
          <span class="font-bold">Your company</span>
          <span>-</span>
          <span>Your role</span>
          <span>(Type)</span>
        </span>
        <span class="flex gap-2">
          <span>from</span>
          <span>-</span>
          <span>to</span>
        </span>
      </div>
      <ul>
        <li class="pl-4 before:content-['-'] before:mr-2">
          what you didTo add a dash (-) before each list item along with left
          padding, you can use Tailwind's before pseudo-element and set content
          and spacing accordingly.
        </li>
        <li class="pl-4 before:content-['-'] before:mr-2">
          used skills and technology
        </li>
      </ul>
    </div>
  </section>
</template>
