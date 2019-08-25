'use strict'
const Mail = use('Mail')
const Helpers = use('Helpers')

class NewTaskMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'NewTaskMail-job'
  }

  // This is where the work is done.
  async handle ({ email, title, username, file }) {
    await Mail.send(
      [
        'emails.new_task',
        'emails.new_task-text'
      ],
      { title, username, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from('diogo@rocketseat.com.br', 'Diogo | Rocketseat')
          .subject('Nova tarefa')

        if(file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail

