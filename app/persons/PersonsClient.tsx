"use client";

import { useState, useEffect, useCallback } from "react";

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  age: number | null;
  createdAt: string;
};

const emptyForm = { firstName: "", lastName: "", email: "", phone: "", age: "" };

export default function PersonsClient() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPersons = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/persons");
    const data = await res.json();
    setPersons(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  function openAdd() {
    setEditId(null);
    setForm(emptyForm);
    setError(null);
    setShowForm(true);
  }

  function openEdit(p: Person) {
    setEditId(p.id);
    setForm({
      firstName: p.firstName,
      lastName: p.lastName,
      email: p.email,
      phone: p.phone ?? "",
      age: p.age?.toString() ?? "",
    });
    setError(null);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditId(null);
    setForm(emptyForm);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const body = { ...form, age: form.age !== "" ? Number(form.age) : null };
    const url = editId ? `/api/persons/${editId}` : "/api/persons";
    const method = editId ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Something went wrong.");
      setSaving(false);
      return;
    }

    cancelForm();
    setSaving(false);
    fetchPersons();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this person? This cannot be undone.")) return;
    await fetch(`/api/persons/${id}`, { method: "DELETE" });
    fetchPersons();
  }

  const fields = [
    { name: "firstName", label: "First Name", type: "text", required: true, col: 1 },
    { name: "lastName", label: "Last Name", type: "text", required: true, col: 1 },
    { name: "email", label: "Email Address", type: "email", required: true, col: 2 },
    { name: "phone", label: "Phone", type: "tel", required: false, col: 1 },
    { name: "age", label: "Age", type: "number", required: false, col: 1 },
  ] as const;

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-xs font-mono text-gray-300 uppercase tracking-widest">
          {loading ? "Loading..." : `${persons.length} record${persons.length !== 1 ? "s" : ""}`}
        </p>
        <button
          onClick={showForm ? cancelForm : openAdd}
          className={
            "text-sm px-4 py-2 rounded-xl font-semibold transition-colors " +
            (showForm
              ? "border border-gray-200 text-gray-500 hover:border-gray-400"
              : "bg-indigo-600 text-white hover:bg-indigo-700")
          }
        >
          {showForm ? "Cancel" : "+ Add Person"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-lg font-black text-gray-900 mb-6">
            {editId ? "Edit Person" : "New Person"}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {fields.map(({ name, label, type, required, col }) => (
              <div key={name} className={col === 2 ? "col-span-2" : ""}>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                  {label}
                  {required && <span className="text-indigo-400 ml-0.5">*</span>}
                </label>
                <input
                  type={type}
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  required={required}
                  min={type === "number" ? 1 : undefined}
                  max={type === "number" ? 120 : undefined}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
                />
              </div>
            ))}
          </div>

          {error && (
            <p className="text-xs text-red-500 font-mono mb-4">{error}</p>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={cancelForm}
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white text-sm px-6 py-2.5 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors font-semibold"
            >
              {saving ? "Saving…" : editId ? "Update Person" : "Create Person"}
            </button>
          </div>
        </form>
      )}

      {/* Table / Empty state */}
      {loading ? (
        <div className="text-center py-24">
          <p className="text-xs font-mono text-gray-300 uppercase tracking-widest animate-pulse">
            Loading records…
          </p>
        </div>
      ) : persons.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-2">
            No records yet
          </p>
          <p className="text-gray-400 text-sm">
            Add your first person using the button above.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden border border-gray-100 rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3.5 text-xs font-mono text-gray-300 uppercase tracking-widest">
                  Name
                </th>
                <th className="text-left px-6 py-3.5 text-xs font-mono text-gray-300 uppercase tracking-widest">
                  Email
                </th>
                <th className="text-left px-6 py-3.5 text-xs font-mono text-gray-300 uppercase tracking-widest hidden md:table-cell">
                  Phone
                </th>
                <th className="text-left px-6 py-3.5 text-xs font-mono text-gray-300 uppercase tracking-widest hidden md:table-cell">
                  Age
                </th>
                <th className="px-6 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {persons.map((p, i) => (
                <tr
                  key={p.id}
                  className={
                    "border-b border-gray-50 last:border-b-0 " +
                    (i % 2 === 0 ? "bg-white" : "bg-stone-50/60")
                  }
                >
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {p.firstName} {p.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{p.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">
                    {p.phone ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">
                    {p.age ?? "—"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-4">
                      <button
                        onClick={() => openEdit(p)}
                        className="text-xs font-mono text-indigo-500 hover:text-indigo-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-xs font-mono text-red-400 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
