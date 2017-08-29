# How the Internet Works

How does the internet work? What happens when you open up a browser and type in a website address? Before we learn how to design for the web, let's take a look at the underlying technologies.

## The Web
The web, or World Wide Web, is a collection of HTML(Hypertext Markup Language) pages. They are made up of specially formatted text. We can add images, videos or audios to the HTML pages. We can move between the pages using hyperlinks.

![internet map](../../images/internet-map.png)

*A Visualization of the Internet from [The Opte Project](https://en.wikipedia.org/wiki/Web_browser#/media/File:Internet_map_1024_-_transparent,_inverted.png)*

No matter what people talk about the cloud or wireless computing, the Internet is still [connected through wires](https://www.youtube.com/watch?v=IlAJJI-qG2k). We can use cellular and wifi networks without any wires, but the servers --- the computers that host websites --- are [all wired](http://www.submarinecablemap.com).

## Web Browser
A web browser is a software that you use to access the Web. You can upload and download information. Popular browsers include Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Internet Explorer. Browsers send a request to a server to retreive HTML pages. 

If they are all retrieving the same pages, why are there so many web browsers? That's because the way these browsers interpret and display information varies. The HTML specifications are maintained by the [W3C](http://www.w3.org) (World Wide Web Consortium), and the specs are constantly changing. Some browsers will adapt certain features while others will not. The browsers also have other features to make it easy to use the Web or develop for the Web.

## server and client
A server is a special computer machine or software that is designed to be connected to the Internet and serve the information. A server is usually on 24/7 and waiting for any requests from the clients. A client is basically a computer that we use. We use it to connect to the Internet and request information --- it happens anytime we type in a URL or click a link.

### Website address
We typically type in a website address into a browser such as `http://google.com` or `http://facebook.com`. This is called a URL, which stands for Uniform Resource Locator. Every machine connected to the Internet has a unique address in the form of IP address that looks like `http://275.3.6.28`, but it is impossible for us to remember these numbers, so we instead use the words.

### DNS
A DNS (Domain Name System) server will then take the domain names and convert it to the IP address that is associated with it, or vice versa.

If you want to try, open up the Terminal app and type as below.

```
$ nslookup google.com
```

Then, you will get google.com's IP address

```
Server:		10.0.1.1
Address:	10.0.1.1#53

Non-authoritative answer:
Name:	google.com
Address: 216.58.217.142
```

And now, you type in `216.58.217.142` into your browser, you will be directed to google.com.

## HTTP request
When we type in a website address, or URL, we are sending a request to a server. It's like *Hey! I need to talk to google.com*.

### From your laptop to the server
Open up the Terminal app, and type in as below:

```
$ traceroute -q 1 www.cnn.co.jp
```

It will show you how your request is going through multiple servers and crosses the Pacific ocean to get to the website hosted in Japan. You can try other websites as well. Fun stuff!

### HTTP or HTTPS
When you send a request to a server, you do it through HTTP or Hypertext Transfer Protocol. The thing is everything you type, including private information, is passed as a plain text, which means if anybody with a bad intention wanted to, they can steal the data very easily.

Luckily for us, there is another protocol called HTTPS. That *S* at the end stands for *Secure*. Of course, there are many ways to hack someone's personal computer, but make sure you at least check the website uses HTTPS when you buy something online or type in sensitive information next time.

### response from the server

```
curl -IL http://www.google.com
```

```
curl http://www.google.com
```

## Serving your website
You can use your home computer to serve your website, but your computer may not be designed to be turned on 24/7 and your home internet connection may not be fast or stable enough for the job.

We usually find a company who will host your website with a fee. There are two things you need to have before you will see your website live.

### Domain Name
There are many companies that you can buy domain names from. [Namecheap](http://namecheap.com) and [Google](https://domains.google) are a few examples. Type in your desired domain name and see if it is free or already taken. 

### Web hosting
You have a domain name, which works like an address. Now, you need a space to store your files and contents. That is called web hosting. You will rent a server space from a hosting company and connect your domain name with the space. Many companies offer both domain name and web storage hosting.

### Free options
[Github Pages](https://pages.github.com) is a great free hosting option. you will get a domain name that looks like `http://yourusername.github.io` and host as many files as you want.

## Further Learning
- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
- [Web programming lecture notes from Harvard CS50](http://cdn.cs50.net/2015/fall/lectures/6/m/notes6m/notes6m.html#web_programming)
- [Andrew Blum: What is the Internet, really?](https://www.youtube.com/watch?v=XE_FPEFpHt4) TED talk
- Richard Feynman's [Computer Heuristics Lecture](https://www.youtube.com/watch?v=EKWGGDXe5MA)

