---
slug: "research-assistant"
title: "Data Privacy Law Research Assitant"
summary: "Functional LLM Agent that can answer question on GDPR and Data Privacy Laws"
tags: ["Live Demo", "RAG", "LangChain", "Huggingface", "LLM", "Pinecone", "Clound Run", "Docker"]
url : "https://ai-research-assistant-1003963640386.us-east1.run.app"
type: "demo"
featured: true
date: "2026-02-09"
---


## Data Privacy Law Research Assistant – MVP RAG Application

This project is a **minimum viable application (MVP)** designed to demonstrate and study the practicle implications of  LLM & RAG technologies, especially when it comes to deployiment and utility.

The application leverages Free Tier offerings of Hugging Face inference endpoints, and Pinecone vector search to provide accurate, context-aware answers to legal questions.

---

### 🧠 Core Concept

The system follows a **RAG architecture**, where:

1. GDPR legal texts are embedded into vector representations.
2. Relevant legal passages are retrieved from a vector database.
3. A large language model generates answers grounded in retrieved legal context.

This approach improves factual accuracy compared to standalone LLM responses.

---

### 🏗️ Architecture Overview

The application is built as a **monolithic, dockerized system** consisting of a frontend, backend, and AI components.

#### LLM & Embeddings

- **LLM**: Mistral 7B Instruct v2  
- **Inference**: Hugging Face Inference Endpoint  
- **Embedding Model**: Llama Text Embeddings v2  
- **Use Case**: Embedding GDPR laws and user queries  

Since the system relies on **freely available inference resources**, the response latency is relatively high. This trade-off was intentionally accepted to keep the project cost-effective and accessible.

---

#### Vector Database

- **Vector Store**: Pinecone  

Pinecone handles the vectorization process. I only had to focus on chunking and uploading chuncks. 


### ⚙️ Key Technologies Used

- Hugging Face Inference Endpoints  
- Mistral-7B-Instruct-v0.2  
- llama-text-embed-v2
- RAG (Retrieval-Augmented Generation) 
- Pinecone Vector Database  
- FastAPI  
- React + TypeScript + Vite  
- Docker  


---

### 🎯 Purpose of the Project

This application is not intended to be a production-grade legal system. Instead, it serves as a **demonstrative yet functional prototype** to study:

- Practical implementation of RAG pipelines
- Integration of LLMs with vector databases
- Real-world use of Hugging Face inference
- End-to-end AI system design
- Trade-offs between cost, latency, and performance  

---

### 🏋️ Challenges

- Primary limitation here is the LLM used, since users interact with widely available 100B+ parameter models regularly, an agent with mistralai/Mistral-7B-Instruct-v0.2 will definetely seem very unfriendly to user.

- LLM inference Latency is another bottleneck, Huggingface inference endpoints are really slow.


### 🪜  Next Steps

- Attemping to use a better freely available LLM eg: Groq
- Improve UX of the Agent, make it conversational
- Implement Evaluation and Tests Suite

### 🚀  Repo for this project is at https://github.com/IsuruMahakumara/ai-research-assistant



### 📌 Conclusion






