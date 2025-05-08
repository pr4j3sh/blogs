### Building blogs

##### But, Why?

I always wanted a place where I could write down my thoughts, experiments, works and share my knowledge with the world. There are actually several platforms that allow you to do so, but since I built [frames](https://pr4j3sh.github.io/frames/), I was destined to create an ecosystem that uses [ui](https://pr4j3sh.github.io/ui/).

So, here we are. Introducing **blogs** - a place for me to share my work.

##### Early Encounters

I've been in the world of software development since 2017 (it's a long story, will tell you some other day) and I have used several platforms for blogging. Started off with [Medium](https://medium.com/), it caters to a wide range of audiences, I wanted something specific for developers. Well, [dev.to](https://dev.to/) was a great choice, wrote loads of articles there, got recognition on [X](https://x.com/pr4j3sh) (formerly Twitter) and by that time I also discovered [Hashnode](https://hashnode.com/), but the idea of building a platform on my own was always at the back of my mind.

##### Early Adventures

So, I decided to create one of my own platforms. First choice was [NextJs](https://nextjs.org/) + [Contentlayer](https://contentlayer.dev/). However, it didn't last long as the NextJs's upgrade wasn`t compatible with Contentlayer and the application broke. I even tried using [Docusaurus](https://docusaurus.io/), but their UI, yea I don't wanna talk about that. Then, came in [Astro](https://astro.build/), life saver, all-in-one for sharing my experiments, projects, even about me. But still I didn't build it, picked up a template from astro. I was highly inspired by astro though, and that somewhat helped in building **blogs**.

##### blogs is Simple

**blogs** is default [NextJs](https://nextjs.org/) + [ui](https://pr4j3sh.github.io/ui/) with [@next/mdx](https://www.npmjs.com/package/@next/mdx), [date-fns](https://date-fns.org/), and a [utility](https://github.com/pr4j3sh/temp-blog/blob/master/src/lib/utils.js) function. Yup, that's it.

It uses `@next/mdx` to render markdown pages, a special function `useMDXComponents()` to render custom markdown components. It really is very simple how `@next/mdx` works and is pretty light too.

Now the issue arises on how to index blogs, for displaying them, linking them. There are a few packages that help us to fight these problems, [frontmatter](https://www.npmjs.com/package/front-matter)/[gray-matter](https://www.npmjs.com/package/gray-matter), but they require you to put some metadata as a key value pair on top of your markdown blog file enclosed within `---`. Now, this metadata also gets rendered onto the page and then you're required to replace `@next/mdx` with [next-mdx-report](https://www.npmjs.com/package/next-mdx-remote). But, then again, stop making it complicated. I wanna go with the default way. I don't wanna push my blogs onto a server. I am happy with my blogs sitting in the [github repository](https://github.com/pr4j3sh/blogs)(am I really though?).

So I just did what I wanted. I used `node.js`'s beautiful library `fs`.

Yup, just read all the markdown files from the directory and created metadata from the file name.

> But, what's the catch?

The name! Yea, it has to be in a specific format.

```
YYYY-MM-DD_blog-title.md
```

> date and title separated by an underscore, the date and title can use hyphens in between words.

This utility function is defined in `src/lib/utils.js`, currently for fetching blogs. But you can customize the path to use any other directory, fetching your projects, works, experiments, etc.

So, there you go. That's how I built **blogs**.

Interested? Create one yourself today, using [frames](https://pr4j3sh.github.io/frames/),

```bash
npm create @pr4j3sh/frames@latest temp-blog myblog
```

Push it onto [github](https://github.com/) and deploy on [vercel](https://vercel.com/).
