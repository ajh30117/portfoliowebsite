---
title: "Applying Information Architecture (IA) Principles to a Knowledge Base"
description: "How to write accessible documentation, with resources for learning more"
date: "2026-05-07"
banner:
  src: "../../images/information_architecture.jpg"
  alt: "Design"
  caption: 'Photo by <a href="https://unsplash.com/@luellawong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luella Wong</a> on <a href="https://unsplash.com/photos/modern-library-interior-with-curved-bookshelves-and-natural-light-y1WoXRwDBBQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
      

categories:
  - "User Experience"
  - "Technical Writing"

keywords:
  - "IA"
  - "Technical writing"
  - "Documentation"
  - "Information Architecture"
  - "Knowledge Manager"
  - "Knowledge Management"
  - "Content Manager"
---
# Applying Information Architecture (IA) Principles to a Knowledge Base

## High impact ways to create a user-centered knowledge base using information architecture principles

As a technical writer who often works independently on client projects, I’m often tasked with not just writing knowledge content, but organizing and structuring it effectively. This article explains the fundamental principles of IA and how I apply those principles to building, structuring, and managing a knowledge base designed to be user-centric.

A lot of information in this article is drawn from the classic IA staple *Information Architecture* by Louis Rosenfeld, Peter Morville, and Jorge Arango and the course *Information Architecture (IA) Fundamentals* by Joe Natoli. As well as my experience working as a lead technical writer on many projects and witnessing what works for users and what doesn't.

# Contents

[Identify content needs and socialize IA early](#identify-content-needs-and-socialize-ia-early) <br>
[Consider context of use](#consider-context-of-use) <br>
[IA must be user-centered](#ia-must-be-user--centered) <br>
[Use consistent naming conventions](#use-consistent-naming-conventions) <br>
[People start with a task, not a document](#people-start-with-a-task-not-a-document) <br>
[Make paths to value obvious in your navigation](#make-paths-to-value-obvious-in-your-navigation)


## Identify content needs and socialize IA early <a name="identify-content-needs-and-socialize-ia-early"></a>

Lack of clear content goals and ownership leads to messy, outdated content. Identify what content is needed and why, and then establish ownership — ideally assign one person or team responsible for managing the knowledge base. Without ownership, responsibility is diluted across teams and roles, and there is a lack of impetus for any one person to step up. Content becomes out of date, mismatched, and inaccurate, which is no longer useful and potentially even misguides readers.

You need to regularly audit knowledge base content not just for what’s missing or needs to be updated, but what should be removed. Make sure only useful and relevant content is on the site. Everything else is noise and requires time and energy to filter out.

When you’re identifying content needs, also create a minimum viable style guide, content templates, and controlled vocabularies for your product and for customer communications. By assigning clear ownership to a person or team who will consistently apply these standards, you ensure consistency across the knowledge base. This is easier than trying to wrangle numerous contributors from different teams into writing in the same way and with the same wording.

Example: As the Knowledge Manager for a client, every time a new biweekly release comes out, I not only write the release notes but also update the knowledge base depending on what’s changed in the product. This ensures the help content is always up to date. And because I’m the owner of the knowledge base and all the content there, I have a thorough understanding of how the release and release notes affect knowledge content, so it’s a quick and painless job for me to go through and make updates.

## Consider context of use <a name="consider-context-of-use"></a>

The context in which people interact with your content, navigation, and information structures define whether people can make sense of what you give them.

There are five states that affect context. Here they are, and some examples on how to consider them in a knowledge base:

* **(Physical)** Will people be reading from a mobile device? If so, make sure the site has good mobile responsive design.  
* **(Environmental)** Will people be reading content in sunlight or under bright overhead lighting? If so, make sure the content has good contrast with the background and the text is large enough.  
* **(Preferential)** Do readers prefer video or text content? Do they prefer a lot of screenshots and UX guidance, or are they more technical and prefer less guidance?  
* **(Emotional)** What’s motivating readers to use the site? Are they looking for more information? Are they stressed out and troubleshooting a common problem? Maybe it’s a known UX problem that isn’t their fault? Use appropriate language, tone, and empathy depending on the situation.  
* **(Cognitive)** Who is your audience? Are you addressing a narrow, defined group of people or a broader audience? What do they already know about your product or technology? Make sure to tailor content to those needs.

**Example:** I work with a client who knows that most users in a specific user segment are mobile users who use the app when they’re on-site in a hospital. So for in-app content for those users, I created a list of short and simple FAQs that can easily be consumed on a mobile device in a potentially distracting environment. Those in-app FAQs also provide links to the full knowledge base that users are more likely to explore on the web version when they are doing more complicated tasks in their account and need more in-depth help. 

## IA must be user-centered <a name="ia-must-be-user--centered"></a>

Purpose, strategy, form and function should all revolve around user expectation. It doesn’t matter how you would say something — you need to speak the user’s language. 

In a knowledge base, consider the language you use to talk about your product and help. Analyze search terms if you have access to that kind of data, and look at the terms people are using to search your knowledge base. Then let those user preferences guide the language you use in your content. 

Add and edit content based on the real problems people are having. If possible, analyze support tickets and talk to the customer service team to identify the high-volume issues that need to be covered in the knowledge base. Doing so should immediately increase self-service and reduce support load. Make sure the knowledge base or help content is visible and accessible — users can’t take advantage of self-service if they don’t know it’s there.

**Example:** If users come to your knowledge base to find out how to update their account profile picture and search for terms like “profile pic”, “pic”, and “update profile picture”, but your content uses the term “ID photo”, then users have a harder time finding the relevant content. Even if you think the term “ID photo” is more accurate or sounds better, you need to favor the language of users to make their experience as easy as possible. No one spends time on a software product’s knowledge center for fun (except for technical writers maybe). Your job is to help users get the information they need fast, and then get out of there.

## Use consistent naming conventions <a name="use-consistent-naming-conventions"></a>

Consistent naming (in both external content and internal storage) makes it easy for everyone to understand the structure of where content lives and what it’s called, especially as content is added and grows.

File names should match IA category labels. Images and media files should be sorted and stored by topic or article. For web content, slugs should match article titles. Titles within a category or headings within an article should aim to use parallel structure.

**Example:** I was once restructuring a knowledge base to be published on a static site, writing articles in Markdown, so the image files had to be stored separately from the article content. As I wrote each article and inserted screenshots, I stored the .png files in a subfolder with the name of the article title, and used a ascending numbered naming convention for the individual images. This means that if the UX changed and someone needed to update an image, they don’t have to go digging through a database of hundreds of screenshots looking for the right image file with a random name. They just navigate to the folder matching the article title and replace the appropriate image. A standard naming convention also makes it easier for AI tools or scripts to read or update images.

## People start with a task, not a document <a name="people-start-with-a-task-not-a-document"></a>

Prioritize the tasks users are trying to accomplish, instead of with the content you have available. Make the main tasks users need to complete and the main tasks users struggle with front and center. Use task-oriented language like action verbs and clear descriptions of the tasks, especially in content titles and headings. For example, instead of a vague article title like “Credentials”, use more descriptive language like “Submit your facility credentials.” This lets people know exactly what information they’ll find when they click on the article, and saves them time and energy getting to the content they’re looking for.

**Example:** When I’m designing help content, I always test the software or product myself. This gives me a user perspective as I go through registration, account setup, and main tasks or actions. I create and organize help content based on the main tasks users need to complete, what order they need to complete them in, and which tasks they might particularly struggle with.

## Make paths to value obvious in your navigation <a name="make-paths-to-value-obvious-in-your-navigation"></a>

Deliver value to users and organizations by making it easy for people to get to their end goal. Don’t structure content arbitrarily in a way that only you think it should be structured. Analyze user behavior and preferences. If you know most users comes to your site to get help with specific tasks or problems, make the paths to that type of content obvious, even if the tasks are not necessarily the first step in the user journey or the biggest feature of the product.

**Example:** I had previously organized sections in a knowledge base according to what sections I thought were most important and in a way I thought was somewhat chronological. When I looked at user analytics, I realized there were two extremely popular sections that were getting the vast majority of the article views. I realized I needed to put those two sections at the top so they are easily accessible to users and immediately visible upon opening the page. After learning about this user behavior, my previous organization seemed stale and arbitrary. And after reorganizing the sections, content views and engagement substantially increased.