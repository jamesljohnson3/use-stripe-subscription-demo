import "../styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { SubscriptionProvider } from "use-stripe-subscription";

function MyApp({ Component, pageProps }) {
  return (
    <SubscriptionProvider>
      <ClerkProvider>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </SubscriptionProvider>
  );
}

export default MyApp;
