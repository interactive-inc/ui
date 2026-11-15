import { createAgent, registerTools } from "@ui-sdk/react/agent"

function connect() {
  const agent = createAgent({
    allow: (step) =>
      step.confirm
        ? window.confirm(
            `エージェントが操作しようとしています: ${step.confirm}`,
          )
        : true,
  })

  Object.assign(window, { agent })

  const unregister = registerTools(agent, { allow: () => true })

  if (import.meta.hot) {
    import.meta.hot.dispose(unregister)
  }

  return agent
}

export const agent = typeof window === "undefined" ? undefined : connect()
