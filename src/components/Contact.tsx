import { useRef, useState } from "preact/hooks";
import Terminal from "./Terminal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Explicit state indicators
  const isEnteringName = !name;
  const isEnteringEmail = name && !email;
  const isEnteringMessage = name && email !== "";

  const handleCommand = (value: string) => {
    if (isEnteringName) {
      setName(value);
    } else if (isEnteringEmail) {
      setEmail(value);
    } else if (isEnteringMessage) {
      setMessage(value);
      setIsSubmitted(true);
      // Submit the actual Netlify form
      if (formRef.current) {
        formRef.current.submit();
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container max-w-2xl text-center">
        <h2 className="section-title justify-center">Get In Touch</h2>

        <form
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          className="hidden"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" value={name} readOnly />
          <input type="email" name="email" value={email} readOnly />
          <input type="text" name="message" value={message} readOnly />
        </form>

        <Terminal
          command="sendmail"
          output={
            <>
              <p>Connecting to mail server...</p>
              <p>Connected.</p>
              <br />
              <p>Enter your name:</p>
              {name ? <p>{name}</p> : null}

              {!isEnteringName && (
                <>
                  <p>Enter your email (optional):</p>
                  {email ? <p>{email}</p> : null}
                </>
              )}

              {!isEnteringName && !isEnteringEmail && (
                <>
                  <p>Enter your message:</p>
                  {message ? <p>{message}</p> : null}
                </>
              )}

              {isSubmitted && (
                <>
                  <p>Mail delivered to Philippe Serhal.</p>
                </>
              )}
            </>
          }
          inputName={
            isEnteringName ? "name" : isEnteringEmail ? "email" : "message"
          }
          inputPlaceholder=""
          isInput={!isSubmitted}
          onCommand={handleCommand}
        />
      </div>
    </section>
  );
};

export default Contact;
