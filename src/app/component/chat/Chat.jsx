import {
  component,
  buzon,
  chart,
  buzonMessage,
  message,
  messageAvatar,
  messageStyle,
  dateStyle,
  messageBody,
  messageNotification,
  messageTitle,
  messageText
} from './chat.module.css'
import group from '../../../assets/icons/icon-group.png'
import Image from 'next/image'

export default function Chat() {
    return (
      <div className={component}>
        <h6 className="m-3">Mensajes recientes</h6>
        <div className={chart}>
          <h6 className={messageTitle}>Sopote Técnico</h6>
          <div className={buzon}>
  
            <div className={buzonMessage}>
  
              <div className={message}>
                <picture className={messageAvatar}>
                <Image
                          src={group}
                          width={30}
                          height={30}
                      />
                </picture>
                <div className={messageStyle}>
                  <div className={messageBody}>
  
                    <small className={messageText}>Miembro 1</small>
                    <small className={messageText}>Estamos trabajando para reparar los...</small>
  
                  </div>
                  <div className={dateStyle}>
  
                    <small>9:30</small>
                    <small className={messageNotification}>2</small>
  
                  </div>
  
                </div>
              </div>
  
              <div className={message}>
                <picture className={messageAvatar}>
                <Image
                          src={group}
                          width={30}
                          height={30}
                      />
                </picture>
                <div className={messageStyle}>
                  <div className={messageBody}>
                    <small className={messageText}>Miembro 2</small>
                    <small className={messageText}>Ya están resueltas las consultas por...</small>
                  </div>
                  <div className={dateStyle}>
                    <small className={messageText}>17:20</small>
                    <small  className={messageNotification}>1</small>
                  </div>
                </div>
              </div>
  
            </div>
            
  
          </div>
          <h6 className={messageTitle}>Marketing</h6>
          <div className={buzon}>
  
            <div className={buzonMessage}>
              <div className={message}>
                <picture className={messageAvatar}>
                <Image
                          src={group}
                          width={30}
                          height={30}
                      />
                </picture>
                <div className={messageStyle}>
                  <div className={messageBody}>
                    <small className={messageText}>Miembro 1</small>
                    <small className={messageText}>Agendamos un call para el viernes.</small>
                  </div>
                  <div className={dateStyle}>
                    <small className={messageText}>20/03/2024</small>
                    <small className={messageText}>none</small>
                  </div>
                </div>
  
              </div>
            </div>
  
           
          </div>
  
          <h6 className={messageTitle}>Agentes</h6>
          <div className={buzon}>
            <div className={buzonMessage}>
  
              <div className={message}>
                <picture className={messageAvatar}>
                <Image
                          src={group}
                          width={30}
                          height={30}
                      />
                </picture>
                <div className={messageStyle}>
  
                  <div className={messageBody}>
                    <small className={messageText}>Agente 1</small>
                    <small className={messageText}>Excelente. Muchas gracias.</small>
                  </div>
                  <div className={dateStyle}>
                    <small className={messageText}>12/03/2024</small>
                    <small className={messageText}>2</small>
                  </div>
                </div>
  
              </div>
            </div>
      
          </div>
        </div>
      </div>
    )
  }
  