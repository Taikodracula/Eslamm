import React, { useState } from 'react';
import { FileText, Download, Save, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    sottoscritto: '',
    titolare: '',
    operante: '',
    sede: '',
    provincia: '',
    stato: '',
    indirizzo: '',
    numero: '',
    cap: '',
    piva: '',
    registroImprese: '',
    alboProvinciale: '',
    commissonato: '',
    comune: '',
    proprieta: '',
  });

  const renderPage1 = () => (
    <div className="border border-gray-300">
      {/* Basic Information */}
      <table className="w-full">
        <tbody>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <span className="mr-2">Il/La sottoscritto/a</span>
                <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <span className="mr-2">titolare/legale rappresentante dell'impresa (ragione sociale)</span>
                <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <span className="mr-2">operante nel settore</span>
                <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="flex items-center">
                    <span className="mr-2">con sede legale in</span>
                    <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mr-2">prov.</span>
                    <input type="text" className="w-16 border-b border-gray-400 focus:outline-none" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Address Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4">
                  <div className="flex items-center">
                    <span className="mr-2">indirizzo</span>
                    <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mr-2">n.</span>
                    <input type="text" className="w-16 border-b border-gray-400 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="mr-2">CAP</span>
                    <input type="text" className="w-20 border-b border-gray-400 focus:outline-none" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* P.IVA Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="flex items-center">
                <span className="mr-2">P. IVA</span>
                <div className="flex space-x-1">
                  {[...Array(11)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-8 h-8 border border-gray-300 text-center"
                    />
                  ))}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Registration Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="mr-2">iscritta nel Registro imprese (d.P.R. 7/12/1985 n. 581) della CCIAA di</span>
                  <input type="text" className="w-32 border-b border-gray-400 focus:outline-none" />
                  <span className="ml-2">n.</span>
                  <input type="text" className="w-32 ml-2 border-b border-gray-400 focus:outline-none" />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="mr-2">iscritta all'albo Provinciale delle imprese artigiani (l. 8/8/1985 n. 443) di</span>
                  <input type="text" className="w-32 border-b border-gray-400 focus:outline-none" />
                  <span className="ml-2">n.</span>
                  <input type="text" className="w-32 ml-2 border-b border-gray-400 focus:outline-none" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Installation Type */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="flex items-start">
                <span className="mr-4">inteso come</span>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>nuovo impianto</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>trasformazione</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>ampliamento</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>manutenzione straordinaria</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <input type="checkbox" className="mr-2" />
                    <span>altro</span>
                    <span className="text-xs ml-2">(1)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Note Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2 bg-gray-50">
              <div className="text-sm">
                <strong>NOTA:</strong> per gli impianti a gas specificare il tipo di gas distribuito: canalizzato della 1°, 2°, 3° famiglia; GPL da recipienti mobili; GPL da serbatoio fisso. Per gli impianti elettrici specificare la potenza massima impegnabile.
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Building Usage */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="grid grid-cols-2">
                <div className="col-span-2 mb-2">in edificio adibito ad uso</div>
                <div className="grid grid-cols-2 gap-4 col-span-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>industriale</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>civile</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>commercio</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>altri usi</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Declaration Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="text-center font-bold mb-4">DICHIARA</div>
              <div className="text-sm">
                sotto la propria personale responsabilità, che l'impianto è stato realizzato in modo conforme alla regola dell'arte, secondo quanto previsto dall'art. 6 del D.M. n. 37/2008, tenuto conto delle condizioni di esercizio e degli usi a cui è destinato l'edificio, avendo in particolare:
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-sm">rispettato il progetto redatto ai sensi dell'art. 5</span>
                  <span className="text-xs ml-1">(2)</span>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-sm">seguito la normativa tecnica applicabile all'impiego</span>
                  <span className="text-xs ml-1">(3)</span>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-sm">installato componenti e materiali costruiti a regola d'arte e adatti al luogo di installazione (artt. 5 e 6 del D.M. n. 37/2008)</span>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-sm">controllato l'impianto ai fini della sicurezza e della funzionalità con esito positivo, avendo eseguito le verifiche richieste dalle norme e dalle disposizioni di legge.</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Signature Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-2">Data</div>
                  <div className="flex space-x-2">
                    <input type="text" className="w-8 h-8 border border-gray-300 text-center" maxLength={2} />
                    <span>/</span>
                    <input type="text" className="w-8 h-8 border border-gray-300 text-center" maxLength={2} />
                    <span>/</span>
                    <input type="text" className="w-16 h-8 border border-gray-300 text-center" maxLength={4} />
                  </div>
                </div>
                <div>
                  <div className="mb-2">Il dichiarante</div>
                  <div className="h-8 border-b border-gray-300"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderPage2 = () => (
    <div className="border border-gray-300">
      {/* Allegati obbligatori */}
      <table className="w-full">
        <tbody>
          <tr>
            <td className="border-b border-gray-300 p-2 bg-gray-50 font-medium">
              Allegati obbligatori
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>progetto ai sensi degli articoli 5 e 7 del D.M. n. 37/2008</span>
                <span className="text-xs ml-1">(4)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>relazione con tipologie dei materiali utilizzati</span>
                <span className="text-xs ml-1">(5)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>schema di impianto realizzato</span>
                <span className="text-xs ml-1">(6)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>riferimento a dichiarazioni di conformità precedenti o parziali, già esistenti</span>
                <span className="text-xs ml-1">(7)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>copia del certificato di riconoscimento dei requisiti tecnico-professionali</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Allegati facoltativi */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="border-b border-gray-300 p-2 bg-gray-50 font-medium">
              Allegati facoltativi<span className="text-xs ml-1">(8)</span>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 p-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <input type="text" className="flex-1 border-b border-gray-400 focus:outline-none" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* DECLINA Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="text-center font-bold mb-4">DECLINA</div>
              <div className="text-sm">
                ogni responsabilità per sinistri a persone o a cose derivanti da manomissione dell'impianto da parte di terzi ovvero da carenze di manutenzione o riparazione.
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Signature Section */}
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-2">Data</div>
                  <div className="flex space-x-2">
                    <input type="text" className="w-8 h-8 border border-gray-300 text-center" maxLength={2} />
                    <span>/</span>
                    <input type="text" className="w-8 h-8 border border-gray-300 text-center" maxLength={2} />
                    <span>/</span>
                    <input type="text" className="w-16 h-8 border border-gray-300 text-center" maxLength={4} />
                  </div>
                </div>
                <div>
                  <div className="mb-2">Il responsabile tecnico</div>
                  <div className="h-8 border-b border-gray-300"></div>
                  <div className="mt-4 mb-2">Il dichiarante</div>
                  <div className="h-8 border-b border-gray-300"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer Note */}
      <div className="mt-4 text-xs text-gray-600 italic">
        AVVERTENZE PER IL COMMITTENTE: responsabilità del committente o del proprietario - art. 8 D.M. n. 37/2008 (9)
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold uppercase">
            DICHIARAZIONE DI CONFORMITA' DELL'IMPIANTO ALLA REGOLA DELL'ARTE
          </h1>
          <p className="text-sm mt-2">
            (art. 7 del D.M. n. 37 del 22 gennaio 2008)
          </p>
        </div>

        {/* Page Content */}
        {currentPage === 1 ? renderPage1() : renderPage2()}

        {/* Page Navigation */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md ${
              currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Pagina 1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md ${
              currentPage === 2 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Pagina 2
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 flex space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <Save className="h-4 w-4 mr-2" />
            Salva
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Download className="h-4 w-4 mr-2" />
            Scarica PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;