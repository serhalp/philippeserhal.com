import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import Terminal from "./Terminal";

const Contact = () => {
  const name = useSignal("");
  const email = useSignal("");
  const message = useSignal("");
  const isSubmitted = useSignal(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Explicit state indicators
  const isEnteringName = !name.value;
  const isEnteringEmail = !!name.value && !email.value;
  const isEnteringMessage = !!name.value && email.value !== "";

  const handleCommand = (value: string) => {
    if (isEnteringName) {
      name.value = value;
    } else if (isEnteringEmail) {
      email.value = value;
    } else if (isEnteringMessage) {
      message.value = value;
      isSubmitted.value = true;
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
          <input type="text" name="name" value={name.value} readOnly />
          <input type="email" name="email" value={email.value} readOnly />
          <input type="text" name="message" value={message.value} readOnly />
        </form>

        <Terminal
          command="sendmail"
          output={
            <>
              <p>Connecting to mail server...</p>
              <p>Connected.</p>
              <br />
              <p>Enter your name:</p>
              {name.value ? <p>{name.value}</p> : null}

              {!isEnteringName && (
                <>
                  <p>Enter your email (optional):</p>
                  {email.value ? <p>{email.value}</p> : null}
                </>
              )}

              {!isEnteringName && !isEnteringEmail && (
                <>
                  <p>Enter your message:</p>
                  {message.value ? <p>{message.value}</p> : null}
                </>
              )}

              {isSubmitted.value && (
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
          isInput={!isSubmitted.value}
          onCommand={handleCommand}
        />
      </div>
    </section>
  );
};

export default Contact;
