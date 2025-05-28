export function MessageSubmissionForm() {
  return (
    <form className="w-[90%] max-w-7xl mx-auto flex flex-col gap-4">
      <textarea name="message" />
      <div>
        <div>
          <label htmlFor="instagram-handle">Instagram Handle (optional):</label>
          <input type="text" id="instagram-handle" name="instagram-handle" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
