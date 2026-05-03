import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-placeholder">
          {/*  */}
          <div className="dummy-img">LOGO</div>
        </div>
        <h1 className="main-title">SCATTERWEB</h1>
        <button className="download-btn">Download</button>
        <div className="platform-icon">
          {/*  */}
          <div className="dummy-img-small">Linux</div>
        </div>
      </header>

      <main className="content">
        <section>
          <h2 className="section-title">Mission Statement</h2>
          <hr className="divider" />
          <p>
            The future looks grim for the internet as a whole. Corporations lie to, and bribe our governments to implement predatory biometric identity verification laws that do nothing to address the real problems and only place even more power in the hands of these giants. <br />
            <a href="https://techoversight.org/2025/07/29/bloomberg-meta-google-lobbyists-fight-to-pass-the-buck-on-kids-online-safety/">https://techoversight.org/2025/07/29/bloomberg-meta-google-lobbyists-fight-to-pass-the-buck-on-kids-online-safety/</a> <br />
            "Security" Firms immediately leak and lose said biometric data. <a href="https://stateofsurveillance.org/news/discord-age-verification-id-biometric-privacy-2026/">https://stateofsurveillance.org/news/discord-age-verification-id-biometric-privacy-2026/</a>
          </p>
          <p>
            The giants of our digital world made and still make their fortunes by selling our personal data and controlling the digital places we use for modern political and social discourse.
          </p>
          <p>
            This project was born out of spite as a protest against this state of affairs, and in futile but defiant opposition against the unstoppable dark future we are marching towards. These conflicting feeling can be defined with a clear mission statement:
          </p>
          <div className="blockquote">
            <p>&gt; [!Mission Statement]</p>
            <p>&gt; We want to prove that it is possible and reasonable to demand a free, anonymous, encrypted, accessible and user-friendly messaging system, where users manage their own data and metadata.</p>
          </div>
          <p>
            We intend to dispel the old lie that being harvested for our data is a just price to pay for convenience. <br />
            Privacy is not only for those who have something to hide, otherwise public bathrooms wouldn't have doors
          </p>
        </section>

        <section>
          <h2 className="section-title">Legal</h2>
          <hr className="divider" />
          <p>
            Digital anonymity has increasingly become rarer and harder to achieve within the EU: regulation projects being discussed at the European Parliament (such as the ChatControl Regulation) as well as ECJ jurisdiction point in the direction of stricter limitations, so as to promote a more successful criminal prosecution. Although there is a narrative of "nothing to hide, nothing to fear" around these limitations, there is good reason to be wary of Big Tech holding our personal data and profiting at the expense of our private information, as shown in the Cambridge Analytica scandal. In an ever-growing environment of trading surveillance for safety, we must always keep our eyes open and look for solutions which allows us to maintain our privacy, at the risk of falling into an Orwellian dystopian scenario.
          </p>
          <p>
            In the Portuguese jurisdiction, the Constitution of the Portuguese Republic states clearly in art. 34º/1 that correspondence and all means of private communication are strictly inviolable (safe for when the protection of other fundamental rights is at sake, as happens in criminal procedures). This is a fundamental right mentioned in our Constitution, as well as in the European Union legal framework, where it is protected by article 7 of the Charter of Fundamental Rights of the European Union. Personal data is further safeguarded by article 8, which states in no-subtle way that every person has a right to the protection of their data.
          </p>
          <p>
            The GDPR clearly distinguishes personal data, from pseudonymization, from anonymous data. Art. 4/1 states that personal data is that by which a singular person is identified or identifiable. Since messages are directly sent to the person's online devices, ScatterWeb's P2P approach takes on the commitment to not store any of the user's communications, which makes it so that there is no processing of personal data which could identify or make users identifiable.
          </p>
          <p>
            As per Recital 26 of the GDPR, pseudonymization is reversible when additional information is used to identify the user or make them identifiable. On the other hand, anonymity is absolutely irreversible: as a consequence, the principles of data protection do not apply to data which doesn't relate to an identified or identifiable natural person.
          </p>
          <p>
            ScatterWeb's mechanisms are not to be confused with measures to facilitate criminal activity: quite the opposite, in fact. The GDPR itself talks of pseudonymization (and by analogical interpretation, anonymization) as good practices and safety measures, which align with the regulation's principles to above-all protect users' digital data. Therefore, in regards to the legality of this project, ScatterWeb is not in infringement of domestic or european law, as it in fact aims to uphold the EU's mission to ensure digital protection for everyone.
          </p>
        </section>

        <section>
          <h2 className="section-title">Research</h2>
          <hr className="divider" />
            Why Post-Quantum Cryptography (PQC) is Urgent Now:<br />
            (Harvest Now, Decrypt Later) Attackers are already intercepting and storing encrypted data. Their goal is to hold onto it until quantum computers are powerful enough to break the encryption (a date called Q-Day).<br />
            Transitioning global infrastructure to new, quantum-resistant algorithm takes years. Hardware, software, and protocols must all be updated before quantum computers mature.<br />

            Recent Breakthroighs in Neutral Atom Technology:<br />
            In march of 2026 there was a massive, sudden acceleration in the projected timeline for quantum computers to break standard encryption (like RSA and ECC).<br />
            Previously, scientists believed it would take millions of qubits to build a Cryptographically Relevant Quantum Computer (CRQC). Recent research from Caltech and Oratomic demonstrated that highly efficient error correction could reduce this requirement to as few as 10000 to 20000 qubits. This breakthrough relies on neutral-atom quantum computing. Unlike older superconducting chips where qubits are static, neutral atoms can be physically moved across the array using laser beams (optical tweezers). This allows distant qubits to interact directly, making error correction vastly more efficient.<br />
            Because the qubit threshold to break encryption just dropped by two orders of magnitude, the theoretical timeline for Q-Day shifted from decades away to potentially within the next 5 to 10 years, creating a vulnerability crisis for legacy systems.<br />
        </section>
      </main>
    </div>
  );
}

export default App;