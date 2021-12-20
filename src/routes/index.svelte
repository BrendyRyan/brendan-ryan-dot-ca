<svelte:head>
  <title>BrendanRyan.ca</title>
</svelte:head>

<div>
  <h1 class="text-blue-600 font-bold text-5xl col-span-10">Hello there!</h1>
  <hr class="border-0 bg-black text-black h-px mt-4 mb-4" />
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-10">
      <h2 class="text-2xl">Who do we have here?</h2>
      <p class="mt-2">My name is Brendan Ryan, a CPA from London, Canada.</p>
      <p>
        I am an accountant and very much enjoy learning about web development and making tools to help finance pros do
        their job better.
      </p>
      <p>I am on a journey learning to code so one day I can create better programs for accountants like me.</p>
    </div>
    <img src="/BR-cropped.jpg" alt="Brendan Ryan" class="h-36 max-w-xl rounded-full mx-auto col-span-2" />
    <div class="col-span-12">
      <h2 class="text-2xl">What's this guys' story? How'd he learn to code?</h2>
      <p class="mt-2">
        I wrote about myself in my first ever <a href="/blog/about-me" class="font-bold underline text-blue-600"
          >blog post.</a
        >
        Check it along with any of my other posts if you're interested. I like to write about Excel, Dynamics 365, and other
        technologies and/or projects I am learning about or working on.
      </p>
      <p class="mt-2">
        I also wrote about the steps I took in learning to code. Check out my
        <a href="/blog/learning-to-code" class="font-bold underline text-blue-600">learning to code</a> blog post to see
        the path I took to get to where I am now.
      </p>
    </div>
    <div class="col-span-12 mt-10">
      <h2 class="text-2xl">Does he have any skills? Be honest, how much is Google?</h2>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="bg-green-200 rounded-lg p-2">
          <h3 class="text-lg">Advanced &rarr; 10% Google</h3>
          <ul class="list-disc ml-5">
            <li>Excel</li>
            <li>Word, Outlook, Powerpoint, etc.</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="bg-yellow-200 rounded-lg p-2">
          <h3 class="text-lg">Intermediate &rarr; 50% Google</h3>
          <ul class="list-disc ml-5">
            <li>Power Apps, Automate & BI</li>
            <li>Javascript</li>
            <li>React, Svelte & Node</li>
          </ul>
        </div>
        <div class="bg-red-200 rounded-lg p-2">
          <h3 class="text-lg">Beginner &rarr; 90% Google</h3>
          <ul class="list-disc ml-5">
            <li>VBA</li>
            <li>Typescript</li>
            <li>Web design</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-span-12 mt-10">
      <h2 class="text-2xl">Could he display it in a chart?</h2>
      <img
        src="/dunning-kruger-effect.png"
        alt="Dunning-Kruger effect charge of skill level over time"
        class="mt-2 mx-auto"
      />
      <p>
        You may have seen the above graph of how much you <em>think</em> you know versus how much you actually know. I
        find it interesting to consider where I am in respect to how much there is to know of a given subject. For
        interest, it's called the <strong>Dunning-Kruger Effect</strong>. I try to resist the urge to consider myself an
        expert after learning something for only a short amount of time. Competence takes time.
      </p>
    </div>
    <div class="col-span-12 mt-10">
      <h2 class="text-2xl">Care to explain?</h2>
      <div class="bg-blue-200 rounded-lg p-2 mt-2">
        <p class="mt-2">
          <strong>Accounting and Excel</strong> go hand-in-hand. I've worked on many Excel projects creating reuseable models
          for large-scale data analytics and tracking. I have created budgets, financial statements, external database queries,
          data maps between systems and more. Most recently I've gotten into VBA, however I'm in the very early stages and
          have much to learn.
        </p>
        <p class="mt-2">
          I have typical experience with the other Office programs, and have opted to learn about Microsofts' <strong
            >Power Platform</strong
          > (Power BI, Power Apps, and Power Automate). Each has their use-case and are all enjoyable to use.
        </p>
        <p class="mt-2">
          I have five years experience with Microsoft <strong>Dynamics AX</strong> and five years of
          <strong>Great Plains</strong> and been deep in the weeds on both systems. I learned most of my SQL knowledge
          from working with Great Plains, which led me to learning <strong>Azure SQL</strong> and subsequently PostgreSQL.
        </p>
        <p class="mt-2">
          This led to learning <strong>web development</strong>. I started down the path in 2017 and took many detours.
          After a rough start I landed on <strong>Javascript</strong>, and most recently, Svelte and Tailwind CSS. It
          has been a challenging and rewarding experience learning to code. I've most recently started Typescript and
          look forward to learning more about it.
        </p>
      </div>
    </div>
    <div class="col-span-12 mt-10 mb-10">
      <h2 class="text-2xl">How do I contact this guy?</h2>
      <p>
        I'm not overly active on social media, however you can DM me on <a
          href="https://twitter.com/Brendy_Ryan"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline text-blue-600">Twitter</a
        >,
        <a
          href="https://www.linkedin.com/in/brendan-ryan-95850986/"
          target="_blank"
          rel="noopener noreferrer "
          class="font-bold underline text-blue-600">LinkedIn</a
        >
        or to my
        <a href="mailto:brendan.james.ryan@gmail.com" class="font-bold underline text-blue-600">email</a>.
      </p>
    </div>
  </div>
</div>
