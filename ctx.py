def add_thread(thread_handle):
    ctx = app.app_context()
    threads = flask.g.get("threads", [])
    threads.append(thread_handle)
    g.threads = threads
    ctx.push()
