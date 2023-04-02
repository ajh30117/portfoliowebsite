---
title: "Book Review and 8 Essential Practices: Modern Technical Writing by Andrew Etter"
description: "Book review and 8 essential practices for writing software documentation, from Andrew Etter's Modern Technical Writing"
date: "2023-02-05"
banner:
  src: "../../images/computercode.jpg"
  alt: "Computer code"
  caption: 'Photo by <u><a href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"">Juanjo Jaramillo</a></u>'

categories:
  - "Book Review"
  - "Writing Advice"
  - "Technical Writing"
keywords:
  - "Software"
  - "Technical writing"
  - "Documentation"
---Andrew Etter’s 2016 *Modern Technical Writing* is a short and sweet guide to creating effective software documentation. 

The book covers the most basic tenets of technical writing (like research, style, and audience) before diving into detail about practices specific to software documentation (like using simple markup languages, distributed control, and static websites).

I think this book is a particularly good resource for writers in leadership positions or who work independently because Etter gives a lot of practical advice on building out a comprehensive documentation process.

## 1. Test and research thoroughly before you write

In any writing process, research should make up the majority of the work, and your time. The technical writing process is no different. 

One of my favorite poets and lyricists once commented on her creative process, “if you read, you’ll write.” 

As a writer, I think about that line a lot. To create worthwhile output, you need good input.

To produce clear and comprehensive docs, you need enough input to understand the product thoroughly. How? Researching, testing, and then pushing your understanding further by asking pointed and specific questions to the right people. 

To get your answers swiftly and smoothly, Etters advises being well-prepared for meetings, batching questions, and showing respect and gratitude for people’s time. 

Writing down all the knowledge you’ve curated is the final step in the process, and probably shouldn’t take more than 10% of your time.

## 2. BFD (What’s BFD?)

It’s basic functional documentation. And it means you’ve answered the most fundamental questions about your product. The questions are:

* What is the product and why would someone want it?
* How does the product fit into a broader ecosystem (if at all)? Does it have any dependencies?
* Where can someone acquire this product? If there are multiple distribution packages, which should they choose?
* Where do they install the product? What are the basic configuration options?
* What does a simple, start-to-finish operation look like?

Answering these questions gives you direction for creating a baseline level of content, and avoids overwhelming users with too much content.

## 3. Write with style

Etters make a couple key points about style.

First, “consistency is king” — meaning your reliability (ethos if we’re talking rhetoric) declines when your language and vocabulary are inconsistent. For example, “If you call something a dialog in one document, don’t call it a pop-up in another.”

Second, Include headers, tables, lists, diagrams, and images to make writing more attractive, scannable, and approachable. For example, write sequential instructions in a numbered list and use inline styles (like **bolding**) to emphasize important text (like **user interface controls**).

## 4. Host your documentation on a static website

Static websites increase speed, simplicity, and security. “Static” means a static web page is delivered to a user’s web browser exactly as stored, instead of being dynamically generated each time. Therefore, the server needs far fewer hardware resources.

Static site generators let you use a templated theme and add content with lightweight markup, and then they process everything into a working website. Actually, the website you’re reading this article on is a static website, thanks to [Gatsby](https://www.gatsbyjs.com/docs/glossary/static-site-generator/). Other popular static site generators include [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), and [Sphinx](https://www.sphinx-doc.org/en/master/) (which is specifically built for documentation).

An even easier alternative to using static site generators is to create a [GitHub wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis), but this option doesn’t allow customization, and it lacks a search solution.

## 5. Use lightweight markup

Lightweight markup languages make it easy to read and write documentation, which makes contribution more accessible to more people.

According to Etters, the best three types of markup languages are: 

* Markdown

  * t﻿he mostly widely used
  * very compatible
  * l﻿imited features
  * no defined standard
* reStructuredText

  * f﻿rom the Python community
  * feature-rich with tables, footnotes, and code blocks
  * has a defined standard
  * harder to learn, so less accessible
  * biggest appeal: it’s the source language of Sphinx
* Asciidoc

  * from the Linux community
  * semantically equivalent to DocBook, so improves existing DocBook toolchains

## 6. Use distributed control

Distributed version control systems (DVCS), like Git and Mercurial, have better performance, allow for offline work, and allow simultaneous work on the same file. And developers prefer them (read more about [docs as code](https://www.writethedocs.org/guide/docs-as-code/)).

Good web-based interfaces for managing remote repositories include Atlassian Bitbucket, Stash, and GitHub.

## 7. Use metrics to track your documentation

Metric tools like Google Analytics help you understand what documentation pages are successful or unsuccessful.

This one is pretty simple. 

As Etter states, “In any field, opinions become more credible when you attach quantitative metrics to them.”

Technical writing is no different.

## 8. To wrap it up in 5 steps

The final chapter lists 5 simple steps to create useful and accessible documentation in the modern software industry.

1. Learn everything about a subject
2. Write down exactly what an audience needs to know (and no more).
3. Make the content beautiful, discoverable, scannable, searchable.
4. Consider everything a draft, and iterate relentlessly.
5. Make contributing simple.

## Review and Conclusion

Modern Technical Writing was a great read. It's short and accessible, but packed with substance and actionable steps to improve your documentation. Etter's book is a great resource for any writers who want advice on writing effectively and building smooth documentation processes.

The e-book is available on [Amazon](https://www.amazon.com/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS).