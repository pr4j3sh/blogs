<script setup>
import html2pdf from "html2pdf.js";

function download() {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.-]/g, "");
  html2pdf(document.getElementById("printable"), {
    margin: 4,
    filename: `resume-${timestamp}.pdf`,
  });
}
</script>

<template>
  <div class="card w-full h-full">
    <Splitter class="h-[calc(100%-48px)]">
      <SplitterPanel class="overflow-y-auto">
        <ResumeEditor />
      </SplitterPanel>
      <SplitterPanel class="overflow-y-auto">
        <div id="printable">
          <Resume />
        </div>
      </SplitterPanel>
    </Splitter>
    <div class="flex justify-end gap-2 p-2 border-l-2 border-l-zinc-100">
      <Button class="py-1 text-sm" severity="secondary" @click="download"
        >Download</Button
      >
      <Button class="py-1 text-sm">Publish</Button>
    </div>
  </div>
</template>
