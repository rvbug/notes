# System Design

[System Design](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/System%20Design%20644cc1bd864d4e1289bd3a3ef2396eb7.md)

# Active Recall Plan

[https://docs.google.com/spreadsheets/d/1WdUtj6TAjvO58SSvKJ1F6o_Ta35tX14svtCSRJKCLxc/edit#gid=1934333901](https://docs.google.com/spreadsheets/d/1WdUtj6TAjvO58SSvKJ1F6o_Ta35tX14svtCSRJKCLxc/edit#gid=1934333901)

# Materials & References

### System Design

- **Notes from Twitter**
    
    ML Interview - ‣
    
    ML Blog - [https://mlengineer.io/](https://mlengineer.io/)
    
    Educative - ML System Design - [https://www.educative.io/courses/machine-learning-system-design/](https://www.educative.io/courses/machine-learning-system-design/)
    
    production Deep learning - https://github.com/alirezadir/Production-Level-Deep-Learning
    
- **Important Links**
    
    [https://www.udemy.com/share/105wvY3@ZEeX-BVuMGuibHw96YP0Z5TMX3OAGkTgz-2bv8WXW3F7R4y5qo5pi5r_1SAdQUwC/](https://www.udemy.com/share/105wvY3@ZEeX-BVuMGuibHw96YP0Z5TMX3OAGkTgz-2bv8WXW3F7R4y5qo5pi5r_1SAdQUwC/)
    
     [https://github.com/donnemartin/system-design-primer#system-design-topics-start-here](https://github.com/donnemartin/system-design-primer#system-design-topics-start-here)
    
    [highscalability.com](http://highscalability.com/)	
    
    [https://netflixtechblog.com/](https://netflixtechblog.com/)	
    
    [https://leetcode.com/discuss/interview-question/system-design?currentPage=1&orderBy=hot&query](https://leetcode.com/discuss/interview-question/system-design?currentPage=1&orderBy=hot&query)	
    
    [https://developers.googleblog.com/](https://developers.googleblog.com/)	
    
    [https://eng.uber.com/](https://eng.uber.com/)	
    
    [https://tianpan.co/notes/2016-02-13-crack-the-system-design-interview](https://tianpan.co/notes/2016-02-13-crack-the-system-design-interview)
    
    [https://tianpan.co/hacking-the-software-engineer-interview/](https://tianpan.co/hacking-the-software-engineer-interview/)
    
    [https://www.edureka.co/blog/hbase-tutorial](https://www.edureka.co/blog/hbase-architecture/)
    
    [https://lethain.com/introduction-to-architecting-systems-for-scale/](https://lethain.com/introduction-to-architecting-systems-for-scale/)
    
- **Youtube Channels**
    - Gaurav Sen → [https://get.interviewready.io](https://get.interviewready.io/)
    - CodeKarle
    - Sudocode

[https://github.com/prasadgujar/low-level-design-primer/blob/master/solutions.md](https://github.com/prasadgujar/low-level-design-primer/blob/master/solutions.md)

[https://github.com/kumaransg/LLD](https://github.com/kumaransg/LLD)

[https://www.youtube.com/c/SystemDesignInterview](https://www.youtube.com/c/SystemDesignInterview) - Only 3 TO 4 videos

[https://github.com/karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) crisp

[https://m.youtube.com/c/SystemDesignInterview](https://m.youtube.com/c/SystemDesignInterview)

[https://github.com/mtdvio/every-programmer-should-know](https://github.com/mtdvio/every-programmer-should-know) → **BASICS**

[https://www.linkedin.com/posts/ryanlpeterman_32-vetted-resources-to-help-you-master-system-activity-7119336122740064256-uYt-](https://www.linkedin.com/posts/ryanlpeterman_32-vetted-resources-to-help-you-master-system-activity-7119336122740064256-uYt-)

# Event Driven Architecture

- Events are core building block
- Published by producers and ingested by multiple consumers which requires contract
- 

# Additional Topics

- HTTP  v/s  REST  v/s websockets
- How docker internally works
- How does blob object stored in S3 and DB

# Interview

- Requirements - Understanding the requirements, collect the feature requirements, who is this application for, does it have both FE and BE or just a CLI application etc
- Layer - Is it a mobile app, desktop app etc , based on that the next step is
- Tech Stack - What technology to be used - company’s choice, community support is
- Code or project structure and design patterns to implement business logic, exposing the APIs
- Datastore interactions - how is it going to talk to the DB, are you going to use caching, libraries to be used for interactions
- Performance/Cost - Write application which will have low CPU cycles and utilise low memory
- Deployment
- Monitoring - Try to measure the metrics - memory, CPU, request the application can serve, error logs and application info
- Operational excellence/Reliability  - Should be reliable, should be handle failure, crash
- Capacity Estimation
    - Amount of data - DB to choose
    - Metrics - KB, TB, PT, Million, billions
- HTTP/S , REST API
- WebSockets - real time
- Polling
- Additional storage - Block
- Page & Filtering
- Rate limiting
- Logging & monitoring
- CPU architecture
- OS Internals - overview
- Processes & Threads and multi threading
- Bloom filters
- Design Patterns
- Event-driven architecture or systems
- How much API request can be served concurrently
- A/B testing
- Bits and Bytes

# Docker

### Screenshots

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image.jpg)

### Notes

![D80C3981-819E-4614-95CB-5CE2E130302E.jpeg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/D80C3981-819E-4614-95CB-5CE2E130302E.jpeg)

## Docker engine

Docker Engine acts as a client-server application with:

- A server with a long-running daemon process [`dockerd`](https://docs.docker.com/engine/reference/commandline/dockerd).
- APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon.
- A command line interface (CLI) client [`docker`](https://docs.docker.com/engine/reference/commandline/cli/).

### Docker Architecture

Docker uses a client-server architecture. The Docker *client*
 talks to the Docker *daemon*
, which does the heavy lifting of building, running, and distributing your Docker containers.

![B9D4CCA9-EC38-4B43-A3B1-F4369443B9AC.jpeg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/B9D4CCA9-EC38-4B43-A3B1-F4369443B9AC.jpeg)

The Docker client and daemon *can*
run on the same system, or you can connect a Docker client to a remote Docker daemon

The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

The Docker daemon (`dockerd`
) listens to the Docker client commands

When you use commands such as `docker run` the client sends these commands to `dockerd` which carries them out.

# Kubernetes

Opensource container orchestration.

Helps in managing microservices 

Works on master (contains config files, secret files, ectd scheduling - worker (where code runs) architecture 

group of servers are called clusters - here 1 cluster is having master and work nodes.

Uses CNI network for talking between the servers

Master node configures the deployment and the deployment happens on the worker node

Node is a server where all the workers are available

Pod is the single entity where the application runs e.g. 1 docker which runs react FE this will be in a pod. Another POD will run the DB . There will be lot of pods inside a node

All worker nodes are managed by the API server. A tool which is used to manage all the work nodes are - Kubectl 

At the worker site we use a tool called kubelet - an agent which is on the worker node to manage the workers 

# Screenshots

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%201.jpg)

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%202.jpg)

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%203.jpg)

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%204.jpg)

# Notes

![Screenshot 2022-11-03 at 9.36.38 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-03_at_9.36.38_AM.png)

# Git Actions

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%205.jpg)

# Basics

Web server uses HTTP - then how much memory or bandwidth  HTTP takes for request and to respond back?

IPv4 has only 16 bits so it can have only 65535 ports for TCP and UDP on a single computer - Web server ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client. These ports are assigned a unique number to identify them separately. Port 80 and 443 are the two standard ports used by web servers to communicate with the web clients. Web client and the web server need to adhere to the same set of rules which is called a protocol. The standard protocols created for transmitting web content between a web server and a web client are the hypertext transfer protocol (HTTP) and the hypertext transfer protocol secure (HTTPS).

Ports → Any server machine makes its services available to the Internet using numbered **ports,** one for each service that is available on the server. For example, if a server machine is running a Web server and an FTP server, the Web server would typically be available on port 80, and the FTP server would be available on port 21. Clients connect to a service at a specific IP address and on a specific port.

- API
    - Sync - where the service wait for a response
    - Async where webservice does not wait for response
    - It has 3 formats & REST /SOAP /RPC]
    - REST separated FE and BE and it is stateless & operate thro intermediate system like LB or APIGW
    - SOAP - Simple object access protocol - Create Web API using XML.
    - Data serialisation converts struct data to format that helps storing and sharing in a format that allows recovery of its original Struct .
- HTTP & HTTPs Headers (OSI app layer)
    
    HTTP = protocol for fetching resources Like htmi, imgs, docs, txt, Videos, scripts
    
    = is client - server protocol & exchange individual mags (not stream of dala
    
    = Msg by client= request & sent by Servere response
    
    = Sent over TeP or TLS encrypted Tep connect" {but can use any transport protocol}
    
    = request sent by I entity- User-agent (Brousser) or a prosy or bots
    
    = {between  client & server there can be gateway or caches , other device like routers, modem & more }
    
    = {user-agent-> acts on behalf of a user)
    
    there are other?
    
    = request instaled by cheint - Semen fetchs HTML, doe, etc { headers sent to
    
    = Server serves the docs-could be Collect" of Serves sharing the load (LB)
    
    = Several sever software can be hosted on a Single m/C
    
    - WebServer (Apache HTTP SeTVeL, tomcat, Ngina, node js
    - DB Server
    
    = proxy - Transperent - forward request w/o altering & non-transparent - chg before sending to server
    
    - Caching (public| private - browser cache)
    - Filtering (Antivirus and parental control)
    - Load Balancer
    - Authentication
    - Logging (historical info)
    
    = its simple -> Itip/a encapsulate hitp mags into frames
    
    = extensible - HTTpheaders helps to extend - new funct can be introduced bySimple agreement bw client-server
    

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%206.jpg)

# General interview Tips

![Screenshot 2022-06-14 at 12.23.59 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_12.23.59_PM.png)

Additional as part of NFR - always pick top 3 from the list in the figure including the 1 below

Consistency 

Durability

Paintability 

Cost

Metrics ???

### Questions

Note: It is hard to achieve scale and also make the system as fast as possible.

- Create a template list of questions to ask
- Choose from the area provided below (table)
- Gather all the FR and NFR
- Create a high level digram
- Make sure you drive the conversations
- Once high level diagram is created - choose the simple topic - DATA - what data you want to store and how - i.e. Data Model - ask interviewer about expected data delay
- Now where do we store this data - check the NFR and decide which options will be best.
    - How to scale writes
    - How to scale reads
    - How to make reads and writes faster
    - How to not lose data during hardware/network failures
    - How to achieve strong consistency
    - How to recover data in case of outages
    - How to ensure data security
    - Extensible for future data model changes
    - How much money and cost
    - The solution chosen should scale well for both reads and , fast and have high availability, should have high data consistency
    
    → Now against all the above points how does the following handle
    
    Approach - Data stored from single machine to multiple machine - Sharding or horizotional scaling
    
    **# → MYSQL**
    
    Shard proxy can cache query results, monitor instance health, publish metrics, terminate query which takes longer time
    
    This below takes care of scalability and performance but not availability
    
    ![Screenshot 2022-06-13 at 10.52.32 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_10.52.32_AM.png)
    
    Read can be from master or replica and write to only master as below - this takes care of availability (across data centres)
    
    ![Screenshot 2022-06-13 at 10.57.21 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_10.57.21_AM.png)
    
    Now - how can we store the data
    
    ![Screenshot 2022-06-13 at 11.49.26 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_11.49.26_AM.png)
    
    **# → NoSQL (Cassandra)**
    
    Even in NoSQL - we split the data into chunks also known as nodes. Now cluster proxy - an additional component is not required. We can use round-robin or use node which are closer to the request received - This will be coordinator node - use consistent hashing. Below is for the high availability 
    
    ![Screenshot 2022-06-13 at 11.45.08 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_11.45.08_AM.png)
    
    Now - how can we store the data
    
    ![Screenshot 2022-06-13 at 11.50.25 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_11.50.25_AM.png)
    

### Entire Flow

![Screenshot 2022-06-14 at 12.05.21 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_12.05.21_PM.png)

### Communication

- Be able to talk for the full time about the project, with interaction from the interviewer being conversational rather than directing
- Be knowledgeable about the project as a whole, rather than only their area of focus, and be able to articulate the intent and design of the project
- Be passionate about whatever the project was, and able to describe the elements of the project that inspired that passion clearly
- Be able to clearly explain what alternatives were considered, and why they chose the implementation strategy that they did.
- Have reflected on and learned from their experiences

### **Requirement clarification is 1st step** -

This is to start the dialogue between you and the interviewer (ref framework video → [https://www.youtube.com/watch?v=bUHFg8CZFws&t=1494s](https://www.youtube.com/watch?v=bUHFg8CZFws&t=1494s)) 

| Users/Customers | Scale - How our system will handle the growing amt of data | Performance - how fast our system must be | Cost - Budget contraint | Data |
| --- | --- | --- | --- | --- |
| Who & how they will use the system | How many read queries per [second](http://second.How) . | What is expected write to read data delay | Should the design minimize the cost of development | How is the data flow - data in and data out |
| How will the system be used - Marketing system | How much data is queried per req | What is expected latency for read queries - should it be real time ? | Should the design minimise the cost of maintenance | Always think about the data |
| Types of users can be defined? | How many video views are processed per second |  |  | data model - what and how to store |
|  | Can there be a spike in traffic |  |  |  |
|  | Is it read heavy system or write heavy |  |  |  |

### **FR and NFR**

- Functional Req → System Behaviour → What the system will do
    - APIs - once example of how we can generalise the API. This is brilliant!!!!
        
        ![Screenshot 2022-04-29 at 9.13.58 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-29_at_9.13.58_AM.png)
        
    - 
- NFR → System Qualities → How a system is supposed to be - we need to find tradeoffs
    - Fast
    - Fault tolerant
    - Secure
    
    Scalable - 10s and 100s of videos/second
    
    High performant - return the total count in few millisec
    
    Highly available - Survives hardware and network failures - no single point of failure
    

### Basics

Option 2 is better - we have the click event (value = 3) for 3 users clicking a video, processing services store it in-memory and then update db at a specific interval

![Screenshot 2022-06-13 at 12.00.17 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_12.00.17_PM.png)

Push vs Pull - Push means async and pull means pulling the info from a temporary storage - Pull is better and can scale  easily and has full tolerance support.

A and B writes to a queue so even if the processing service fails and comes back the data is pulled from the queue and written to the DB - that is why 2nd option is better.

![Screenshot 2022-06-13 at 12.12.11 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_12.12.11_PM.png)

### Data Aggregation

After we process several events and successfully stored in the DB, we write checkpoint in the DB so if the processing service machine fails then it will be replaces with another one and this checkpoint will help to continue where it left off - This is a concept in stream data processing 

![Screenshot 2022-06-13 at 12.17.22 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_12.17.22_PM.png)

Paritioning

Every queue is on a single machine and stores subset of all events - hash is computed based on the identifier and use this hash to pick the queue. 

Parition allows parallelize  event processing - more events we get  → more partition we can create

![Screenshot 2022-06-13 at 12.20.50 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_12.20.50_PM.png)

### Processing Services

How to make it fast, scalable and reliable (or fault tolerant)

How to scale ?

How to achieve high throughput

how not to lose data when processing node crashes

What to do when the DB is slow or unavailable

So if you want to scale then partition, if you want reliability, replication and fast means in-memory

So this is what the processing services which we have learnt so far does

 Processing Service will pull the data, count event from memory from the queue and update the DB periodically

Partition consumer will read the events (single thread)  in loop, de-serialize it (bye array to objects). We can have multiple thread which will read multiple such partion (this will be cost, complex as we need multiple checkpoints (complex) and also might introduce sync issue or order of the events  should be maintained.

![Screenshot 2022-06-13 at 1.48.09 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_1.48.09_PM.png)

![Screenshot 2022-06-13 at 2.06.51 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_2.06.51_PM.png)

Partition consumer will also have de-duplication component  (to avoid double counting) - this will be distributed cache - so if there are multiple same request arrives - (e.g. last 10 mins)  the first 1 will get processed.

Event then goes to component (aggregator) that does in-memory counting - This is similar to hash table that gathers the data for some period of time  - periodically you can create a new hash table , the old hash table is sent to the internal queue

Internal queue - we need this because the events is read from the partitions in a single threaded mode so to speed up the processing internally by multiple threads - so with this internal queue we decouple consumption and processing - we could also have this queue before the aggregator as well instead of what’s shown above

Database writer - Single or multi threaded - Single will keep the checkpoint easier but multi will increase the throughput 

Dead-letter is used in case the network is slow or unavailable and also used widely to preserve data for downstream service degradation 

Embedded Database → The data we receive the internal queue will have basic information only so video related info like video creation date, title etc comes from this DB - this lives in the same machine as processing service - as it should be read quickly - this is used in Linkedln - who viewed your profile, how many ppl have the job title “xyz”

State Mgmt - We keep the counter in-memory for some period of time  either in-memory store or in queue - so to avoid machine failures

State Store - this is for storing the state data periodically from in-memory to persistance - so when the machine fails you can restart it from that point onwards

### Data Model

- Individual events - Known as real time - stream data processing
    
    fast writes, can use filters, slice and dice, recalculate when required
    
    Slow reads if we want some sort of metrics or aggregations. Cost to store all events
    
    But the reads is fast if we want to get the individual events
    
- Aggregated events - batch processing
    
    Fast read, data is ready for decision making in real time but can query the data only the way it was aggregated
    
    Need data aggregation pipeline - we can keep something pre-aggregated, hard to fix errors if there are issues while calculating - This is not a trveial task
    
- Best of both worlds
    
    We will store it for several weeks or months and then purge the data (r - use glacier s3 for cost savings)
    
    Expensive and complex
    

### Data Ingestion Path & components

![Screenshot 2022-06-13 at 2.10.16 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-13_at_2.10.16_PM.png)

![Screenshot 2022-06-14 at 10.55.28 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_10.55.28_AM.png)

Blocking v/s Non-blocking 

Blocking →  Client initiate a connection using sockets in a single connection thread, anther thread gets created for a new request. It is easy to track the progress of the thread by looking at its stack, it is easy to manage. We can use thread local variable. 

Non-blocking → Single thread on the server side manages the multiple requests

Buffering and batching - Batching is batch all the events together before sending by using buffer. It is either sent once the buffer is full or at a certain intervals

Timeout - how much client is going to wait. 2 types connection and request timeout

Connection time out - how long to wait before establishing the connection

Request - when request processing takes too much time - use latency percentile e.g. measure latency of 1% of the slowest request in the system. 

Retries - Retry the failed requests - We have to be. careful if clients starts the retry request all at the same time - it creates a retry storm events and overload the 

- Exponential backoff algorithm - increases the waiting time between retries - i.e. wait little longer with every attempt
- Jitter adds the randomness to retry intervals to spread out the load

Circuit Breaker - Even with the above algorithm it might still break if the partioner service client is slow so we use something called as Circuit breaker - it checks how many connections have failed and on thresh hold it will stop calling the downstream service

Register the partitioner service to DNS and specify the domain name - [partitionerservice.domain.com](http://partitionerservice.domain.com) and associate that with the IP address of the load balancer device

Partitioner Service and Partitions

Service - Web service which gets request from clients, looks into each request to retrieve individual events (as we have batched it on the client) and routes this to some partition.

Partition is also a web service that gets the message and stores in disk in the form of append-only log files - these will be log files of predefined size. Also partitioner service has some rules that defines which partition will get which messages  - using consistent hashing

Service Discovery - 2 types - server side and client side - uses service registry

Replication - 3 types - single , multiple leader and leaderless 

Message Format - textual (csv, json, xml) or binary  (thrift, Protobuf, Avro). Textual is readable but binary is much for scalable and used in real-time processing, they are compact and faster to parse. Apache Thrift and ProtoBuf uses field tags instead of field names - tags are just numbers and they act like aliases for fields. Tags occupy less space. Schema needs to be defined for binary formats. Message producers (clients) need to know the schema to serialise the data and the consumer requires to de-serialise the message. The schema is stored in some shared db which both producer and consumer can use. Schema will change over time, add more attributes to msg and use them later for counting or filtering

### Data Retrieval path

When user request a video, a web service will be called that retrieves the comments, another one for video , another one for recommendations count. There is another one called Query services which extract the video stats. The data will increase over time so we need to use the rollup. The older storage can be in object storage (e.g. S3). Old data is pulled from S3 (cold storage)

Query results should b stored in distributed cache 

![Screenshot 2022-06-14 at 11.41.47 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_11.41.47_AM.png)

### Technologies

We could also use time-series database like influx DB

To store row events use Hadoop or RedShift

S3 for archiving 

Netty - for building  non-blocking i/o frameworks for building network applications both on  client and servers 

![Screenshot 2022-06-14 at 12.09.31 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_12.09.31_PM.png)

Some other technology used are

Vitess - for managing the mysql cluster

Internal queues can use SQS or RabbitMQ

RocksDB - for embedded database

![Screenshot 2022-06-14 at 12.13.59 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-14_at_12.13.59_PM.png)

### Bottleneck

- How to identify bottlenecks load testing for scalability

We can use all the above concepts to design similar ones like 

- Counting like, shares, reports
- Designing monitoring systems - we count metrics
- Fraud prevension - how many times the card was used rcently
- Recomm System - count as i/p to ML models
- What’s trending - count all sorts of different reaction - counts, likes , comments, re-tweets

### Questions to know - (Udemy)

Additional things to remember and should know are

- Microservices
- using LB vs API GW
- Sycn and ASync pattern
- DB selection (replicartion, read request etc
- Caching (DB, CDN and other components)
- Security (Auth/Authz , encrypt data at rest and transit)
- How to scale all components and highly available

# Three Tier Architecture

### Example of 3-tier architecture

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled.png)

### Sample 3-tier architecture

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%201.png)

### Import points

1. We can run our Web Server (which runs tomcat) and App server which  talks to the DB on EC2 instances .  
2. Both instances will have IP address, you should not hard code it and it needs to scale so 1 IP address is not enough - How will the servers talk to each other - it is via the ELB which has DNS attached to it
3. To avoid single point of failure, we can have H.A on 2 different AZs on auto scaling group for both web sever and app server. ELB has HA already since it is a service provided by AMZ
4. For network security, you can have the ELB on the web server in public subnet and rest should be on private subnet. You can configure network access control list or security group. You can also implement WAF with LB to protect web server from malicious requests. 

1. DB can have SQL or NOSQL. You can have AWS native DB which comes with out o the box - HA, fault protection and replication AWS - DB - Aurora which is in multi-AZs
2. Aurora has read replicas to handle read traffic while write traffic goes to primary instance. You can introduce caching layer - Elastic Cache.  

# Scalability

### Definition

**Why →** To manage increase in the number of users, number of requests, number of transactions and amount of data which can be served - this includes **concurrency**

Scalability is inherently about **concurrency**; after all, it's about doing more work at the same time

- How threads and process utilises the CPU
    
    CPU time is required to execute these processes and threads (CPU time and cpu cycles remember?)
    
    Concurrency → Defined as the ability of a system to run two or more programs in overlapping time phases and can share resources. Multiple computations happening  at the same time but not the execution. 
    
    Parallelism → System to run multiple programs in parallel and usually does not share the resources. Multiple execution at the same time.
    
    Parallel execution →  the tasks to be performed by a process are broken down into sub-parts, and multiple CPUs (or multiple cores) process each sub-task at precisely the same time. Parallelism is the real way in which multiple tasks can be processed at the same time
    
    Context Switching → Processes and threads consume resources. They each use memory and other OS resources, and they need to be swapped on and off the cores is known as *context switching*
    
    *Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.*
    
- To understand scalability - need to know how many simultaneous request a server can handle and how CPU and Memory and IO comes into play and limitations ?
    
    2 Sockets for 2 CPUs of 10 cores each
    
    If 1 CPU has 10 cores then it can run 10 threads at a time or 1 multithreaded with 20 threads in parallel
    
    Threads → Single unit of execution under a process
    
    Multithreading → where multiple threads executes in parallel in a process (i.e. multitasking). It allows for multiple threads to be created within a process, executing independently but concurrently sharing process resources.
    
    Multithreading in a web app should be working like this → So the thread spend most of their time using 0% CPU waiting for the database to return data. While doing so they have had to allocate the memory required for a thread which includes a completely separate program stack for each thread etc.
    
    ```
    request ──> spawn thread
                  └──> wait for database request
                         └──> answer request
    request ──> spawn thread
                  └──> wait for database request
                         └──> answer request
    request ──> spawn thread
                  └──> wait for database request
                         └──> answer request
    ```
    
- **What is Concurrency**
    
    Ability to serve multiple request at the same time. This can mean more open connection, active threads, more processing and more CPU context switching.
    
    But Server has limited amount of **CPU** and **threads**. 
    
    **To ensure consistency of data by locking mechanisms etc - Bookmyshow - 1 seat trying to book by 2 different users.** 
    
- **Interaction rates**
    
    100 concurrent users (1 request every 120 seconds) another system 100 users sending 1 request every second. 
    

### Interview **Info**

**Just do not say system is scalable but we need to know by how much e.g. this system is scalable by 100,000 users etc**

### Vertical scaling

- To increase the RAM and CPU on the same server for which the system has to be done and then there  are chances of missing transaction during cutover
- There is only limited scaling as we cannot keep adding RAM or CPU to the server
- It is expensive

### Horizontal scaling

- If the load increases you simply spin up a new server and traffic will start coming to this new one
- There is no transition or cut-off period so chances of missing a transaction is very low
- Scales up faster
- Legacy code needs to be refactored for this scaling - Trying to scale your monolithic you will end up paying more

### AWS Info

- There is a Auto Scaling group and a criteria which contains this EC2 instance and on a certain threshold, another EC2 will be created in the same AS group
- Lambda scaling is only horizontally - so as more traffic comes in the lambda gets invoked and new instances get created.  There is a lambda function which gets invoked. It brings down the server when the traffic reduces.
- For K8 - There will be a pod with a container on it running on EC2 instance. This POD will keep track of the CPU and resource utilisation and if it goes up then using HPA (Horizontal POD autoscaling) a new POD is created on the same EC2 instance. At certain point the utilisation of the EC2 will also go up - then we need to do is the cluster auto-scalar  - where number of nodes increases. Below is the example of Cluster autoscaling. Imagine you do not have to manage the multiple EC2 cluster, so AWS has a service called AWS Fargate - it manages the cluster autoscaling
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%202.png)
    

### Exercise

Pizza business for Distributed Systems - Reference - Gaurav Sen Gupta - youtube

# Consistency

- Define
    
    When we have multiple copies of the data, how to make sure user always get the updated data (consistent data)
    
    - What are 3 consistency patterns
        - What is eventual consistency
            
            When write happens, the data will be eventually updated when the read happens. usually in nano or mill seconds, - after the data is updated asyncronously.
            
            e.g. email and DNS. This EC works on highly availability systems.
            
        - What is strong consistency
            
            After a write, reads will see it. Data is replicated synchronously. This approach is seen in file systems and RDBMSes. Strong consistency works well in systems that need transactions
            
        - What is weak consistency
            
            After the write happens, the data read might or might not get the updated data. Imagine you lose the connection for few seconds while taking on the phone. The data is lost
            

# CAP Theorem

Only two will hold true and where. What trade offs are required

What is

- Consistency
- Availability - Are we making the system with high availability?
- Partition Tolerance

# Consistency - What type of system should be highly consistent

- Weak or strong
- Eventual
- What are highly consistent systems - e.g. railway reservations, banking system

**Consistency is also replication - Any read that happens after the latest write should return the latest value of that write.**

# Availability - what type of system should have high availability

e.g. video streaming, Facebook - it is ok to see the comments a few seconds later

- How does R/W happens when node goes down - strategy that should be taken
- What are the trade-offs

**Availability - Throughput - It does not guarantee the availability of the latest value -** 

# Partition Tolerance

There will be lot of n/w partition so how the failure will work and how the interactions will happen between partitions

**System will respond to read and write even if the communication channel between the nodes are broken**

# CAP Theorem

In an interview - always ask if it is mission critical, transaction (banking, flights) based etc - that means the consistency is of utmost importance but if it is of e.g. youtube likes and analytics we can sacrifice a bit of consistency

For Partioning - We should have multiple network connection 

# Microservices

## Objective : Design which services will be microservices and how these will interact between them

# Monolith

It is a single tier architecture which contains user interface and data in a single program. It is simple and uses single code base e.g. whole jar file 

Modularity is hard to enforce and scaling is a challenge. it has long release cycle

API has nothing to do with monolith or microservices.  Below you can see that certain APIs can be scaled. For single DB, if the microservices scale then

DB should be able to handle/serve the increased connection

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%203.png)

# Characteristics of Microservice architectures

- Independent - Each microservices are independent of each other
- They can be tested separated and should have different functionality
- Scale - each MS can scale
- Each MS is independent of each other and scale independently- so an apply different governance and security measures and features
- Deployment can be done independently - this makes our DevOps much faster and simpler i.e. you can deploy store/get
- 

# ***AWS***

In AWS we can use EC2 which will have separate auto scaling group and with different scaling criteria.

EC2 can run microservices

### option 1

### option 2

### option 3

Elastic Load Balancer and API gateway for hosting the microservices

For modern application you can use lambda. Each microservices backend will be implemented in lambda function

You can containerise your application using EKS or ECS

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%204.png)

For option 3, we can understand more about the EKS 

Each microservices will have different services and each of these services will have their own container and each container will run in a pod. All this will be using Ingress which is ALB - Application Load Balancer.

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%205.png)

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%206.png)

Since each microservices are different, we can mix and match with different programming languages and mix and max them as well like below.

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%207.png)

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%208.png)

# API and GW

API - piece of code which interact with each other.  They play an important role in designing the system

- Provides abstraction - The code/FE which call the API need not know the changes which happens at the API level
- It is used for communication between 2 application
- Platform Agnostics - Since it follows a standards - so service can be written in any language

Types

- Private API - It is not available to public - money transaction APIs
- Public API - e.g. google or weather API
- Web APIs -
- SDK/Library APIs - e.g. thread APIs, lock, fork, - The underline logic can change

Factors to consider while designing and developing the APIs

- API Contracts - endpoint, sending data in format - the agreement
- Documentation
- Data format - Data which will be exchanged
- Security - Accessing the API with wrong data format, rate limiting and throttling to be thought of while designing the system

Standards - each of them have their own advt and disadvt

- RPC
- SOAP
- REST

API gateway hosts all your APIs. throttling, authentication managing backend and much more

AWS has a service - AMZ API Gateway 

# REST APIs

Representational State Transfer. It has 5-6 guidelines for data to be transferred between client and server. How they can exchange (representational)data between UI and server. There is an agreed upon contract between client and server

The copy of the data stored in the database needs to be converted in a format - representational format which is agreed between UI and backend and is sent to UI.

So if the state changed and the update information is sent to UI -e.g. 1st state had 5 records and then second request will have additional records which is sent to UI

## Guidelines - Architecture

1. Client Server - There is an agreed upon contract between them. Client requests the data and server transfers the representational data with agreed upon contract between them
2. Cacheable - If the data is cacheable then UI will fetch the data from the cache
3. Layered architecture should be supported - so when UI requests for data, it only talks to the application server but this server talks to other datastore which need not be known to the client
4. Stateless - Server or client will not save the state. Server will treat all the request from different client as same. e,g, 1 server get same request from multiple clients. Server will server the request in a uniform manner
5. Uniform Interface - Whenever client and server are interacting, it should happen that one API is implemented in HTTP and another one in a different protocol
6. Code on demand - This is optional

## Example

Building a book catalogue. The list of APIs to be implemented are

- get list of all books
- add a book
- remove a book
- update book info

The first one is get list of all books. Here what all we need - GET, POST, PUT, Delete are all HTTP methods

- URI e.g. <serverdomain>/mystore/ books - this is the resource identifier - the method is GET which will return JSON or XML. This JSON is representational data which is agreed up on with the UI. You are transferring a state (which is a copy of data) over HTTP protocol. So we will have
    - Method = GET
    - URI = /serverdomain/mystore/books
    - data
- Adding new book by POST method - to send the data it is called payload. This is creating new resource
- PUT for update - This changed the state of the data
- DELETE - for deleting

## State transfer versus stateless

- State transfer is for data - the data exchanged between client and server. This is happening through state transfer
- stateless - Server will not distingush between clients. The state of client will not save the state

## HTTP Response Code

- 200 - Ok
- 201  - POSt creation and JSON response
- 3xx - Redirection
- 4xx -  client sending bad data
- 5xx - issue at the server side

### Security & Validation

- OATH2 is a mechanism for security
- Rate limit or throttling

# Why do you need API GW

If you are creating API and you do not have a GW then all the implementation of traffic management, Load Balancing, Authentication and Authorization needs to be done at the API level

So we need all the interfacing params above in this GW layer - API GW. It takes care of the following

- Throttling
- Authentication and Authorization
- Managing backend etc

## What are some main differences between API GW and [ALB](https://www.notion.so/5dbec2d427e747fdb3cbffa16fa13f37?pvs=21)

# API Gateway - It’s an API service

# ALB - Distribute  traffic across incoming backend targets

### If traffic is spiky and then idle for long time then API GW will be cheaper but consistent high volume will become cheaper

- Can implement rate limiting bursting - e.g. only 10K request per day or month
- API GW is fully managed API services from AWS
- Implements rate limiting (can call 10K per month etc) bursting for the APIs
- Not possible to get the static IP address for the endpoint but only the URL
- Accepts https traffic
- Able to do the request validation & request/response mapping - e.g. if you are expecting the id in the api request then request can be rejected at the API GW instead of coding this at the backend. Request/Response mapping - map certain fields before calling the backend - e.g. get api is sending account field but backend is expecting to acct_no. This mapping can be done with GW
- Able to handle the spiky traffic (default rate is 10k rps,  allocate 5k burst rate) - this is faster
- Able to integrate with Lambda from different region and even different AWS account
- Able to export/import APIs from various other platforms using Swagger with very little coding
- Can extensive authentication and auth - API key, IAM etc
- You can cache repeated response
- Timeout limit is 30 seconds
- Integrates with almost all AWS services
- No health check available - option is to use CloudWatch with rules and ping the server (e.g lambda) to check
- Pay per use
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%209.png)
    

### 

- No Rate limit or burst capability
- Out of the box support for AWS WAF for protection
- possible to get the static IP for LB endpoint using global accelerator
- Accepts the https and https traffic
- Cannot do the request validation or request/response mapping
- Delay during spiky traffic - we can pre-allocate (pre-warmed) LCUs but cost is involved here
- ALB is a regional service so cannot go across region and account
- API GW is fully managed API services from AW
- No direct method to import/export for cross platforms
- Integration with any OIDC complaint idP (cognito, LDAP etc.)
- Cannot cache any responses
- Timeout limit 4000 seconds
- Uses EC2, Lambda, IP address as backend
- Health check available - so pings the backend and check if the services are available - this has to be done by cloud watch and schedule the rules
- Pay even for idle instance - underlying is EC2

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2010.png)

# Metrics

To evaluate how good the system is working and performing. You need to work with resouces, bandwidth and response time to get the higher throughput - i.e. optimise or lower the cost

1. Throughput

How much can you produce in certain amount of time.  Amount of work does in a certain amount of time

How many API calls can be served in a specific amount of time

1. Bandwidth

Data transferred and served across 

If you have higher bandwidth and you have the resources to utlise this bandwidth, then your throuput is high but if you have resouces but bandwidth is low then it is low

In real world, you need to adjust both 

1. Response Time

Let us say you have an API which serves a request in 1 second and you have good bandwidth and enough throughput the overall system is good but if the API takes 2 sec instead of 1 then overall system gets compromised

1. Latency

# Component Performance (balance between cost and the o/p you want)

- Application Performance - API response time and in a given amount of time how many APIs it supports (depends on the instance type but also on the code), how many error it can manage, edge case scenarios , bugs and defect in the code. If the application is good, it will have low latency, good response time
- Database - How much time the query is taking to run, if the  indexes are available and it can have huge read and write without affecting the application. How the schema is designed, how the application code is written, create replica to reduce the load. Also needs CPU
- Cache - IN memory and quick - writing to cache should not take time, the reading can be done in constant time. If the eviction is happening in good rate then it is performant, how memory is used, can we store enough key-val or is the eviction happening. Throughput is how many quesirs can be writen , how fast the eviction happens
- Message Queues - How fast it can oush the message, how fast can be processed, how many messages can be processed at any given point of time, lot of msg in failed queue, lot of retry has to be done then thruput will go down. Bandwidth is low when the subscriber is less
- Workers - How much time and resources this worker is taking (worker can be to process data in db, adding to DB, background processing)
- Server Instance - Memory and CPU. If the code is performant then increase the size or else change the code, remove the memory leakage

# Availability Patterns

### Definition

There are 2 complimentary patterns to support Availability  → Failover and Replication 

### Failover

- Type 1 → Active - Passive
    
    Using Heart beat between active passive. This is also known as master-slave failover as well. The length of the downtime is determined by how “hot” the slave is
    
- Type 2 → Active - Active
    
     Both balances the load. These are known as master-master failover.  If public URL then DNS should need to know the IP of both servers. If it is internal server then application logic need to know both servers
    
- Disadvantage of failover
    
    It takes time to replicate so possibility of data loss 
    
    It adds more hardware
    

### Replication Types

Master-Master

Master-Slave

### Metrics for Availability

- Uptime - The % unit of time when server was available
    
    99.99% - down timr 8 hours per yeat
    
    99.999% - downtime - 52 mins per year
    
    ### Down time in sequence and in parallel
    
    - `Availability (Total) = Availability (Foo) * Availability (Bar)` =-If both `Foo` and `Bar` each had 99.9% availability, their total availability in sequence would be 99.8%.
    - `Availability (Total) = 1 - (1 - Availability (Foo)) * (1 - Availability (Bar))` - If both `Foo`and `Bar`each had 99.9% availability, their total availability in parallel would be 99.9999%.

# Trade-off

### Performance vs scalability

- A service is **scalable** if it results in increased **performance**
- If you have a **performance** problem, your system is slow for a single user.
- If you have a **scalability** problem, your system is fast for a single user but slow under heavy load

### Latency vs throughput

**Latency** is the time to perform some action or to produce some result. **Throughput** is the number of such actions or results per unit of time.

Generally, you should aim for **maximal throughput** with **acceptable latency**.

Latency is measured in units of time - hours, minutes, seconds, nanoseconds or clock periods. 

Throughput - This is measured in units of whatever is being produced (cars, motorcycles, I/O samples, memory words, iterations) per unit of time. The term "memory bandwidth" is sometimes used to specify the throughput of memory systems.

### CAP Theorem

In a distributed computer system, you can only support two of the following guarantees:

- **Consistency** - Every read receives the most recent write or an error
- **Availability** - Every request receives a response, without guarantee that it contains the most recent version of the information
- **Partition Tolerance** - The system continues to operate despite arbitrary partitioning due to network failures

### **CP - consistency and partition tolerance**

Waiting for a response from the partitioned node might result in a timeout error. CP is a good choice if your business needs require atomic reads and writes.

### **AP - availability and partition tolerance**

Responses return the most readily available version of the data available on any node, which might not be the latest. Writes might take some time to propagate when the partition is resolved.

AP is a good choice if the business needs allow for [eventual consistency](https://github.com/donnemartin/system-design-primer#eventual-consistency) or when the system needs to continue working despite external errors.

### Exercise for CAP - Remembrance Inc

Link : [http://ksat.me/a-plain-english-introduction-to-cap-theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)

### AWS Info

# DNS

### Definition and additional details

ISP provides the info on which DNS server to contact when doing the lookup. It is like a phone book

Browser can cache the mapping for faster access - we have TTL associated with it

It can be used as LB using round robin →  DNS load balancing relies on the fact that most clients use the first IP address they receive for a domain. In most Linux distributions, DNS by default sends the list of IP addresses in a different order each time it responds to a new client, using the [round‑robi](https://www.nginx.com/resources/glossary/round-robin-load-balancing/)n method. As a result, different clients direct their requests to different servers, effectively distributing the load across the server group.

### Types

A Record - points name to Ip address

MX  - Mail exchange server 

- Cname -
    
    All CNAME records must point to a domain, never to an [IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/)
    . Imagine a scavenger hunt where each clue points to another clue, and the final clue points to the treasure. A domain with a CNAME record is like a clue that can point you to another clue (another domain with a CNAME record) or to the treasure (a domain with an A record).
    
    For example, suppose blog.example.com has a CNAME record with a value of ‘example.com’ (without the ‘blog’). This means when a [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) server hits the [DNS records](https://www.cloudflare.com/learning/dns/dns-records/) for blog.example.com, it actually triggers another DNS lookup to example.com, returning example.com’s IP address via its A record. In this case we would say that example.com is the canonical name (or true name) of blog.example.com.
    
    Oftentimes, when sites have subdomains such as blog.example.com or shop.example.com, those subdomains will have CNAME records that point to a root domain (example.com). This way if the IP address of the host changes, only the DNS A record for the root domain needs to be updated and all the CNAME records will follow along with whatever changes are made to the root.
    

NS Record - specify DNS server for your domain/subdomain

### AWS Info

- To serve millions of users spread across the globe, we need more than one data centre.
- Geo DNS - DNS service that allows domain names to be resolved to IP address based on the location of the customer.
- Services → Route53 and CloudFlare

### DNS routing method when there is traffic

- weighted round robin
    
    prevent traffic from hitting the server when it is under maintenance
    
    balance between varying cluster sizes
    
    A/B testing
    
- Latency Based
    
    Based on the lowest latency it will route the traffic accordingly. This is specifically used when you have multiple AZs .  Need to create a latency record for your resources in multiple regions. When Route 53 receives a DNS query for your domain or subdomain (example.com or acme.example.com), it determines which AWS Regions you've created latency records for, determines which region gives the user the lowest latency, and then selects a latency record for that region. Route 53 responds with the value from the selected record, such as the IP address for a web server.
    
    For example, suppose you have ELB load balancers in the US West (Oregon) Region and in the Asia Pacific (Singapore) Region. You created a latency record for each load balancer. Here's what happens when a user in London enters the name of your domain in a browser:
    
    1. DNS routes the query to a Route 53 name server.
    2. Route 53 refers to its data on latency between London and the Singapore region and between London and the Oregon region.
    3. If latency is lower between the London and Oregon regions, Route 53 responds to the query with the IP address for the Oregon load balancer. If latency is lower between London and the Singapore region, Route 53 responds with the IP address for the Singapore load balancer.
    
- Geo-loction Based
    
    When you use geolocation routing, you can localize your content and present some or all of your website in the language of your users. You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights. Another possible use is for balancing load across endpoints in a predictable, easy-to-manage way, so that each user location is consistently routed to the same endpoint.Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation records that cover all seven continents, Amazon Route 53 will receive some DNS queries from locations that it can't identify. You can create a default record that handles both queries from IP addresses that aren't mapped to any location and queries that come from locations that you haven't created geolocation records for. If you don't create a default record, Route 53 returns a "no answer" response for queries from those locations.
    

### Disadvantage of DNS

It introduces delay. DDOS attack will prevent users from accessing these sites. Managing DNS servers can be complex and generally used by large companies or ISPs

DNS does not check for server or network outages or errors, and so always returns the same set of IP addresses for a domain even if servers are down or inaccessible - when it acts as **LB**.

# CDN

- AWS Service name?
    - AWS CloudFront
- what is it?
    - A globally distributed network of proxy server which servers static content closer to the users.
- Types of CDN
    - Push CDN
        
        Data is pushed to the CDN when there is an update on the server. Uploading the content and changing the URLs are done by us. This works well when the contents does not change much
        
    - Pull CDN
        
        It grabs the content from the server when user requests the content. Initially it is slow till the content is written to this CDN. There is a TTL for how long the cache has to be on this CDN. 
        
        Sites with heavy traffic work well with pull CDNs, as traffic is spread out more evenly with only recently-requested content remaining on the CDN.
        
- Disadvantages
    - CDN costs could be significant depending on traffic
    - Content might be stale if it is updated before the TTL expires it.
    - CDNs require changing URLs for static content to point to the CDN.
- AWS Info
    
    CDN is usually expensive so you can use Edge Cache - this needs to be configured by you where as CDN is a service. The edge cache stores the static pages 
    
    e.g. EU customers will have EU Edge cache and also CDN. The request from the client goes to the Edge Cache or if you are also using CDN, it will be routed there.
    
    If the data requested is not in the cache, it will go to the data centre, fetch and store it.
    

# LB

Load balancer technique is also known as “Server side discovery”

- Definition & why is it used
    - LB can be implemented by Load Balancer (HAProxy or NGINX), Caching  (Memcache or Redis)
    - Sessions can be stored in a centralised data store such as a [database](https://github.com/donnemartin/system-design-primer#database) (SQL, NoSQL) or a persistent [cache](https://github.com/donnemartin/system-design-primer#cache) (Redis, Memcached)
    - Servers should be stateless: they should not contain any user-related data like sessions or profile pictures
    - It picks a worker , wait for a response and send the details to the client
    - Preventing requests from going to unhealthy servers
    - Preventing overloading resources
    - Helping to eliminate a single point of failure
    - It is common to setup multiple LB - either in active-passive or active-active mode
- Benefits
    - LB helps in Horizontal Scaling improving performance and availability.
    - SSL Termination
        
         Decrypts the incoming message and encrypt the message sent back. This avoids to be done at the app server
        
    - Session persistence
        
        Issue cookies and route a specific client's requests to same instance if the web apps do not keep track of sessions
        
- HA
    - 2 Types
        - Active-Active
        - Active-Passive
- Routing traffic can be done using which all metrics
    - Random
    - Least loaded
    - Session/cookies
    - [Round robin or weighted round robin](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
    - [Layer 4](https://github.com/donnemartin/system-design-primer#layer-4-load-balancing)
        
        Layer 4 load balancers look at info at the [transport layer](https://github.com/donnemartin/system-design-primer#communication) to decide how to distribute requests. Generally, this involves the source, destination IP addresses, and ports in the header, but not the contents of the packet. Layer 4 load balancers forward network packets to and from the upstream server, performing [Network Address Translation (NAT)](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
        .
        
    - [Layer 7](https://github.com/donnemartin/system-design-primer#layer-7-load-balancing)
        
        Layer 7 load balancers look at the [application layer](https://github.com/donnemartin/system-design-primer#communication) to decide how to distribute requests. This can involve contents of the header, message, and cookies. Layer 7 load balancers terminate network traffic, reads the message, makes a load-balancing decision, then opens a connection to the selected server. For example, a layer 7 load balancer can direct video traffic to servers that host videos while directing more sensitive user billing traffic to security-hardened servers.
        
        At the cost of flexibility, layer 4 load balancing requires less time and computing resources than Layer 7, although the performance impact can be minimal on modern commodity hardware.
        
- Disadvantage of having Horizontal scaling.
    - Scaling horizontally introduces complexity and involves cloning servers
    - Downstream servers such as caches and databases need to handle more simultaneous connections as upstream servers scale out
- Disadvantage of LB
    - The load balancer can become a performance bottleneck if it does not have enough resources or if it is not configured properly.
    - Introducing a load balancer to help eliminate a single point of failure results in increased complexity.
    - A single load balancer is a single point of failure, configuring multiple load balancers further increases complexity.
- Consistent Hashing algo
- AWS Info
    
    ELB - Auto discovers new instances when added and gives you DNS
    
    - Why you need it?
        
        Imagine you have 1 application in EC2 instance running with one IP address.  You use this IP to connect to this application. Now this goes down and you have new IP address, how will you discover this new IP? Imagine your application scales and you have have multiple EC2 instance, how will you discover them and ensure that the traffic is balanced between all of them. For this reason we use ELB.
        
        It distributes incoming traffic across multiple instances. Each of the ELB will have unique DNS name, so user can invoke the application using this unique URL. If for example the load increases and you add another EC2 instances, ELB automatically discovers this instance and start distributing traffic to it.
        
        If your application has only EC2 instances or have pods (then ELB acts as Ingress/service). 
        
        If we have lambda and your site is [www.xyz.com](http://www.xyz.com)  since ELB gives you DNS, we need route 53 . Now when use hots this URL, route53 forwards it using **A record (alias) this traffic can be forwarded to this EC2**
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2011.png)
        
    - Properties of ELB
        - Automatically distributes incoming traffic across multiple targets
        - Monitor the health of all the instances/targets
        - Helps discover new instances
        - Integrates with SSL
        - every ELB has unique DNS name.
        - It runs on multiple AZs
    - Types of LB
        - Application
            
            We can use path and redirect it to the backend.  Advantage is that each target group can scale independently
            
            - Using ALB we can distribute the traffic to different target groups based on the URL/path.
            - Each of the separate target group can scale independently
            - operates on the OSI layer 7
            - validates and terminates SSL - can integrate with ACM - AMZ Certificate Manager
            - ALB supports EC2, IP address and Lambda
            
            ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2012.png)
            
        - Network
            - Operates on OSI layer 4
            - Routes traffic based on the protocol and port of incoming traffic e.g TLS 443 = https traffic or TCP 80 = http.
            - It cannot route traffic based on the URL (as above) as the application path is application layer property
            - It it SSL passthrough that means that the backend server needs to validate the SSL cert, the backend needs to take care of it. New feature can help terminate the SSL
            - NLB handles spiky traffic better
            - NLB exposes static IP address (instead of DNS) - you can use IP address in ALB via Global Accelerator
            - NLB supports EC2 and IP address as backend target group and does not support lambda
            - For K8, the NLB can forward to only 1 pod where as ALB can *based on path forward to many pods like above diagram
- NGINX
    
    Reference : [https://www.hostinger.in/tutorials/what-is-nginx](https://www.hostinger.in/tutorials/what-is-nginx) & [https://www.javatpoint.com/nginx-introduction](https://www.javatpoint.com/nginx-introduction)
    
    Why -  To  manage 10K  connections at the same time (It was a C10K problem -  The C10k problem is the problem of optimizing [network sockets](https://en.wikipedia.org/wiki/Network_socket) to handle a large number of clients at the  same time). Usually when a client request for a file and server creates a thread for every request and returns the files for every request. This is not scalable
    
    NGINX is an open-source web server software that serves as a [**reverse proxy**](https://www.hostinger.in/tutorials/how-to-set-up-nginx-reverse-proxy/), HTTP load balancer, and email proxy for IMAP, POP3, and SMTP.
    
    Nginx divided its job into the **worker process**  and **worker connections -** Worker connections are used to manage the request made and the response from users on the web server; at the same time, these requests are passed to its parent process which is called the worker process. Worker connections deliver the requests to a worker process, which will also send it to the master process. Finally, the master process provides the result of those requests.
    
    Single worker connection can handle around **1024 connections at a time.**
    
    NGINX handles multiple connections within a single process - in a nonblocking fashion, reducing the number of context switches.
    
    ![Screenshot 2022-05-13 at 9.49.40 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-05-13_at_9.49.40_AM.png)
    
     • 
    
    Helper processes ( which manage the on‑disk content cache).
    
    The *cache loader -* process runs at startup to load the disk‑based cache into memory, and then exits. It is scheduled conservatively, so its resource demands are low
    
    The *cache manager* process runs periodically and prunes entries from the disk caches to keep them within the configured sizes.
    
    *worker*  processes do all of the work! They handle network connections, read and write content to disk, and communicate with upstream servers - Runs one worker process per CPU core. Each worker is single threaded. Communication done thru shared processing
    
    **NGINX Internals  -** It uses a predictable process model. Each NGINX worker process is initialized with the NGINX configuration and is provided with a set of listen sockets by the master process
    
    - NGINX has a master process (which performs the privileged operations such as reading configuration and binding to ports) creates a small number of child processes
        - Master process provides set of listen sockets for each worker process
    - Number of workers (on 4 core - 4 processes are created)
        - Running one worker process per CPU core – makes the most efficient use of hardware resources.
        - Each worker process handles multiple connections in a nonblocking fashion, reducing the number of context switches.
        - Each worker process is single‑threaded and runs independently, grabbing new connections and processing them. The processes can communicate using shared memory for shared cache data, session persistence data, and other shared resources.
    - **Inside Worker processes**
        - **State Machine** - The state machine is essentially the set of instructions that tell NGINX how to process a request (**addtnl**. **info** - Most web servers that perform the same functions as NGINX use a similar state machine – the difference lies in the implementation)
        - HTTP state machine is most commonly used
        - Stream state for - raw TCP  traffic
        - Mail state machine  for mail protocols (SMTP, IMAP, and POP3).
            
            ![Screenshot 2022-05-13 at 10.59.08 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-05-13_at_10.59.08_AM.png)
            
    
    - **Scheduling a state machine**
        
        Think of the state machine like the rules for chess. Each HTTP transaction is a chess game. On one side of the chessboard is the web server – a grandmaster who can make decisions very quickly. On the other side is the remote client – the web browser that is accessing the site or application over a relatively slow network.
        
        However, the rules of the game can be very complicated. For example, the web server might need to communicate with other parties (proxying to an upstream application) or talk to an authentication server. Third‑party modules in the web server can even extend the rules of the game.
        
    - Blocking State Machine - Typical web server works like this -
        
        Recall our description of a process or thread as a self‑contained set of instructions that the operating system can schedule to run on a CPU core. Most web servers and web applications use a process‑per‑connection or thread‑per‑connection model to play the chess game. Each process or thread contains the instructions to play one game through to the end. During the time the process is run by the server, it spends most of its time ‘blocked’ – waiting for the client to complete its next move. 
        
        1. The web server process listens for new connections (new games initiated by clients) on the listen sockets.
        2. When it gets a new game, it plays that game, blocking after each move to wait for the client’s response.
        3. Once the game completes, the web server process might wait to see if the client wants to start a new game (this corresponds to a keepalive connection). If the connection is closed (the client goes away or a timeout occurs), the web server process returns to listening for new games.
        
        The important point to remember is that every active HTTP connection (every chess game) requires a dedicated process or thread (a grandmaster). This architecture is simple and easy to extend with third‑party modules (‘new rules’). However, there’s a huge imbalance: the rather lightweight HTTP connection, represented by a file descriptor and a small amount of memory, maps to a separate thread or process, a very heavyweight operating system object. It’s a programming convenience, but its massively wasteful.
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2013.png)
        
    - How NGINX Does it - It plays simultaneous games at a time
    
     Each worker (remember – there’s usually one worker for each CPU core) is a grandmaster that can play hundreds (in fact, hundreds of thousands) of games simultaneously.
    
    1. The worker waits for events on the listen and connection sockets.
    2. Events occur on the sockets and the worker handles them:
        - An event on the listen socket means that a client has started a new chess game. The worker creates a new connection socket.
        - An event on a connection socket means that the client has made a new move. The worker responds promptly.
    
    A worker never blocks on network traffic, waiting for its “opponent” (the client) to respond. When it has made its move, the worker immediately proceeds to other games where moves are waiting to be processed, or welcomes new players in the door.
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2014.png)
    
    - NGINX scales very well to support hundreds of thousands of connections per worker process. Each new connection creates another file descriptor and consumes a small amount of additional memory in the worker process. There is very little additional overhead per connection. NGINX processes can remain pinned to CPUs. Context switches are relatively infrequent and occur when there is no work to be done. In the blocking, connection‑per‑process approach, each connection requires a large amount of additional resources and overhead, and context switches (swapping from one process to another) are very frequent.
    - **Updating NGINX**
        
        Updating NGINX configuration is a very simple, lightweight, and reliable operation. It typically just means running the `nginx` `-s` `reload` command, which checks the configuration on disk and sends the master process a SIGHUP signal.
        
        When the master process receives a SIGHUP, it does two things:
        
        1. Reloads the configuration and forks a new set of worker processes. These new worker processes immediately begin accepting connections and processing traffic (using the new configuration settings).
        2. Signals the old worker processes to gracefully exit. The worker processes stop accepting new connections. As soon as each current HTTP request completes, the worker process cleanly shuts down the connection (that is, there are no lingering keepalives). Once all connections are closed, the worker processes exit.
    - **High Level architecture diagram**
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2015.png)
    
    - Commands & other info
        - service nginx restart
        - ps -ef --forest | grep nginx → shows everything
    
    ### Installation
    
    ### Mac
    
    brew install nginx
    
    Located in /opt/homebrew/etc/nginx/
    
    ### Linux
    
    sudo apt install nginx
    
    sudo systemctl status nginx
    
    sudo systemctl start nginx
    sudo systemctl stop nginx
    
    ps -ef | grep -i nginx
    
    sudo mkdir /var/www/bharatincometax.local
    
    /etc/nginx/sites-enabled/ -> symlink to sites-available/default
    Remove this link and create a new one by the following step
    cd /etc/nginx/sites-available/
    sudo unlink /etc/nginx/sites-available/default
    
    # create a new site
    
    sudo mkdir [bharatincometax](http://bharatincometax.in/).local under /var/www/
    create index.html under bharatincometax.local.conf
    sudo nginx -t
    sudo systemctl restart nginx
    
    Now, create utils
    
    apt-get install -y apache2-utils
    
    setup password using htpasswd -c /etc/nginx/passwords admin - 123456789
    
    now using this you can login to securely - password is stored under /etc/nginx/conf.d/
    
    create self signed certificate
    
    install openssl
    
    openssl req -x509 -nodes -days 10 -newkey rsa:2048 -keyout /etc/nginx/nginx.key -out /etc/nginx/nginx.cert
    
    - What should I know
        - Core - e.g. 4 core 10 cores etc
        - Event driven async architecture - helps in speed and scale
        - Network socket
        - Processes & Threads
            
            A thread or process is a self‑contained set of instructions that the operating system can schedule to run on a CPU core. Most complex applications run multiple threads or processes in parallel for two reasons:
            
            - They can use more compute cores at the same time.
            - Threads and processes make it very easy to do operations in parallel (for example, to handle multiple connections at the same time).
            
            Processes and threads consume resources. They each use memory and other OS resources, and they need to be swapped on and off the cores (an operation called a *context switch*). Most modern servers can handle hundreds of small, active threads or processes simultaneously, but performance degrades seriously once memory is exhausted or when high I/O load causes a large volume of context switches.
            
            Note: Processes and threads consume resources. So when there is too many context switches - it brings the performance down. The common way to design network applications is to assign a thread or process to each connection. This architecture is simple and easy to implement, but it does not scale when the application needs to handle thousands of simultaneous connections
            
        
    - 

# Reverse Proxy

Proxy = **“on your behalf**” . It is important for security, privacy 

A reverse server is a web server that returns the server's response to the client. Reverse proxy could also help with caching and load balancing.

The proxy is on the server side -  Anonymity of the server - Used for LB, traffic control, caching the response - Mitigate the DDOS attack - Use for SSL encryption

This reverse proxy becomes a bottleneck if it fails.

- **Benefits**
    - **Increased security** - Hide information about backend servers, blacklist IPs, limit number of connections per client
    - **Increased scalability and flexibility** - Clients only see the reverse proxy's IP, allowing you to scale servers or change their configuration
    - **SSL termination** - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations
        - Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509) on each server
    - **Compression** - Compress server responses
    - **Caching** - Return the response for cached requests
    - **Static content** - Serve static content directly - HTM, CSS, JS, Photos, Videos etc
- **Disadvantage**
    
    Increased complexity and for HA adding more servers again increases the complexity
    
- **Forward Proxy**
    
    This acts as a proxy for the client. Client needs to request from the server, proxy does it on its behalf. `
    
    The server does not know the client but only interacts with the proxy. This helps in anonymity
    
    This is useful to cache the response and also block certain sites
    

### Difference between LB and Reverse Proxy

- You can use LB for balancing load for multiple servers
- Reverse proxy c an be used even if you have 1 server behind the proxy

# Application Layer

Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently. 

- What are microservices
    
    Can be described as a suite of independently deployable, small, modular services - e.g. user profile, follower, feed, search, photo upload, etc.
    
    Each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal
    
    Services should be broken down by functionality verticals such as billing, payments, booking etc, if you have independent services like “GetUser” and “GetUserById”, you have gone straight down to nano-service hell.
    
- Service discovery
    - Definition
        
        Systems can help services find each other  by tracking  registered names, addresses, and ports
         [Health checks](https://www.consul.io/intro/getting-started/checks.html) - help verify service integrity and are often done using an [HTTP](https://github.com/donnemartin/system-design-primer#hypertext-transfer-protocol-http) endpoint - a service should have /health as endpoints
        
        Services which start up register themselves with a central authority with some basic parameters such as environment & application name in case multiple environments share the same infrastructure and the applications which wishes to connect with them polls the one service asking a connection against the app name and environment name etc. This software in turn then can also ensure basic load balancing like round robin to load balance in case multiple services registered themselves with the same parameters, effectively enabling direct communication
        
        Load balancer technique is also known as “Server side discovery” and service discovery is known as  “Client side discovery”.
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2016.png)
        
    - examples
        
        etcd and zookeeper
        
- Disadvantages of application later
    - Adding an application layer with loosely coupled services requires a different approach from an architectural, operations, and process viewpoint (vs a monolithic system).
    - Microservices can add complexity in terms of deployments and operations.
- What is platform layer - which is different than Web layer
- Zookeeper - Service Discovery
    
    It works on client server architecture
    
    All systems store a copy of the data 
    
    Leader is elected at startup
    
    It works fast with workloads where reads to the data are more common than writes
    
    It provides a single coherent view of multiple machines.
    
    It is a high performance coordination service for distributed application
    
    It allows distributed processes to coordinate with each other 
    
    Became a standard for organized service used by Hadoop, HBase, and other distributed frameworks
    
    Apache HBase uses ZooKeeper to track the status of distributed data
    
    It allows to Join/leave node in a cluster and node status at the real time
    
    Allows you to elect a node as a leader for better coordination
    
    It maintain 
    
    - configuration information,
    - naming
    - group services for distributed applications.
    
    **Architecture**
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2017.png)
    
    **Server:** The server sends an acknowledge when any client connects. In the case when there is no response from the connected server, the client automatically redirects the message to another server.
    
    **Client**: Client is one of the nodes in the distributed application cluster. It helps you to accesses information from the server. Every client sends a message to the server at regular intervals that helps the server to know that the client is alive.
    
    **Leader:** One of the servers is designated a Leader. It gives all the information to the clients as well as an acknowledgment that the server is alive. It would performs automatic recovery if any of the connected nodes failed.
    
    **Follower:** Server node which follows leader instruction is called a follower.
    
    - Client read requests are handled by the correspondingly connected Zookeeper server
    - The client writes requests are handled by the Zookeeper leader.
    
    **Ensemble/Cluster:** Group of Zookeeper servers which is called ensemble or a Cluster. You can use ZooKeeper infrastructure in the cluster mode to have the system at the optimal value when you are running the Apache.
    
    **ZooKeeper WebUI:** If you want to work with ZooKeeper resource management, then you need to use [WebUI](https://www.guru99.com/ultimade-guide-to-webclient-ui-sap-crm.html). It allows working with ZooKeeper using the web user interface, instead of using the command line. It offers fast and effective communication with the ZooKeeper application.
    
    **Data Model**
    
    - The zookeeper data model follows a Hierarchal namespace where each node is called a ZNode. A node is a system where the cluster runs.
    - Every ZNode has data. It may or may not have children
    - ZNode maintains stat structure and version number for data changes.
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2018.png)
    
    **Types of Znode**
    
    **Persistence** znode: This type of znode is alive even after the client which created that specific znode, is disconnected. By default, in zookeeper, all nodes are persistent if it is not specified.
    
    **Ephemeral** znode: This type of zookeeper znode are alive until the client is alive. Therefore, when the client gets a disconnect from the zookeeper, it will also be deleted. Moreover, ephemeral nodes are not allowed to have children.
    
    **Sequential** znode: Sequential znodes can be either ephemeral or persistent. So when a new znode is created as a sequential znode. You can assign the path of the znode by attaching a 10 digit sequence number to the original name.
    

# Database

- If you want to look for bulk data (how many users have x, y etc) - use NOSQL
- Use NoSQL - If you need, flexibility and scaling
- Suppose you want to query on ppl who are having macbook
    - SQL will look at all the rows and pick the ones which has this entry
    - NoSQL will directly go to that table col and then look for macbook
- AWS Info
    
    ### File storage - Blob - AMZ S3 + CDN
    
    - Place to store the product image and videos - usual Blog storage is used. S3 is the best choice. This is not a DB but a file which will be served as is.
    - We can use [CDN](https://www.notion.so/bcd3dec0d0a543a08bc406bb0dd23b2a?pvs=21) to distribute these images geographically in many location
    - If you want to use Search - e.g. product search in amazon or videos in NetFlix- you can use SOLR or Elastic Search which is built on top of Apache Lucene. This support Fuzzy searching as well.
    - Application Metrics tracking system - Grafana or Prometheus. This is a sequential update in append write mode which is time-series database. The query is bulk search for a specific period or intervals
    
    The time-series DB is influx DB or OpenTSDB - Open time series database
    
    - To provide analytics on the transactions - most sort after items, revenues , how many orders - analytics of the whole company - need DWH - All the data is dumped here to serve lot of reports. These are offline reports - HadooP
    
- What is ACID (Consistency over Availability)
    - **Atomicity** - Each transaction is all or nothing - Ensures transaction succeeds completely or fails completely.
    - **Consistency** - Any transaction will bring the database from one valid state to another
    - **Isolation** - Executing transactions concurrently has the same results as if the transactions were executed serially
    - **Durability** - Once a transaction has been committed, it will remain so even if there is a system failure
- Scaling RDBMS - Methods are?
    - Replication
        
        Primary is used for writes & updates and secondary as read replicas - i.e. have multiple read replicas for e.g. running analytics, running reports, order etc will not impact the performance of the system and system scalability.
        
        Case where the primary DB goes down then we can have the secondary take over 
        
        Case where latency is reduced when you have replication enabled in various location through out the world so accessing a file becomes faster
        
        Imagine that data is written to the DB and it is replicated after few milliseconds.  There might be inconsistency here. TO solve this there are “consistency models” or “consistency algo”
        
        1 such is “read after write consistency” - if master is updated, it will wait for the ack to happen from the replica and inform the write issuer. If there are multiple replicas - it will wait for all of them.. Here the replication lag is zero - This is taken care by the master to update the replica  and not declaring as write as completed - known as “sync replication” - the advtg is that data is always consistent and the replication lag is zero. Downside is -performance might take a hit - so the latency on the write is more. Also if one of the replicas goes down and does not ack then the write will fail Another solution is “async replication” where the primary DB is not waiting for the propagation to happen and the sync to all the replicas will happen in background. - This can be followed when we do not need the real time updates
        
        There is another one called - semi sync - where the primary waits for atleast 1 replica ack, we can have this as 1 or 2 or as many as we want - known as Quorum 
        
        - master-slave replication
            
            Master serves reads and writes, replicating writes to one or more slaves, which serve only reads. Slaves can also replicate to additional slaves in a tree-like fashion. If the master goes offline, the system can continue to operate in read-only mode until a slave is promoted to a master or a new master is provisioned
            
            Disadvt → Additional logic is needed to promote a slave to a master.
            
        - master-master replication
            
            Both masters serve reads and writes and coordinate with each other on writes. If either master goes down, the system can continue to operate with both reads and writes.
            
            Disadvt
            
            - You'll need a load balancer or you'll need to make changes to your application logic to determine where to write.
            - Most master-master systems are either loosely consistent (violating ACID) or have increased write latency due to syncronizations.
            - Conflict resolution comes more into play as more write nodes are added and as latency increases.
    - Disadvantages of Replication
        - There is a potential for loss of data if the master fails before any newly written data can be replicated to other nodes.
        - Writes are replayed to the read replicas. If there are a lot of writes, the read replicas can get bogged down with replaying writes and can't do as many reads.
        - The more read slaves, the more you have to replicate, which leads to greater replication lag.
        - On some systems, writing to the master can spawn multiple threads to write in parallel, whereas read replicas only support writing sequentially with a single thread.
        - Replication adds more hardware and additional complexity.
    - federation
        
        Federation (or functional partitioning) splits up databases by function. For example, instead of a single, monolithic database, you could have three databases: **forums**, **users**, and **products**, resulting in less read and write traffic to each database and therefore less replication lag. Smaller databases result in more data that can fit in memory, which in turn results in more cache hits due to improved cache locality. With no single central master serializing writes you can write in parallel, increasing throughput.
        
        disadvt → Federation is not effective if your schema requires huge functions or tables.
        
        - You'll need to update your application logic to determine which database to read and write.
        - Joining data from two databases is more complex with a [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers).
        - Federation adds more hardware and additional complexity.
    - Sharding
        
        Sharding distributes data across different databases such that each database can only manage a subset of the data. (A-M N-R S-Z) etc.
        
        If one shard goes down, the other shards are still operational, although you'll want to add some form of replication to avoid data loss
        
        Disavtd → 
        
        - You'll need to update your application logic to work with shards, which could result in complex SQL queries.
        - Data distribution can become lopsided in a shard. For example, a set of power users on a shard could result in increased load to that shard compared to others.
            - Rebalancing adds additional complexity. A sharding function based on [consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) can reduce the amount of transferred data.
        - Joining data from multiple shards is more complex.
        - Sharding adds more hardware and additional complexity.
        - Additional Info
            
            Horizontal partition is known as sharding - most commonly used. The idea is to break the rows and keep it in a different DB to have high availability.
            
            Drawback - Choosing the sharding key is important and if it is not done correctly the partition is imbalanced and it is also hard to come back to non sharded way
            
            ### Physical versus Logical Shards
            
            e.g. we have 4 million data - we can break it up into logical ones like 1 mil in each partition based on the userids lets say 1 to 1 mil is in 1 partition , 1.1 to 2 in another etc.
            
            Now out of these 4 - 2 logical shards are in 1 DB (containing both the logical shards) - which is known as physical shard
            
            Advt - You can also partition users based on different cities
            
            How do you decide on the way to shard - based on userids, cities etc - there are 2 sharding strategies (algorithimic sharding and Dynamic )
            
            Alogrithimic is that the app will have a piece of code , logic/function - which will know which shard it has to go to - The shard remains constant
            
            Dynamic - There is a service or module where the queries has to be routed to - with this we can dynamically add shards
            
        
    - Denormalization
        
        Denormalization attempts to improve read performance at the expense of some write performance. Redundant copies of the data are written in multiple tables to avoid expensive joins. Some RDBMS such as [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) and Oracle support [materialized views](https://en.wikipedia.org/wiki/Materialized_view) which handle the work of storing redundant information and keeping redundant copies consistent.
        
        When reading from a hard disk, a database join operation is time consuming, and 99% of the time is spent on disk seek. Not to mention a distributed join operation across networks.To optimize the read performance, **denormalization** is introduced by adding redundant data or by grouping data.
        
        Disadvt → 
        
        - Data is duplicated.
        - Constraints can help redundant copies of information stay in sync, which increases complexity of the database design.
        - A denormalized database under heavy write load might perform worse than its normalized counterpart.
    - SQL tuning
        - **Tighten up the schema - e.g.** • MySQL dumps to disk in contiguous blocks for fast access. ****Use `CHAR`instead of `VARCHAR` for fixed-length fields
        - **Use good indices**
            - Columns that you are querying (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) could be faster with indices.
            - Indices are usually represented as self-balancing [B-tree](https://en.wikipedia.org/wiki/B-tree) that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.
- NOSQL
    - What is BASE **(Availability over Consistency)**
        
        Chooses availability over consistency It is property of the database where → BASE is. 
        
        - **Basically available** - the system guarantees availability.
        - **Soft state** - the state of the system may change over time, even without input - This is mainly due to the eventually consistent model
        - **Eventual consistency** - the system will become consistent over a period of time, given that the system doesn't receive input during that period.
    - Details
        
        Data is denormalised, and joins are generally done in the application code. Most NoSQL stores lack true ACID transactions and favour [eventual consistency](https://github.com/donnemartin/system-design-primer#eventual-consistency)
        
    - Types
        - **Key Value store**
            
            A key-value store generally allows for O(1) reads and writes and is often backed by memory or SSD.  Since they offer only a limited set of operations, complexity is shifted to the application layer if additional operations are needed. A key-value store is the basis for more complex systems such as a document store, and in some cases, a graph database.
            
            This is like hashmap - has key and value
            
            To enable certain feature in certain city, to turn feature on/off etc. Caching solutions are implemented using this (Redis, DynamoDB and Memcache). Provide quick access as they are in-memory
            
            We can store request response
            
            ### ***Use-case***
            
            Key-value stores handle size well and are good at processing a constant stream of read/write operations with low latency. This makes them perfect for User preference and profile stores, Product recommendations; latest items viewed on a retailer website for driving future customer product recommendations, Ad servicing; customer shopping habits result in customized ads, coupons, etc. for each customer in real-time.
            
            - Disadvt
            - Redis info & Architecture
                
                Redis is a in-memory, key-value data store. It has built-in data structures such as sorted sets and lists.
                
                Amazon Elastic Cache supports Redis which makes redis a very powerful
                
                key has to be a **string** but value can be a **string, list, set, sorted set or hash.**
                
                It can only store those small textual information which needs to be accessed, modified and inserted at a very fast rate
                
                Redis client (API or console ) connects to server to request for data -  client and server can be in the same computer or in two different computers
                
                - Persistance types
                    
                    RDB - Makes a copy of all the data in memory and stores them in secondary storage. This happens in a specified interval. So there is chance that you will loose data that are set after RDB’s last snapshot.
                    
                    AOF - Logs all the write operations received by the server. Therefore everything is persistance. The problem with using AOF is that it writes to disk for every operation and it is a expensive task and also size of AOF file is large than RDB file.
                    
                    Save - You can force redis server to create a RDB snapshot anytime using the redis console client SAVE command. You can use AOF and RDB together to get best persistance result.
                    
                - Redis Replication
                    
                    There can be many slave for a master - Master manages to sync the data when a new slave  is added. All the queries are redirected to master server, master server then executes the operations. 
                    
                    When a write operation occurs, master replicates the newly written data to all slaves. When a large number sort or read operation are made, master distributes them to the slaves so that a large number of read and sort operations can be executed at a time. If master fails and there is no persistance data in disk then new master can be added and master is updated with the data from disk. If not then other option is 1 slave should become the master.
                    
                    Using persistance and replication together all our data is completely safe and protected from unexpected failures.
                    
                    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2019.png)
                    
                - Redis Cluster
                    
                    Clustering is a technique by which data can be sharded(divided) into many computers
                    
                    Image below - Data is sharded into four nodes. Each node is a redis server configured as a cluster node.If one node fails then the whole cluster stops working.
                    
                    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2020.png)
                    
                    - Persistance in cluster
                        
                        Data is stored in primary memory of nodes. To make each node persistance use AOF and RDF i.e.configure every node for persistance storage
                        
                    - Replication and Persistance - Need to check for a better solution
                        
                        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2021.png)
                        
                    - 
                
        - **Document store**
            
            Also known as semi-structured data
            
            A document store is centered around documents (XML, JSON, binary, etc), where a document stores all information for a given object - MongoDB
            
            Document stores provide high flexibility and are often used for working with occasionally changing data.
            
            Documents may have fields that are completely different from each other.
            
            Some document stores like [MongoDB](https://www.mongodb.com/mongodb-architecture) and [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) also provide a SQL-like language to perform complex queries. [DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) supports both key-values and documents.
            
            Document stores provide high flexibility and are often used for working with occasionally changing data.
            
            If we have an item which has an attribute - e.g.  shirt which has multiple sizes, fridge with multiple stars etc etc. Querying on JSON or random attribute is bit expensive but there are certain DB which optimise. Storing product details - which can change over time - when we need all the data in one query instead of running joins.
            
            If there are lot of attrib or lot of queries then use document DB - mongo, couch
            
            There are no fixed schema and we can support heavy reads and writes , supports sharding, has aggregations 
            
            It has collections (similar to tables) and documents (records or rows)
            
            **Disadvantage** is that this does not support ACID transaction, so the update becomes complex and cannot ensure that transactions is completed or no. This needs to be handled in the application code
            
             we will also have null values which needs to be handled in the application
            
            ### ***Use-Case***
            
            As document supports flexible schema, fast read write and partitioning makes it suitable for creating user databases in various services like twitter, e-commerce websites etc.
            
            - Elastic Search - Deep dive
                
                Inverted Index - some simple text processing (lowercasing, removing punctuation and splitting words), we can construct the "inverted index” as below
                
                Since the terms in the *dictionary* are sorted, we can quickly find a term, and subsequently its occurrences in the *postings*-structure.
                
                More complex types of queries are obviously more elaborate, but the **approach** is the same: first, operate on the dictionary to find candidate terms, then on the corresponding occurrences, positions, etc.
                
                ![Screenshot 2022-04-22 at 9.16.12 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-22_at_9.16.12_AM.png)
                
                with the dictionary in the figure above, we can efficiently find all terms that *start* with a "c". However, we cannot efficiently perform a search on everything that *contains* "ours". To do so, we would have to traverse *all* the terms, to find that "yours" also contains the substring. This is prohibitively expensive when the index is not trivially small. In terms of complexity, looking up terms by their prefix is O(log(n)), while finding terms by an arbitrary substring is O(n).
                .
                
        - **Col wide store**
            
            ![Screenshot 2022-04-22 at 9.28.22 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-22_at_9.28.22_AM.png)
            
            A wide column store's basic unit of data is a column (name/value pair). A column can be grouped in column families (analogous to a SQL table). Super column families further group column families. You can access each column independently with a row key, and columns with the same row key form a row. Each value contains a timestamp for versioning and for conflict resolution.
            
            Google introduced [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) as the first wide column store, which influenced the open-source [HBase](https://www.edureka.co/blog/hbase-architecture/) often-used in the Hadoop ecosystem, and [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html) from Facebook. Stores such as BigTable, HBase, and Cassandra maintain keys in lexicographic order, allowing efficient retrieval of selective key ranges.
            
            Mid way of Document DB and Relational DBs - There is a fixed schema but does not provide acid transactions. Used when we need heavy reads, events data or streaming data - music app 
            
            Storing health tracking, IoT devices for sensor sending data continously.
            
            Do not support huge reads but support special reads - e.g. if user has liked the particular songs and songs liked by particular user. This is best for distributed databases
            
            Ever increasing data - Uber - drivers are continuously sending data and location, data increases as driver increases. So less number of query but large amount of data - Columnar DB  - Cassandra, or HBase
            
            Used in handling big data, fast performance, efficient data compression and scalability.
            
            ### ***Use-Case***
            
            It supports the huge storage and allow faster read write access over it. This makes column oriented databases suitable for storing customer behaviors in e-commerce website, financial systems like Google Finance and stock market data, Google maps etc.
            
            Wide column stores offer high availability and high scalability. They are often used for very large data sets.
            
        - **Graph**
            
            In a graph database, each node is a record and each arc is a relationship between two nodes. Graph databases are optimized to represent complex relationships with many foreign keys or many-to-many relationships. Many graphs can only be accessed with [REST APIs](https://github.com/donnemartin/system-design-primer#representational-state-transfer-rest) 
            
            ***Use-Case***
            
            This is basically used in Fraud detection, Real-time recommendation engines (in most cases e-commerce), Master data management (MDM), Network and IT operations, Identity and access management (IAM), etc.
            
            ![Screenshot 2022-04-22 at 9.35.47 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-22_at_9.35.47_AM.png)
            
        - **Search DB**
            
            It is like indexes in a book - The data is stored in advanced indexes  e.g. SOLR , Elastics Search
            
            Can store result of search query for product catalog (which is stored in any other DB) on which freq is more 
            
            Images and videos - which is stored in S3
            
            TIme series data or large dataset 
            
        - Use case  - using combinations
            - Let us say you have 1 quantity of an item so you need to ensure that the ACID property is maintained. You need to store transactional DB, order history etc, so far that reason, you can have the order which is still in processing in RDBMS and once done it can be moved to Column DB like Cassandra
            - Reporting - Users who have brought sugar in the last 5 days - There are lot of sellers selling different sugar alternates of different company, differnt types - so sugar will have lot of item ids and there will be lot of orders as well on these item ids. Now if you want to reporting on who brought TV, sugar of certain quality - you can use document DB. So querying user id so and so with this item id and number of quantities. This query will return items and oderd which can then be queries on both RDBMS and Column DB
- DSA used

# Cache

![Screenshot 2022-04-25 at 10.03.58 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-25_at_10.03.58_AM.png)

Caching improves page load times and can reduce the load on your servers and databases. In this model, the dispatcher will first lookup if the request has been made before and try to find the previous result to return, in order to save the actual execution.Putting a cache in front of a database can help absorb uneven loads and spikes in traffic.

Caching is also done in games

DSA used → Data struct used is Hash tables 

- Caching on what all layer
    - Client Caching
        
        Caches can be located on the client side (OS or browser), [server side](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) or in a distinct cache layer.
        
    - CDN
        
        CDN is also considered as a caching layer
        
    - Web server caching
        
        [Reverse proxies](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server) and caches such as [Varnish](https://www.varnish-cache.org/) can serve static and dynamic content directly. Web servers can also cache requests, returning responses without having to contact application servers.
        
    - DB Caching
        
        Your database usually includes some level of caching in a default configuration, optimized for a generic use case. Tweaking these settings for specific usage patterns can further boost performance.
        
        Generally, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.
        
        - **Query level**
            
            Whenever you query the database, hash  query as a key and store the result to the cache. This approach suffers from expiration issues:
            
            - Hard to delete a cached result with complex queries
            - If one piece of data changes such as a table cell, you need to delete all cached queries that might include the changed cell
        - **Object level**
            
            See your data as an object, similar to what you do with your application code. Have your application assemble the dataset from the database into a class instance or a data structure(s):
            
            - Remove the object from cache if its underlying data has changed
            - Allows for asynchronous processing: workers assemble objects by consuming the latest cached object
    - Application Caching
        
        In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage. Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk, so [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) algorithms such as [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) can help invalidate 'cold' entries and keep 'hot' data in RAM.
        
- What all to cache
    - User sessions
    - Fully rendered web pages
    - Activity streams
    - User graph data

### features or estimation during the interview

- Saving up to TB of the data in cache
- 50K to 1M queries per second (QPS)
- 1ms latency
- Evection policy
- 100% availability
- scalable

### Caching Strategy

- **Cache Aside / Around**
    
    **Memcached** uses this
    
    Is also referred to as lazy loading. Only requested data is cached, which avoids filling up the cache with data that isn't requested.
    
    ![Screenshot 2022-04-25 at 10.18.41 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-25_at_10.18.41_AM.png)
    
    The application is responsible for reading and writing from storage. The cache does not interact with storage directly. The application does the following:
    
    - Look for entry in cache, resulting in a cache miss
    - Load entry from the database
    - Add entry to cache
    - Return entry
    
    ```python
    def get_user(self, user_id):
    user = cache.get("user.{0}", user_id)
    if user is None:
         user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
          if user is not None:
              key = "user.{0}".format(user_id)
              cache.set(key, json.dumps(user))
    return user
    ```
    
    - Disadvantage
        - Each cache miss results in three trips, which can cause a noticeable delay.
        - Data can become stale if it is updated in the database. This issue is mitigated by setting a time-to-live (TTL) which forces an update of the cache entry, or by using write-through.
        - When a node fails, it is replaced by a new, empty node, increasing latency.
- **Write Through**
    - Details
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2022.png)
        
        Write-through is a slow overall operation due to the write operation, but subsequent reads of just written data are fast. Users are generally more tolerant of latency when updating data than reading data. Data in the cache is not stale.
        
        The application uses the cache as the main data store, reading and writing data to it, while the cache is responsible for reading and writing to the database:
        
        - Application adds/updates entry in cache
        - Cache synchronously writes entry to data store
        - Return
            
            ```python
            # application code
            set_user(12345, {"foo":"bar"})
            # cache code
            def set_user(user_id, values):
                user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
                cache.set(user_id, user)
            ```
            
        
    - Disadvt
        - When a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database. Cache-aside in conjunction with write through can mitigate this issue.
        - Most data written might never be read, which can be minimized with a TTL.
    
- **Write-behind (write-back)**
    - Disadvt
        - There could be data loss if the cache goes down prior to its contents hitting the data store.
        - It is more complex to implement write-behind than it is to implement cache-aside or write-through.
    - Details
        - Add/update entry in cache
        - Asynchronously write entry to the data store, improving write performance
        
        ![Screenshot 2022-04-25 at 10.31.09 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-25_at_10.31.09_AM.png)
        
- **Refresh-ahead**
    - Details
        
        You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration.
        
        Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.
        
    - Disadvt
        
        Not accurately predicting which items are likely to be needed in the future can result in reduced performance than without refresh-ahead.
        
- **Disadvantage of Caching**
    - Need to maintain consistency between caches and the source of truth such as the database through [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms).
    - Cache invalidation is a difficult problem, there is additional complexity associated with when to update the cache.
    - Need to make application changes such as adding Redis or memcached.

- How Caching Works
    
    Reference: [https://www.youtube.com/watch?v=DUbEgNw-F9c&t=1431s](https://www.youtube.com/watch?v=DUbEgNw-F9c&t=1431s)
    
    - hashing  & Consistent hashing
        
        We need key, value, hash table (another Data structure)  and a hash function 
        
        Hash Table :
        
        ![Screenshot 2022-06-10 at 10.13.51 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.13.51_AM.png)
        
        For example - we have key as Thor which is passed as a hash function and gets 53.
        
        Now 53/number of location in the bucket = 53%10 = 3. Thor and it’s value  is stored in 3
        
        ![Screenshot 2022-06-10 at 10.02.46 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.02.46_AM.png)
        
        Now there is a hash collision for Antman - there are 3 solutions for this
        
        - Separate chaining - using Linked List
        - Open Addressing
        - Robinhood hashing
        
        But here’s the challenge → what if the last 2 location in the hash tables is not available then the total count is 8 from 10 - the entire values will have to re-written, to solve this problem -we will use consistent hashing 
        
        - Consistent Hashing
            
            Assign random values to the keys in the hash table . 
            
            ![Screenshot 2022-06-10 at 10.22.14 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.22.14_AM.png)
            
            When the key is passed to the hash function, the o/p of that need to be checked against the larger number , below 2071 > 1011 so the value is stored in 3030, same goes for 2005 as well.
            
            ![Screenshot 2022-06-10 at 10.24.48 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.24.48_AM.png)
            
            Now let us say that the o/p received is larger than 9900, so it will go back to the first 1 and stored it , like round robin - This is consistent hashing. Now if 9900 is not available so instead of modulo operations creating a problem, we will use the ring method to store in the next available location 
            
            ![Screenshot 2022-06-10 at 10.26.23 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.26.23_AM.png)
            
        
    - Cache eviction Policies
        
        Meant to remove the key and value from the hash table (memory). 
        
        What is not being used recently - we need use algorithm
        
        - LRU - Least Recent Used
            
            Need a way to figure out the LRU data in O(1), for this we need another Data Structure (doubly linked list) along with the existing data structure called Hash Table
            
            ![Screenshot 2022-06-10 at 10.43.03 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_10.43.03_AM.png)
            
            Above you will see that Doubly LL is created for access and it’s address is stored in the hash table as above. Now how do we know which one was last accessed. here’s what happens when you access Hulk - It is removed with O(1) and append to the right as below.
            
            The end value is now updated to 2 (ST = Start and END = end  value). Below image now becomes the order of the access. Now from the left (Thor, Flash) can be cleared if required
            
            ![Screenshot 2022-06-10 at 12.14.06 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_12.14.06_PM.png)
            
            LRN does not keep the access count - there are other implementation like ”count min sketch”  - which calc the freq 
            
    - Internals
        
        Even if it is using RAM, it is still blocking calls so we need to make sure it is made async and for scaling we need to use the event-driven logic
        
        ![Screenshot 2022-06-10 at 12.26.23 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_12.26.23_PM.png)
        
        An event pool (single thread) is running will keep reading the event queue and handover the event to thread pool and then go back to fetch others. This will also provide the call back function
        
        Thread pool for i/o operations work is done, it will exec the call back function and the response will be given back to the event either through event loop or some other mechanism 
        
    - Fault tolerant
        
        Method 1 → Snapshot at regular interval 
        
        ![Screenshot 2022-06-10 at 12.31.22 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_12.31.22_PM.png)
        
        Method 2 → Log Reconstructions
        
        Instead of a service, it will async update all the read and write request to a log file in disk. There could be a service running which will pull the info from the queue and write to disk as well. so if the hash table crashes, we can still reconstruct the entire data via this log file which will be stored in a rime order 
        
        ![Screenshot 2022-06-10 at 1.52.26 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_1.52.26_PM.png)
        
    - Availability
        
        One way to achieve availability is by have a mirror server like below, but because it is over the n/w it will have delay
        
        ![Screenshot 2022-06-10 at 1.58.55 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_1.58.55_PM.png)
        
        So the approach will be to make the 2nd sever as slave. Here all the read and write will happen on the master and nothing on the slave
        
    

### Redis

In memory caching services

It is single threaded

Redis in distributed systems - it uses algorithmic shard. There is a logical unit called Hashslot which sits between key and a shard.

Total number of hashslots in a shard is always 16384

![Screenshot 2022-06-10 at 2.05.47 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_2.05.47_PM.png)

Hash slot is evenly divided in each shard so maybe in shard 1 will have slots  0-8000 might be in shard 1, 8001 - 16K in shard 2 et 

Each key os assigned to a hash slot

![Screenshot 2022-06-10 at 2.09.21 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_2.09.21_PM.png)

- High Availability
    
    For every primary there a replica associated with it, when one of the message is not received from a primary one, it will be known that this server is down the replica will be promoted
    
    ![Screenshot 2022-06-10 at 2.12.47 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_2.12.47_PM.png)
    

To avoid a split brain situation, always keep the odd numbers of  shards so the network split.   There is a count which will be done and If the section has smaller number then it is a minority - they will not initiate a failover or client write request

![Screenshot 2022-06-10 at 2.18.35 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-10_at_2.18.35_PM.png)

# **Asynchronism**

Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line. They can also help by doing time-consuming work in advance, such as periodic aggregation of data. There are 2 types  1 is by MQ and 2 is by doing all the work on off peak hours or convert to static files and use CDN

![Screenshot 2022-04-25 at 10.42.40 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-25_at_10.42.40_AM.png)

- **Message queues**
    
    Message queues receive, hold, and deliver messages. If an operation is too slow to perform inline, you can use a message queue with the following workflow:
    
    - An application publishes a job to the queue, then notifies the user of job status
    - A worker picks up the job from the queue, processes it, then signals the job is complete
    
    The user is not blocked and the job is processed in the background. During this time, the client might optionally do a small amount of processing to make it seem like the task has completed. For example, if posting a tweet, the tweet could be instantly posted to your timeline, but it could take 
    
    some time before your tweet is actually delivered to all of your followers.
    
    [**Redis**](https://redis.io/) is useful as a simple message broker but messages can be lost.
    
    [**RabbitMQ**](https://www.rabbitmq.com/) is popular but requires you to adapt to the 'AMQP' protocol and manage your own nodes.
    
    [**Amazon SQS**](https://aws.amazon.com/sqs/) is hosted but can have high latency and has the possibility of messages being delivered twice.
    
- **Task queues**
    
    Tasks queues receive tasks and their related data, runs them, then delivers their results. They can support scheduling and can be used to run computationally-intensive jobs in the background.
    
    [**Celery**](https://docs.celeryproject.org/en/stable/) has support for scheduling and primarily has python support.
    
- **Back pressure**
    
    If queues start to grow significantly, the queue size can become larger than memory, resulting in cache misses, disk reads, and even slower performance. [Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
     can help by limiting the queue size, thereby maintaining a high throughput rate and good response times for jobs already in the queue. Once the queue fills up, clients get a server busy or HTTP 503 status code to try again later. Clients can retry the request at a later time, perhaps with [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
    
- **Disadvt**
    
    • Use cases such as inexpensive calculations and realtime workflows might be better suited for synchronous operations, as introducing queues can add delays and complexity.
    
- To Review
    
    ### Sync v/s Async
    
    - For async an immediate response is not expected
    - Sync - Client sends a request to server and expects a response. AI has to respond in matter of milliseconds
    
    Async example :
    
    A queue when there are more customers. When you want to get invoices or last 6 months bank statement. This needs not get served immediately.
    
    These invoices processing is done async and using message queue when there are large number of customers requesting such data
    
    ## Message Queues
    
    When you are lining up messages in a queue for the component to read from that and it has messages - i.e. Message Queue
    
    Queue - It is a process which has a Data structure in memory to store messages. This process can be running on same machine or different machine
    
    Messages - Short sized data to tell what it has to be done
    
    Producers - Tells what needs to be done and put this in the queue
    
    Consumers - Who will carry out that operations
    
    Kafka, Rabbit MQ, SQS
    
    ### Advt
    
    - It can server large request, producers can push the data to the queue and consumers can process this
    - Can be scaled easily - When there is a load, we can increase the consumers e.g. if there are 3 windows and 20 customers but if the customer increases the windows and tellers can be increased to server them
    - The actual process or data will not be lost, if the consumer goes down, all the messages will be piled up
    
    ### Consumption and Ordering
    
    Consumption - (one-to-one) - Once the message is consumed, consumer informs the queue and it will be removed form the queue. The messages pushed will be consumed only once and then removed.
    
    Order - Ordering of the messages to be determined - e.g. in SMS, the order of the conversation matters but in invoice generation it does not.
    
    Ordered Queue - SNS uses FIFO. If there is one consumer and there are 4 requests in the queue. These are processed 1 by 1 and for some reason the 3rd one fails the 4th message will not go through. Even if the consumer increases it will still block till the ack is sent saying that the 3rd one is processed. This will block the entire queue
    
    Unordered Queue - If we have 5 messages in queue and 1 consumer - if 1 message fails then it is moved to Retry or failed queue (in SQS it is Dead Letter Queue (DLQ) but others can be processed.
    
    If there are multiple consumers - the process remains the same. It can be pushed to the back of the queue
    
    ### Usage
    
    When you want to have high load, bulk operations 
    
    ## Summary
    
    ![Screenshot 2022-02-11 at 9.18.15 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-02-11_at_9.18.15_AM.png)
    
    # Pub-Sub Model
    
    Publish subscriber model
    
    Example - Hospital- where there are interns, child specialist and ER. The annoncement which is made to interns are broadcasted, then they respond, similarly the child specialist and ER. i.e. only the particular section of people consume the message and act
    
    Publisher- whoever informs the whole system of an event or takes that responsibility of brining information from outside to inside the system. If it is 1-on-1 then it is producers. Publisher = publish the message and who wants to react , they do to that message.
    
    Input channel - Publisher sends the  message here - phyisical component to store the events or message
    
    Output channel - The subscriber who will react to certain events or message will subscribe to this output channel and react accordingly
    
    Message broker - Between i/p and o/p channel - They are responsible for breaking the messages to various/different topics, convert message to the format that o/p channel wants or add additional messages etc. The topic is then reacted by the subscriber 
    
    PUBLISHER —> i/p channel —> broker —> O/p channel → various subscribers  
    
    broker can also be replaced with event bus
    
    ### Pub-Sub for Distributed system
    
    Let us say user has placed the order - The publisher receives orderid and message “order placed” e.g., it is sent to the input channel and to the message broker. MB will enrich this message and add additional details like date time when the order was placed, fetches user details and pass it to the o/p channel. Now there are different subscribers who will react to this message - sms will send sms to the user , email will be sent to the user, logging in the system will be done about this order and order processing will generate invoices.
    
    There will be different topics that gets created and subscriber will only react to specific messages. e.g. subscribing to the newsletter need not be listening to order placed or cart updates etc 
    
    This model is used when you need to scale the publisher and subscriber. The Publisher need not know what is happening to the messages. The system can take lot of load, when it increases, different channels can be created or increase subscribers
    
    ## Factors to consider
    
    In this model - the order of the messages does not matter. if you still want to then you can use priority queue pattern - you can attach the priority to the message, if you need it or else the best way is to handle the ordering of the messages in your application
    
    Duplicate message should be considered when you implement this PS pattern. e.g. order should not be placed twice etc
    
    Handle the malformed messages e.g. discard
    
    ### Real world use case :
    
    1 - Async Workflow - e.g. when the user place the order, the invoice generation, contacting the seller, packaging etc can be done async  Pubsub works for async workflows
    
    (but as soon as the uer adds the item in the card, it should show instantly or if the transaction happens, it should happen at the same time this is sync)
    
    2 - Decoupling - Lets say you want to track user clicks and events, in such case the UI need not stop, this can be done async. This is decoupling . All the events can be pushed to the ip channel and various subscribers like picking up the msg and send it to DB can be done 
    
    3- Load balancing - If the user clicks increases, then the large number of messages will be queued in the i/p channel so at this time, we can increase the subscribers 
    
    4 - Deferred Processing - Lets say at the end of the day, the invoces needs to be generated and sent, for this customer info has to be fectched, do calc and then generate the invoices. This need not be done during the peak hours and can be deferred
    
    5 - Data streaming - Data from sensors and different consumer has to react to that data
    

# **Communication**

- OSI Model
    
    ![Screenshot 2022-04-26 at 8.45.06 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-26_at_8.45.06_AM.png)
    
- HTTP
    
    HTTP is a method for encoding and transporting data between a client and a server. It is a request/response protocol:clients issue requests and servers issue responses with relevant content and completion status info about the request. HTTP is self-contained, allowing requests and responses to flow through many intermediate routers and servers that perform load balancing, caching, encryption, and compression.
    
    HTTP is an application layer protocol relying on lower-level protocols such as **TCP** and **UDP**
    
    ![Screenshot 2022-04-26 at 8.58.46 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-26_at_8.58.46_AM.png)
    
- TCP
    
    TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol) Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking). All packets reaches the destination using
    
    - Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) for each packet
    - [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission
    
    If the sender does not receive a correct response, it will resend the packets. If there are multiple timeouts, the connection is dropped. TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data))
     and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control) These guarantees cause delays and generally result in less efficient transmission than UDP.
    
    To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage. It can be expensive to have a large number of open connections between web server threads and say, a [memcached](https://memcached.org/) server. [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) can help in addition to switching to UDP where applicable.
    
    TCP is useful for applications that require high reliability but are less time critical. Some examples include web servers, database info, SMTP, FTP, and SSH.
    
- UDP
    
    UDP is connectionless. Datagrams (analogous to packets) are guaranteed only at the datagram level. Datagrams might reach their destination out of order or not at all.
    
    UDP can broadcast, sending datagrams to all devices on the subnet. This is useful with [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address. UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games.
    
    Use UDP over TCP when:
    
    - You need the lowest latency
    - Late data is worse than loss of data
    - You want to implement your own error correction
- RPC
    
    In an RPC, a client causes a procedure to execute on a different address space, usually a remote server.Remote calls are usually slower and less reliable than local calls so it is helpful to distinguish RPC calls from local calls. Popular RPC frameworks include [Protobuf](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/), and [Avro](https://avro.apache.org/docs/current/).
    
    RPC is a request-response protocol - Refer to the diagram below:
    
    - **Client program** - Calls the client stub procedure. The parameters are pushed onto the stack like a local procedure call.
    - **Client stub procedure** - Marshals (packs) procedure id and arguments into a request message.
    - **Client communication module** - OS sends the message from the client to the server.
    - **Server communication module** - OS passes the incoming packets to the server stub procedure.
    - **Server stub procedure** - Unmarshalls the results, calls the server procedure matching the procedure id and passes the given arguments.
    - The server response repeats the steps above in reverse order.
    
    ![Screenshot 2022-04-26 at 9.27.37 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-26_at_9.27.37_AM.png)
    
- Disadtv
    - RPC clients become tightly coupled to the service implementation.
    - A new API must be defined for every new operation or use case.
    - It can be difficult to debug RPC.
    - You might not be able to leverage existing technologies out of the box. For example, it might require additional effort to ensure [RPC calls are properly cached](http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) on caching servers such as [Squid](http://www.squid-cache.org/).
- REST
    
    Used for Public API. Being stateless, REST is great for horizontal scaling and partitioning.
    
    Client acts on a set of resources managed by the server. The server provides a representation of resources and actions that can either manipulate or get a new representation of resources. All communication must be stateless and cacheable.
    
    - Disadvt
        - REST typically relies on a few verbs (GET, POST, PUT, DELETE, and PATCH) which sometimes doesn't fit your use case. For example, moving expired documents to the archive folder might not cleanly fit within these verbs.
        - Fetching complicated resources with nested hierarchies requires multiple round trips between the client and server to render single views, e.g. fetching content of a blog entry and the comments on that entry. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable.
        - Over time, more fields might be added to an API response and older clients will receive all new data fields, even those that they do not need, as a result, it bloats the payload size and leads to larger latencies.
    
- 

# Real World System Design

## On-Demand Video Platflorm (NetFlix/Prime)

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%207.jpg)

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%208.jpg)

## Twitter

![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%209.jpg)

# LLD

# Mastering AWS

# All AWS Services

EC2

Lambda

ECS

AutoScaling

EKS

API GW

ELB

Ingress/Service

Route53

S3

CloudFront

Fargate

SQS

SNS

Event Bus

AWS Rekognition

Event Bridge

Elemental - Media convert for video resolution - adaptive bit rate streaming

ML

- Collect Data
    - Kenisis
    - AWS Kafka
- Transform
    - Glue
    - EMR
- Query
    - Athena
    - RedShift for DWH
    - Elastic Search
- Reports & Insights
    - QuickSight
    - EMR
    - SageMaker

# **Major components of Infra

![Screenshot 2022-11-02 at 12.56.54 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-02_at_12.56.54_PM.png)

## Details

- VPC name should be VPC-itax
    
    ![Screenshot 2022-11-02 at 3.05.50 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-02_at_3.05.50_PM.png)
    
    ![Screenshot 2022-11-02 at 3.43.36 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-02_at_3.43.36_PM.png)
    
- CIDR values for each subnet. For the above IP address
    - 173.31.0.0/24
    - 173.31.16.0/24
    - 173.31.32.0/24
    - 173.31.64.0/24

## Security Group

![Screenshot 2022-11-02 at 3.52.50 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-02_at_3.52.50_PM.png)

itax-sg-alb - only http and https traffic

itax-sg-redis - create custom tcp port 6379

itax-sg-VPN - has 3 IP

custom tcp http -12321

custom tcp https - 12320

custom udp - 1194

         itax-sg-webserver - for http, https, ssh

         itax-sg-database -

## IAM Role

Role for EC2 instance

- S3 full permission to copy data to S3 bucket manually using IAM role via copy command (CLI) and also remove the delete access of the S3 bucket
- Have another S3 for log
- Another S3 for media content
- Another one for code deploy

## Launch Config (Launch Template) + EC2

Before creating this we need to do the following and selecting the AMI

- Configure LB
- Attach security group (itax-sg-alb) to this LB
- Create target group
- Select instance type
- Select ROle
- Select storage
- select security group
- keypair
- Autoscaling
- select both private subnet

## S3 bucket

for static content make it private but we can use CDN CloudFront URL

for code deploy

for logs

for media

## RDS + Redis

We have special Security group for which allow the port 

in AWS we will have elastic cache which uses the SGroup

## CloudWatch

CPU, RAM monitoring

uses SNS

## VPN

configure VPN to access the web server

# AWS

## IAAS , PAAS, SAAS

- IAAS - When you create an EC2 instance - backend will all be taken care by AWS
- PAAS -

## General Steps to be followed

Step 1

- Create VPC
    - Create Subnet
    - create route table
    - create IGW
    - create NAT GW

Step 2

- Create Security Groups (SG)
    - SG for LB
    - SG for Redis
    - SG for VPN
    - SG for launch configuration
    - SG for database

Step 3

- Create IAM Role
    - role for ec2 instance
    - role for code deploy service

Step 4 

Create launch configuration

Step 5 

create load balancer

Step 6 

create autoscaling

Step 7 

create code deployment

Step 8

Create RDS

Step 9

Create Redis

Step 10

create S3 bucket

Step 11

create cloudfront

Step 12

create sns

Step 13

create cloudwatch

Step 14

create VPN

Step 15

create elastic IP

## VPC

## Theory (Pointers)

- In a VPC one machine can talk to another one. For example below - from Public IP I can connect to DB instance
- VPC is virtual network of a datacentre
- We can create 5 VPC and 200 subnet in 1 VPC
- You cannot change the CIDR values once created
- Once the IP address is provided for example 173.31.0.10/16 → will use the CIDR to have 4 subnets
- Once we have the IP - search on google to get subnets. If we want we can have 4 subnets based on the CIDR
- If 4 then make 2 as public and 2 as private
    - itax-publicsubnet-1 &2 for application
    - itax-privatesubnet-1 & 2 for db
- We can create many subnets on one AZ
- Subnets can be Public, Private and VPN only
- We can communicate to the internet via Internet Gateway
- Through VPG (Virtual private Gateway) you can communicate to your corporate network via VPN
- You can connect to the private traffic “C” via VPG
- In below diagram we can connect “A” to the IG
- NAT gateway is setup on the public subnet but used on the private subnet only

![Screenshot 2022-11-03 at 10.08.32 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-03_at_10.08.32_AM.png)

VPC is a virtual network

What is Virtual network - A virtual network **connects virtual machines and devices, no matter their location, using software**

VPC is created on the region not on the AZs. 1 Region can have multiple AZs

It is a private data center provided by AWS for one client

1 Account will have 5 elastic  IP

Once VPC is created - automatically 3 things gets created - DHCP, Network Access Control List and Security Group 

When you create any subnet a local IP is created - see the Route table below which says “Local”

![Screenshot 2022-11-03 at 10.38.16 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-03_at_10.38.16_AM.png)

## Types

- Default VPC
    - In this we get the following
        - CIDR
        - SG
        - NACL
        - Route Table
- Custom VPC
    - We will define it on our own

## Components of VPC

CIDR

IP Subnet

- Public IP - which is routed through IGW
- Private - which is not router through IGW but through NAT GW for access (to what?)

IGW - It is virtual router

SG - Applied at the instance level

NACL  - Network ACL applied at the subnet level

VPC

Elastic IP

## Practical

Create 1 VPC with 1 public and 1 private network, IGW and security group. Below is what we will do

![Screenshot 2022-11-07 at 11.21.07 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-11-07_at_11.21.07_AM.png)

- VPC and More is for 3-4 tier architecture
- Step 1
    - VPC > Use VPC Only > give th eip 10.0.0.0/16 > create VPC
- Step 2
    - Create Subnet
    - 1 public and 1 private using the above IP addres
- Step 3
    - Create IGW
    - Attach this IGW to the VPC created above
- Step 4
    - Create Route table
    - So a person can access via IGW the public subnet
    - Now need to do 2 steps
        - Step 1 → Define path by going to edit route and adding the following
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2023.png)
        
        - Step 2 → Go to subnet association and select the WEB Subnet and save the changes like below
        
        ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2024.png)
        
    
- Step 5 - Create Security group
    - Go to EC2 and click new security group
    - Create inbound rule like below
    - For outbound all traffic allowed by default
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2025.png)
    
- Step 6
    - Create 2 EC2 instances now and attach the VPC configuration
        - Step 1 → Create EC2 instance> Select free tier then also create a new key
        - Step 2 → Edit the network settings
            - Select the VPC created in Step 5
            - Click on launch instance → this will launch the publick
        - Step 3 → Create EC2 for DB now
            - Use the Same key 4VPC-KEY created above
            - Click on network edit
                - Select the VPC, DB Subnet,
                - Disable public IP always since it is private instance
                - Select the existing VPC
- Step 6
    - Accessing DB instance is not possible
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2026.png)
    
    - So what we have to do it to create a pem file from public IP, create  a new pem file and add the private key like below
    - copy the 4vpc.pem file contents to the db.pem, give chmod 400 to this file
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2027.png)
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2028.png)
    

- Step 7
    - Create  a NAT GW since we cannot access the internet via the DB instance
    - NOTE : NAT GW is always associate for public
    - Follow the pink line in the above diagram
    - You wont be able to ping so do the following
    - Got o VPC Section > create NAT GW, give name and select the WEB Subnet , click on allocate elastic IP
    - now need to create a route table (shown in red colour above)
        - give name and select the VPC created above > click create
        - give Rakesh-NT as the NAT
        - Edit subnet associate and add associate the DB one
        - this will now start to ping from the DB server
        - 

## Launch EC2 instance

# NR Observability

To have a dashboard to give real time view and also continuously monitor the application health

## NR APM

performance of individual applications and resolving performance bottlenecks. It is subset of NR OBservability

- It’s core focus is application performance
- Visualize the workflow of our application
- Error and Metric tracking

## NR Observability

for system health and performance and provides a broader view of entire system including infra, logs and synthetic monitoring

- Response time
- Error Rates,
- Resource usage
- Errors, warnings and other informational messages
- Request and Response details to understand bottlenecks

## Some Metrics

### Application Performance Metrics

- [ ]  Response Time - Time taken for a request to be process and send a response back
- [ ]  Throughout - Number of requests per unit of time
- [ ]  Error Rate - % of request that results in errors
- [ ]  Apdex Score - User satisfaction based on response time

### Infra Metrics

- [ ]  CPU Utilization
- [ ]  Memory
- [ ]  Disk I/O
- [ ]  Network Traffic

### User Experience Metrics

- [ ]  Page Load Time
- [ ]  FCP (First contentful paint) - First content to appear on the page
- [ ]  LCP (Large contentful paint) - Largest content element to load
- [ ]  FID (FIrst i/p delay) - Time taken for the browser to respond to user inputs
- [ ]  CLS (Cummulative Layout shift) - Measures the visual stability of the page

### Additional Metrics

- [ ]  Custom Metrics - To track specific objectives or app specific performance indicators
    - [ ]  Need to check the NR retention policy for TES
- [ ]  Log Metrics - Analyze log data to identify trends and anomalies
- [ ]  Trace Metrics - Individual requests

# Big Data

# Data Ingestion

Big data ingestion involves, assembling data from various sources in different formats and loading it to centralised storage such as a Data lake or a Data Warehouse.

Data can either be ingested in batches or streamed in real-time. When data is ingested in batches, it is imported in discrete chunks at regular intervals, whereas in real-time data ingestion, each data item is continuously imported as it is emitted by the source.

Flume & Kafka

# Big Data Architecture

![Screenshot 2022-12-07 at 10.17.21 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-12-07_at_10.17.21_PM.png)

# Big Data System Tools & System Design

- Introduction
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2029.png)
    
    Addtionally, these also have come into existence -
    
    - Validity: correctness of data
    - Variability: dynamic behaviour
    - Volatility: tendency to change in time
    - Vulnerability: vulnerable to breach or attacks
    - Visualization: visualizing meaningful usage of data
    
    Volume, Velocity, Variety, Veracity (read: accuracy) and Value
    
    Volume refers to the ‘amount of data’, which is growing
    
    Velocity is defined as the pace at which different sources generate the data
    
    Variety - The type of data they are generating is different.
    
    Veracity refers to the data in doubt or uncertainty of data available due to data inconsistency and incompleteness - Data can be messy and inconsistent
    
    Value - It is all well and good to have access to big data but unless we can turn it into value it is useless
    
- Screenshots
    
    ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2010.jpg)
    
    ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2011.jpg)
    
    ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2012.jpg)
    
- Tools
    
    ![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2030.png)
    
- Challenges for classical DB
    
    *How to store  huge amount of data, heterogeneous data (various format) - Unstructured, Semi-structured and Structured. Accessing and processing speeds*
    
- Hadoop
    
    Hadoop is suitable for batch processing
    
    Hadoop is a framework that allows you to first store Big Data in a distributed environment, so that, you can process it in parallel.
    
    Four main components of Hadoop are Hadoop Distributed File System(HDFS), Yarn, MapReduce, and libraries.
    
    Hadoop is an open source, Java-based programming framework that supports the storage and processing of extremely large data sets in a distributed computing environment.
    
    hbase is the nosql store which can sit on top of Hadoop. Hadoop consists of main 3 components → FS (HFs) + MR + Yarn
    
    ![Screenshot 2022-04-22 at 10.00.56 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-04-22_at_10.00.56_AM.png)
    
- HBASE
    - Info
        
        Should be used when the data size is huge, TB or PB
        
        It is a column family oriented database built on top of Hadoop.
        
        It provides random real time access instead of other DB where to look for 1 record, you need to scan the entire database
        
        If you use hbase then all the hdfs feature like fault tolrence, replication , high avaiabiloty can be used as well since it is on top of Hadoop so all it’s feature will be avilable since hbase sits on top of Hadoop. It also gives you fast access
        
        Since Hadoop is suitable for batch processing and it is slow then there is a requirement for random access data for low latency requirements. This hbase tools provide this feature
        
        Modeled after Google BigTable multidimensional, distributed, scalable and a ***NoSQL database*** written in Java. 
        
        HBase runs on top of [***HDFS](https://www.edureka.co/blog/hdfs-tutorial) .*** It is designed to provide a fault tolerant (refers to the ability of a system to continue operating without interruption) way of storing large collection of sparse data sets.
        
        Since, HBase achieves high throughput and low latency by providing faster Read/Write Access on huge data sets. Therefore, HBase is the choice for the applications which require fast & random access to large amount of data
        
        It provides compression, in-memory operations and Bloom filters (data structure which tells whether a value is present in a set or not) to fulfill the requirement of fast and random read-writes.
        
        HBase leverages Hadoop infrastructure (HDFS, ZooKeeper)
        
        HBase is optimized for read and supports single writes, which leads to strict consistency.
        
        HBase maintains Consistency and Availability
        
        HBase is an open source, multidimensional, distributed, scalable and a ***NoSQL database*** written in Java. HBase runs on top of [***HDFS](https://www.edureka.co/blog/hdfs-tutorial)*** and provides BigTable like capabilities to Hadoop. It is designed to provide a fault tolerant way of storing large collection of sparse data sets. HBase achieves high throughput and low latency by providing faster Read/Write Access on huge data sets. Therefore, HBase is the choice for the applications which require fast & random access to large amount of data. It provides compression, in-memory operations and Bloom filters (data structure which tells whether a value is present in a set or not) to fulfill the requirement of fast and random read-writes.
        
    - Datamodel
        
        Table = Bike
        
        There are 3 col families - Info, Power and Performance
        
        Id = row key
        
        Data is stored in these boxes
        
        → Table has col families - col families have cols which has cells and cells have data
        
        ![Screenshot 2022-06-01 at 10.21.23 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_10.21.23_AM.png)
        
    - Architecture
        
        hbase is also master slave architecture
        
        Master = HMaster
        
        Slave = Region Server
        
        ![Screenshot 2022-06-01 at 10.54.07 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_10.54.07_AM.png)
        
        So hierarchy is as follows
        
        Zookeeper → HMaster → Region Server → Region → Col Family store
        
        All data in hbase is split in regions
        
        If this table has 512MB data then R1 and R2 will have 256 each like below. 
        
        256 is default and is configurable.
        
        If we keep all the data in 1 region then there will be a hit in the performance
        
        So when the data comes in, region is full a new region is created, this keeps happening
        
        ![Screenshot 2022-06-01 at 10.57.03 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_10.57.03_AM.png)
        
    - Inside a Region
        
        WAL - Write ahead log
        
        During write operation - the data will be written in WAL and then to Memstore. Once the data is full it will be flushed to hfile
        
        Table is stored in different different region.
        
        One table are divided and stored in multiple region
        
    - Write Operations
        
        ![Screenshot 2022-06-01 at 1.31.31 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_1.31.31_PM.png)
        
        So any time the data needs to be writen to HBASe, it will be written to HLog/WAL and to memstore.
        
        HLog is maintaned by every region server so if there are any issues with the data, you can fectch it again from this Hlog
        
        Memstore is write buffer - so before writing to disk it is stored in this buffer. This also has a limit. And once it reaches the limit, small hfiles are created in the disk
        
        ![Screenshot 2022-06-01 at 1.34.41 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_1.34.41_PM.png)
        
    - Read Operations
        
        Uses BlockCache (in RAM), it has the most frequent read data. Data which is LRU is removed from this cache
        
    - Region Server
        
        Handles multiuple region.
        
        Every region server will have multiple table from a different regions
        
        i.e. all regions  inside a region sever need not from the one table it could be emp table, student table etc
        
        ![Screenshot 2022-06-01 at 1.43.32 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_1.43.32_PM.png)
        
    - HMaster
        
        Similar to namenode in hadoop which handles data node
        
        Hmaster handles region server 
        
        Does the following
        
        - Crete, update and delete tables created by hmaster
        - Region assignments
        - Reassign regions after load balancing
        - Manage region failures
    - Zookeeper
        
        All cluster management task is done by HBase
        
        All region server and hmaster will send heartbeat to Zookeeper
        
        ![Screenshot 2022-06-01 at 1.59.15 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_1.59.15_PM.png)
        
        It also handles root and meta tables. Root table is 1 and there can be multiple meta.
        
        Root and Meta manages both Read and Write operations and are stored in Region Severs
        
        They have details on which region has what data, which region is stored in which region server - all meta info.
        
        ![Screenshot 2022-06-01 at 2.01.40 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_2.01.40_PM.png)
        
        So when we want to read then lookup is done on these tables to get the region and then read memstore, blockcache for that info
        
    - Compactions
        
        Done by Admins during off peak hours
        
        hfile is small to be more efficient but if we get large files then small files needs to be amanaged so compaction is used 
        
        **Minor Compactions**
        
        Files merged into 1
        
        ![Screenshot 2022-06-01 at 2.09.55 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_2.09.55_PM.png)
        
        Major Compactions - 1 col family all hfiles merged into 1
        
        ![Screenshot 2022-06-01 at 2.10.37 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-01_at_2.10.37_PM.png)
        
    
- Cassandra
    - Info
        
        Reference : [https://www.youtube.com/watch?v=_UGxEMdPYVI](https://www.youtube.com/watch?v=_UGxEMdPYVI)
        
        Cassandra is a single node type, in which all nodes are equal and performs all functions. Any node can be the coordinator; this removes Single Point of failure.
        
        Cassandra supports single row reads which maintains eventual consistency. Cassandra focuses on Availability and Partition -Tolerance.
        
        It is a key-value store
        
        It is high availability - done by scaling(linearling), auto replication and leaderless topology 
        
        It is a petabyte level DB (1 with 15 zeros)
        
        Each instance of Cassandra is called Node which contains the entire installation and it can handle roughly 2-4 TB and many ops per second (100s). It is a distributed DB - leaderless and peer to peer type. It uses protocol called Gossips and use this to txfer info like status of the node to each other. 
        
        All nodes are in 1 datacenter.
        
        Reads are in milliseconds and it does not support reading from multiple partitions and it will get it from single partition and that is why it is faster. Joins are also not supported so the design of the DB should be like this. It is a simple query model and has a query service supporting CQL. 
        
        ![Screenshot 2022-06-02 at 3.53.08 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-02_at_3.53.08_PM.png)
        
    - Partition
        
        ![Screenshot 2022-06-02 at 3.58.26 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-02_at_3.58.26_PM.png)
        
        The partition key is the country and stored in the same physical partition on disk.
        
        So now I want to know the population for US, it can be read in single i/o
        
        Partition has random keys assigned to it - knows as partition tokens.
        
        When data is added to cassandra some parts of the data are distrubuted
        
        This distribution is done by partitioning concept → Consistent Hashing 
        
        This key is the primary key and internally Cassandra hash it and insert in that node that particular row. 
        
        Consistent hashing works on the basis of **Token and Rings**  
        
        - **Token and Rings**
            
            Token assigned to each nodes so any row will have a key associated with it. That key is hashed and based on that o/p a token is assigned (T1, t2… these are tokens associated with Nodes N1, N2 etc
            
            ![Screenshot 2022-06-03 at 9.42.49 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_9.42.49_AM.png)
            
            Once the data is added to N1, it also crates replica of this data in a circular fashion - i.e. stores the same data in N2 and N3 if the replication factor is 3
            
            ![Screenshot 2022-06-03 at 9.46.59 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_9.46.59_AM.png)
            
            You can assign a range of tokens to a particular node as well - this could be random allocation. Now when the Key is hashed during the insertion and got T1, then it will also be replicated to T2 and T3. If T6 then it will be T7 and T8 etc
            
            ![Screenshot 2022-06-03 at 9.49.27 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_9.49.27_AM.png)
            
            This does not have any imbalance when adding a new Node e.g. N5.
            
            Below is the example when adding any node
            
            ![Screenshot 2022-06-03 at 9.52.55 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_9.52.55_AM.png)
            
            **Token Maps** - We have token maps which has all the mappings of which nodes are assigned to which Node
            
            **Virtual Nodes:**  One node will have 3 partitions e.g. below has 3 vnodes
            
            ![Screenshot 2022-06-03 at 9.56.45 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_9.56.45_AM.png)
            
    - Replication
        
        Replication is how much replication you want using the replication factor
        
        - Network Awareness → NA:
            
            NA → To make your data H.A and how do you want to replicate your data
            
            It is a policy on how to replicate the data across multiple DC
            
            In the below diagram DC is data center - there are 2 of them in 2 regions
            
            R1 , R2 - these are racks
            
            ![Screenshot 2022-06-03 at 10.00.45 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_10.00.45_AM.png)
            
            There are 2 types of policies supported
            
            - Simple Strategy
                
                This is a simple strategy
                
            - Network topology strategy - 
            This is advanced method where the data is replicated which should be network aware i.e data might go to R1, R2 and R4 of different dC. So if a DC goes down then we still have the data
                
                It is aware as how the data and racks are organised and it distributed the data
                
            
        
    - Data Versioning
        
        E.g. if there are 2 requests coming to write to the same row with the same key - this is handled by data versioning on the concept of time stamps.
        
        ![Screenshot 2022-06-03 at 10.13.08 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_10.13.08_AM.png)
        
        Each row is associated with a timestamp for write operations - then it uses the alog called “last write wins”. Here the T2 wins because it has a higher timestamp.
        
        There is also a concept of reparing when the key is same but the data is different, below row1 and row1’ are different. The replica will be written to R2 and R3 as well. Now the replica will go out of sync. This is done by Repairing. 
        
        ![Screenshot 2022-06-03 at 10.17.49 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-03_at_10.17.49_AM.png)
        
        There are 3 types of repair - Full repair, sub range repair and incremental repair.
        
        Full repair - data is looked at across all the replicas
        
        Sub range - range of tokens for example e.g. T1 to T5
        
        incremental repair - delta changes only it identifies which token needs repair and does only those.
        
    - Consistency
        
        Suppose a row with a key is written and this row is replicated 2 others notes.Immediately the data is going to be read so how consistency will be maintained. There are diff consistency configs which can be configured at the read level and right level. So the q is when should cassandra ack that the write ops is done - is it after writing to the 1st node or all 3 - this is decided by the consistency strategy. This is configurable - it could be 1 2 or 3 or 
        
        Quorum → when majority nodes will respond 
        
        All - when all nodes will respond
        
        local quorum - majority in the local data center 
        
        each quorum - when majority in each DC will respond that data has been replicated
        
        local one - when 1 node in the local dc will say that data is replicated
        
        any - if any DC responds that data is replicated, ack will be sent 
        
        Same happens for read as well - > It goes to all nodes where the data is present so when do you want to confirm that the read ops is completed 
        
    - Failover detection
        
        There are mutiple nodes, so if 1 goes down how does Cassandra detect it
        
        Gossip protocol - using heartbeat mechanism 
        
        Each node generate heartbeat and also get it from other nodes as well.
        
        It creates a local state which contains heartbeat of local state and other node state. 
        
        Seed nodes - which gets the state from other nodes, this is defined during the bootstrapping of a cluster. This will receive gossip information
        
        ![Screenshot 2022-06-06 at 10.02.52 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_10.02.52_AM.png)
        
    - Data storage
        
        Stores in K-V pair
        
        Simple parition had multiple rows and each rows have multiple cols
        
        Below is for Parition 1, same can be done for P2 , P3 etc
        
        ![Screenshot 2022-06-06 at 10.13.40 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_10.13.40_AM.png)
        
        You can also add more rows  Row 4 which has more than 3 cols as well
        
        - Supports 3 types of storages  - you can configure the size so when it is full, it flushes
            
            Commit Logs - When there is any write then it goes to commit logs. This is a temp storage so when it comes back after a failure, it can write to the DB from this log
            
            MemTables -  Commit logs then write to this  memory storage, when it gets full, it writes to the next one i.e. SS Tables
            
            SSTables - These are physical table on the disk
            
        
         
        
    - Security
        1. create roles (e.g Admin, Read-only, read-write
        2. create users and assign to the specific roles
        3. Map Roles to certain CQL operations | queries
    - CQL
        
        You first create a keyspace - this is similar to creating tables in RDBMS 
        
        Inside this keyspace you create a table similar to tables in RDBMS
        
        In CQL you can insert, delete, update, delete etc but there is also a feature called “Batch where you can create e.g. 3 queries Q1, Q2 and Q3 and run in batch (this could be delete, insert, update etc) - i.e. group of CQL queries
        
        It also provides MV → Materialised Views
        
        You can also create Triggers 
        
        - Functions
            
            There are 2 types supported
            
            - Scalar
                
                To apply on certain rows or cols
                
            - Aggregate
                
                Agg to multiple rows and cols e.g. min, max, count, sum, avg - prebuilt 
                
            - UDF
                
                you can create new functions → Both types of Scalar and aggregate functions supported
                
        - JSON
            
            If you have JSON data it can store in multiple cols → This is insert JSON. The data in JSON can become columns like below id, address, name 
            
            If you want the data read in JSON format → use Select JSON method
            
            If you have data in col in JSON format then you can use
            
            From JSON → If you want to write data to this col
            
            ToJSON → If you have to read the data from JSON
            
            ![Screenshot 2022-06-06 at 10.45.50 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_10.45.50_AM.png)
            
    - Data Modeling
        
        We need to first understand what kind of queries will be used and then create the tables accordingly unlike  RDBMS. In RDBMS you can query the data in any way since it is structured but here you can only query based on the key - that is why first you need to know what queries to be used and then design the table 
        
        Keys - There are 2 types to be defined
        
        - Primary Key
        
        Below is the employee table - the id here is the primary key so the data will be partition based on the hashing of this key
        
        ![Screenshot 2022-06-06 at 10.54.23 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_10.54.23_AM.png)
        
        - Composite Keys knows as clustering key
        
        Clustering is used to sort the data within the partition. e.g city is the clustering key
        
        So below city key in partition is already sorted by city
        
        ![Screenshot 2022-06-06 at 11.13.56 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_11.13.56_AM.png)
        
        Options of of how the primary and clustering keys are setup
        
        below are these 3 ways which you create the keys. You can also have groups and any combinations
        
        ![Screenshot 2022-06-06 at 11.55.58 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-06_at_11.55.58_AM.png)
        
    - Operations
        
        SNITCH - using this you can operationalise your network topology (if you have used simple or rack aware).  This manages the network route for both read and write operations - should it go to node 1 or node 2 etc. What should be the network route so that latency is less. 
        
        It also has dynamical snitching where it keeps track the route which has less latency
        
        BOOTStraping → All node management is done by this - add/remove, move, replace etc. This is a boot strapping process. Token assignment also happens as part of bootstrapping process
        
        Repair → To repair data going out of sync. Details is mentioned above
        
        Read Repair → All the data is repaired before send the data back to the requestor
        
        Compression → SSTables can store the data after compression as well to save disk space. Diff compression techniques are LZ4, Snappy etc
        
        Backup → Enable backup on SSTAbles
        
        Blukload → To upload multiple rows ,there are 2 such tools “sstable load” “nodetool import”
        
        Metrics →For monitoring - you can monitor keyspace, tables, sql request, any client request, nodes etc. It uses dropwizard metrics using JMX which is out of the box
        
    - Tools supported
        
        CQLSH → Shell tool
        
        SSTable tool
        
        Cassandra stress → for stress testing your cluster.
        
    
- Hbase v/s cassandra
    - HBase is modelled on BigTable (Google) while Cassandra is based on DynamoDB (Amazon) initially developed by Facebook.
    - HBase leverages Hadoop infrastructure (HDFS, ZooKeeper) while Cassandra evolved separately but you can combine Hadoop and Cassandra as per your needs.
    - HBase has several components which communicate together like HBase HMaster, ZooKeeper, NameNode, Region Severs. While Cassandra is a single node type, in which all nodes are equal and performs all functions. Any node can be the coordinator; this removes Single Point of failure.
    - HBase is optimized for read and supports single writes, which leads to strict consistency. HBase supports Range based scans, which makes scanning process faster. Whereas Cassandra supports single row reads which maintains eventual consistency.
    - Cassandra does not support range based row scans, which slows the scanning process as compared to HBase.
    - HBase supports ordered partitioning, in which rows of a Column Family are stored in RowKey order, whereas in Casandra ordered partitioning is a challenge. Due to RowKey partitioning the scanning process is faster in HBase as compared to Cassandra.
    - HBase does not support read load balancing, one Region Server serves the read request and the replicas are only used in case of failure. While Cassandra supports read load balancing and can read the same data from various nodes. This can compromise the consistency.
    - In CAP (Consistency, Availability & Partition -Tolerance) theorem HBase maintains Consistency and Availability while Cassandra focuses on Availability and Partition -Tolerance.
- Kafka
    - Distributed
    - Screenshots
        
        ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2013.jpg)
        
        ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2014.jpg)
        
        ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2015.jpg)
        
        ![image.jpg](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/image%2016.jpg)
        
- Elastic Search (ES)
    - ELK Stack
        
        Beats → They are data shippers - take the data and send it directly to ES or from LogStah to ES. They can send logs, metrics, network packet data. Written in Golang
        
        Data is sent to Logstash which will stream and send the data to ES. From ES it can use Kibana for Visualisation
        
        ![Screenshot 2022-06-08 at 8.35.37 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_8.35.37_AM.png)
        
    
    ![Screenshot 2022-06-07 at 10.58.06 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.58.06_AM.png)
    
    Ref: [https://www.velotio.com/engineering-blog/elasticsearch-101-fundamentals-core-concepts](https://www.velotio.com/engineering-blog/elasticsearch-101-fundamentals-core-concepts) & [https://www.javatpoint.com/elasticsearch-architecture](https://www.javatpoint.com/elasticsearch-architecture) 
    
    Ref: [https://www.youtube.com/watch?v=zIGijbItITs&list=PLa6iDxjj_9qVaf5CsXWP-GAgZoVwKowjx&index=4](https://www.youtube.com/watch?v=zIGijbItITs&list=PLa6iDxjj_9qVaf5CsXWP-GAgZoVwKowjx&index=4)
    
    ES is a distributed document-oriented search engine, which is used to store data in the form of a document
    
    It is a distributed  search engine based on Apace Lucene having indexing and retrieval capability 
    
    Based on REST , distributed and fast full search capabilities. 
    
    Written in Java, stores data in JSON, does not support joins or subqueries
    
    You inject only required data in ES
    
    It works with structured, semi-structured, and unstructured data as well
    
    Supports Auto-completions and instant search
    
    - Advantages
        
        It is a real-time search engine.
        
        It offers the concept of gateway, which allows for creating full backups easily
        
        • Multi-tenancy can be easily handled in ES in comparison to Apache Solr.
        
    - Disadvantages
        - Unlike Apache Solr, Elasticsearch does not have multi-language support for handling request and response data.
        - Elasticsearch is not a good data store as other options such as MongoDB, Hadoop, etc. It performs well for small use cases, but in case of streaming of TB's data per day, it either chokes or loses the data.
        
        ••It is a flexible and powerful data storage search engine, but it is a bit difficult to learn. Especially in terms of enterprise search usage, it is not as simplest as out the box search.
        
    - Indexing
        
        An index contains a collection of documents that have similar characteristics or are logically related.
        
        e.g. in a e-commerce website, there will be one index for products, one for customers, and so on. It is required for  add, update, and delete operations
        
        It also has a config option for scalability and availability 
        
        Execute or Search queries are made against these indices
        
        It is same as table in RDBMS
        
        - **How Indexing works**
            
            **Inverted Index - e.g. back of the book where the topi is given along with their page number. This is created by ES**
            
            First document is tokenised - i.e. it will create a list if words, then it will create unique set words in sorted order, these are then normalised and stemming is done. Various other NLP work is done on these words - including removing of stopwords - these are highly configurable 
            
            Now associate the list of docs where the words can be found
            
            ![Screenshot 2022-06-08 at 8.46.01 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_8.46.01_AM.png)
            
        
        How search results are sorted according to the relevance i.e. Retrieving
        
        As per below math relevance of doc two > doc one - Doc2 will be listed 1st followed by Doc1
        
        ![Screenshot 2022-06-08 at 8.49.26 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_8.49.26_AM.png)
        
    - Type
        
        It is a logical grouping of the documents within the index.
        
        e.g Product index can have further group documents - types like - like electronics, fashion, furniture
        
        Types are defined on the basis of documents having similar properties in it.
        
        Indices have more overheads, so sometimes, it is better to use different types in the same index for better performance.
        
        Restrictions → 2 fields having the same name in different types of documents should be of the same datatype (string, date, etc.).
        
    - Document
        
        All data is stored in Document format 
        
        ![Screenshot 2022-06-07 at 10.32.54 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.32.54_AM.png)
        
        Metadata is as below
        
        ![Screenshot 2022-06-07 at 10.33.45 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.33.45_AM.png)
        
        It is the thing indexed by ES. It is in JSON format. Add as many document in an index.
        
        Below is document creation step
        
        ![Screenshot 2022-06-07 at 10.05.59 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.05.59_AM.png)
        
    - Node
        
        Runs when ES starts, handles HTTP Request via HTTP API
        
        A node is single instance of VM (Server) that holds data, every node has a unique name or else a random UUID name is assigned during startup. 
        
        Node refers to the instance of ES and not machine so any number of nodes can run on same machine
        
        Each node in a cluster can handle HTTP Request 
        
        It stores, performs operations (Indexing, searching,  aggr)  and maintain cluster health.
        
        Each node within a cluster knows about each node present in the cluster
        
        There can bne difference types of nodes
        
        - Data Node
            
            Stores data in the form of shards, performs CRUD operations . By default all nodes are data node
            
        - Master Node
            
            Master node has the ability to update the states of the cluster
            
            To perform Admin task - tracks the health of data nodes, it creates and delete the indices. You can have multiple master nodes and all of them participate in election - Recommendation is to have  minium 3 nodes. By default, all nodes are both data and master node - you can configure to have nodes to be only master
            
        - Coordinating-only Node (client Node)
            
            Any node which is not master or data node is coord only node - they acts as LB - they are exposed to user requests. It directs the requests between data nodes and master.  
            
            The request is sent to different data nodes and it searches locally and send the result back to coord node
            
            ![Screenshot 2022-06-07 at 9.54.34 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_9.54.34_AM.png)
            
            When writing to any node, this coordinating node will give this document a document id (or already have 1) which will then be hashed
            
            shard_num = hash(doc id) % (no of primary shard) e.g. 1855%10 = 5th shard
            
    - Cluster
        
        Gets created when nodes starts up
        
        Group of ES nodes, connected to each other.  Each node contains a part of the cluster's data that you add to the cluster. 
        
        Servers providing indexing and search capabilities forms the cluster
        
         
        
    - Mapping
        
        To create different types in an index, mapping types are required during index creation.
        
        Mappings can be defined as a list of directives given to ES about how the data is supposed to be stored and retrieved. It is important to provide mapping information at the time of index creation based on how we want to retrieve our data later. In the context of relational databases, think of mappings as a table schema.
        
        Mapping provides information on how to treat each JSON field.field can be of type **date**, **geo**-**location**, or **person name.** Mappings also allow specifying which fields will participate in the full-text search, and specify the analyzers used to transform and decorate data before storing into an index. If no mapping is provided, Elasticsearch tries to identify the schema itself, known as Dynamic Mapping.
        
        ![Screenshot 2022-06-07 at 10.10.37 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.10.37_AM.png)
        
        Each mapping type has **Meta Fields** and **Properties** . The snippet above shows the mapping of the type mobile.
        
    - Meta fields
        
        Additional info about the document, starts with “_” and there are 10 such types
        
        **_index →** It stores the name of the index document it belongs to. This is used internally to store/search the document within an index.
        
        **_type →** It stores the type of the document. To get better performance, it is often included in search queries.
        
        **_id →** This is the unique id of the document. It is used to access specific document directly over the HTTP GET API.
        
        **_source →** This holds the original JSON document before applying any analyzers/transformations. It is important to note that Elasticsearch can query on fields that are indexed (provided mapping for). The _source field is not indexed, and hence, can't be queried on but it can be included in the final search result.
        
    - Fields or Property
        
        e-commerce website example, mobile can be a type. It will have fields, like *operating_system*
        , *camera_specification*
        , *ram_size*
        , etc.
        
    - Shards
        
        ES allows your index to be divided into several pieces, called **shard**
        
        You can define the number of required shards while creating an index.
        
        Shards → helps ES to he horizontally scalable because an index can store millions of documents and occupy terabytes of data and cause problems like performance, scalability, and maintenance.
        
        ![Screenshot 2022-06-07 at 10.16.54 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-07_at_10.16.54_AM.png)
        
        Example - If there are log of indexes - then 1st 100 will be stored in 1 shard, then another one and so on and these shards are distributed among various nodes
        
        ![Screenshot 2022-06-08 at 9.07.49 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.07.49_AM.png)
        
        There are 4 Cluster
        
        P1 is a node which is replicated via R1, P2 by R2 and so on. This replica should be setup during time of index creation if not then reindexing has to be done again 
        
        ![Screenshot 2022-06-08 at 9.08.59 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.08.59_AM.png)
        
        Write happens on the primary and is replicated and read happens on both primary or replicas
        
        Each index has multiple shards and each shard has multiple lucene segments
        
        ![Screenshot 2022-06-08 at 9.23.50 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.23.50_AM.png)
        
        Segment is the basic component for Lucene but for ES it is shard
        
        Lucene Index is the abstraction of multiple segments 
        
        Each segment is the inverted index and has searching and indexing capabilities
        
        New index document will be added in the new segment as they are immutable so one created cannot be modified
        
        Segments are in mem and data is then persisted in disk at a later time
        
        ![Screenshot 2022-06-08 at 9.24.50 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.24.50_AM.png)
        
    - Replicas
        
        These are additional copy of shards. ES enables the users to create replicas of their indexes and shards. 
        
        ES provides replicas to avoid any type of failure and helps to enhance the availability of data in case of failure. The failure can be like - a node or shard is going to offline for some reason. Replication not only increases the availability of data but also improve the performance of search by executing parallel search operation in these replicas
        
    - Translogs  and additional info
        
        The write operation is resource intensive so when there is any change in the state of the index, data is update it to translog and then sync’d across all replicas - when translog is full then data is committed to lucene commit and stored on disk - so freq of write is reduced. Now when the translog is written it will be syncd across all replicas and only then client will be informed that the write has been successful this will avoid the failure and increases the fault tolerance of the cluster
        
        Request is written to Translog and the document is added to the memory buffer which stores all the newly index documents
        
        There are certain shards which are always in sync with the replica shards, not every shards needs to be sync’d  (minimum quorum) → these are called **“in-sync”** shards
        
        ![Screenshot 2022-06-08 at 9.51.44 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.51.44_AM.png)
        
        Once the data is written it is not immediately available - so refresh operations are required - which is exec every second - and this will copy in-memory buffer contents to this newly created segment  and now the data is available for search.
        
        ![Screenshot 2022-06-08 at 9.54.18 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.54.18_AM.png)
        
        - **Flush operations**
            
            All in-mem docs are written to new segment and also in-memory seg are committed to the disk and clears the translog - This commit is the Lucene Commit
            
            ![Screenshot 2022-06-08 at 9.57.01 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_9.57.01_AM.png)
            
        - Delete & Updated Operations
            
            Document in ES are immutable so cannot be deleted or modified
            
            every segment on disk has .del file → so deleted document are maked as .del
            
            This is not used for returning any search results, nor included during segment merge 
            
            For update - any update to the document creates a new document with the same id but with a different verison number. Update to the document will delete the old file i.e. marked as .del and new version of the files is indexed in the new segment.
            
        - Read Operations
            
            During this operation, the coordination node will send a request to all shards and each shards has luncen index and the inverted index which will be searched and sorted by relevant score. 
            
            The shard will return document id of the matched doc, relevant score to the coord node
            
            Only top 10 results will be returned - this is configurable - the coord node will now sorts the results globally and create top 10 list - The coord node then asked for the original doc to shard which is returned to it - results are then aggregated and sent back to the client
            
            ![Screenshot 2022-06-08 at 3.51.01 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_3.51.01_PM.png)
            
    
- Apache Spark
    
    Platform for cluster computing using in-memory computation i.e. whatever data is possible it will be processed in memory rest on disk. Hadoop needs to install various components for ML, Batch processing etc but in Spark it has it’s own components for Batch, Streaming ML , Graph processing etc
    
    It integrates with various Big data tools like Hadooop, Cassandra etc
    
    - Components
        - Core → has basic functionality - task scheduling, mem mgmt fault recovery, interacting with storage systems
        
        ![Screenshot 2022-06-08 at 4.17.52 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.17.52_PM.png)
        
    - Cluster Manager - On top of which clusters can you install spark
        - YARN
        - ‘MESOS
        - Standalone scheduler
    - Storage Layer for Spark
        
        It can connect with S3, HDFS, Cassandra and process the data 
        
    - Concepts
        - RDD
            
            Resilient Distributed Dataset → Resilient means which can repair itself. RDD is immutable so once created but can create new RDD. Stored across multiple systems
            
            e.g. a below, you can reuse it for another file but cannot change this which reads from HDFS
            
            ![Screenshot 2022-06-08 at 4.14.59 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.14.59_PM.png)
            
            Lazy evaluation →  no action taken after all the above statement till you run the action command c.collect()
            
            There are 2 actions in RDD 
            
            1. Transformation - in the above image, flatmap is run on a so a new RDD is created similarly for c as well
            
            DAG is created which will have the details of RDDs which gets created after every RDD - which RDD created after which one etc
            
            There are 2 types of Transformation
            
            1> Narrow - map, filter, sample, union etc - P below is the partition
            
            ![Screenshot 2022-06-08 at 4.31.53 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.31.53_PM.png)
            
            2> Wide - intersections, join 
            
            ![Screenshot 2022-06-08 at 4.32.10 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.32.10_PM.png)
            
            Actions (count, take, collect etc)
            
            Caching - All data which is requested frequently is added to the cache
            
            Partition
            
            - data is split
            - partition size = data src being used
            - in hdfs 1 block(128 MB)  is 1 partition
            - single partition is single task
                
                ![Screenshot 2022-06-08 at 4.39.27 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.39.27_PM.png)
                
        - Transformation
            
            Creating new RDD from another one is known as Transformation 
            
        - Collect
            
            c.collect will only start the data processing on the cluster till then no action is taken. DAG is created
            
        - Caching
            
            If we need the same data again and again, add it to Cache
            
            In RDD1 - entire data is pulled in and in RDD2 filter is applied to get the data whre student marks is above 80% and run analytics on top of it, so now instead of running 2 commands again, you can store the filtered data in cache and analytics can run on top of that now.
            
            ![Screenshot 2022-06-09 at 12.09.06 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-09_at_12.09.06_PM.png)
            
        - Partition
            
            Data from the source is split into partitions. The size of these partition depends on the data source - for HDFS it is 128 blocks by default
            
            ![Screenshot 2022-06-09 at 12.17.38 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-09_at_12.17.38_PM.png)
            
        - DAG
            
            Sparks create a graph when you enter code in spark console
            
            Any actions on spark RDD - spark submits the graph to DAG Scheduler
            
            This DAG Scheduler then divides these DAGs into stages - what tasks should be there   in stage1, stage2 etc etc
            
            Task /Stage set is then created by this DAG Scheduler
            
            Now these task list is sent to the task scheduler
            
            task scheduler - it will see which all tasks it has and to start executing this tasks - it needs data - so it will go to CM and ask where the data is for processing and then ask if it has resources available (RAM etc) if yes then it is sent to that system for processing.
            
            Executer - This is on the slave machine and it will have task slot which will have all the resources it needs to execute any task
            
            ![Screenshot 2022-06-09 at 12.28.48 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-09_at_12.28.48_PM.png)
            
            Task Scheduler has set of task for each stage as shown below
            
            ![Screenshot 2022-06-09 at 12.37.23 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-09_at_12.37.23_PM.png)
            
            executer register itself to the driver before exec xso it knows which all executors are running 
            
            Example Task - Looks like this - Task 1
            
            Computation means what all operations needs to be performed
            
            ![Screenshot 2022-06-09 at 12.39.36 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-09_at_12.39.36_PM.png)
            
        - Spark Context
            
            A ticket to run spark console?
            
    - Architecture
        
        ![Screenshot 2022-06-20 at 9.22.06 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-20_at_9.22.06_AM.png)
        
        It is a Master-Slave architecture
        
        Driver is run on top of master and it is in JVM, it runs the main() function, spark context is created here.
        
        All work of DAG Scheduler, Task scheduler 
        
        All work to convert to a job is done by this Spark Driver
        
        Cluster worker is in slave machine - one slave can have multiple executer and 1 or more task can be executed inside the executer
        
        This executer is responsible for executing the task which requires reading the data, processing and writing is all done here - it can write to mem, disk or to even cache 
        
        ![Screenshot 2022-06-08 at 4.21.11 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-08_at_4.21.11_PM.png)
        
        Can be a unified programming language and store the data across multiple systems as shown below.
        
        ![Screenshot 2022-06-20 at 9.15.09 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-20_at_9.15.09_AM.png)
        
        It could read data from multiple sources and run on in house infra or as a managed services as well.
        
        ![Screenshot 2022-06-20 at 9.16.40 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-20_at_9.16.40_AM.png)
        
    - Cluster Manager
        
        We can user YARN, Mesos or even inbuilt cluster manager for spark. Responsible for allocating and deallocating resources.
        
    
    You can move from Standalone to Cloud (has Google proc) or can have your own K8 services
    
    ![Screenshot 2022-06-20 at 9.18.18 AM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-20_at_9.18.18_AM.png)
    

# Workflow

Ingestion → Flume, Kafka, Kenisis, NiFi

Processing → Spark, Hadoop

Data Analysis → Hive, Impala

Access → Hue, Cloudera

Visulization → Tableau or other BI tools

DataPipeline → airbyte, Kafka

Data pipeline orchestration → Airflow

Data Producer  → | Data Pipeline | → Data consumer

Pipeline can be Realtime or batch

Pipeline can be used to send data to DWH or DataLake 

# Archived

### LRN System Design

Can I make some of the application as microservices ⇒ For Data analytics pipleline???

## Catalyst

### Functional

### Technical Details

- Proxy - Gateway to all our API + Acts as static file server. All rules are written here
- SOLR acts similar to cache instead of hitting the LCE DB to display the list of courses
- Mongo stores the siteconfig
- Redis cluster for JWT auth
- Partner site specific info in SOLR - filtering and sorting is used
- Maintain a course list on a per site basis - SOLR job running every day

![Screenshot 2022-06-23 at 3.03.59 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-23_at_3.03.59_PM.png)

![Screenshot 2022-06-23 at 3.10.12 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-23_at_3.10.12_PM.png)

### To Do

Migration of all pages to Angular 4.x

MySQL to Postgress

MySQL - no fault tolerance

Real time update using MQ (if it gets missed, then let us resend it vs SOLR Jon running everyday)

Server utilisation, user active in any given point of time

Monitoring - real time user analytics

- How it can be improved

## CAT & Inspire

### Features

**Roles**

- Admin - Can create a course
- Creator - Content team for reading course
- Customiser - Partner who customize the course
- Reviewer - Rarely used

Types of Lessons

- Linear
- Branching
- Adaptive is Testout - which is a Pre assessment test
- Choose your own Path

**Features**

CatId & system id is created

Auto save feature

Every course will not have certificates

You can copy a c course to create a new course

Checkin & checkout feature us available

Editing course from CCM to CAM

KC feature

Lesson -> Topic -> Templates

### Basic Questions

Q- what happens when you configure a course and publish it,
Q - How editing is done and republished? Via LCEC
Q - CLPOP feature
Q - How is a temple created
Q Is template customised globally or we have to work on making changes to every template?
Q - All the package/course has a certain structure ?
Q- Score standards in CAT?
Q - What is Personalisation
Q - what is update manager

### Technical Questions

- Tech stack
- How is micro services created
- Transformation service is in which lang?
- CLPOP details
- Previous version - s3 glacier?

### To Do

- What are the types of BUGs that come in
- Discussion about storing events

### Technical Details

The template and the course is created in an object format in CAT stored in JCR & MySQL

Transformation service converts the course obj to XML format

The service can convert to any format and can support even a new player and existing FX

CAT talk to FX via Page Config and Course XML. FX uses this XML

Once the course is ready to be published where the transformation service is called which will write to P4 //depot/lcec/content_course. Then CLPOP/Chant will store it in DB (US and EU)

![Untitled](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Untitled%2031.png)

Controller - will do the Auth and validation and process the request in the service layer

Service Layer - Has the business to convert from xml to obj and vice versa. Filtering is used to send the rewuired info to FX. This will connect to MySQL and JCR Repo. 

User info is validated from mysql and searchable content is stored too

Course metadata is also stored in MySQL - no redis for caching?

What about the primary and secondary one?

![Screenshot 2022-06-23 at 1.15.55 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-23_at_1.15.55_PM.png)

### Infra Diagram

There are 4 servers and proxy redirects to the specific microservices

There are 3 microservices

- Admin - stored in all 4 servers
- Create- stored in all 4 servers
- CMS Course - Hosted in  2 servers
    
    ![Screenshot 2022-06-23 at 1.27.35 PM.png](System%20Design%2010ed1103ae6980d3ace5f753a50a910d/Screenshot_2022-06-23_at_1.27.35_PM.png)
    

- My Version of CAT
- FX
- How it can be improved
- Cert Manager
- How it can be improved