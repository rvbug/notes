---
slug: LLMs
title: LLM Overview
authors: [rakesh]
tags: [ML]
side_position: 1
---



## Large Language Models
OpenAI has been in the forefront of developing a sophisticated LLMs which was a blockbox until DeepSeek came along and they open sourced their LLMs, give us a peek into what happens behind the scenes.
This is a series of blogs covering all the in components of DeepSeek including their architecture, optimization and my experiences in going through their research papers.

<!-- truncate -->

---


## Background
DeepSeek has emerged as a significant disruptor in the AI industry, particularly in the realm of large language models (LLMs). It gained recognition for achieving high-level AI performance while utilizing significantly fewer computational resources compared to industry giants like OpenAI. 

DeepSeek leverages techniques like "Mixture of Experts (MoE)"  to optimize resource allocation,  innovations like Multi-Head Latent Attention (MLA) etc among many others. But the most important breakthrough was their commitment to open-source principles contributing to its rapid growth and influence. 

## Impact

DeepSeek's success has put pressure on established AI companies to reconsider their development strategies and by democratizing their AI technology, it has made these models making it more accessible to smaller organizations and developing nations.

They developed a model much more (or similar) powerful than OpenAI with significantly less resource. DeepSeek's rise signifies a shift towards more efficient and accessible AI, challenging the dominance of OpenAI.

## My Motivation

DeepSeek's achievement, building a powerful model with optimized resources, resonates deeply. It's a testament to human ingenuity, a reminder that constraints often spark the most innovative solutions. When faced with limitations, we have an incredible ability to find efficient, impactful pathways forward.


## Components

Here are the some of the components used by DeepSeek 

> Multi-Head Latent Attention 

> Mixture of Experts (MoE)   

> Multi-Token Prediction   

> Reinforcement Learning using GRPO  

> GPU Optimization via PTX  

![Overview](./img/LLMWorkflow.png)


# Blog Series
This is a series of blog which gives you enough to start on the research journey of LLMs. We will start with quick introduction and overview of major components and writing equivalent rust code since my mission is to work on an unified programming language be it  Web Development, CLI programs, Systems Programming, Embedded systems and Robotics. Feel free to use Python. 

Enjoy your reading!

## References

[Reinforcement Learning](https://arxiv.org/pdf/2501.12948)  
[Roadmap for LLMs](https://github.com/rvbug/NLP)

