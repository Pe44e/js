import type { Meta } from "@storybook/react-vite";
import { NATIVE_TOKEN_ADDRESS } from "../../../constants/addresses.js";
import { SwapWidget } from "../../../react/web/ui/Bridge/swap-widget/SwapWidget.js";
import { storyClient } from "../../utils.js";

const meta = {
  parameters: {
    layout: "centered",
  },
  title: "Bridge/Swap/SwapWidget/Prefill",
} satisfies Meta<typeof SwapWidget>;
export default meta;

export function Buy_NativeToken() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        buyToken: {
          chainId: 8453,
        },
      }}
    />
  );
}

export function Buy_Base_USDC() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        buyToken: {
          chainId: 8453,
          tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        },
      }}
    />
  );
}

export function Buy_NativeToken_With_Amount() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        buyToken: {
          chainId: 8453,
          amount: "0.1",
          tokenAddress: NATIVE_TOKEN_ADDRESS,
        },
      }}
    />
  );
}

export function Sell_NativeToken() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        sellToken: {
          chainId: 8453,
        },
      }}
    />
  );
}

export function Sell_Base_USDC() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        sellToken: {
          chainId: 8453,
          tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        },
      }}
    />
  );
}

export function Sell_NativeToken_With_Amount() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        sellToken: {
          chainId: 8453,
          amount: "0.1",
          tokenAddress: NATIVE_TOKEN_ADDRESS,
        },
      }}
    />
  );
}

export function Buy_And_Sell_NativeToken() {
  return (
    <SwapWidget
      client={storyClient}
      prefill={{
        // base native token
        buyToken: {
          chainId: 8453,
          tokenAddress: NATIVE_TOKEN_ADDRESS,
        },
        // base usdc
        sellToken: {
          chainId: 8453,
          tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        },
      }}
    />
  );
}
